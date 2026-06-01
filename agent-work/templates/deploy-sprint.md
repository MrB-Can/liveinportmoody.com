AGENT:
<!-- e.g. Agent 1 -->

SPRINT:
<!-- e.g. LIPM-A1-S28B-DEPLOY-001 -->

GOAL:
<!-- What is being deployed and why. -->

KNOWN COMMITS:
<!-- List the commit hashes being deployed, e.g. abc1234 -->

SCOPE:
<!-- What routes/features are affected. -->

ALLOWED FILES:
<!-- Only if a pre-deploy fix is needed. Otherwise: none — deploy only. -->

FORBIDDEN FILES:
- src/middleware.ts
- src/app/coming-soon/
- .env*

DO NOT:
- edit product content
- remove coming-soon mode
- change environment variables
- deploy without running preflight checks

PHASES:
1. git status — confirm clean tree
2. Run npm run lint
3. Run npm run build
4. Run npm run smoke:prelaunch
5. Run npm run crawl:prelaunch
6. Deploy: vercel --prod
7. Post-deploy: curl spot-check all new routes (200 with preview cookie)
8. Re-run npm run smoke:prelaunch against production
9. Re-run npm run crawl:prelaunch against production
10. Write report to agent-work/reports/

VALIDATION:
- npm run lint → must pass
- npm run build → must pass
- npm run smoke:prelaunch → must pass pre and post deploy
- npm run crawl:prelaunch → must pass post deploy

COMMIT RULES:
- No new commits during deploy unless a critical pre-deploy fix is needed
- Document any hotfix commits in the report

DEPLOYMENT:
allowed — production

FINAL REPORT FORMAT:
See agent-work/templates/agent-report.md
