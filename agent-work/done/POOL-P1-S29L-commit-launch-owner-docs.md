TASK:
POOL-P1-S29L — Commit Launch Owner Docs and Reports

TASK_TYPE:
docs

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Find and commit the completed launch-owner documentation work that was reported as done but not committed.

CONTEXT:
Recent reports say these were completed but commit was pending/not yet done:
- docs/ghl-live-form-test-runbook.md
- docs/privacy-terms-owner-review-packet.md
- related agent-work reports/task movement

DO NOT:
- edit src/**
- edit public/**
- deploy
- submit live GHL forms
- change env vars
- remove coming-soon
- remove preview noindex
- invent legal language
- give legal advice

ALLOWED FILES:
- docs/ghl-live-form-test-runbook.md
- docs/privacy-terms-owner-review-packet.md
- docs/lead-form-test-plan.md only if already changed and directly related
- agent-work/reports/POOL-P1-S29H-ghl-live-test-readiness-report.md
- agent-work/reports/POOL-P1-S29I-privacy-terms-owner-review-packet-report.md
- agent-work/backlog/**
- agent-work/active/**
- agent-work/done/**
- agent-work/blocked/**

FORBIDDEN FILES:
- src/**
- public/**
- middleware*
- .env*
- visual-review-screenshots/**
- package.json
- package-lock.json

TASKS:
1. Move this task from backlog to active.
2. Run:
   git status --short
   npm run agent:status
   npm run agent:conflicts
3. Confirm whether these docs exist:
   - docs/ghl-live-form-test-runbook.md
   - docs/privacy-terms-owner-review-packet.md
4. Confirm whether these reports exist:
   - agent-work/reports/POOL-P1-S29H-ghl-live-test-readiness-report.md
   - agent-work/reports/POOL-P1-S29I-privacy-terms-owner-review-packet-report.md
5. If the docs/reports are already committed, report no-op and move task to done.
6. If docs/reports are uncommitted:
   - stage only allowed docs/report/task files
   - do not stage src/**
   - do not stage screenshots or zip files
7. Commit with:
   Sprint POOL-P1-S29L: commit launch owner docs and reports
8. Move this task to done.
9. Write final report:
   agent-work/reports/POOL-P1-S29L-commit-launch-owner-docs-report.md
10. Commit the final report/task movement if needed, or include it in the same commit if created before committing.

VALIDATION:
- No src/** files changed
- No deploy
- agent:status runs
- agent:conflicts runs

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
FILES FOUND:
- file

FILES COMMITTED:
- file

FILES LEFT UNTOUCHED:
- file

VALIDATION:
- git status:
- agent:status:
- agent:conflicts:

COMMIT:
hash or none

RECOMMENDED NEXT STEP:
Continue visual-fix deploy path. Owner runs GHL live test after deploy.
