import type { CRMAdapter, LeadInput } from "@/lib/crm/types";

export class MockCRMAdapter implements CRMAdapter {
  async upsertContact(input: LeadInput) {
    console.info("[MockCRM] upsertContact", {
      name: input.name,
      email: input.email,
      leadType: input.leadType,
      formType: input.formType,
    });
    return { contactId: `mock_contact_${Date.now()}` };
  }

  async createOrUpdateOpportunity(input: LeadInput & { contactId: string }) {
    console.info("[MockCRM] createOrUpdateOpportunity", {
      contactId: input.contactId,
      leadType: input.leadType,
      pagePath: input.pagePath,
    });
    return { opportunityId: `mock_opportunity_${Date.now()}` };
  }

  async applyTags(contactId: string, tags: string[]) {
    console.info("[MockCRM] applyTags", { contactId, tags });
  }
}
