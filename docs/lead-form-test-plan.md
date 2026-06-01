# Lead form test plan — LiveInPortMoody.com

Manual verification plan for the GoHighLevel CRM integration before removing coming-soon mode.

---

## What to verify

The `/api/lead` route receives a form submission, validates it with Zod, and forwards it to GHL via the API. No lead is sent if validation fails, the honeypot is filled, or the CRM call itself errors.

A passing test means: **a contact appears in GHL with the correct fields, pipeline, and stage assignment**.

---

## Pre-conditions

- `CRM_MODE=ghl` is set in Vercel production env vars (not `mock`)
- `GHL_API_TOKEN` is valid and not expired
- `GHL_LOCATION_ID`, `GHL_PIPELINE_ID`, `GHL_STAGE_ID` are all set
- `GHL_OWNER_BUYER_USER_ID` or `GHL_OWNER_SELLER_USER_ID` is set (pipeline routing)
- The site is accessible (either coming-soon unlocked via preview key, or coming-soon disabled)

---

## Test 1 — Buyer inquiry via Contact page

**Form:** `/contact` → "I'm looking to buy" option

| Field | Value to enter |
|---|---|
| Name | `Test Buyer [date]` (e.g. `Test Buyer 2026-06-01`) |
| Email | A real inbox you can check |
| Phone | Optional — leave blank to test optional field handling |
| Message | `Test submission — delete after review` |

**What to check in GHL:**
- Contact created with matching name and email
- `formType` maps to correct pipeline stage (buyer)
- Lead is assigned to the buyer owner (`GHL_OWNER_BUYER_USER_ID`)
- No duplicate contact created if you re-submit with the same email
- Delete the test contact after verification

---

## Test 2 — Seller inquiry via Sell page

**Form:** `/sell` → seller CTA form

| Field | Value to enter |
|---|---|
| Name | `Test Seller [date]` |
| Email | A real inbox |
| Address | `123 Test St, Port Moody` (or leave blank if optional) |

**What to check in GHL:**
- Contact created with seller lead type
- Assigned to seller owner (`GHL_OWNER_SELLER_USER_ID`)
- Correct pipeline stage

---

## Test 3 — Buyer guide request

**Form:** `/buyer-guide` → guide request form

| Field | Value |
|---|---|
| Name | `Test Guide Request [date]` |
| Email | A real inbox |

**What to check in GHL:**
- Contact created
- `formType: "buyer-guide"` reflected in pipeline stage or tag
- No guide document is actually sent (this is a lead capture, not an automated send)

---

## Test 4 — Form validation (should NOT create CRM contact)

Submit each of these — none should appear in GHL:

| Test | Action | Expected browser response |
|---|---|---|
| Empty submission | Click submit with no fields | Inline validation errors shown |
| Invalid email | Enter `notanemail` in email field | "Enter a valid email address." |
| Name too short | Enter one character in name | "Enter your name." |
| All fields blank | Click submit | Multiple validation errors |

Check GHL after each — no contacts should appear.

---

## Test 5 — Rate limiter (optional)

Submit the form 4 times in rapid succession from the same browser.

**Expected:** The 4th submission within 15 minutes receives an error response ("Too many requests"). No 4th contact appears in GHL.

---

## What to look for in GHL

In GoHighLevel → Contacts → filter by date (today):

- ✅ Name matches what was entered
- ✅ Email matches
- ✅ Phone present if entered
- ✅ Pipeline assigned (not "No pipeline")
- ✅ Stage assigned (check which stage corresponds to buyer vs. seller)
- ✅ Owner assigned (Paul or Leilani per lead type)
- ✅ Source tag or custom field indicates the form used
- ✅ No duplicate from re-submission

---

## What failure looks like

| Symptom | Likely cause |
|---|---|
| Form submits but no GHL contact appears | `CRM_MODE` is `mock` not `ghl`; or GHL API token expired; or missing `GHL_LOCATION_ID` |
| "Lead submission failed." browser error | GHL API call failed — check Vercel function logs |
| Contact appears but no pipeline/stage | `GHL_PIPELINE_ID` or `GHL_STAGE_ID` wrong |
| Contact appears with no owner | `GHL_OWNER_BUYER_USER_ID` or `GHL_OWNER_SELLER_USER_ID` not set |
| Contact created for invalid test data | Zod validation bypassed — check `src/app/api/lead/route.ts` |

---

## After testing

- Delete all test contacts from GHL
- Confirm no real user was emailed or enrolled in a workflow by the test submission
- If any test fails: check Vercel function logs → `/api/lead` invocations for error details

---

## When to run

- Once before removing coming-soon mode (manual, in-person or call)
- After any change to `src/app/api/lead/route.ts` or `src/lib/crm/`
- After rotating the GHL API token
- After changing GHL pipeline or stage IDs in Vercel env vars
