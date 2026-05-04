import type { CRMAdapter, LeadInput } from "@/lib/crm/types";
import { getSecretValue } from "@/lib/server/secrets";

const ghlBaseUrl = "https://services.leadconnectorhq.com";
const defaultPipelineName = "Warm Lead Nurture";
const defaultStageName = "New Lead";

function requireEnv(name: string) {
  const value = process.env[name] || (name === "GHL_API_TOKEN" ? process.env.GHL_API_KEY : undefined);
  if (!value) throw new Error(`${name} is required for real GoHighLevel mode.`);
  return value;
}

export class GHLAdapter implements CRMAdapter {
  private locationId = requireEnv("GHL_LOCATION_ID");
  private pipelineId = process.env.GHL_PIPELINE_ID;
  private stageId = process.env.GHL_STAGE_ID;
  private pipelineName = process.env.GHL_PIPELINE_NAME || defaultPipelineName;
  private stageName = process.env.GHL_STAGE_NAME || defaultStageName;
  private tokenPromise?: Promise<string>;

  private getToken() {
    if (!this.tokenPromise) {
      this.tokenPromise = process.env.GHL_API_TOKEN_SECRET_ID
        ? getSecretValue(process.env.GHL_API_TOKEN_SECRET_ID, process.env.GHL_API_TOKEN_SECRET_KEY)
        : Promise.resolve(requireEnv("GHL_API_TOKEN"));
    }
    return this.tokenPromise;
  }

  private async request<T>(path: string, init: RequestInit): Promise<T> {
    const token = await this.getToken();
    const response = await fetch(`${ghlBaseUrl}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
        ...init.headers,
      },
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`GHL request failed: ${response.status} ${body}`);
    }

    return response.json() as Promise<T>;
  }

  async upsertContact(input: LeadInput) {
    const [firstName, lastName] = splitName(input.name);
    const body = {
      locationId: this.locationId,
      firstName,
      lastName,
      email: input.email,
      phone: input.phone || undefined,
      source: "liveinportmoody.com",
      tags: input.tags,
      customFields: [
        { key: "lead_type", field_value: input.leadType },
        { key: "form_type", field_value: input.formType },
        { key: "page_path", field_value: input.pagePath || "" },
        { key: "cta_label", field_value: input.ctaLabel || "" },
        { key: "message", field_value: input.message || "" },
        { key: "attribution", field_value: JSON.stringify(input.attribution || {}) },
      ],
    };

    let result: { contact: { id: string } };
    try {
      result = await this.request<{ contact: { id: string } }>("/contacts/upsert", {
        method: "POST",
        body: JSON.stringify(body),
      });
    } catch (error) {
      const existing = await this.findContactByEmail(input.email);
      if (!existing?.id) throw error;
      return { contactId: existing.id };
    }

    return { contactId: result.contact.id };
  }

  async createOrUpdateOpportunity(input: LeadInput & { contactId: string }) {
    const ids = await this.getPipelineStageIds();
    if (!ids) return {};
    const assignedTo = getOpportunityOwner(input.leadType);
    const opportunityType = getOpportunityType(input.leadType);

    const result = await this.request<{ opportunity: { id: string } }>("/opportunities/", {
      method: "POST",
      body: JSON.stringify({
        locationId: this.locationId,
        pipelineId: ids.pipelineId,
        pipelineStageId: ids.stageId,
        contactId: input.contactId,
        name: `${input.name} - ${input.leadType} - LiveInPortMoody.com`,
        status: "open",
        assignedTo,
        source: "liveinportmoody.com",
        customFields: [
          { key: "opportunity_type", value: opportunityType },
          { key: "website_form_type", value: input.formType },
          { key: "website_page_path", value: input.pagePath || "" },
        ].filter((field) => Boolean(field.value)),
      }),
    });

    return { opportunityId: result.opportunity.id };
  }

  async applyTags(contactId: string, tags: string[]) {
    if (!tags.length) return;
    await this.request(`/contacts/${contactId}/tags`, {
      method: "POST",
      body: JSON.stringify({ tags }),
    });
  }

  private async findContactByEmail(email: string) {
    const result = await this.request<{ contacts?: Array<{ id: string; email?: string }> }>(
      `/contacts/search?${new URLSearchParams({ locationId: this.locationId, query: email }).toString()}`,
      { method: "GET" },
    );

    return result.contacts?.find((contact) => contact.email?.toLowerCase() === email.toLowerCase());
  }

  private async getPipelineStageIds() {
    if (this.pipelineId && this.stageId) return { pipelineId: this.pipelineId, stageId: this.stageId };
    if (!this.pipelineId && !this.pipelineName) return null;

    const result = await this.request<{ pipelines?: Array<{ id: string; name: string; stages?: Array<{ id: string; name: string }> }> }>(
      `/opportunities/pipelines?${new URLSearchParams({ locationId: this.locationId }).toString()}`,
      { method: "GET" },
    );

    const pipeline = result.pipelines?.find((item) =>
      this.pipelineId ? item.id === this.pipelineId : item.name.toLowerCase() === this.pipelineName.toLowerCase(),
    );
    const stage = pipeline?.stages?.find((item) => item.name.toLowerCase() === this.stageName.toLowerCase());

    if (!pipeline || !stage) {
      throw new Error(`GHL pipeline/stage not found: ${this.pipelineName} / ${this.stageName}`);
    }

    this.pipelineId = pipeline.id;
    this.stageId = stage.id;
    return { pipelineId: pipeline.id, stageId: stage.id };
  }
}

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return [parts[0], ""];
  return [parts.slice(0, -1).join(" "), parts.at(-1) || ""];
}

function getOpportunityOwner(leadType: LeadInput["leadType"]) {
  if (leadType === "seller") return process.env.GHL_OWNER_SELLER_USER_ID;
  if (leadType === "buyer" || leadType === "relocation" || leadType === "resource") return process.env.GHL_OWNER_BUYER_USER_ID;
  return process.env.GHL_OWNER_DEFAULT_USER_ID || process.env.GHL_OWNER_BUYER_USER_ID;
}

function getOpportunityType(leadType: LeadInput["leadType"]) {
  if (leadType === "seller") return "Sale";
  if (leadType === "buyer" || leadType === "relocation") return "Purchase";
  return undefined;
}
