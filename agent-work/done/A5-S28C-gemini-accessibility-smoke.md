AGENT:
Agent 5

SPRINT:
A5-S28C — Gemini Accessibility Smoke Review

GOAL:
Run a lightweight accessibility smoke review for forms, nav, buttons, and headings.

SCOPE:
Accessibility review, tiny fixes only.

ALLOWED FILES:
- docs/accessibility-smoke-review.md
- agent-work/reports/A5-S28C-gemini-accessibility-smoke-report.md
- src/app/**/*.tsx only for tiny a11y fixes
- src/components/**/*.tsx only for tiny a11y fixes

FORBIDDEN FILES:
- .env*
- middleware*
- visual-review-screenshots/**

DO NOT:
- deploy
- rewrite UI
- change content strategy
- add fake content

TASKS:
1. Move task to active.
2. Review:
   - header/nav
   - footer
   - /contact form
   - /home-evaluation form
   - /buyer-guide form
   - /seller-guide form
   - /get-started
3. Check:
   - labels
   - button text
   - heading order
   - obvious contrast problems
   - keyboard-visible controls where inspectable
4. Create docs/accessibility-smoke-review.md.
5. Make tiny safe fixes only.
6. Run lint/build if code changed.
7. Write report, move task, commit scoped files.

FINAL REPORT:
AGENT:
Agent 5
SPRINT:
A5-S28C — Gemini Accessibility Smoke Review
STATUS:
Completed / Blocked
P0:
- issue
P1:
- issue
FIXES:
- fix
COMMIT:
hash or none
