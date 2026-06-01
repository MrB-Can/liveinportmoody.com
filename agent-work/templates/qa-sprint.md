AGENT:
<!-- e.g. Agent 2 -->

SPRINT:
<!-- e.g. LIPM-A2-S28A-QA-001 -->

GOAL:
<!-- What is being QA'd and what pass/fail looks like. -->

SCOPE:
<!-- Routes, features, or areas under review. -->

ALLOWED FILES:
<!-- QA tasks usually edit nothing. List files only if small fixes are in scope. -->
- agent-work/reports/ (report only)

FORBIDDEN FILES:
- src/middleware.ts
- src/app/coming-soon/
- .env*
- All product pages (unless small fix explicitly allowed below)

DO NOT:
- deploy
- remove coming-soon mode
- remove noindex from preview routes
- edit nav, header, or footer
- make broad refactors
- invent social proof

PHASES:
1. Run npm run smoke:prelaunch — record pass/fail
2. Run npm run crawl:prelaunch — record pass/fail
3. Manual spot checks: list routes tested and findings
4. Check for: broken links, missing metadata, unsafe claims, 404s
5. Write report with findings to agent-work/reports/
6. Flag blockers clearly — do not fix silently

VALIDATION:
- npm run smoke:prelaunch → record result
- npm run crawl:prelaunch → record result
- List any failures explicitly in the report

COMMIT RULES:
- Do not commit unless a small explicit fix was authorized
- If fixing: stage only the specific file, describe in report

DEPLOYMENT:
not allowed

FINAL REPORT FORMAT:
See agent-work/templates/agent-report.md
