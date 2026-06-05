TASK:
POOL-P1-S39C — Add Icons to Research Index Pages

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Make buildings, complexes, and neighbourhood research pages more scannable with icon systems and visual category rows.

DO NOT:
- use generated images
- invent rankings
- invent stats
- invent school/transit claims
- add unlicensed images
- submit sitemap

ALLOWED:
- lucide-react icons
- inline SVG
- CSS chips/badges/connectors
- existing approved imagery

ALLOWED FILES:
- src/app/buildings/page.tsx
- src/app/complexes/page.tsx
- src/app/neighbourhoods/page.tsx
- src/components/**/*.tsx
- src/data/**/*.ts
- agent-work/reports/POOL-P1-S39C-add-icons-to-research-index-pages-report.md

TASKS:
1. Move task to active.

2. Upgrade /buildings:
   Add icon strip for:
   - strata docs
   - insurance
   - depreciation report
   - bylaws
   - parking/storage
   - upcoming work

3. Upgrade /complexes:
   Add icon strip for:
   - layouts
   - amenities
   - parking
   - strata rules
   - resale context

4. Upgrade /neighbourhoods:
   Add more visible lifestyle/category icons for:
   - walkable village
   - transit
   - trails/nature
   - townhomes
   - condos
   - detached homes
   - schools/families

5. Keep copy factual and based only on existing page data.
6. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch
7. Commit scoped files only.
8. Push:
   git pull --rebase origin main
   git push origin main
9. Deploy:
   vercel --prod --force
10. Write report and move task to done.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
PAGES UPDATED:
- /buildings:
- /complexes:
- /neighbourhoods:
VISUAL ELEMENTS:
- icon strips:
- category chips:
- badges:
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
- route checks:
- error logs:
