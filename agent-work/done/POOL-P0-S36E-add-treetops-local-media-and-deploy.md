TASK:
POOL-P0-S36E — Add Treetops Local Media and Deploy

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Add the owner-supplied local Treetops media files to the Treetops complex page and remove the old public internal photo-planning block.

LOCAL MEDIA SOURCE FOLDER:
~/Downloads/~LIMP Website/

USE ONLY THESE LOCAL FILES:
- 3903222920.jpeg
- Treetops entrance.webp
- 262931843-b50a3cee-b55e-472f-a157-1f8e2798ec8d.jpg

DO NOT USE:
- c09cf640c5fb52ea21c7e1cba49a208e.jpg

DO NOT:
- add any media beyond the three local files listed above
- fetch media from the internet
- add placeholder gallery content
- render internal planning notes
- render photo request notes
- render future-photo notes
- change forms
- change consent behavior
- submit sitemap

ALLOWED FILES:
- public/images/complexes/treetops/**
- src/app/complexes/treetops-101-parkside-drive/page.tsx
- src/app/complexes/**/*.tsx
- src/components/complexes/**/*.tsx
- src/data/**/*.ts
- agent-work/reports/POOL-P0-S36E-add-treetops-local-media-and-deploy-report.md

TASKS:
1. Move this task to active.

2. Confirm source files:
   ls -lh ~/Downloads/~LIMP\ Website/3903222920.jpeg
   ls -lh ~/Downloads/~LIMP\ Website/Treetops\ entrance.webp
   ls -lh ~/Downloads/~LIMP\ Website/262931843-b50a3cee-b55e-472f-a157-1f8e2798ec8d.jpg

3. Create destination folder:
   mkdir -p public/images/complexes/treetops

4. Copy files:
   cp ~/Downloads/~LIMP\ Website/3903222920.jpeg public/images/complexes/treetops/treetops-driveway-townhomes.jpeg
   cp ~/Downloads/~LIMP\ Website/Treetops\ entrance.webp public/images/complexes/treetops/treetops-entrance.webp
   cp ~/Downloads/~LIMP\ Website/262931843-b50a3cee-b55e-472f-a157-1f8e2798ec8d.jpg public/images/complexes/treetops/treetops-pool.jpg

5. Add these images to the Treetops page/gallery:
   - treetops-entrance.webp
   - treetops-driveway-townhomes.jpeg
   - treetops-pool.jpg

6. Suggested captions:
   - Treetops entrance at 101 Parkside Drive
   - Internal lane and townhome exteriors at Treetops
   - Indoor amenity pool at Treetops

7. Suggested alt text:
   - Treetops entrance sign at 101 Parkside Drive in Port Moody
   - Internal lane and townhome exteriors at Treetops
   - Indoor amenity pool at Treetops

8. Remove the old public photo-planning block completely.
   Remove visible text such as:
   - photos needed
   - future photo set
   - owner-approved photography
   - photo request notes
   - internal shot list wording

9. Run:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch

10. Commit scoped files only.

11. Deploy:
   vercel --prod --force

12. Post-deploy checks:
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

SOURCE FILES:
- file / found / copied yes-no

DESTINATION FILES:
- file / size

TREETOPS PAGE:
- old photo-planning block removed:
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
- image references found:
- error logs:
