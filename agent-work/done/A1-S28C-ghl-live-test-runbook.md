AGENT:
Agent 1

SPRINT:
A1-S28C — GHL Live Test Runbook and Launch Gate

GOAL:
Prepare a precise runbook for the live GHL form test, then report what Paul needs to do manually. Do not submit a valid external lead unless explicitly authorized.

SCOPE:
Documentation and safe pre-test checks only.

ALLOWED FILES:
- docs/ghl-live-form-test-runbook.md
- agent-work/reports/A1-S28C-ghl-live-test-runbook-report.md

FORBIDDEN FILES:
- src/**
- public/**
- package.json
- package-lock.json
- .env*
- visual-review-screenshots/**

DO NOT:
- submit a valid live GHL lead
- change GHL settings
- print secrets
- edit website code
- deploy

TASKS:
1. Move this task to active.
2. Inspect existing lead form test docs if present.
3. Create docs/ghl-live-form-test-runbook.md with:
   - exact test contact data to use
   - which forms to test
   - expected GHL tags/lead type/source
   - where to verify the contact in GHL
   - how to delete/clean up test contact
   - what counts as pass/fail
4. Include forms:
   - /contact
   - /home-evaluation
   - /buyer-guide
   - /seller-guide
   - /request-recent-sales
5. Run safe pre-test checks only:
   - forms render
   - API rejects missing fields
   - honeypot blocks bot submission if safe
6. Write final report to agent-work/reports/A1-S28C-ghl-live-test-runbook-report.md.
7. Move task to done or blocked.
8. Commit only docs/report changes.

VALIDATION:
- no real lead submitted
- docs clear enough for Paul to execute

FINAL REPORT:
AGENT:
Agent 1

SPRINT:
A1-S28C — GHL Live Test Runbook and Launch Gate

STATUS:
Completed / Blocked

FILES CHANGED:
- file

SAFE CHECKS:
- item

LIVE TEST STILL REQUIRED:
yes/no

COMMIT:
hash or none

RECOMMENDED NEXT STEP:
- one clear action
