TASK:
POOL-P1-S32I — Independent Technical and Accessibility Review

TASK_TYPE:
review-only

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Review technical quality, accessibility risks, performance risks, image handling, and basic UX reliability.

DO NOT:
- edit src/**
- deploy
- make code changes
- change configs

REVIEW SOURCES:
- Live site
- Existing code
- Screenshot package
- Existing validation reports

TASKS:
1. Move task to active.
2. Review:
   - image sizes and usage
   - logo rendering
   - alt text
   - form labels
   - contrast concerns
   - keyboard/nav concerns if visible from code
   - oversized pages
   - crawl warnings
   - stale scripts like smoke:prelaunch expecting gated pages
3. Identify tasks that should become technical fixes.
4. Write report:
   agent-work/reports/POOL-P1-S32I-independent-technical-accessibility-review-report.md
5. Move task to done.
6. Commit report/task movement only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
TECHNICAL VERDICT:
ACCESSIBILITY VERDICT:
P0 ISSUES:
- file/page / issue / suggested fix
P1 ISSUES:
- file/page / issue / suggested fix
P2 ISSUES:
- file/page / issue / suggested fix
VALIDATION SCRIPT ISSUES:
IMAGE/PERFORMANCE ISSUES:
ACCESSIBILITY NOTES:
COMMIT:
