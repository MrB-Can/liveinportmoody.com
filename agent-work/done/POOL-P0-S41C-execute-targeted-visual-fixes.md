TASK:
POOL-P0-S41C — Execute Targeted Visual Fixes

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes if public code/content/assets change

WAIT CONDITION:
Do not start until S41B is done.

GOAL:
Apply only the targeted fixes identified by S41B. Do not add new features. Do not broaden the scope. If S41B identified no code fixes, complete this task as no-op with a report.

AUTONOMOUS AGENT OPERATING RULES:
1. Do not do any task work unless this task file is physically in agent-work/active.
2. Move exactly one task from backlog to active before doing work.
3. Run npm run agent:conflicts immediately after claiming.
4. Read docs/s41-s39-visual-review-and-production-state.md before editing.
5. Edit only files needed for the S41B targeted fixes.
6. Do not invent content.
7. Do not use generated images.
8. Downloaded/licensed/owner-approved images are allowed only if already explicitly approved in the task.
9. Icon libraries are allowed.
10. Plain bordered text-card grids do not count as graphics.
11. Commit scoped files only.
12. Push after commit.
13. Deploy only if public code/content/assets changed.

INPUT:
- docs/s41-s39-visual-review-and-production-state.md
- agent-work/reports/POOL-P0-S41B-review-s39-visuals-and-production-state-report.md

DO NOT:
- add unrelated icons
- add unrelated content
- refactor the site broadly
- change forms/consent
- submit sitemap
- touch HUMAN tasks

ALLOWED FILES:
- src/app/**/*.tsx
- src/components/**/*.tsx
- src/data/**/*.ts
- src/lib/**/*.ts
- public/images/**
- package.json
- package-lock.json
- docs/s41-targeted-visual-fixes.md
- agent-work/reports/POOL-P0-S41C-execute-targeted-visual-fixes-report.md

TASKS:
1. Move this task to active.

2. Read S41B docs/report.

3. Determine fix scope:
   - If no code fixes are needed, write a no-op report and move task to done.
   - If code fixes are needed, list the exact pages/components to change before editing.

4. Apply only S41B-targeted fixes.

5. Required checks for any changed page:
   - no generated images
   - no fake content
   - no public internal/workboard language
   - icons are sized intentionally
   - page remains readable on mobile
   - no obvious horizontal overflow

6. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch

7. Commit scoped files only.

8. Push:
   git pull --rebase origin main
   git push origin main

9. If public code/content/assets changed, deploy:
   vercel --prod --force

10. If deployed, verify affected routes:
   curl -I https://www.liveinportmoody.com/buildings
   curl -I https://www.liveinportmoody.com/complexes
   curl -I https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive
   curl -I https://www.liveinportmoody.com/local-life
   curl -I https://www.liveinportmoody.com/raving-fans
   curl -I https://www.liveinportmoody.com/contact
   vercel logs --level error --since 1h

11. Create:
   docs/s41-targeted-visual-fixes.md

12. Write report:
   agent-work/reports/POOL-P0-S41C-execute-targeted-visual-fixes-report.md

13. Move task to done or blocked.

14. Commit and push report/task movement if not already included.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

FIX SCOPE FROM S41B:
- item

FILES CHANGED:
- file / change

NO-OP:
- yes/no
- reason if yes

VALIDATION:
- lint:
- build:
- smoke:
- crawl:

DEPLOYMENT:
- needed yes/no:
- commit:
- production URL:
- vercel --prod --force used:

POST-DEPLOY:
- affected route checks:
- error logs:

GIT STATUS:
- clean yes/no

COMMIT:
PUSH:
