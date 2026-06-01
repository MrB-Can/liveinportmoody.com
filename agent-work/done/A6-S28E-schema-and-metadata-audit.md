AGENT:
Agent 6

SPRINT:
A6-S28E — Schema and Metadata Audit

GOAL:
Audit metadata/schema conservatively for launch. No fake review/rating/award schema.

SCOPE:
Audit and tiny metadata fixes only.

ALLOWED FILES:
- docs/schema-metadata-audit.md
- agent-work/reports/A6-S28E-schema-and-metadata-audit-report.md
- src/app/**/*.tsx only for metadata typo fixes
- src/lib/**/*.ts only for metadata typo fixes

FORBIDDEN FILES:
- .env*
- middleware*
- public/images/**
- visual-review-screenshots/**

DO NOT:
- deploy
- add Review schema
- add AggregateRating schema
- add fake Award schema
- add Offer/Listing/Sold schema
- remove noindex from previews
- remove coming-soon

TASKS:
1. Move task to active.
2. Audit:
   - default metadata
   - OG image
   - canonical URLs
   - page titles/descriptions for key pages
   - Organization/WebSite schema if present
3. Confirm no fake review/rating/award/listing schema.
4. Create docs/schema-metadata-audit.md.
5. Make only tiny safe metadata fixes if needed.
6. Run lint/build if code changed.
7. Write report, move task, commit scoped files.

FINAL REPORT:
AGENT:
Agent 6
SPRINT:
A6-S28E — Schema and Metadata Audit
STATUS:
Completed / Blocked
ISSUES:
- issue
FIXES:
- fix
COMMIT:
hash or none
