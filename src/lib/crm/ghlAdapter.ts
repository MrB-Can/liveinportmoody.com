import type { CRMAdapter, LeadInput } from "@/lib/crm/types";

const ghlBaseUrl = "https://services.leadconnectorhq.com";

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required for real GoHighLevel mode.`);
  return value;
}

export class GHLAdapter implements CRMAdapter {
  private token = requireEnv("GHL_API_TOKEN");
  private locationId = requireEnv("GHL_LOCATION_ID");
  private pipelineId = process.env.GHL_PIPELINE_ID;
  private stageId = process.env.GHL_STAGE_ID;

  private async request<T>(path: string, init: RequestInit): Promise<T> {
    const response = await fetch(`${ghlBaseUrl}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${this.token}`,
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
    const body = {
      locationId: this.locationId,
      name: input.name,
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

    const result = await this.request<{ contact: { id: string } }>("/contacts/upsert", {
      method: "POST",
      body: JSON.stringify(body),
    });

    return { contactId: result.contact.id };
  }

  async createOrUpdateOpportunity(input: LeadInput & { contactId: string }) {
    if (!this.pipelineId || !this.stageId) return {};

    const result = await this.request<{ opportunity: { id: string } }>("/opportunities/", {
      method: "POST",
      body: JSON.stringify({
        locationId: this.locationId,
        pipelineId: this.pipelineId,
        pipelineStageId: this.stageId,
        contactId: input.contactId,
        name: `${input.name} - ${input.leadType}`,
        status: "open",
        source: "liveinportmoody.com",
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
}
