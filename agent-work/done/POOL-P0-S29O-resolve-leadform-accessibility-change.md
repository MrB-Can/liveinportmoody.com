TASK:
POOL-P0-S29O — Resolve LeadForm Accessibility Change

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Resolve the uncommitted LeadForm accessibility change reported during deploy. The deploy report said src/components/lead-form.tsx had htmlFor/id improvements that were not included in production.

DO NOT:
- deploy
- submit forms
- change CRM behavior
- remove consent language
- edit unrelated files

ALLOWED FILES:
- src/components/lead-form.tsx
- agent-work/reports/POOL-P0-S29O-resolve-leadform-accessibility-change-report.md

TASKS:
1. Move this task to active.
2. Run git status --short.
3. Inspect src/components/lead-form.tsx diff.
4. If the change is only safe accessibility label/id work, keep it.
5. If the change affects CRM behavior or form payloads, revert it and report why.
6. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
7. Commit only scoped files.
8. Move task to done or blocked.

FINAL REPORT:
AGENT:
TASK:
STATUS:
DECISION:
FILES CHANGED:
VALIDATION:
- lint:
- build:
- smoke:
COMMIT:
RECOMMENDED NEXT STEP:
Continue launch readiness.
