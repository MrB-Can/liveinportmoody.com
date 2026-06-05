TASK:
POOL-P1-S39B — Add Icons to Local and Trust Pages

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Make local/trust pages more visual using icon category systems and simple trust/process graphics.

DO NOT:
- use generated images
- invent testimonials
- invent businesses
- invent events
- invent awards
- add fake proof
- add unlicensed images
- submit sitemap

ALLOWED:
- lucide-react icons
- inline SVG
- CSS badges/chips/dividers
- existing approved imagery

ALLOWED FILES:
- src/app/raving-fans/page.tsx
- src/app/featured-businesses/page.tsx
- src/app/events/page.tsx
- src/app/local-life/page.tsx
- src/app/local-insights/page.tsx
- src/app/resources/page.tsx
- src/components/**/*.tsx
- agent-work/reports/POOL-P1-S39B-add-icons-to-local-trust-pages-report.md

TASKS:
1. Move task to active.

2. Upgrade /raving-fans:
   Add a trust verification visual:
   - Verified source
   - Approved excerpt
   - Context added
   - Privacy respected

3. Upgrade /featured-businesses:
   Add category icon chips:
   - Food and drink
   - Local services
   - Shops
   - Community places

4. Upgrade /events:
   Add category icon chips:
   - Family events
   - Community notices
   - Markets
   - Local updates

5. Upgrade /local-life and /local-insights:
   Add icon-based local context groups:
   - parks/trails
   - transit
   - schools
   - shops/restaurants
   - neighbourhood feel
   - services

6. Avoid “coming soon” or “content pending” wording.
7. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch
8. Commit scoped files only.
9. Push:
   git pull --rebase origin main
   git push origin main
10. Deploy:
   vercel --prod --force
11. Write report and move task to done.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
PAGES UPDATED:
- /raving-fans:
- /featured-businesses:
- /events:
- /local-life:
- /local-insights:
VISUAL ELEMENTS:
- icon chips:
- trust/process graphics:
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
