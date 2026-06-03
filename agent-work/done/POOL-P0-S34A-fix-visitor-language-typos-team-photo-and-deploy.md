TASK:
POOL-P0-S34A — Fix Visitor Language, Typos, Team Photo Sizing, and Deploy

TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASYMTASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASYMTASK_TASK_TASK_TASK_T-fTASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TfiTASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASreeTASK_TASK_TASK_agTASK_TASK_TASK_TASK_TASK_TASK_TASriTASK_TASK_TASK_TASK_TASK_TASK_TASK_TalTASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASYMTASK_esTASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASK_TASYMTASK_TASKhoTASK_TASK_TASK_TASK_TASK_- /TASK_TgsTASK_TASK_TASK_TprTASK_TASK_TASK_TbeTASK_TASK_TASK_TASK_TASK_TAS- TASK_TASK_TASK_TASK_TASK_TASK_TASK_*/TASK_TASK_TASK_TASK_TASK_TASK_TASb/TASK_TASK_TASK_TASK_TAalTASK_TASK_TASK_TASK_Ts.mTASK_TASK_TASk/TASK_TASK_TASK_TASK_TASK_TASK_TA-lTASK_TASK_TASK_TASK_TASK_TndTASK_TASK_TASK_TASK_TASK_T1. Move task to active.

2. Fix /neighbourhoods public status wording:
   - Replace "Research in progress" badge with "Area snapshot"
   - Replace "Neighbourhood research in progress" heading with "More Port Moody neighbourhood snapshots"
   - Replace "Additional neighbourhoods" with "Nearby areas to consider" if it fits the layout
   - Remove public "Verification needed" badge, or replace with a visitor-friendly phrase such as "Nearby area"
   - Do not hide the cards
   - Do not create fake full guides

3. Fix /listings wording:
   - Replace H2 "MLS Reciprocity search is being connected"
   - Preferred H2: "Current Port Moody listings with local context"
   - Preferred body:
     "Ask us about current Port Moody listings and we can help you compare the property, building, neighbourhood, pricing context, and buyer trade-offs before you write."
   - Keep a small compliance note:
     "Active listings are provided through MLS Reciprocity where available. Sold and expired listings are not included."
   - Fix "contextis" to "context is" wherever present.

4. Fix /presales wording:
   - Replace "We are collecting approved sources..."
   - Preferred paragraph:
     "Ask us to verify current Port Moody presale and new development details before you rely on pricing, incentives, timelines, or availability."
   - Button text:
     "Ask about a presale project"
   - Keep compliance-safe verification language, but do not make the page sound unfinished.

5. Fix Meet Us typo:
   - "proprty analysis" -> "property analysis"

6. Fix team photo large-screen behavior:
   - Identify the Image component using /images/team/leilani-paul-team.jpeg on homepage.
   - Check source dimensions if possible.
   - Add explicit width/height if missing.
   - Cap sizes so Next/Image does not request 3840w for a smaller source image.
   - Preserve responsive behavior.
   - Improve crop/object-position if faces are awkwardly cut off.
   - Do not replace the team photo.

7. Run scans for stale wording:
   grep -R "Research in progress\|Neighbourhood research in progress\|Verification needed\|MLS Reciprocity search is being connected\|We are collecting approved sources\|contextis\|proprty" src || true

8. Run validation:
   npm run lint
   npm run build
   npm run crawl:prelaunch

9. Commit scoped files only.

10. Deploy production:
   vercel --prod --force

11. Post-deploy checks:
   curl -I https://www.liveinportmoody.com/neighbourhoods
   curl -I https://www.liveinportmoody.com/listings
   curl -I https://www.liveinportmoody.com/presales
   curl -I https://www.liveinportmoody.com/meet-us
   curl -I https://www.liveinportmoody.com/
   curl -s https://www.liveinportmoody.com/neighbourhoods | grep -i "Research in progress\|Verification needed\|Neighbourhood research in progress" || true
   curl -s https://www.liveinportmoody.com/listings | grep -i "MLS Reciprocity search is being connected\|contextis" || true
   curl -s https://www.liveinportmoody.com/presales | grep -i "We are collecting approved sources" || true
   vercel logs --level error --since 1h

12. Write report.
13. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

COPY FIXES:
- /neighbourhoods:
- /listings:
- /presales:
- /meet-us:
- typo scan result:

TEAM PHOTO:
- component/file:
- source dimensions if known:
- Image width/height:
- sizes value:
- 3840w risk fixed:

VALIDATION:
- lint:
- build:
- crawl:

DEPLOYMENT:
- commit:
- production URL:
- vercel --prod --force used:

POST-DEPLOY:
- /neighbourhoods:
- /listings:
- /presales:
- /meet-us:
- homepage:
- stale text grep:
- error logs:

RECOMMENDED NEXT STEP:
Run focused visual recapture S34B.
