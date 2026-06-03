AGENT:
Agent 3

SPRINT:
A3-S29A — Lead Form Page Visual Balance Fix

GOAL:
Fix oversized, imbalanced form sections on guide/request pages.

THIS IS A CODE FIX TASK, NOT A REPORT TASK.

ALLOWED FILES:
- src/app/buyer-guide/page.tsx
- src/app/seller-guide/page.tsx
- src/app/first-time-home-buyers/page.tsx
- src/app/generational-wealth-real-estate/page.tsx
- src/app/request-recent-sales/page.tsx
- src/app/contact/page.tsx
- src/app/listings/page.tsx
- src/components/lead-form.tsx
- src/components/home-evaluation-form.tsx
- agent-work/reports/A3-S29A-lead-form-page-visual-balance-report.md

FORBIDDEN FILES:
- middleware*
- .env*
- public/images/**
- visual-review-screenshots/**

DO NOT:
- deploy
- change CRM behavior
- remove consent language
- submit live leads
- add fake downloads
- add fake claims
- remove coming-soon
- remove noindex

TASKS:
1. Move this task to active.
2. Review screenshots for buyer guide, seller guide, first-time buyers, generational wealth, request recent sales, contact, and listings.
3. Fix oversized empty companion cards beside forms.
4. Remove forced equal-height layouts where they create large blank areas.
5. Add concise useful bullets only where needed, without inventing content.
6. Tighten vertical spacing around form sections.
7. Keep forms functional and compliant.
8. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
9. Write final report.
10. Move task to done or blocked.
11. Commit only scoped files.

FINAL REPORT:
AGENT:
Agent 3
SPRINT:
A3-S29A — Lead Form Page Visual Balance Fix
STATUS:
Completed / Blocked
FILES CHANGED:
- file
VISUAL FIXES:
- fix
VALIDATION:
- lint:
- build:
- smoke:
COMMIT:
hash or none
