TASK:
POOL-P1-S31F — Visual Capture Batch 5 Contact Legal System Pages

TASK_TYPE:
screenshot

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Capture post-launch screenshots for contact, FAQ, legal, and system behavior.

DO NOT:
- edit src/**
- deploy
- submit forms
- change env vars
- commit screenshots unless explicitly instructed

OUTPUT ROOT:
visual-review-screenshots/post-launch-final-review/

BATCH FOLDER:
visual-review-screenshots/post-launch-final-review/batch-05-contact-legal-system/

ROUTES:
Desktop 1440x1200:
- /contact
- /faq
- /privacy
- /terms
- /coming-soon

Mobile 390x844:
- /contact
- /faq
- /privacy
- /terms

SPECIAL CHECKS:
- /accolades should redirect to /meet-us. Capture header response or screenshot only if useful.
- /coming-soon may still exist as a route, but it must not gate the whole site.

TASKS:
1. Move this task to active.
2. Create batch folder.
3. Capture full-page screenshots from https://www.liveinportmoody.com.
4. Do not submit forms.
5. Save with clear filenames.
6. Create batch manifest.
7. Record redirect check:
   curl -I https://www.liveinportmoody.com/accolades
8. Move task to done.
9. Write report:
   agent-work/reports/POOL-P1-S31F-visual-capture-contact-legal-system-pages-report.md

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
SCREENSHOT FOLDER:
ROUTES CAPTURED:
FAILED ROUTES:
REDIRECT CHECKS:
- /accolades:
COMMIT:
none unless report/task movement only
