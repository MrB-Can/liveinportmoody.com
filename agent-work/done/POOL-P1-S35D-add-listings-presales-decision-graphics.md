TASK:
POOL-P1-S35D — Add Listings and Presales Decision Graphics

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Add agent-safe decision graphics to /listings and /presales to make both pages feel more visually useful and less text-only.

CONTEXT:
Recent visual review recommended:
- /listings: due-diligence framework before writing an offer
- /presales: presale verification / resale comparison graphic

DO NOT:
- deploy
- invent listing data
- invent presale project data
- invent MLS data
- use fake project names
- add current market stats
- add stock images
- change form behavior

ALLOWED FILES:
- src/app/listings/page.tsx
- src/app/presales/page.tsx
- src/components/**/*.tsx
- docs/s35-agent-safe-graphics-implementation.md
- agent-work/reports/POOL-P1-S35D-add-listings-presales-decision-graphics-report.md

TASKS:
1. Move task to active.
2. Add /listings graphic:
   Suggested title:
   "Before writing an offer"
   Suggested framework:
   - Property
   - Building / strata
   - Neighbourhood
   - Pricing context
   - Buyer trade-offs
3. Add /presales graphic:
   Suggested title:
   "Before relying on presale details"
   Suggested framework:
   - Project details
   - Disclosure review
   - Deposit and timing
   - Resale comparison
   - Ask before signing
4. Use current site design system.
5. Make layouts responsive and accessible.
6. Run:
   npm run lint
   npm run build
   npm run crawl:prelaunch
7. Write report.
8. Move task to done or blocked.
9. Commit scoped files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
PAGES UPDATED:
- /listings:
- /presales:
GRAPHICS ADDED:
- item
VALIDATION:
- lint:
- build:
- crawl:
COMMIT:
RECOMMENDED NEXT STEP:
Run S35G visual recapture after graphics tasks complete.
