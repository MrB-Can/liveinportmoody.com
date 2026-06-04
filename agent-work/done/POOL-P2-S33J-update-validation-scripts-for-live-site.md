TASK:
POOL-P2-S33J — Update Validation Scripts for Live Site

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Update stale validation scripts so they match the live public site.

CONTEXT:
Technical review found:
- smoke:prelaunch may still expect coming-soon gating
- crawl script still warns for public/images/team/leilani.* while real asset is public/images/team/leilani-paul-team.jpeg

DO NOT:
- deploy
- change production behavior
- edit src app pages
- change middleware

ALLOWED FILES:
- scripts/prelaunch-smoke.mjs
- scripts/prelaunch-crawl.mjs
- package.json only if script names need clarification
- docs/validation-script-live-site-notes.md
- agent-work/reports/POOL-P2-S33J-update-validation-scripts-for-live-site-report.md

TASKS:
1. Move task to active.
2. Update smoke expectations for live site:
   - public pages should return 200
   - coming-soon route may exist but must not gate the site
3. Update crawl static asset check:
   - expected team image: public/images/team/leilani-paul-team.jpeg
4. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch
5. Write report.
6. Move task to done or blocked.
7. Commit scoped files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
SCRIPT CHANGES:
VALIDATION:
- lint:
- build:
- smoke:
- crawl:
COMMIT:
