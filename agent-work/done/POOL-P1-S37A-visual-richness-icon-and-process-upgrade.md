TASK:
POOL-P1-S37A — Visual Richness Icon and Process Upgrade

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

WAIT CONDITION:
Do not start until S36I is done and Treetops mobile overflow is fixed.

GOAL:
Make key pages less text-heavy by adding real visual elements: icons, step flows, timelines, connector lines, visual badges, and simple process diagrams. Plain bordered text-card grids do not count as graphics.

ALLOWED:
- lucide-react icon library
- inline SVG
- CSS shapes/dividers/connectors
- owner-supplied or properly licensed images if already available

NOT ALLOWED:
- generated images
- fake local photos
- unlicensed downloaded images
- fake reviews
- fake awards
- fake events
- fake businesses
- fake listings
- unsupported stats or rankings

ALLOWED FILES:
- package.json
- package-lock.json
- src/components/**/*.tsx
- src/app/buy/page.tsx
- src/app/sell/page.tsx
- src/app/listings/page.tsx
- src/app/presales/page.tsx
- src/app/neighbourhoods/page.tsx
- src/app/buildings/page.tsx
- src/app/complexes/page.tsx
- src/app/resources/page.tsx
- src/app/contact/page.tsx
- src/app/meet-us/page.tsx
- src/app/about/page.tsx
- src/app/raving-fans/page.tsx
- docs/s37-visual-richness-upgrade-notes.md
- agent-work/reports/POOL-P1-S37A-visual-richness-icon-and-process-upgrade-report.md

TASKS:
1. Move task to active.

2. Install lucide-react if not already installed.

3. Create reusable visual components:
   - IconBadge
   - StepFlow
   - TimelineStrip
   - DecisionFramework
   - ChecklistPanel
   - QuickFactsIconRow
   - CTAProcessPanel

4. Upgrade /buy:
   - Add buyer decision flow with icons, step numbers, and connector line.

5. Upgrade /sell:
   - Add seller preparation timeline with icons and step numbers.

6. Upgrade /listings:
   - Add listing due-diligence lens with icons.

7. Upgrade /presales:
   - Add presale verification path with icons and stronger process treatment.

8. Upgrade /neighbourhoods:
   - Add icons to lifestyle filters and decision framework.

9. Upgrade /buildings and /complexes:
   - Add research-check icon rows or checklist panels.

10. Upgrade /resources:
   - Add glossary category icons and term badges.

11. Upgrade /contact:
   - Add “what happens next” 3-step visual.

12. Upgrade /meet-us or /about:
   - Add a role/approach visual using icons.

13. Keep the design quiet, editorial, and brand-consistent.
    Do not make it look like a generic SaaS template.

14. Run:
    npm run lint
    npm run build
    npm run smoke:prelaunch
    npm run crawl:prelaunch

15. Commit scoped files only.

16. Push:
    git pull --rebase origin main
    git push origin main

17. Deploy:
    vercel --prod --force

18. Post-deploy checks:
    curl -I https://www.liveinportmoody.com/buy
    curl -I https://www.liveinportmoody.com/sell
    curl -I https://www.liveinportmoody.com/listings
    curl -I https://www.liveinportmoody.com/presales
    curl -I https://www.liveinportmoody.com/neighbourhoods
    curl -I https://www.liveinportmoody.com/resources
    curl -I https://www.liveinportmoody.com/contact
    curl -I https://www.liveinportmoody.com/meet-us
    vercel logs --level error --since 1h

19. Write report.
20. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

COMPONENTS CREATED:
- item

PAGES UPDATED:
- /buy:
- /sell:
- /listings:
- /presales:
- /neighbourhoods:
- /buildings:
- /complexes:
- /resources:
- /contact:
- /meet-us or /about:
- /raving-fans:

VISUAL ELEMENTS ADDED:
- icons:
- step numbers:
- connector lines:
- timelines:
- badges:
- process diagrams:

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
- route checks:
- error logs:

RECOMMENDED NEXT STEP:
Run visual recapture for upgraded pages.
