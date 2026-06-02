TASK:
POOL-P1-S29M — Resolve LeadForm Accessibility Change

TASK_TYPE:
code

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Resolve the uncommitted src/components/lead-form.tsx accessibility change that was not included in the visual-fix deploy.

CONTEXT:
Deploy report says src/components/lead-form.tsx had uncommitted accessibility improvements adding htmlFor/id associations. Vercel deployed from git HEAD, so this change is not live.

DO NOT:
- deploy
- change CRM behavior
- submit forms
- remove consent language
- edit unrelated files

ALLOWED FILES:
- src/components/lead-form.tsx
- agent-work/reports/POOL-P1-S29M-resolve-leadform-accessibility-change-report.md

TASKS:
1. Inspect git diff for src/components/lead-form.tsx.
2. If the change is only safe label/id accessibility improvement, keep it.
3. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
4. Commit only src/components/lead-form.tsx and this report/task movement.
5. If the change is risky or affects CRM behavior, revert it and report why.

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
Run live GHL test.
