TASK:
POOL-P0-S36E — Wire Treetops Local Assets and Deploy

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Use the existing local Treetops asset files already present in the repo and remove the visible public planning/workboard block from the Treetops page.

LOCAL ASSETS ALREADY PRESENT:
- public/images/complexes/treetops/treetops-driveway-townhomes.jpeg
- public/images/complexes/treetops/treetops-entrance.webp
- public/images/complexes/treetops/treetops-pool.jpg

DO NOT:
- fetch any files
- add external assets
- discuss source/rights
- render planning notes
- render future-state notes
- render placeholder gallery copy
- change forms
- change consent behavior
- submit sitemap

ALLOWED FILES:
- public/images/complexes/treetops/**
- src/app/complexes/treetops-101-parkside-drive/page.tsx
- src/app/complexes/**/*.tsx
- src/components/complexes/**/*.tsx
- src/data/**/*.ts
- agent-work/reports/POOL-P0-S36E-wire-treetops-local-assets-and-deploy-report.md

TASKS:
1. Move this task to active.

2. Confirm local assets:
   ls -lh public/images/complexes/treetops/

3. Inspect the Treetops page and related data/components.

4. Remove the visible public planning/workboard section completely.
   Remove public text such as:
   - photos needed
   - future photo set
   - photo set
   - owner-approved photography
   - shot list
   - placeholder
   - coming soon
   - verification needed
   - research in progress
   - TODO
   - TBD

5. Add or confirm a real Treetops gallery using only:
   - /images/complexes/treetops/treetops-entrance.webp
   - /images/complexes/treetops/treetops-driveway-townhomes.jpeg
   - /images/complexes/treetops/treetops-pool.jpg

6. Suggested visible captions:
   - Treetops entrance at 101 Parkside Drive
   - Internal lane and townhome exteriors at Treetops
   - Indoor amenity pool at Treetops

7. Suggested alt text:
   - Treetops entrance sign at 101 Parkside Drive in Port Moody
   - Internal lane and townhome exteriors at Treetops
   - Indoor amenity pool at Treetops

8. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch

9. Commit scoped files only.

10. Push:
   git pull --rebase origin main
   git push origin main

11. Deploy:
   vercel --prod --force

12. Verify:
   curl -I https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive

   curl -s https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive | grep -iE "photos needed|future photo|photo set|owner-approved photography|shot list|placeholder|coming soon|verification needed|research in progress|TODO|TBD" || true

   curl -s https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive | grep -iE "treetops-entrance|treetops-driveway|treetops-pool" || true

   vercel logs --level error --since 1h

13. Write report.
14. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

LOCAL ASSETS:
- file / found yes-no

TREETOPS PAGE:
- planning block removed:
- gallery added:
- captions:
- alt text:

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
- Treetops status:
- stale text grep:
- asset references found:
- error logs:
