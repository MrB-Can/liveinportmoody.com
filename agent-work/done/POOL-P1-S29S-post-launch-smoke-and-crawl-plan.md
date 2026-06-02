TASK:
POOL-P1-S29S — Post-Launch Smoke and Crawl Plan

TASK_TYPE:
qa

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Prepare a post-coming-soon-removal verification plan.

DO NOT:
- edit src/**
- deploy
- remove coming-soon

ALLOWED FILES:
- docs/post-launch-smoke-crawl-plan.md
- agent-work/reports/POOL-P1-S29S-post-launch-smoke-and-crawl-plan-report.md

TASKS:
1. Move this task to active.
2. Create docs/post-launch-smoke-crawl-plan.md.
3. Include checks:
   - homepage public without cookie
   - all phase-one sitemap routes public
   - contact form visible
   - GHL form still works or safe test route
   - robots/sitemap
   - preview noindex remains on preview guides
   - no API errors
   - no obvious console/runtime errors
4. Include exact commands:
   npm run smoke:prelaunch
   npm run crawl:prelaunch
5. Commit docs/report only.
6. Move task to done.

FINAL REPORT:
AGENT:
TASK:
STATUS:
FILES CHANGED:
COMMIT:
RECOMMENDED NEXT STEP:
