TASK:
POOL-P1-S29Z — Resolve Site Ops Blocked Task From LiveInPortMoody Queue

TASK_TYPE:
queue-cleanup

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Resolve the blocked Site Ops task inside the LiveInPortMoody queue:
- A4-S28B-siteops-deploy-recovery.md

CONTEXT:
This task is blocked because it belongs to the separate Site Ops / app.lgis.ca project, not the liveinportmoody.com repo.
It should not remain as a blocker in the LiveInPortMoody launch queue.

DO NOT:
- deploy Site Ops
- edit src/**
- edit app.lgis.ca files
- remove coming-soon
- change env vars
- touch production

ALLOWED FILES:
- agent-work/blocked/A4-S28B-siteops-deploy-recovery.md
- agent-work/done/A4-S28B-siteops-deploy-recovery-transferred.md
- docs/siteops-followup-task.md
- agent-work/reports/POOL-P1-S29Z-resolve-siteops-blocked-task-report.md

TASKS:
1. Move this task to active.
2. Confirm blocked task exists:
   agent-work/blocked/A4-S28B-siteops-deploy-recovery.md
3. Add TRANSFERRED_REASON header:
   "This is a Site Ops/app.lgis.ca task and must be run from the Site Ops repo. It is not a LiveInPortMoody launch blocker."
4. Move it to:
   agent-work/done/A4-S28B-siteops-deploy-recovery-transferred.md
5. Create docs/siteops-followup-task.md with:
   - original task name
   - reason transferred
   - what repo it belongs in
   - what to do later from Site Ops project
   - note: not a LiveInPortMoody launch blocker
6. Run:
   npm run agent:status
   npm run agent:conflicts
7. Write report.
8. Move this task to done.
9. Commit only docs/agent-work files.

FINAL REPORT:
AGENT:
TASK:
STATUS:
SITEOPS TASK STATUS:
- transferred/done/blocked

FILES CHANGED:
- file

VALIDATION:
- agent:status:
- agent:conflicts:

COMMIT:
hash or none

RECOMMENDED NEXT STEP:
Run Site Ops recovery later from the app.lgis.ca repo if still needed.
