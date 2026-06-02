TASK:
POOL-P0-S29Q — Prepare Coming-Soon Removal Task

TASK_TYPE:
deploy-prep

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Prepare the exact coming-soon removal task but do not remove coming-soon yet.

WAIT CONDITION:
Do not remove coming-soon. This task only prepares the launch task. Coming-soon removal requires explicit owner approval after privacy/terms approval.

DO NOT:
- deploy
- change env vars
- remove coming-soon
- edit src/**
- change middleware

ALLOWED FILES:
- agent-work/backlog/POOL-P0-S29R-remove-coming-soon-after-owner-approval.md
- agent-work/reports/POOL-P0-S29Q-coming-soon-removal-task-ready-report.md

TASKS:
1. Move this task to active.
2. Create POOL-P0-S29R-remove-coming-soon-after-owner-approval.md in backlog.
3. That task must require explicit owner approval and privacy/terms approval before execution.
4. Include exact validation:
   - pre-removal smoke/crawl
   - Vercel env COMING_SOON_ENABLED=false
   - redeploy
   - post-launch smoke/crawl
   - verify / no longer gates
   - verify /contact works
   - verify sitemap/robots
   - rollback instructions
5. Commit task/report only.
6. Move this task to done.

FINAL REPORT:
AGENT:
TASK:
STATUS:
FILES CREATED:
COMMIT:
RECOMMENDED NEXT STEP:
Wait for owner approval before running S29R.
