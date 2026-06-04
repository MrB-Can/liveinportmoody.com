TASK:
POOL-P0-S35H — Deploy Agent-Safe Graphics and Content

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Deploy the completed S35C, S35D, and S35E agent-safe graphics/content additions to production.

CONTEXT:
S35C completed buyer/seller process graphics.
S35D completed listings/presales decision graphics.
S35E completed neighbourhood framework and resources glossary.
S35G captured these from local development and found no visual defects.
These changes are ready for production deployment.

DO NOT:
- invent content
- add reviews
- add awards
- add businesses
- add events
- change forms or consent behavior
- re-enable coming-soon
- edit unrelated files
- submit sitemap

ALLOWED FILES:
- src/app/buy/page.tsx
- src/app/sell/page.tsx
- src/app/listings/page.tsx
- src/app/presales/page.tsx
- src/app/neighbourhoods/page.tsx
- src/app/resources/page.tsx
- src/components/**/*.tsx
- docs/s35-agent-safe-graphics-implementation.md
- docs/s35-agent-safe-educational-content.md
- agent-work/reports/POOL-P0-S35H-deploy-agent-safe-graphics-and-content-report.md

TASKS:
1. Move task to active.
2. Confirm S35C, S35D, and S35E commits are present locally.
3. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch
4. If validation passes, commit any remaining scoped files.
5. Deploy:
   vercel --prod --force
6. Post-deploy checks:
   curl -I https://www.liveinportmoody.com/buy
   curl -I https://www.liveinportmoody.com/sell
   curl -I https://www.liveinportmoody.com/listings
   curl -I https://www.liveinportmoody.com/presales
   curl -I https://www.liveinportmoody.com/neighbourhoods
   curl -I https://www.liveinportmoody.com/resources
   vercel logs --level error --since 1h
7. Write report.
8. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
CHANGES DEPLOYED:
- /buy:
- /sell:
- /listings:
- /presales:
- /neighbourhoods:
- /resources:
VALIDATION:
- lint:
- build:
- smoke:
- crawl:
DEPLOYMENT:
- commit:
- production URL:
- vercel --prod --force used:
POST-DEPLOY:
- /buy:
- /sell:
- /listings:
- /presales:
- /neighbourhoods:
- /resources:
- error logs:
RECOMMENDED NEXT STEP:
Submit sitemap if not already done; otherwise begin human photo/proof tasks.
