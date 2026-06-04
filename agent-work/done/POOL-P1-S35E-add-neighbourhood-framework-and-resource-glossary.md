TASK:
POOL-P1-S35E — Add Neighbourhood Framework and Resource Glossary

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Add agent-safe educational content to improve decision quality and local authority.

CONTEXT:
Planning reports identified these as safe agent-created content:
- neighbourhood decision framework
- real estate terminology glossary

DO NOT:
- deploy
- invent neighbourhood claims
- invent rankings
- invent market stats
- add unsupported school/transit claims
- add stock images

ALLOWED FILES:
- src/app/neighbourhoods/page.tsx
- src/app/resources/page.tsx
- src/components/**/*.tsx
- docs/s35-agent-safe-educational-content.md
- agent-work/reports/POOL-P1-S35E-add-neighbourhood-framework-and-resource-glossary-report.md

TASKS:
1. Move task to active.
2. Add a neighbourhood decision framework to /neighbourhoods:
   Suggested dimensions:
   - Walkability
   - Transit
   - Housing type
   - Trail / nature access
   - Quiet streets
   - Waterfront / village feel
3. Do not claim exact scores unless already in data.
4. Add a concise real estate terminology glossary to /resources:
   Suggested terms:
   - Subject removal
   - Strata documents
   - Form B
   - Depreciation report
   - Presale disclosure statement
   - MLS Reciprocity
   - Assessment vs market value
5. Keep copy general and clearly educational.
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
- /neighbourhoods:
- /resources:
CONTENT ADDED:
- item
CLAIM SAFETY:
- unsupported facts avoided:
VALIDATION:
- lint:
- build:
- crawl:
COMMIT:
RECOMMENDED NEXT STEP:
Run S35G visual recapture after graphics tasks complete.
