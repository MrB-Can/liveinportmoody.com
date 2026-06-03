TASK:
POOL-P1-S31H — Zip Final Visual Review Package

TASK_TYPE:
screenshot-packaging

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until S31B, S31C, S31D, S31E, S31F, and S31G are all done.

GOAL:
Create one zip file containing all post-launch visual review screenshots so the owner can upload it to ChatGPT.

DO NOT:
- edit src/**
- deploy
- recapture pages unless a batch is missing
- commit screenshot files unless explicitly instructed

INPUT ROOT:
visual-review-screenshots/post-launch-final-review/

OUTPUT ZIP:
visual-review-screenshots/post-launch-final-review.zip

ALSO CREATE STABLE COPY:
visual-review-screenshots/LIPM-post-launch-final-visual-review.zip

TASKS:
1. Move this task to active.
2. Confirm all six batch folders exist:
   - batch-01-core
   - batch-02-buyer-seller
   - batch-03-research
   - batch-04-local-trust
   - batch-05-contact-legal-system
   - batch-06-header-footer-logo
3. Confirm each batch has at least one screenshot and a manifest.
4. Create:
   visual-review-screenshots/post-launch-final-review/MANIFEST.md
5. Zip the folder:
   visual-review-screenshots/post-launch-final-review.zip
6. Copy zip to:
   visual-review-screenshots/LIPM-post-launch-final-visual-review.zip
7. Write report:
   agent-work/reports/POOL-P1-S31H-zip-final-visual-review-package-report.md
8. Move task to done.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
BATCHES INCLUDED:
- batch
SCREENSHOT COUNT:
ZIP:
- visual-review-screenshots/LIPM-post-launch-final-visual-review.zip
FAILED/MISSING:
- item
COMMIT:
none unless report/task movement only
RECOMMENDED NEXT STEP:
Upload visual-review-screenshots/LIPM-post-launch-final-visual-review.zip to ChatGPT.
