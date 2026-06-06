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
      utmSource: z.string().optional(),
      utmMedium: z.string().optional(),
      utmCampaign: z.string().optional(),
      utmContent: z.string().optional(),
      utmTerm: z.string().optional(),
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

export interface CRMAdapter {
  upsertContact(input: LeadInput): Promise<{ contactId: string }>;
  createOrUpdateOpportunity(input: LeadInput & { contactId: string }): Promise<{ opportunityId?: string }>;
  applyTags(contactId: string, tags: string[]): Promise<void>;
}
