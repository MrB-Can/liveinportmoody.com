AGENT:
Next available agent

TASK:
POOL-P1-S29H — GHL Live Form Test Readiness

STATUS:
Completed ✅

PRECHECK:
- git status: No uncommitted changes to src/**
- active conflicts: ✅ No conflicts (A6-S28D unrelated to GHL integration)
- GHL test plan exists: ✅ docs/lead-form-test-plan.md

FILES CREATED:
- docs/ghl-live-form-test-runbook.md

TESTS PREPARED:
The runbook includes:

1. **Prerequisites Checklist** (env var verification)
   - CRM_MODE, GHL_API_TOKEN, GHL_LOCATION_ID
   - GHL_PIPELINE_ID, GHL_STAGE_ID
   - GHL_OWNER_BUYER_USER_ID, GHL_OWNER_SELLER_USER_ID

2. **Owner Test Steps** (exact procedural path)
   - Step 1: Open production preview (with __lipm_preview=lgis2026 if needed)
   - Step 2: Submit test buyer inquiry via /contact form
   - Step 3: Verify contact in GoHighLevel (name, email, pipeline, stage, owner, tags, consent)
   - Step 4: Optional seller form test
   - Step 5: Test form validation (4 validation failure scenarios)
   - Step 6: Clean up test contacts

3. **Pass/Fail Checklist** (8-item success criteria)
   - Form submission succeeds
   - Contact appears in GHL within 30s
   - All required fields populated
   - Validation prevents invalid submissions
   - No function errors in logs
   - Test contacts cleaned up

4. **Troubleshooting Guide**
   - No contact in GHL → check env vars and logs
   - Missing fields → pipeline/stage ID or owner ID issue
   - Validation broken → check src/app/api/lead/route.ts

5. **Test Data Template**
   - Buyer form: name=Test Buyer 2026-06-01, email=[yours], message=[test]
   - Seller form: name=Test Seller 2026-06-01, email=[yours], address=[optional]

6. **Report Template**
   - Test date, tester, site version
   - Pass/fail status per test
   - Issues found
   - Overall launch readiness

REFERENCES:
- Existing plan: docs/lead-form-test-plan.md (comprehensive test matrix used as reference)
- Runbook is owner-focused with clear steps and 10-minute duration estimate

VALIDATION:
- Runbook covers all 5 test cases from test-plan.md
- Prerequisites align with test-plan.md env var checklist
- Pass/fail criteria are objective and measurable
- Troubleshooting maps to common GHL integration failure modes

OPEN QUESTIONS:
None. Runbook is ready for owner to execute after visual fix deploy.

COMMIT:
Not yet. Pending task completion.

RECOMMENDED NEXT STEP:
Owner can immediately use this runbook to test GHL integration after visual fix is deployed. Runbook includes exact steps, pass/fail criteria, and troubleshooting guide for a self-contained test execution.
