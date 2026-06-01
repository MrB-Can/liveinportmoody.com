AGENT:
<!-- e.g. Agent 1 -->

SPRINT:
<!-- e.g. LIPM-A1-S28B-001 -->

GOAL:
<!-- One paragraph. What this sprint accomplishes. -->

SCOPE:
<!-- What areas of the codebase are in scope. -->

ALLOWED FILES:
<!-- Exhaustive list. Only these files may be edited. -->
- src/...
- scripts/... (if applicable)

FORBIDDEN FILES:
- src/middleware.ts
- src/app/coming-soon/
- .env*
- agent-work/ (no self-editing)

DO NOT:
- deploy
- remove coming-soon mode
- remove preview cookie
- remove noindex from preview routes
- invent testimonials, awards, or fake social proof
- install packages unless explicitly listed
- edit files not in ALLOWED FILES

PHASES:
1. Read repo context (git status, relevant files)
2. Implement changes
3. Run npm run lint
4. Run npm run build
5. Run npm run smoke:prelaunch (if applicable)
6. Commit staged changes
7. Write report to agent-work/reports/

VALIDATION:
- npm run lint → must pass
- npm run build → must pass (exit 0)
- npm run smoke:prelaunch → if touching routes, middleware, or nav

COMMIT RULES:
- Stage only ALLOWED FILES
- Do not stage screenshots, .env, or unrelated files
- Message format: Sprint {SPRINT}: {short description}

DEPLOYMENT:
not allowed

FINAL REPORT FORMAT:
See agent-work/templates/agent-report.md
