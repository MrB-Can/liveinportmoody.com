TASK:
POOL-P0-S36D — Final Queue and Launch Readiness Check

TASK_TYPE:
qa-report

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until S36A, S36B, and S36C are done.

GOAL:
Confirm there are no engineering blockers, no public-copy blockers, and only human follow-up tasks remain.

DO NOT:
- edit src/**
- deploy
- submit sitemap

TASKS:
1. Move task to active.
2. Run:
   npm run agent:status
   npm run agent:conflicts
   git status --short
   git log --oneline -10
3. Confirm:
   - no active code tasks
   - no blocked code tasks
   - S36 public copy audit passed
   - S36 recapture package exists
   - sitemap is ready for human submission
4. Create or update:
   docs/final-launch-readiness-state.md
5. Write report:
   agent-work/reports/POOL-P0-S36D-final-queue-and-launch-readiness-check-report.md
6. Move task to done.
7. Commit docs/report/task movement only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
QUEUE:
- backlog:
- active:
- blocked:
- done:
CODE BLOCKERS:
PUBLIC COPY BLOCKERS:
VISUAL RECAPTURE:
HUMAN TASKS REMAINING:
- sitemap:
- consent:
- photos:
- proof:
GIT STATUS:
FINAL RECOMMENDATION:
COMMIT:
