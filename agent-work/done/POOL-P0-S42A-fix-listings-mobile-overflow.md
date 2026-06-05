TASK:
POOL-P0-S42A — Fix Listings Mobile Overflow

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Fix the only remaining mobile overflow detected in the S41 final recapture: /listings has 20px overflow at 390px viewport.

AUTONOMOUS AGENT OPERATING RULES:
1. Do not do any work unless this task file is physically in agent-work/active.
2. Move this task from backlog to active before editing.
3. Run npm run agent:conflicts immediately after claiming.
4. Edit only the minimum needed files.
5. Do not add new content.
6. Do not change form behavior, CRM behavior, or consent defaults.
7. Commit scoped files only.
8. Push after commit.
9. Deploy after validation passes.

CONTEXT:
S41 final visual recapture manifest shows:
- /listings mobile overflow: 20px
- all other checked mobile routes: 0px overflow

DO NOT:
- add icons
- add content
- refactor the page broadly
- change form fields
- change consent behavior
- submit sitemap

ALLOWED FILES:
- src/app/listings/page.tsx
- src/components/listings/**/*.tsx
- src/components/**/*.tsx
- agent-work/reports/POOL-P0-S42A-fix-listings-mobile-overflow-report.md
- docs/s42-listings-mobile-overflow-fix.md

TASKS:
1. Move task to active.

2. Run:
   npm run agent:status
   npm run agent:conflicts
   git status --short

3. Inspect /listings mobile layout at 390px.
   Find the element causing:
   documentElement.scrollWidth - documentElement.clientWidth = 20px

4. Likely fixes:
   - add min-w-0 to grid/flex children
   - add max-w-full to cards/forms
   - add w-full to inputs/selects/textareas
   - contain overflow-x-auto areas inside max-w-full wrappers
   - avoid viewport-width classes that exceed container width

5. Confirm after fix:
   - /listings at 390px has clientWidth === scrollWidth, or overflow <= 1px
   - no visual clipping
   - form still works visually
   - no horizontal page scroll

6. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch

7. Commit scoped files only.

8. Push:
   git pull --rebase origin main
   git push origin main

9. Deploy:
   vercel --prod --force

10. Post-deploy checks:
   curl -I https://www.liveinportmoody.com/listings
   vercel logs --level error --since 1h

11. Write:
   docs/s42-listings-mobile-overflow-fix.md

12. Write report:
   agent-work/reports/POOL-P0-S42A-fix-listings-mobile-overflow-report.md

13. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

ROOT CAUSE:
- element/component:
- cause:

FIX:
- files changed:
- classes/layout changes:

MOBILE WIDTH:
- before:
- after:

VALIDATION:
- lint:
- build:
- smoke:
- crawl:

DEPLOYMENT:
- commit:
- production URL:
- vercel --prod --force used:

POST-DEPLOY:
- /listings status:
- error logs:

COMMIT:
PUSH:
