TASK:
POOL-P1-S35C — Add Buyer and Seller Process Graphics

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Add agent-safe, branded process graphics/checklists to the buyer and seller pages to improve visual richness without inventing facts.

CONTEXT:
Graphics/content audits identified agent-safe additions:
- /buy buyer decision flow
- /sell seller preparation checklist
These use standard decision frameworks, not testimonials, market claims, or private data.

DO NOT:
- deploy
- invent reviews
- invent awards
- invent market stats
- use stock images
- add fake local photos
- add claims requiring source proof
- change forms or CRM behavior

ALLOWED FILES:
- src/app/buy/page.tsx
- src/app/sell/page.tsx
- src/components/**/*.tsx
- src/lib/site.ts
- docs/s35-agent-safe-graphics-implementation.md
- agent-work/reports/POOL-P1-S35C-add-buyer-seller-process-graphics-report.md

TASKS:
1. Move task to active.
2. Review existing /buy and /sell layouts.
3. Add a buyer decision flow graphic to /buy:
   Suggested flow:
   - Area fit
   - Property type
   - Building / strata review
   - Listing context
   - Offer decision
4. Add a seller preparation checklist graphic to /sell:
   Suggested stages:
   - Pricing context
   - Prep and presentation
   - Launch strategy
   - Showing feedback
   - Offer review
5. Use existing design tokens and site style.
6. Ensure accessible text equivalents:
   - no image-only text
   - clear headings
   - readable mobile stacking
7. Run:
   npm run lint
   npm run build
   npm run crawl:prelaunch
8. Write report.
9. Move task to done or blocked.
10. Commit scoped files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
PAGES UPDATED:
- /buy:
- /sell:
GRAPHICS ADDED:
- item
ACCESSIBILITY:
- text equivalent:
- mobile behavior:
VALIDATION:
- lint:
- build:
- crawl:
COMMIT:
RECOMMENDED NEXT STEP:
Run S35G visual recapture after graphics tasks complete.
