TASK:
POOL-P1-S29G — Deploy Approved Visual Fix Stack

TASK_TYPE:
deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized

GOAL:
Deploy the approved visual-fix stack to production after targeted /buildings recapture passed review.

APPROVAL:
ChatGPT reviewed S29F targeted recapture and approved deployment. Mobile /buildings is no longer a launch blocker.

MUST INCLUDE THESE COMMITS:
- 6c4a964 — S29E mobile buildings layout fix
- 93115de — research template polish
- 8fda0b7 — lead form page visual balance
- 4d61cd8 / 0f56c9e — footer/newsletter and screenshot visual fixes
- b16f176 if present — local/trust page polish

DO NOT:
- remove coming-soon
- remove preview noindex
- submit live GHL test
- edit code
- change env vars unless required for deploy command
- commit screenshots
- deploy Site Ops/app.lgis.ca

TASKS:
1. Move this task to active.
2. Run:
   git status --short
   git log --oneline -15
   npm run agent:status
   npm run agent:conflicts
3. Confirm no uncommitted src/** changes.
4. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch
5. Deploy to production.
6. Run post-deploy:
   npm run smoke:prelaunch
   npm run crawl:prelaunch
7. Confirm:
   - coming-soon gate still active
   - preview access still works
   - sitemap remains safe
   - preview/noindex behavior preserved
   - /buildings mobile fix is included in deployed commit stack
8. Write report:
   agent-work/reports/POOL-P1-S29G-deploy-approved-visual-fix-stack-report.md
9. Move task to done or blocked.
10. Commit only report/task movement if needed.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
COMMIT DEPLOYED:
DEPLOYMENT URL:
PRODUCTION URL:
PRE-DEPLOY VALIDATION:
- lint:
- build:
- smoke:
- crawl:
POST-DEPLOY VALIDATION:
- smoke:
- crawl:
SAFETY:
- coming-soon gate:
- preview access:
- preview noindex:
- sitemap safety:
BLOCKERS REMAINING:
- live GHL form test
- privacy/terms owner review
RECOMMENDED NEXT STEP:
Run live GHL form test.
