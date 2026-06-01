AGENT:
Agent 1 — Claude Code

SPRINT:
A1-S28C — GHL Live Test Runbook and Launch Gate

STATUS:
Completed

COMMIT:
(see below)

FILES CHANGED:
- docs/ghl-live-form-test-runbook.md (created)
- agent-work/reports/A1-S28C-ghl-live-test-runbook-report.md (this file)

---

SAFE CHECKS (no real lead submitted):

Pre-conditions confirmed from code inspection:
- CRM_MODE=ghl confirmed in .env.local (production Vercel env must also have this)
- GHL_PIPELINE_ID: OyeKdcp3l7t8CVFxzaJm
- GHL_STAGE_ID: 532c95f4-7a55-474d-aca4-6043e3cc65da
- GHL_PIPELINE_NAME: Warm Lead Nurture
- GHL_STAGE_NAME: New Lead
- GHL_OWNER_BUYER_USER_ID and GHL_OWNER_SELLER_USER_ID are set

API rejection checks (confirmed in Sprint A1-S28B smoke test):
- POST /api/lead (empty body) → 400 ✅
- POST /api/lead (invalid email) → 400 ✅
- POST /api/lead (honeypot filled) → 200 silent drop ✅
- Rate limiter → 429 after threshold ✅

Form render checks (confirmed in Sprint A1-S28B):
- /contact → 200 ✅
- /home-evaluation → 200 ✅
- /buyer-guide → 200 ✅
- /seller-guide → 200 ✅
- /request-recent-sales → 200 ✅

Code-level findings from reading the CRM adapter:
- upsertContact uses POST /contacts/upsert — deduplicates by email correctly
- createOrUpdateOpportunity always creates a new opportunity (does not upsert)
- applyTags uses POST /contacts/{id}/tags — additive, does not overwrite existing tags
- Seller leads → GHL_OWNER_SELLER_USER_ID (opportunity type: Sale)
- Buyer leads → GHL_OWNER_BUYER_USER_ID (opportunity type: Purchase)
- local-question leads → GHL_OWNER_DEFAULT_USER_ID or GHL_OWNER_BUYER_USER_ID (no opportunity type)
- Pipeline/stage resolved by name if IDs not set, by ID if set — IDs are set, so lookup is fast

Form → GHL payload summary:

| Page | formType | leadType | Owner slot |
|---|---|---|---|
| /contact | ask-question | local-question | Buyer (default) |
| /home-evaluation | home-evaluation | seller | Seller |
| /buyer-guide | ask-question | buyer | Buyer |
| /seller-guide | home-value | seller | Seller |
| /request-recent-sales | ask-question | local-question | Buyer (default) |

---

LIVE TEST STILL REQUIRED:
yes

The runbook at docs/ghl-live-form-test-runbook.md gives Paul exact steps, test data, expected GHL fields, failure diagnosis, and cleanup procedure. It must be run manually — a valid form submission must land in GHL before coming-soon is removed.

---

RECOMMENDED NEXT STEP:
Paul runs the live GHL test using docs/ghl-live-form-test-runbook.md.
Start with Form 1 (/contact) using a real email inbox.
Confirm the contact appears in GHL → Contacts with pipeline, stage, and tags.
If it passes, run Forms 2–5, then clean up test contacts.
If it fails, check CRM_MODE in Vercel production env vars first.
