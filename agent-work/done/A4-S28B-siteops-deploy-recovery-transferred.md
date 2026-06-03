TRANSFERRED_REASON: This is a Site Ops/app.lgis.ca task and must be run from the Site Ops repo. It is not a LiveInPortMoody launch blocker.

AGENT:
Agent 4

SPRINT:
A4-S28B — Site Ops Deployment Recovery

BLOCKED_REASON (updated 2026-06-01 by Agent 1, S29B cleanup):
Original blocker — active-task conflict around visual-review-screenshots/** — is now resolved.
All visual-screenshot tasks (A2-S28B, A2-S28C, A2-S28D, A2-S28F) are done.
New blocker: This task is about a separate project (app.lgis.ca / Site Ops repo).
It cannot be executed from the liveinportmoody.com working directory.
To unblock: run this task from the Site Ops project directory as a standalone sprint.

GOAL:
Resolve the Site Ops Vercel UNKNOWN deployment state and get app.lgis.ca onto the latest Site Ops commit if possible.

PROJECT:
Site Ops / app.lgis.ca

SCOPE:
Site Ops only.

ALLOWED FILES:
- Site Ops files only if a deploy-blocking issue is found
- agent-work/reports/A4-S28B-siteops-deploy-recovery-report.md if this repo contains agent-work

FORBIDDEN FILES:
- LiveInPortMoody product pages
- src/app/** for liveinportmoody.com
- public/images/**
- visual-review-screenshots/**
- .env*

DO NOT:
- change LiveInPortMoody.com
- change auth
- add write endpoints
- add DB persistence
- expose secrets
- claim deploy success unless Vercel returns READY
- keep retrying forever

CONTEXT:
Latest Site Ops commit:
d70976b5a80c4231e718bcaec3fa36d960735d4f

Previous deployment attempts stuck UNKNOWN:
- https://lgis-g0jk0ghb2-paul-1527s-projects.vercel.app
- https://lgis-ep3g2gdbm-paul-1527s-projects.vercel.app

TASKS:
1. Move this task from backlog to active.
2. Inspect:
   git status
   git log --oneline -10
   npm run build
3. Diagnose Vercel UNKNOWN:
   - deployment logs if accessible
   - whether build completed
   - whether deployment is still building
   - whether deployment failed silently
   - whether CLI is returning before READY
4. If repo is clean and build passes:
   - retry production deploy once
   - wait/poll until READY or FAILED
   - do not alias if not READY
5. After READY:
   - verify https://app.lgis.ca/infra/liveinportmoody redirects to /sign-in
   - verify /api/liveinportmoody/admin/overview redirects to /sign-in
   - verify app version/status if visible
6. If still UNKNOWN:
   - stop
   - write exact manual next step
7. Write report to:
   agent-work/reports/A4-S28B-siteops-deploy-recovery-report.md
8. Move task to done or blocked.

VALIDATION:
- npm run build
- targeted lint if files changed
- auth smoke
- admin endpoint smoke

FINAL REPORT FORMAT:
AGENT:
Agent 4

SPRINT:
A4-S28B — Site Ops Deployment Recovery

STATUS:
Completed / Blocked

COMMIT:
hash or none

DEPLOYED:
yes/no

DEPLOYMENT:
- URL:
- production:
- Vercel status:

VALIDATION:
- build:
- auth smoke:
- admin endpoint smoke:

BLOCKER IF ANY:
- blocker

RECOMMENDED NEXT STEP:
- one clear action
