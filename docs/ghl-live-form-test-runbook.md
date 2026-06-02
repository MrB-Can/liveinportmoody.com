# GHL Live Form Test Runbook

**Purpose:** Verify that the GoHighLevel CRM integration is working correctly before removing the coming-soon gate.

**When to use:** After deploying the visual fix and unlocking the preview (via __lipm_preview=lgis2026 cookie or removing coming-soon mode entirely).

**Duration:** ~10 minutes

---

## Prerequisites Checklist

Before starting, confirm:

- [ ] Vercel production env vars are set:
  - [ ] `CRM_MODE=ghl` (not `mock`)
  - [ ] `GHL_API_TOKEN` is current and valid
  - [ ] `GHL_LOCATION_ID` is set
  - [ ] `GHL_PIPELINE_ID` is set
  - [ ] `GHL_STAGE_ID` is set
  - [ ] `GHL_OWNER_BUYER_USER_ID` is set
  - [ ] `GHL_OWNER_SELLER_USER_ID` is set
- [ ] You have access to the GoHighLevel account (Contacts section)
- [ ] You have access to a real email inbox for test submissions
- [ ] The live site is accessible (coming-soon unlocked or removed)

---

## Owner Test Steps

### 1. Open Production Preview

Open the live site in your browser. If coming-soon is still active, unlock the preview:

```
https://www.liveinportmoody.com?__lipm_preview=lgis2026
```

If coming-soon has been removed, just visit:
```
https://www.liveinportmoody.com
```

**Verify:** The site loads normally (not showing the coming-soon page).

---

### 2. Submit Test Contact via /contact

Navigate to `/contact` and submit a test buyer inquiry:

**Form:** Contact page → Select "I'm looking to buy"

| Field | Value to enter |
|---|---|
| **Name** | `Test Buyer 2026-06-01` (use today's date) |
| **Email** | [your real inbox email] |
| **Phone** | (leave blank — testing optional field) |
| **Message** | `Test submission — please delete after review` |

**After submit:**
- Confirm the browser shows a success message (or success notification)
- Note the exact date/time you submitted

---

### 3. Verify Contact in GoHighLevel

Go to **GoHighLevel → Contacts** and filter by today's date:

**Checklist — the contact MUST have:**

| Field | Expected value | Status |
|---|---|---|
| **Name** | Test Buyer 2026-06-01 | ☐ |
| **Email** | [your email] | ☐ |
| **Pipeline** | (should be assigned — not "No pipeline") | ☐ |
| **Stage** | (should correspond to buyer inquiry) | ☐ |
| **Owner** | Paul or Leilani (buyer owner) | ☐ |
| **Source/Tags** | (should indicate contact form or /contact source) | ☐ |
| **Consent** | (if consent field exists, verify it's set) | ☐ |

**If any field is missing or wrong:** Stop here and note the issue in the report. Do NOT proceed.

---

### 4. (Optional) Test Seller Form

If you want to test the seller pipeline as well:

Navigate to `/sell` and submit:

| Field | Value |
|---|---|
| **Name** | `Test Seller 2026-06-01` |
| **Email** | [your real inbox email] |
| **Address** | `123 Test St, Port Moody, BC` (or leave blank if optional) |

**Verify in GHL:**
- Contact created
- Assigned to seller owner
- Correct stage for seller inquiry

---

### 5. Test Form Validation (No CRM Contact Should Be Created)

These should fail validation WITHOUT creating a GHL contact:

| Test Case | What to do | Expected browser response |
|---|---|---|
| **Empty submission** | Click submit with all fields blank | "Please fill in all required fields" or similar |
| **Invalid email** | Enter `notanemail` in email field | "Please enter a valid email address" |
| **Name too short** | Enter just `X` in name field | "Please enter a valid name" |

**After each:** Refresh GHL contacts and confirm no new contact appeared for that attempt.

---

### 6. Clean Up Test Contacts

In GoHighLevel:

- [ ] Find the test contacts (by today's date)
- [ ] Delete or archive them
- [ ] Confirm no test contacts remain in the active pipeline

---

## Pass/Fail Checklist

### ✅ PASS: All of the following are true

- [ ] Contact form submitted successfully
- [ ] Contact appears in GHL within 30 seconds
- [ ] All required fields (name, email, pipeline, stage, owner) are populated
- [ ] Form validation works (invalid submissions don't create contacts)
- [ ] No errors in Vercel function logs (if you checked them)
- [ ] Test contacts cleaned up from GHL

### ❌ FAIL: Any of the following occurred

- [ ] Form submit shows an error to the user
- [ ] Contact does not appear in GHL after submission
- [ ] Contact appears but is missing pipeline, stage, or owner assignment
- [ ] Invalid test data created a contact (validation bypassed)
- [ ] GHL contact has wrong owner or stage for the lead type

---

## Troubleshooting

### No contact appears in GHL

1. Check Vercel function logs: `vercel logs --function=api/lead`
2. Look for error messages like "API call failed" or validation errors
3. **Possible causes:**
   - `CRM_MODE=mock` instead of `ghl`
   - `GHL_API_TOKEN` expired
   - Missing `GHL_LOCATION_ID`
   - Network issue (temporary)

### Contact appears but missing fields

1. Check which field is missing
2. **If pipeline/stage missing:** `GHL_PIPELINE_ID` or `GHL_STAGE_ID` may be wrong
3. **If owner missing:** `GHL_OWNER_BUYER_USER_ID` or `GHL_OWNER_SELLER_USER_ID` not set

### Form validation not working

- Check `src/app/api/lead/route.ts` — Zod validation may have been modified
- Invalid test data should NOT create a contact; if it does, validation is broken

---

## Report Template

After running the tests, fill in:

**Test Date:** [date]  
**Tester:** [name]  
**Site Version:** [deployed commit]  

**Test Results:**

- Contact Form Test: ☐ PASS ☐ FAIL
- GHL Contact Created: ☐ YES ☐ NO
- All Required Fields Present: ☐ YES ☐ NO
- Form Validation Working: ☐ YES ☐ NO
- Issues Found: [list any]

**Overall Status:** ☐ READY TO LAUNCH ☐ NEEDS FIXES

---

## Next Steps

- **If PASS:** Coming-soon mode can be removed and the site is ready for live traffic
- **If FAIL:** Investigate error logs and env vars; re-run test after fix
