TASK:
POOL-P0-S36E — Add Approved Treetops Photos and Deploy

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Replace the public/internal Treetops photo placeholder/workboard language with real approved Treetops photos supplied by the owner.

OWNER PROVIDED PHOTOS:
Folder:
~/Downloads/~LIMP Website/

Use these files:
- 3903222920.jpeg
- Treetops entrance.webp
- 262931843-b50a3cee-b55e-472f-a157-1f8e2798ec8d.jpg

DO NOT USE:
- c09cf640c5fb52ea21c7e1cba49a208e.jpg

REASON:
The old pool image is too small. Use the newer 800×533 pool image instead.

IMPORTANT RIGHTS CHECK:
Use only the owner-supplied files above. Do not scrape or fetch any other Treetops, listing, brokerage, MLS, or competitor images.

DO NOT:
- render "photos needed"
- render "future photo set"
- render "owner-approved photography only"
- render internal shot lists
- add fake captions
- scrape/download additional images
- use unapproved listing/competitor images
- change forms/consent
- submit sitemap

ALLOWED FILES:
- public/images/complexes/treetops/**
- src/app/complexes/treetops-101-parkside-drive/page.tsx
- src/app/complexes/**/*.tsx
- src/components/complexes/**/*.tsx
- src/data/**/*.ts
- docs/public-copy-hardening-notes.md
- agent-work/reports/POOL-P0-S36E-add-approved-treetops-photos-and-deploy-report.md

TASKS:
1. Move task to active.

2. Confirm the source files exist:
   ls -lh ~/Downloads/~LIMP\ Website/
   ls -lh ~/Downloads/~LIMP\ Website/3903222920.jpeg || true
   ls -lh ~/Downloads/~LIMP\ Website/Treetops\ entrance.webp || true
   ls -lh ~/Downloads/~LIMP\ Website/262931843-b50a3cee-b55e-472f-a157-1f8e2798ec8d.jpg || true

3. Create destination:
   public/images/complexes/treetops/

4. Copy and rename files to clean web names:
   - 3903222920.jpeg -> treetops-driveway-townhomes.jpeg
   - Treetops entrance.webp -> treetops-entrance.webp
   - 262931843-b50a3cee-b55e-472f-a157-1f8e2798ec8d.jpg -> treetops-pool.jpg

5. Optimize if useful:
   - Create WebP variants where safe.
   - Do not upscale images.
   - Use entrance image as primary/hero gallery image.
   - Use driveway/townhomes and pool as secondary gallery images.

6. Update Treetops page/data:
   - Remove the internal photo placeholder/workboard section completely.
   - Add a real photo gallery using approved images.
   - Suggested captions:
     - "Treetops entrance at 101 Parkside Drive"
     - "Internal lane and townhome exteriors at Treetops"
     - "Indoor amenity pool at Treetops"
   - If an image cannot be processed, skip it and report why.

7. Add useful alt text:
   - "Treetops entrance sign at 101 Parkside Drive in Port Moody"
   - "Internal lane and townhome exteriors at Treetops"
   - "Indoor amenity pool at Treetops"

8. Run public-copy scans:
   grep -RniE "photos needed|future photo|future photo set|owner-approved photography|competitor images|listing images|shot list|placeholder|coming soon|verification needed|research in progress|TODO|TBD" src data public || true

9. Run validation:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch

10. Deploy:
   vercel --prod --force

11. Post-deploy checks:
   curl -I https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive
   curl -s https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive | grep -iE "photos needed|future photo|owner-approved photography|competitor images|shot list|placeholder|coming soon|verification needed|research in progress|TODO|TBD" || true
   curl -s https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive | grep -iE "treetops-entrance|treetops-driveway|treetops-pool" || true
   vercel logs --level error --since 1h

12. Write report.
13. Move task to done or blocked.
14. Commit scoped files only.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

SOURCE PHOTOS:
- file / found / dimensions / used yes-no / reason

DESTINATION FILES:
- file / size / format

TREETOPS PAGE:
- placeholder/workboard removed:
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
