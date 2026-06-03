TASK:
POOL-P1-S30I — Post-Launch Verification and Indexing Prep

TASK_TYPE:
qa-siteops

CLAIMABLE_BY:
ANY

DEPLOYMENT:
not authorized

GOAL:
Run final public-site verification after logo/cleanup deploy and prepare indexing submission steps.

DO NOT:
- edit src/**
- deploy
- change DNS
- submit fake listings
- create content
- modify production settings unless explicitly required by existing docs

ALLOWED FILES:
- docs/post-launch-verification-results.md
- docs/search-indexing-submission-notes.md
- agent-work/reports/POOL-P1-S30I-post-launch-verification-and-indexing-report.md

TASKS:
1. Move this task to active.
2. Confirm S30G has completed and deployed. If not, block waiting for S30G.
3. Run public checks:
   curl -I https://www.liveinportmoody.com/
   curl -I https://www.liveinportmoody.com/contact
   curl -I https://www.liveinportmoody.com/meet-us
   curl -I https://www.liveinportmoody.com/buildings
   curl -I https://www.liveinportmoody.com/neighbourhoods
   curl -I https://www.liveinportmoody.com/accolades
   curl -s https://www.liveinportmoody.com/robots.txt | head -50
   curl -s https://www.liveinportmoody.com/sitemap.xml | head -50

4. Confirm:
   - homepage public
   - contact public
   - meet-us public with team photo
   - buildings public
   - neighbourhoods public
   - /accolades redirects
   - robots allows crawling
   - sitemap is available
   - sitemap does not contain /accolades
   - no coming-soon gate
   - no obvious placeholder/incomplete text on key pages

5. Run:
   npm run crawl:prelaunch

6. Scan Vercel logs:
   vercel logs --level error --since 1h

7. Create docs/post-launch-verification-results.md.

8. Create docs/search-indexing-submission-notes.md with:
   - submit sitemap URL:
     https://www.liveinportmoody.com/sitemap.xml
   - request indexing for:
     /
     /buy
     /sell
     /contact
     /meet-us
     /buildings
     /neighbourhoods
     /explore
   - do not request /accolades
   - do not request old coming-soon as a priority URL

9. Write report.
10. Move this task to done.
11. Commit docs/report/task movement.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:
PUBLIC CHECKS:
- homepage:
- contact:
- meet-us:
- buildings:
- neighbourhoods:
- accolades:
- robots:
- sitemap:
- sitemap excludes /accolades:
- coming-soon gate absent:
CRAWL:
- result:
LOGS:
- errors:
INDEXING NOTES:
- created:
COMMIT:
RECOMMENDED NEXT STEP:
Submit sitemap in Google Search Console and Bing Webmaster Tools.
