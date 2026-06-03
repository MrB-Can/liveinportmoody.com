AGENT:
Agent 2

SPRINT:
A2-S28D — Implement Visual Review Quick Wins

GOAL:
Use docs/visual-review-final-issues.md to implement only low-risk visual polish that improves launch quality.

SCOPE:
Small visual fixes only.

ALLOWED FILES:
- src/app/**/*.tsx
- src/components/**/*.tsx
- docs/visual-review-final-issues.md
- agent-work/reports/A2-S28D-implement-visual-p2-quick-wins-report.md

FORBIDDEN FILES:
- middleware*
- .env*
- public/images/**
- visual-review-screenshots/**
- package.json unless absolutely required
- package-lock.json

DO NOT:
- add new features
- rewrite pages
- touch GHL/API
- remove coming-soon
- remove noindex from previews
- add fake content
- add sold data
- deploy

TASKS:
1. Move task to active.
2. Read docs/visual-review-final-issues.md.
3. Implement only small, obvious fixes classified as P2 or quick wins.
4. Do not touch anything that risks launch.
5. If no safe fixes exist, report only.
6. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
7. Write report.
8. Move task to done or blocked.
9. Commit only scoped changes.

FINAL REPORT:
AGENT:
Agent 2
SPRINT:
A2-S28D — Implement Visual Review Quick Wins
STATUS:
Completed / Blocked / No-op
FILES CHANGED:
- file
FIXES MADE:
- fix
VALIDATION:
- lint:
- build:
- smoke:
COMMIT:
hash or none
RECOMMENDED NEXT STEP:
- one clear action
