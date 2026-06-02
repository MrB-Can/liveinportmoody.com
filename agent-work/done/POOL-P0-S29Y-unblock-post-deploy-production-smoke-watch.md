TASK:
POOL-P0-S29Y — Unblock and Run Post-Deploy Production Smoke Watch

TASK_TYPE:
qa

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Resolve blocked post-deploy smoke watch:
- POOL-P2-S29J-post-deploy-production-smoke-watch.md

CONTEXT:
This task was blocked waiting for the visual-fix deployment.
The approved visual-fix deploy has now completed. Therefore this task should be unblocked and executed.

DO NOT:
- edit src/**
- deploy
- remove coming-soon
- change env vars
- submit live forms
- commit screenshots

ALLOWED FILES:
- agent-work/blocked/POOL-P2-S29J-post-deploy-production-smoke-watch.md
- agent-work/done/POOL-P2-S29J-post-deploy-production-smoke-watch.md
- agent-work/reports/POOL-P2-S29J-post-deploy-production-smoke-watch-report.md
- agent-work/reports/POOL-P0-S29Y-unblock-post-deploy-production-smoke-watch-report.md

TASKS:
1. Move this task to active.
2. Confirm deploy report exists:
   agent-work/reports/POOL-P1-S29G-deploy-approved-visual-fix-stack-report.md
3. Move blocked task:
   agent-work/blocked/POOL-P2-S29J-post-deploy-production-smoke-watch.md
   to active temporarily or execute its checks directly.
4. Run:
   npm run smoke:prelaunch
   npm run crawl:prelaunch
5. Manually verify production state if possible:
   - https://www.liveinportmoody.com shows coming-soon without preview cookie
   - /preview?key=lgis2026 unlocks preview
   - /buildings works with preview cookie
   - /contact works as expected
6. Write or update:
   agent-work/reports/POOL-P2-S29J-post-deploy-production-smoke-watch-report.md
7. Move the original blocked S29J task to done if checks pass.
8. If checks fail, leave it blocked with a BLOCKED_REASON.
9. Run:
   npm run agent:status
   npm run agent:conflicts
10. Write this task's report.
11. Move this task to done.
12. Commit only agent-work report/task movement files.

FINAL REPORT:
AGENT:
TASK:
STATUS:
S29J STATUS:
- done/blocked

POST-DEPLOY VALIDATION:
- smoke:
- crawl:
- manual checks:

BLOCKERS FOUND:
- item

VALIDATION:
- agent:status:
- agent:conflicts:

COMMIT:
hash or none

RECOMMENDED NEXT STEP:
If smoke/crawl pass, continue launch readiness.
