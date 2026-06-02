TASK:
POOL-P0-S29X — Resolve Blocked Duplicate Deploy Visual Fix Stack Task

TASK_TYPE:
queue-cleanup

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Resolve the blocked duplicate deploy task:
- POOL-P1-S29G-deploy-visual-fix-stack.md

CONTEXT:
The approved visual-fix deploy has already completed under:
- POOL-P1-S29G-deploy-approved-visual-fix-stack-report.md

That report confirms:
- visual-fix stack deployed
- production URL live
- pre/post smoke passed
- pre/post crawl passed
- coming-soon still active
- preview access works
- sitemap/noindex safety preserved

Therefore the older blocked task POOL-P1-S29G-deploy-visual-fix-stack.md is obsolete/superseded.

DO NOT:
- deploy
- edit src/**
- remove coming-soon
- change env vars
- run another deploy

ALLOWED FILES:
- agent-work/blocked/POOL-P1-S29G-deploy-visual-fix-stack.md
- agent-work/done/POOL-P1-S29G-deploy-visual-fix-stack-superseded.md
- agent-work/reports/POOL-P0-S29X-resolve-blocked-deploy-visual-fix-stack-report.md

TASKS:
1. Move this task to active.
2. Confirm the approved deploy report exists:
   agent-work/reports/POOL-P1-S29G-deploy-approved-visual-fix-stack-report.md
3. Confirm the blocked duplicate task exists:
   agent-work/blocked/POOL-P1-S29G-deploy-visual-fix-stack.md
4. Add a SUPSERSEDED_REASON header to the blocked duplicate task:
   "Superseded by POOL-P1-S29G-deploy-approved-visual-fix-stack, which successfully deployed and post-validated production."
5. Move it to:
   agent-work/done/POOL-P1-S29G-deploy-visual-fix-stack-superseded.md
6. Run:
   npm run agent:status
   npm run agent:conflicts
7. Write report.
8. Move this task to done.
9. Commit only agent-work changes.

FINAL REPORT:
AGENT:
TASK:
STATUS:
BLOCK RESOLVED:
- yes/no

TASK MOVED:
- from:
- to:

VALIDATION:
- agent:status:
- agent:conflicts:

COMMIT:
hash or none

RECOMMENDED NEXT STEP:
Continue post-deploy smoke or launch readiness tasks.
