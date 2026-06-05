TASK:
POOL-P1-S39A — Add Icons to Detail Pages and CTA Sections

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Extend the successful icon/process treatment to complex detail pages, CTA sections, and form entry points. Make pages feel less text-heavy without adding fake content.

DO NOT:
- use generated images
- invent reviews, awards, businesses, events, listings, school claims, or stats
- add unlicensed images
- change form/CRM behavior
- change consent defaults
- submit sitemap

ALLOWED:
- lucide-react icons
- inline SVG
- CSS dividers/connectors/badges
- existing approved site images

ALLOWED FILES:
- src/app/complexes/**/*.tsx
- src/components/complexes/**/*.tsx
- src/app/contact/page.tsx
- src/app/meet-us/page.tsx
- src/app/about/page.tsx
- src/components/**/*.tsx
- src/data/**/*.ts
- agent-work/reports/POOL-P1-S39A-add-icons-to-detail-pages-and-ctas-report.md

TASKS:
1. Move task to active.
2. Add a reusable QuickFactsIconRow or reuse existing visual component.
3. On Treetops / complex detail page, add icon treatment for:
   - address/location
   - property type
   - amenities
   - school context if present
   - buyer due diligence
   - owner/seller fit
4. Add a compact “What happens next” icon process to /contact:
   - Send details
   - We review local context
   - You get a practical next step
5. Add a role/approach visual to /meet-us or /about:
   - Real estate guidance
   - Local research
   - Community context
6. Keep everything quiet, editorial, and brand-consistent.
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
- Treetops/detail pages:
- /contact:
- /meet-us or /about:
VISUAL ELEMENTS:
- icons:
- process strips:
- quick facts rows:
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
