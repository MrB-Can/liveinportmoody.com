TASK:
POOL-P2-S33L — Accessibility Nav and Consent Polish Review/Fix

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Address non-blocking accessibility follow-ups from technical review.

DO NOT:
- deploy
- change CRM payload fields
- remove required consent language
- silently change legal consent meaning

ALLOWED FILES:
- src/components/mobile-nav.tsx
- src/components/header.tsx
- src/components/lead-form.tsx
- src/components/home-evaluation-form.tsx
- src/components/listings/ListingSupportForm.tsx
- src/components/buildings/BuildingInquiryForm.tsx
- src/components/complexes/TreetopsInquiryForm.tsx
- docs/accessibility-polish-notes.md
- agent-work/reports/POOL-P2-S33L-accessibility-nav-consent-polish-report.md

TASKS:
1. Move task to active.
2. Add aria-expanded / aria-haspopup to mobile submenu buttons if missing.
3. Review desktop dropdown keyboard close behavior.
4. Review consent checkbox defaults:
   - Do not change unless clearly safe.
   - If change affects legal/CRM behavior, document and block for owner/legal decision.
5. Run:
   npm run lint
   npm run build
   npm run crawl:prelaunch
6. Write report.
7. Move task to done or blocked.
8. Commit scoped files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
ARIA FIXES:
KEYBOARD NAV:
CONSENT DECISION:
VALIDATION:
COMMIT:
