# GHL Live Form Test Runbook — LiveInPortMoody.com

**Purpose:** Manual test to confirm valid form submissions reach GoHighLevel before coming-soon is removed.
**Run once** before public launch. Re-run after any change to `/api/lead`, CRM credentials, or GHL pipeline config.

---

## Before You Start

### Pre-conditions checklist

Verify these in Vercel → Project → Settings → Environment Variables (Production):

| Variable | What to confirm |
|---|---|
| `CRM_MODE` | must be `ghl` (not `mock`) |
| `GHL_API_TOKEN` or `GHL_API_TOKEN_SECRET_ID` | must be set and not expired |
| `GHL_LOCATION_ID` | must be set |
| `GHL_PIPELINE_ID` | must be set (value: `OyeKdcp3l7t8CVFxzaJm`) |
| `GHL_STAGE_ID` | must be set (value: `532c95f4-7a55-474d-aca4-6043e3cc65da`) |
| `GHL_PIPELINE_NAME` | `Warm Lead Nurture` |
| `GHL_STAGE_NAME` | `New Lead` |
| `GHL_OWNER_BUYER_USER_ID` | must be set (routes buyer/relocation leads) |
| `GHL_OWNER_SELLER_USER_ID` | must be set (routes seller leads) |

If `CRM_MODE` is `mock`, all form submissions are silently swallowed. No GHL contact will be created.

### Access the site with preview cookie

Visit: **https://www.liveinportmoody.com/preview?key=lgis2026**

This sets the preview cookie and redirects to the homepage. All forms are then accessible.

---

## Test Data — Use These Exact Values

Use a real email inbox you can check (your own or a test inbox like Gmail + `+test` alias).
Use today's date in the name to make contacts easy to find and delete.

| Label | Value |
|---|---|
| Test date | `2026-06-01` (replace with actual date) |
| Buyer name | `LIPM Test Buyer 2026-06-01` |
| Seller name | `LIPM Test Seller 2026-06-01` |
| Local question name | `LIPM Test Local 2026-06-01` |
| Test email | use a real inbox you control |
| Test phone | leave blank (optional field) |
| Test message | `Test submission — please delete after review` |

---

## Form 1 — /contact (Local Question)

**URL:** https://www.liveinportmoody.com/contact

**Steps:**
1. Fill in Name: `LIPM Test Local 2026-06-01`
2. Fill in Email: your test email
3. Leave Phone blank
4. Message: `Test submission — please delete after review`
5. Check "I consent to Live in Port Moody contacting me..." checkbox
6. Click "Send message"

**Expected browser response:** A green success message ("Thank you" or similar)

**Expected in GHL (Contacts → filter by today):**
- Contact name: `LIPM Test Local 2026-06-01`
- Email: matches what you entered
- Source: `liveinportmoody.com`
- Pipeline: `Warm Lead Nurture`
- Stage: `New Lead`
- Owner: GHL_OWNER_BUYER_USER_ID user (buyer/default owner)
- Tags applied: `source:liveinportmoody`, `intent:local-question`, `engagement:form-submit`, `form:ask-question`, `intent:general-local-question`, `area:port-moody`
- Custom fields: `form_type = ask-question`, `lead_type = local-question`, `page_path = /contact`

**Pass:** Contact appears with pipeline, stage, and correct tags.
**Fail:** No contact, or contact appears with no pipeline/stage/owner.

---

## Form 2 — /home-evaluation (Seller — Home Evaluation)

**URL:** https://www.liveinportmoody.com/home-evaluation

**Steps:**
1. Fill in Name: `LIPM Test Seller 2026-06-01`
2. Fill in Email: your test email
3. Leave Phone blank
4. Property address: `123 Test Street, Port Moody BC`
5. Property type: select `Condo`
6. Selling timeline: select `Not sure yet`
7. Questions/notes: `Test submission — please delete after review`
8. Check consent checkbox
9. Click "Request evaluation"

**Expected browser response:** Success message

**Expected in GHL:**
- Contact name: `LIPM Test Seller 2026-06-01`
- Pipeline: `Warm Lead Nurture`, Stage: `New Lead`
- Owner: GHL_OWNER_SELLER_USER_ID user (Leilani)
- Opportunity name: `LIPM Test Seller 2026-06-01 - seller - LiveInPortMoody.com`
- Opportunity type: `Sale`
- Tags: `source:liveinportmoody`, `intent:seller`, `engagement:form-submit`, `form:home-evaluation`, `intent:home-evaluation-request`, `lead_type:seller`, `area:port-moody`
- Custom field `message` should contain: `Property Address: 123 Test Street...`

**Pass:** Contact + opportunity appear with seller owner assigned.
**Fail:** Contact appears but no pipeline/opportunity, or wrong owner.

---

## Form 3 — /buyer-guide (Buyer — Guide Request)

**URL:** https://www.liveinportmoody.com/buyer-guide

**Steps:**
1. Fill in Name: `LIPM Test Buyer 2026-06-01`
2. Fill in Email: your test email
3. Message: `Test submission — please delete after review`
4. Check consent checkbox
5. Click the form submission button

**Expected in GHL:**
- Contact name: `LIPM Test Buyer 2026-06-01`
- Pipeline: `Warm Lead Nurture`, Stage: `New Lead`
- Owner: GHL_OWNER_BUYER_USER_ID user (Paul)
- Tags: `source:liveinportmoody`, `intent:buyer`, `engagement:form-submit`, `form:ask-question`, `intent:buyer-guide-request`, `lead_type:buyer`, `area:port-moody`
- Custom field `form_type = ask-question`, `lead_type = buyer`

**Note:** The buyer guide form does not auto-send a guide document. It is a lead capture only.

**Pass:** Contact appears with buyer owner assigned and buyer tags.

---

## Form 4 — /seller-guide (Seller — Guide Request)

**URL:** https://www.liveinportmoody.com/seller-guide

**Steps:**
1. Fill in Name: `LIPM Test Seller 2026-06-01` (same as Form 2 — GHL will upsert, not duplicate)
2. Fill in Email: your test email (same)
3. Message: `Seller guide test submission — please delete after review`
4. Check consent checkbox
5. Submit

**Note on upsert:** Because GHL upserts on email, this will update the existing test contact from Form 2 rather than creating a duplicate. Verify the tags are added (not replaced) and the opportunity is created fresh.

**Expected in GHL:**
- Existing contact updated (not duplicated)
- New opportunity added: `LIPM Test Seller 2026-06-01 - seller - LiveInPortMoody.com`
- Tags added: `form:home-value`, `intent:seller-guide-request`, `lead_type:seller`
- Custom field `form_type = home-value`

**Pass:** No duplicate contact; new opportunity visible; seller tags present.

---

## Form 5 — /request-recent-sales (Local Question — Comparable Sales)

**URL:** https://www.liveinportmoody.com/request-recent-sales

**Steps:**
1. Fill in Name: `LIPM Test Local 2026-06-01` (same as Form 1 — will upsert)
2. Fill in Email: your test email (same)
3. Message: `Comparable sales test — please delete after review`
4. Submit

**Expected in GHL:**
- Existing contact updated (not duplicated)
- New opportunity or updated contact with tags: `form:ask-question`, `intent:recent-sales-request`, `area:port-moody`
- Pipeline/stage preserved

**Pass:** Tags present on existing contact; no duplicate.

---

## What Failure Looks Like

| Symptom | Most likely cause | Where to check |
|---|---|---|
| Form submits but no GHL contact appears | `CRM_MODE=mock` (not `ghl`) | Vercel env vars |
| "Lead submission failed." on screen | GHL API error — token expired, or location ID wrong | Vercel → Functions → `/api/lead` logs |
| Contact appears but no pipeline/stage | `GHL_PIPELINE_ID` or `GHL_STAGE_ID` wrong or not set | Vercel env vars; compare to GHL pipeline settings |
| Contact appears but no owner assigned | `GHL_OWNER_BUYER_USER_ID` or `GHL_OWNER_SELLER_USER_ID` not set | Vercel env vars |
| Contact created for invalid/empty form data | Zod validation bypassed — should not happen | Check `/api/lead` source; do not deploy without investigating |
| Duplicate contacts created | Email case mismatch or GHL upsert failed | GHL `/contacts/upsert` response; check Vercel function logs |

---

## Verifying in GHL

1. Open GoHighLevel → your location → **Contacts**
2. Sort by **Date Created** (descending) or filter by today's date
3. Search for `LIPM Test` to find all test contacts
4. Click each contact — check Pipeline, Stage, Owner, Tags, and Custom Fields tabs

To check opportunity assignment:
- Open contact → **Opportunities** tab
- Verify pipeline name, stage, opportunity name, and assigned user

---

## Cleanup After Testing

**Delete all test contacts:**

1. In GHL Contacts, search for `LIPM Test`
2. Select all results
3. Delete or archive (depending on your GHL plan)

**Verify cleanup:**
- Confirm no test contacts remain
- Confirm no automated GHL workflows were triggered (check GHL → Automation → History for any workflow runs against test emails)
- If a workflow was triggered: check whether a real email was sent to the test inbox and note it

---

## Pass Criteria (all must be true to proceed with launch)

- [ ] At least one buyer contact and one seller contact appear in GHL after form submission
- [ ] Contacts appear in pipeline `Warm Lead Nurture`, stage `New Lead`
- [ ] Buyer leads assigned to buyer owner; seller leads assigned to seller owner
- [ ] Tags include `source:liveinportmoody` and `engagement:form-submit`
- [ ] No contact created from invalid/empty form submissions
- [ ] No duplicate contacts from re-submitting the same email
- [ ] Vercel function logs show no errors for successful submissions
- [ ] All test contacts deleted from GHL after testing

---

## After a Successful Test

The GHL integration is confirmed working. The remaining step before removing coming-soon:

1. Delete all test contacts from GHL
2. Confirm with Paul/Leilani that privacy/terms language has been reviewed
3. Confirm social links (Instagram, YouTube, Facebook) are either real URLs or intentionally hidden
4. Remove `coming-soon` mode by updating the middleware or Vercel env var

The site is otherwise ready: lint clean, build clean, 86 pages, smoke 71/71, crawl 106/106, all routes 200.

---

## Quick Reference — Form → GHL Mapping

| Page | formType | leadType | Opportunity type | Owner |
|---|---|---|---|---|
| /contact | ask-question | local-question | none | Buyer owner (default) |
| /home-evaluation | home-evaluation | seller | Sale | Seller owner |
| /buyer-guide | ask-question | buyer | Purchase | Buyer owner |
| /seller-guide | home-value | seller | Sale | Seller owner |
| /request-recent-sales | ask-question | local-question | none | Buyer owner (default) |
