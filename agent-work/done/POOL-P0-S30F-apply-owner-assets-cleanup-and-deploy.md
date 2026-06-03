TASK:
POOL-P0-S30F — Apply Owner Assets, Clean Public Incomplete Text, and Deploy

TASK_TYPE:
code-deploy

CLAIMABLE_BY:
ANY

DEPLOYMENT:
authorized after validation passes

GOAL:
Fix the public live-site issues created by launching before owner photo/social/accolade cleanup was complete.

CONTEXT:
The site is already public. Owner has now supplied:
- Team photo local path: ~/Downloads/Teamshot.jpeg
- Facebook: https://www.facebook.com/liveinportmoody
- Instagram: https://www.instagram.com/liveinportmoody/
- YouTube: omit until a real URL is provided

OWNER DECISIONS:
- Privacy/terms approved: GO
- GHL test passed: GO
- Remove standalone Accolades page from visible nav/footer: GO
- Keep /accolades route live but not promoted: NO-GO
- Use text-only verified accolade/trust blocks across pages: GO
- Use non-public code/data placeholders for future badge/logo assets: GO
- Do not show public badge/logo placeholder labels: GO
- Launch without Leilani/team photo if missing: NO-GO
- Launch without real social links if missing/hidden: NO-GO
- Launch with MLS listings fallback if reciprocity URL is not ready: GO
- Remove coming-soon after final scan passes: GO
- Site is already live. Fix public issues and redeploy.

DO NOT:
- re-enable coming-soon
- invent awards
- invent testimonials
- invent fake social URLs
- invent MLS URLs
- invent fake badges/logos
- show public placeholder text
- add fake review counts
- add fake sold data
- use YouTube until a real URL is provided
- use the Facebook header as a web hero/header image unless explicitly requested later

ALLOWED FILES:
- src/lib/site.ts
- src/app/page.tsx
- src/app/about/page.tsx
- src/app/meet-us/page.tsx
- src/app/sell/page.tsx
- src/app/buy/page.tsx
- src/app/contact/page.tsx
- src/app/accolades/page.tsx
- src/app/explore/page.tsx
- src/app/neighbourhoods/**/*.tsx
- src/app/complexes/**/*.tsx
- src/components/**/*.tsx
- src/data/**/*.ts
- public/images/team/**
- docs/final-owner-launch-approval.md
- docs/current-launch-blockers.md
- docs/placeholder-public-text-scan.md
- agent-work/reports/POOL-P0-S30F-apply-owner-assets-cleanup-and-deploy-report.md

TASKS:
1. Move this task to active.

2. Copy and optimize team photo:
   - Source: ~/Downloads/Teamshot.jpeg
   - Destination preferred:
     public/images/team/leilani-paul-team.jpeg
   - Create a web-optimized version, target < 500KB if practical.
   - Keep the original aspect ratio unless the existing component requires a crop.
   - Use alt text: "Leilani Fong and Paul Bennett, Live in Port Moody"
   - Do not label this as a Leilani-only headshot.

3. Update code so the team photo appears where the current placeholder appears:
   - /meet-us
   - about/team sections if present
   - any TeamImagePlaceholder usage
   - any “photo coming soon” UI

4. Add real social links:
   - Facebook: https://www.facebook.com/liveinportmoody
   - Instagram: https://www.instagram.com/liveinportmoody/
   - YouTube: omit or disabled-hidden until a real URL exists.
   - LinkedIn: omit unless already real.
   - Remove disabled: true for Facebook and Instagram.
   - Do not render any social platform with href "#".

5. Remove public incomplete social text:
   - Remove “Social links coming soon”
   - Remove “Instagram and YouTube connection coming soon”
   - Remove “Instagram link pending”
   - Remove “YouTube link pending”
   - Replace with actual Facebook/Instagram links or hide the block.

6. Remove /accolades from visible nav/footer/prominent CTAs.

7. Because owner gave NO-GO to keeping /accolades live:
   - Redirect /accolades to /meet-us or /about using the safest Next.js approach.
   - Remove /accolades from sitemap/phase-one route lists if applicable.
   - Do not leave /accolades as a public proof destination.

8. Add or verify scattered text-only trust/accolade blocks:
   - homepage
   - buy
   - sell
   - about / meet-us
   - contact
   Rules:
   - Use only owner-provided/stable claims already in project notes or existing site data.
   - Prefer stable recognition labels.
   - Avoid review counts, dollar volume, or exact years unless source-backed and approved.
   - Do not add Review, AggregateRating, Award, Offer, Listing, or Sold schema.

9. Add non-public badge/logo support as optional data fields only:
   - badgeAssetPath?: string
   - logoAssetPath?: string
   - sourceUrl?: string
   - verified?: boolean
   Public rendering:
   - show real badge/logo only if asset path exists and verified is true
   - never show fake art
   - never show public placeholder boxes
   - never show “badge coming soon” or “logo placeholder”

10. Scan public-facing code for incomplete text:
   - placeholder
   - coming soon
   - soon
   - pending
   - TODO
   - TBD
   - draft
   - sample
   - example
   - lorem
   - dummy
   - under construction
   - not yet
   - will be added
   - badge coming
   - logo coming
   - social links coming soon
   - no photo
   - image placeholder

11. Fix launch-visible incomplete language.
    Keep honest compliance/safety language where needed.
    Specifically address previously reported items:
   - src/components/footer.tsx: "Social links coming soon"
   - src/components/team-member-card.tsx: "coming soon"
   - src/components/team-image-placeholder.tsx: "Team photo coming soon"
   - src/components/social-feed-placeholder.tsx social pending text
   - map placeholder text if public-facing and makes page feel unfinished
   - treetops "Photos coming soon..." if public-facing

12. Confirm MLS fallback remains honest and launch-safe.
    Do not add fake MLS URL.
    Do not imply live MLS search exists if it does not.

13. Update docs:
   - docs/final-owner-launch-approval.md
   - docs/current-launch-blockers.md
   - docs/placeholder-public-text-scan.md

14. Run validation:
   npm run lint
   npm run build
   npm run smoke:prelaunch
   npm run crawl:prelaunch

15. If validation passes:
   - commit scoped files
   - deploy to production with a forced rebuild:
     vercel --prod --force

16. Post-deploy checks:
   - homepage public:
     curl -I https://www.liveinportmoody.com/
   - contact public:
     curl -I https://www.liveinportmoody.com/contact
   - meet-us public:
     curl -I https://www.liveinportmoody.com/meet-us
   - accolades should redirect or no longer behave as proof page:
     curl -I https://www.liveinportmoody.com/accolades
   - robots:
     curl -s https://www.liveinportmoody.com/robots.txt | head
   - sitemap:
     curl -s https://www.liveinportmoody.com/sitemap.xml | head
   - logs:
     vercel logs --level error --since 1h

17. Write report.
18. Move task to done or blocked.

FINAL REPORT MUST INCLUDE:
AGENT:
TASK:
STATUS:

OWNER ASSETS:
- team photo source:
- team photo deployed path:
- Facebook URL:
- Instagram URL:
- YouTube behavior:

SOCIAL LINKS:
- href "#" remaining: yes/no
- disabled real social links remaining: yes/no
- public social placeholder text remaining: yes/no

PHOTO:
- team photo visible:
- public photo placeholder text remaining:

ACCOLADES:
- removed from nav/footer:
- /accolades route behavior:
- scattered trust blocks:
- fake badges/logos added: no
- public badge/logo placeholders shown: no

PLACEHOLDER TEXT SCAN:
- issues found:
- fixes made:
- acceptable honest fallback language left:

VALIDATION:
- lint:
- build:
- smoke:
- crawl:

DEPLOYMENT:
- commit:
- deployment URL:
- production URL:
- vercel --prod --force used: yes/no

POST-DEPLOY:
- homepage:
- contact:
- meet-us:
- accolades:
- robots:
- sitemap:
- error logs:

RECOMMENDED NEXT STEP:
Run post-launch smoke/crawl plan and submit sitemap/search indexing packet.
