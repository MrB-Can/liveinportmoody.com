TASK:
POOL-P1-S29H — GHL Live Form Test Readiness

TASK_TYPE:
qa

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Prepare the live GHL form test so the owner can run it immediately after visual-fix deploy.

DO NOT:
- edit src/**
- deploy
- submit a real live lead unless explicitly approved by owner
- remove coming-soon
- change env vars
- expose secrets

ALLOWED FILES:
- docs/ghl-live-form-test-runbook.md
- agent-work/reports/POOL-P1-S29H-ghl-live-test-readiness-report.md

TASKS:
1. Inspect existing docs/lead-form-test-plan.md if present.
2. Create/update docs/ghl-live-form-test-runbook.md.
3. Include exact owner steps:
   - open production preview
   - submit test contact on /contact
   - submit test buyer/seller/listing form if needed
   - verify contact appears in GHL
   - verify owner, pipeline, stage, tags, source, consent fields
   - delete or mark test contact
4. Include test data template:
   - name
   - email
   - phone
   - message
   - expected tags
5. Include pass/fail checklist.
6. Write report.
7. Commit only docs/report/task movement.

FINAL REPORT:
AGENT:
TASK:
STATUS:
FILES CHANGED:
TESTS PREPARED:
OPEN QUESTIONS:
COMMIT:
RECOMMENDED NEXT STEP:
Owner runs live GHL test after deploy.
