# Current Launch Blockers — Status as of 2026-06-01 20:50 UTC

## Summary

✅ **All technical blockers resolved.**  
⏳ **Awaiting owner approval for:** privacy/terms, coming-soon removal.  
✅ **Safe to launch after owner sign-off.**

---

## True Blockers (Must resolve before launch)

### None at this time ✅

All technical validation is complete:
- Lint: ✅ Clean
- Build: ✅ 86 pages, no errors
- Smoke tests: ✅ 71/71 routes returning 200
- Crawl tests: ✅ 106/106 pages, no critical issues
- Visual review: ✅ Launch-ready (no P0/P1 issues)
- SEO/claim safety: ✅ Audit clean
- Link/copy safety: ✅ No invented claims
- GHL CRM integration: ✅ Live test PASSED (owner confirmed)
- Visual-fix stack: ✅ Deployed to production

---

## Owner Approval Items (Needed before removing coming-soon)

### 1. Privacy Policy & Terms of Service Review

**Status:** ⏳ Awaiting owner sign-off  
**Prepared:** Yes — docs/privacy-terms-owner-review-packet.md (owner checklist available)  
**What's needed:** Paul or Leilani to review pages and confirm language is acceptable  
**Note:** Recommend legal review before public launch, but legal review can happen post-launch if time-sensitive  

**Action:** Review `/privacy` and `/terms` pages. Use owner review packet if legal review is needed.

### 2. Coming-Soon Removal Approval

**Status:** ⏳ Awaiting owner approval  
**Current state:** `COMING_SOON_ENABLED=true` in Vercel production env vars  
**What's needed:** Owner confirmation to proceed with removal  
**Runbook:** docs/coming-soon-removal-runbook.md (step-by-step instructions included)  

**Action:** Owner confirms ready to launch public. Once approved, flip `COMING_SOON_ENABLED=false` in Vercel Dashboard and redeploy.

### 3. Homepage & Navigation Approval (Recommended)

**Status:** ⏳ Awaiting owner walkthrough  
**What's needed:** Paul and Leilani review homepage positioning, headline, CTA, nav labels, funnel pages  
**Checklist:** docs/owner-launch-checklist.md  

**Action:** Walk through homepage → /buy → /sell → /home-evaluation → /contact on preview URL.

### 4. Social Links Decision (Recommended)

**Status:** ⏳ Awaiting owner decision  
**Current:** Footer shows "Social links coming soon" placeholder (href="#")  
**Options:**
- Provide real LinkedIn/Instagram/business URLs and enable links
- Keep placeholder and leave links hidden

**Action:** Decide and provide URLs, or confirm keeping hidden.

### 5. Team Photo (Recommended)

**Status:** ⏳ Awaiting owner decision  
**Current:** Placeholder on /meet-us page  
**Options:**
- Provide professional photo of Leilani or team
- Launch with placeholder for first 30 days, add real photo later

**Action:** Provide photo or confirm placeholder is acceptable.

---

## Post-Launch Items (Can handle after coming-soon removal)

### 1. Verified Testimonials & Reviews
- Current: "Raving Fans" page is a verified-content holding page
- Post-launch: Identify 2-3 real client testimonials with written approval
- Timeline: Week 1 post-launch

### 2. Accolades & Certifications
- Current: "Accolades" page is a verified-content holding page
- Post-launch: Add real awards, designations, or credentials if available
- Timeline: Week 3 post-launch

### 3. Featured Local Businesses
- Current: "Featured Businesses" page is a request/submission form
- Post-launch: Start intake for 1 verified business profile per week
- Timeline: Starts Week 2

### 4. Local Events Content
- Current: "Events" page is a suggestion form
- Post-launch: Start intake for 1 verified event per week
- Timeline: Starts Week 2

### 5. Leilani Photo (if not provided before launch)
- Current: Placeholder on /meet-us
- Post-launch: Replace with real photo in Week 1

### 6. Real Social URLs (if not provided before launch)
- Current: Footer placeholder
- Post-launch: Replace with real URLs or remove placeholder in Week 1

### 7. Deep Neighbourhood Content
- Current: General orientation content
- Post-launch: Build out 3 priority neighbourhoods with verified facts, photos, guides
- Timeline: Weeks 2-4

### 8. First-Party Content & Articles
- Current: Policy pages and general guides only
- Post-launch: Draft buyer-focused and seller-focused articles based on real form questions
- Timeline: Starts Week 2

---

## What Is Verified as Launch-Ready ✅

### Technical
- All build/lint/smoke/crawl tests passing
- Visual review complete — no P0/P1 issues
- SEO and claim safety audit clean
- Link and copy verification complete
- Sitemap generated and safe (noindex on preview pages)

### CRM Integration
- GHL live form test PASSED (2026-06-01 20:45 UTC)
- Owner confirmed: "It worked"
- Contact created in GoHighLevel with correct routing
- Pipeline, stage, owner, tags all correct

### Deployment
- Visual-fix stack deployed to production (commit 4c261de)
- All related changes in place
- Rollback procedure documented (docs/coming-soon-removal-runbook.md)

---

## Recommended Launch Sequence

### Before Removing Coming-Soon (Required)
1. ✅ GHL test passed (confirmed)
2. ✅ Visual fixes deployed (confirmed)
3. ⏳ Owner reviews privacy/terms → approves
4. ⏳ Owner approves coming-soon removal

### On Launch Day
1. Owner verifies privacy/terms approval
2. Owner confirms ready to launch
3. Set `COMING_SOON_ENABLED=false` in Vercel Dashboard
4. Redeploy via Vercel CLI or Dashboard
5. Verify homepage loads (not coming-soon)

### First 30 Minutes Post-Launch
1. Monitor Vercel Functions → /api/lead for form errors
2. Confirm first 2-3 form submissions appear correctly in GoHighLevel
3. If any errors: consider rollback (re-enable coming-soon)

### Post-Launch (First 30 Days)
- Follow docs/post-launch-content-roadmap.md
- Add real testimonials, photos, business features, events
- Build out neighbourhood and content depth

---

## No Rollback Needed

The site is in a safe state for launch. If issues arise:
- Re-enable coming-soon: set `COMING_SOON_ENABLED=true` and redeploy (~3 min)
- Full rollback procedure: docs/coming-soon-removal-runbook.md

---

## Current Deployment Status

| Component | Status | Details |
|---|---|---|
| Code | ✅ Deployed | Visual-fix stack in production (commit 4c261de) |
| Coming-soon gate | ✅ Active | Protection still in place for final owner review |
| CRM integration | ✅ Live | GHL test passed, contact routing verified |
| Legal (Privacy/Terms) | ⏳ Owner review | Pages ready, awaiting Paul/Leilani sign-off |
| Content (Testimonials, Accolades, Photos) | ✅ Holding pages | Real content can be added post-launch |

---

## Owner Action Summary

**What must happen before launch:**
1. Review and approve privacy/terms pages
2. Approve coming-soon removal
3. (Recommended) Review homepage and nav positioning

**What can wait until after launch:**
- Real testimonials and reviews
- Real accolades and certifications
- Team photo
- Social profile URLs
- Neighbourhood content depth
- Featured businesses and events

**Status:** Ready to launch after owner approval on privacy/terms and coming-soon removal.
