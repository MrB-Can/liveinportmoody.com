TASK:
POOL-P0-S41B — Review S39 Visuals and Production State

TASK_TYPE:
review-only

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

WAIT CONDITION:
Do not start until S41A is done.

GOAL:
Review the S39 visual package and production pages carefully. Identify real visual issues and create targeted fix recommendations. Do not assume a global CSS failure unless production confirms it.

AUTONOMOUS AGENT OPERATING RULES:
1. Do not do any task work unless this task file is physically in agent-work/active.
2. Move exactly one task from backlog to active before doing work.
3. Run npm run agent:conflicts immediately after claiming.
4. Do not edit src/** in this task.
5. Do not deploy in this task.
6. Do not create broad panic tasks.
7. Review production before classifying a screenshot issue as a live issue.
8. Commit and push only scoped docs/report/task files.

INPUTS:
- visual-review-screenshots/S39-visual-richness.zip
- visual-review-screenshots/s39-visual-richness/
- agent-work/reports/*S39*.md

PAGES TO REVIEW:
- /complexes/treetops-101-parkside-drive
- /contact
- /meet-us
- /about
- /raving-fans
- /featured-businesses
- /events
- /local-life
- /local-insights
- /buildings
- /complexes
- /neighbourhoods
- /resources

DO NOT:
- edit src/**
- deploy
- submit sitemap
- add icons
- add content
- run new feature work

TASKS:
1. Move this task to active.

2. Run:
   npm run agent:status
   npm run agent:conflicts
   git status --short

3. Review S39 screenshots visually.

4. Check production route health:
   curl -I https://www.liveinportmoody.com/buildings
   curl -I https://www.liveinportmoody.com/complexes
   curl -I https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive
   curl -I https://www.liveinportmoody.com/local-life
   curl -I https://www.liveinportmoody.com/raving-fans
   curl -I https://www.liveinportmoody.com/contact

5. Check CSS asset loading on production:
   curl -s https://www.liveinportmoody.com/buildings | grep -oE '/_next/static/css/[^"]+' | head
   For each CSS URL found, confirm HTTP 200.

6. Classify issues:
   - public blocker
   - visual polish fix
   - capture artifact
   - acceptable
   - false positive

7. Specifically inspect for:
   - icons too large
   - icons too dense
   - icons not styled
   - pages still too text-heavy
   - mobile overflow
   - broken nav
   - blank pages
   - excessive CTA/forms
   - public internal/workboard wording
   - pages captured from wrong base URL
   - screenshots taken before CSS loaded

8. Create:
   docs/s41-s39-visual-review-and-production-state.md

9. If fixes are needed, create specific follow-up tasks in backlog:
   - one task per fix area
   - do not create broad vague tasks
   - include allowed files
   - include validation
   - include deploy instructions only if code changes public pages

10. Write report:
   agent-work/reports/POOL-P0-S41B-review-s39-visuals-and-production-state-report.md

11. Move this task to done.

12. Commit and push scoped docs/report/task files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

PRODUCTION CHECKS:
- route / status
- css assets found:
- css assets HTTP 200 yes/no:

S39 VISUAL VERDICT:
- acceptable yes/no:
- reason:

REAL ISSUES:
- page / issue / severity / suggested fix

CAPTURE ARTIFACTS:
- item / reason

NOT ISSUES:
- item / reason

FOLLOW-UP TASKS CREATED:
- task / purpose

GIT STATUS:
- clean yes/no

COMMIT:
PUSH:
