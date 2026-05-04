import type { CRMAdapter } from "@/lib/crm/types";
import { GHLAdapter } from "@/lib/crm/ghlAdapter";
import { MockCRMAdapter } from "@/lib/crm/mockAdapter";

export function getCRMAdapter(): CRMAdapter {
  if (process.env.CRM_MODE === "ghl") return new GHLAdapter();
  return new MockCRMAdapter();
}
