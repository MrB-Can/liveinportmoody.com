AGENT:
Agent 1

SPRINT:
A1-S28D — Coming-Soon Removal and Rollback Runbook

GOAL:
Create the exact operational runbook for removing coming-soon mode safely, including rollback.

SCOPE:
Documentation and verification only.

ALLOWED FILES:
- docs/coming-soon-removal-runbook.md
- agent-work/reports/A1-S28D-coming-soon-removal-runbook-report.md

FORBIDDEN FILES:
- src/**
- public/**
- .env*
- package.json
- package-lock.json
- visual-review-screenshots/**

DO NOT:
- remove coming-soon
- deploy
- change env vars
- edit site code

TASKS:
1. Move task to active.
2. Inspect middleware/env docs enough to document the actual coming-soon control.
3. Create docs/coming-soon-removal-runbook.md with:
   - current coming-soon behavior
   - preview key flow
   - pre-removal checklist
   - exact Vercel env var change required
   - redeploy step
   - post-removal smoke/crawl
   - rollback procedure
   - who must approve before removal
4. Include checklist:
   - live GHL test passed
   - privacy/terms reviewed
   - owner approves homepage/nav/funnels
   - sitemap verified
   - no P0/P1 visual issues
5. Write report.
6. Move task to done or blocked.
7. Commit only docs/report.

VALIDATION:
- documentation only
- no code changes

FINAL REPORT:
AGENT:
Agent 1
SPRINT:
A1-S28D — Coming-Soon Removal and Rollback Runbook
STATUS:
Completed / Blocked
FILES CHANGED:
- file
COMMIT:
hash or none
RECOMMENDED NEXT STEP:
- one clear action
