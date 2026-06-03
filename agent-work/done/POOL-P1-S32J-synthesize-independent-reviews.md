TASK:
POOL-P1-S32J — Synthesize Independent Review Reports

TASK_TYPE:
report-only

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until S32D, S32E, S32F, S32G, S32H, and S32I are all done.

GOAL:
Read all independent review reports and create one prioritized action plan.

DO NOT:
- edit src/**
- deploy
- make code changes
- invent findings not present in reports

INPUT REPORTS:
- agent-work/reports/POOL-P1-S32D-independent-visual-ux-review-report.md
- agent-work/reports/POOL-P1-S32E-independent-mobile-nav-form-review-report.md
- agent-work/reports/POOL-P1-S32F-independent-conversion-funnel-review-report.md
- agent-work/reports/POOL-P1-S32G-independent-seo-llm-indexing-review-report.md
- agent-work/reports/POOL-P1-S32H-independent-content-trust-review-report.md
- agent-work/reports/POOL-P1-S32I-independent-technical-accessibility-review-report.md

TASKS:
1. Move task to active.
2. Read all input reports.
3. De-duplicate findings.
4. Separate:
   - must fix before sitemap submission
   - should fix after sitemap submission
   - content owner-input needed
   - safe to ignore
5. Create:
   docs/s32-independent-review-synthesis.md
6. Write report:
   agent-work/reports/POOL-P1-S32J-synthesize-independent-reviews-report.md
7. Move task to done.
8. Commit docs/report/task movement only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
INPUT REPORTS REVIEWED:
P0 FIXES:
- issue / source reports / suggested task
P1 FIXES:
- issue / source reports / suggested task
P2 FIXES:
- issue / source reports / suggested task
OWNER INPUT ITEMS:
SAFE TO IGNORE:
SITEMAP SUBMISSION RECOMMENDATION:
COMMIT:
