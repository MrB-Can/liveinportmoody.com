TASK:
POOL-P0-S30A — Launch Reset Code and Visual Review

TASK_TYPE:
qa

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Reset the launch state and determine exactly what remains to deploy before removing coming-soon.

CONTEXT:
Owner has confirmed:
- GHL live form test passed.
- Privacy/terms are approved.
- Visual-fix stack was deployed and validated.
- LeadForm accessibility fix was committed later as ae83bf0 and may not be deployed yet.
- Coming-soon removal has not yet been executed.

DO NOT:
- deploy
- remove coming-soon
- change env vars
- edit src/**
- submit more live forms
- create new feature work
- commit screenshots
- touch Site Ops/app.lgis.ca

ALLOWED FILES:
- docs/launch-reset-code-visual-review.md
- agent-work/reports/POOL-P0-S30A-launch-reset-code-visual-review-report.md
- visual-review-screenshots/** only for new screenshots if needed

TASKS:

1. Move this task to active.

2. Run baseline checks:
   git status --short
   git log --oneline -20
   npm run agent:status
   npm run agent:conflicts

3. Determine production deployment state:
   - Find the latest production deploy report.
   - Identify the commit deployed to production.
   - Compare local HEAD to deployed commit.
   - List all commits after the deployed commit.
   - Highlight any src/** commits not yet deployed.

4. Specifically check:
   - Is ae83bf0 present locally?
   - Is ae83bf0 deployed to production?
   - Does src/components/lead-form.tsx differ from production HEAD?
   - Are there any uncommitted src/** changes?

5. Run local validation:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch

6. Review code areas most likely to affect launch:
   - middleware coming-soon logic
   - src/components/lead-form.tsx
   - src/app/api/lead/route.ts
   - src/lib/site.ts
   - sitemap/robots generation
   - /privacy and /terms pages
   - /contact
   - /buildings mobile fix files

7. Visual review:
   - Use the latest visual-review screenshots if present.
   - Confirm whether the targeted /buildings fix screenshots are acceptable.
   - If needed, capture only:
     mobile /buildings
     desktop /buildings
     mobile /contact
     desktop /contact
     public-gate /
     public-gate /contact
   - Do not run a full-site recapture unless there is a clear reason.

8. Create:
   docs/launch-reset-code-visual-review.md

   Include:
   - Current production commit
   - Current local HEAD
   - Undeployed commits
   - Whether any undeployed src/** changes remain
   - Whether deploy is needed before coming-soon removal
   - Whether visual state is acceptable
   - Whether GHL is complete
   - Whether privacy/terms are approved
   - Whether coming-soon removal is now allowed

9. Write report:
   agent-work/reports/POOL-P0-S30A-launch-reset-code-visual-review-report.md

10. Move this task to done or blocked.

11. Commit only docs/report/task movement if appropriate.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

PRODUCTION:
- production URL:
- deployed commit:
- local HEAD:
- commits ahead of production:

CODE REVIEW:
- uncommitted src/** changes:
- undeployed src/** commits:
- leadform accessibility deployed: yes/no/unknown
- middleware safe:
- API lead route safe:
- sitemap/robots safe:

VALIDATION:
- lint:
- build:
- smoke:
- crawl:

VISUAL REVIEW:
- screenshots reviewed:
- /buildings mobile:
- /contact:
- public gate:

LAUNCH READINESS:
- GHL passed:
- privacy/terms approved:
- coming-soon removal allowed: yes/no

WHAT REMAINS TO DEPLOY:
- item

RECOMMENDED NEXT STEP:
- one clear action
