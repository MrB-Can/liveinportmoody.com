import { z } from "zod";

export const leadTypes = ["buyer", "seller", "relocation", "market-update", "local-question", "resource"] as const;
export const formTypes = [
  "ask-question",
  "home-value",
  "buyer-shortlist",
  "relocation-guide",
  "market-notes",
  "newsletter-signup",
  "resource-download",
  "complex-inquiry",
  "complex-value-opinion",
  "home-evaluation",
  "nominate-a-business",
  "suggest-event",
  "suggest-local-life",
] as const;

export const communityFormTypes = new Set<(typeof formTypes)[number]>([
  "nominate-a-business",
  "suggest-event",
  "suggest-local-life",
]);

export const leadInputSchema = z.object({
  formType: z.enum(formTypes),
  leadType: z.enum(leadTypes),
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().max(2000, "Keep the message under 2,000 characters.").optional().or(z.literal("")),
  pagePath: z.string().trim().optional().or(z.literal("")),
  ctaLabel: z.string().trim().optional().or(z.literal("")),
  consentToContact: z.boolean().optional(),
  consentToSms: z.boolean().optional(),
  resourceName: z.string().trim().optional().or(z.literal("")),
  honeypot: z.string().optional(),
  attribution: z
    .object({
      firstLandingPage: z.string().optional(),
      lastLandingPage: z.string().optional(),
      firstReferrer: z.string().optional(),
      lastReferrer: z.string().optional(),
      firstUtmSource: z.string().optional(),
      firstUtmMedium: z.string().optional(),
      firstUtmCampaign: z.string().optional(),
      firstUtmContent: z.string().optional(),
      firstUtmTerm: z.string().optional(),
      lastUtmSource: z.string().optional(),
      lastUtmMedium: z.string().optional(),
      lastUtmCampaign: z.string().optional(),
      lastUtmContent: z.string().optional(),
      lastUtmTerm: z.string().optional(),
      gclid: z.string().optional(),
      gbraid: z.string().optional(),
      wbraid: z.string().optional(),
      fbclid: z.string().optional(),
      msclkid: z.string().optional(),
      ttclid: z.string().optional(),
      liFatId: z.string().optional(),
      visitorId: z.string().optional(),
      sessionId: z.string().optional(),
      firstVisitTimestamp: z.string().optional(),
      lastVisitTimestamp: z.string().optional(),
      pageCount: z.number().optional(),
    })
    .optional(),
  tags: z.array(z.string()).optional(),
});

export type LeadInput = z.infer<typeof leadInputSchema>;
export type LeadAttribution = NonNullable<LeadInput["attribution"]>;

// Flatten attribution into discrete snake_case fields. Reused for GHL custom
// fields and GA4 event parameters so both stay in sync. Empty values are dropped.
export function flattenAttribution(attribution: LeadAttribution | undefined): Record<string, string> {
  if (!attribution) return {};
  const map: Record<string, string | number | undefined> = {
    first_landing_page: attribution.firstLandingPage,
    last_landing_page: attribution.lastLandingPage,
    first_referrer: attribution.firstReferrer,
    last_referrer: attribution.lastReferrer,
    first_utm_source: attribution.firstUtmSource,
    first_utm_medium: attribution.firstUtmMedium,
    first_utm_campaign: attribution.firstUtmCampaign,
    first_utm_content: attribution.firstUtmContent,
    first_utm_term: attribution.firstUtmTerm,
    last_utm_source: attribution.lastUtmSource,
    last_utm_medium: attribution.lastUtmMedium,
    last_utm_campaign: attribution.lastUtmCampaign,
    last_utm_content: attribution.lastUtmContent,
    last_utm_term: attribution.lastUtmTerm,
    gclid: attribution.gclid,
    gbraid: attribution.gbraid,
    wbraid: attribution.wbraid,
    fbclid: attribution.fbclid,
    msclkid: attribution.msclkid,
    ttclid: attribution.ttclid,
    li_fat_id: attribution.liFatId,
    visitor_id: attribution.visitorId,
    session_id: attribution.sessionId,
    page_count: attribution.pageCount,
  };

  const flat: Record<string, string> = {};
  for (const [key, value] of Object.entries(map)) {
    if (value !== undefined && value !== null && value !== "") flat[key] = String(value);
  }
  return flat;
}

export interface CRMAdapter {
  upsertContact(input: LeadInput): Promise<{ contactId: string }>;
  createOrUpdateOpportunity(input: LeadInput & { contactId: string }): Promise<{ opportunityId?: string }>;
  applyTags(contactId: string, tags: string[]): Promise<void>;
}
