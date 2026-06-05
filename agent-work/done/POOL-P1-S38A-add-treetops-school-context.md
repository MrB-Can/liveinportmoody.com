TASK:
POOL-P1-S38A — Add Treetops School Context

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Add school context to the Treetops page using owner-provided school information, with clear SD43 verification disclaimer.

OWNER-PROVIDED SCHOOL CONTEXT:
For Treetops / Heritage Mountain:
- Elementary: Aspenwood Elementary and Heritage Mountain Elementary
- Middle: Eagle Mountain Middle
- Secondary: Heritage Woods Secondary

PUBLIC COPY REQUIREMENT:
Do not state this as guaranteed for every unit/address.
Use "school context" or "nearby catchment context."
Include a clear SD43 verification disclaimer.

RECOMMENDED COPY:
"Treetops is in the Heritage Mountain area. Nearby elementary catchment context includes Aspenwood Elementary and Heritage Mountain Elementary. Students from this area commonly continue to Eagle Mountain Middle and then Heritage Woods Secondary.

School assignments vary by exact address and can change. Always verify the assigned elementary, middle, and secondary schools through the SD43 School Locator before relying on school catchment information."

DO NOT:
- claim guaranteed catchment assignment
- add rankings
- add Fraser Institute scores
- add school-quality claims
- add unsupported program claims
- add school boundaries
- change forms or consent
- submit sitemap

ALLOWED FILES:
- src/app/complexes/treetops-101-parkside-drive/page.tsx
- src/app/complexes/**/*.tsx
- src/components/complexes/**/*.tsx
- src/data/**/*.ts
- agent-work/reports/POOL-P1-S38A-add-treetops-school-context-report.md

TASKS:
1. Move task to active.
2. Add a compact "School context" section to the Treetops page.
3. Use the owner-provided school list.
4. Include the SD43 verification disclaimer.
5. Add small visual treatment if available:
   - school/building icon
   - elementary/middle/secondary labels
   - simple three-stage feeder path
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
10. Post-deploy check:
   curl -I https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive
   curl -s https://www.liveinportmoody.com/complexes/treetops-101-parkside-drive | grep -iE "Aspenwood|Heritage Mountain Elementary|Eagle Mountain Middle|Heritage Woods Secondary|SD43" || true
   vercel logs --level error --since 1h
11. Write report.
12. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
SCHOOL CONTEXT ADDED:
- elementary:
- middle:
- secondary:
DISCLAIMER:
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
- school text found:
- error logs:
