AGENT:
Agent 5

SPRINT:
A5-S28B — Gemini Performance and Image Audit

GOAL:
Audit the site for obvious performance/image issues before launch. Make only tiny safe fixes if obvious.

SCOPE:
Performance/image review.

ALLOWED FILES:
- docs/performance-image-audit.md
- agent-work/reports/A5-S28B-gemini-performance-and-image-audit-report.md
- src/app/**/*.tsx only for tiny safe image/layout fixes
- src/components/**/*.tsx only for tiny safe image/layout fixes

FORBIDDEN FILES:
- public/images/team/**
- .env*
- middleware*
- visual-review-screenshots/**
- package.json unless no alternative

DO NOT:
- deploy
- add fake images
- replace missing Leilani photo
- remove coming-soon
- remove noindex
- do broad refactors

TASKS:
1. Move task to active.
2. Inspect built pages/assets for:
   - oversized images
   - missing alt text
   - poor mobile image behavior
   - obvious layout shift risk
   - unused huge screenshot artifacts
3. Create docs/performance-image-audit.md.
4. Make only tiny safe fixes if needed.
5. Run lint/build if code changed.
6. Write report, move task, commit scoped files.

FINAL REPORT:
AGENT:
Agent 5
SPRINT:
A5-S28B — Gemini Performance and Image Audit
STATUS:
Completed / Blocked
ISSUES:
- issue
FIXES:
- fix
VALIDATION:
- lint:
- build:
COMMIT:
hash or none
