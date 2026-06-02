# First 48 Hours Monitoring Runbook

**Purpose:** Operational checklist to monitor site health, form submissions, and user engagement immediately after launching live (removing coming-soon gate).

**When to start:** Immediately after COMING_SOON_ENABLED=false is deployed and verified live.

**Duration:** 48 hours (first 2 days after launch).

**Who:** Operations team, Paul, Leilani. Set phone notifications for critical alerts.

---

## Hour 0–2: Immediate Post-Launch Verification

### ✅ Checklist

- [ ] Homepage loads at https://www.liveinportmoody.com (no redirect, no coming-soon)
- [ ] All navigation links work (no 404s)
- [ ] Contact form is visible and clickable
- [ ] GHL integration is responding (form can submit)
- [ ] Vercel Functions logs show no critical errors
- [ ] No unexpected 5xx errors in the past hour

### Actions

1. **Browser verification (manual, 5 min):**
   ```bash
   # Open in 3 browsers/devices
   - Desktop Chrome: https://www.liveinportmoody.com
   - Desktop Safari: https://www.liveinportmoody.com
   - Mobile (any phone): https://www.liveinportmoody.com
   ```
   Verify each loads the real homepage (not coming-soon).

2. **Test form submission (safe):**
   ```
   - Navigate to /contact
   - Fill: Name, Email, Phone, Message
   - Email: Use a test email you control (not a real lead)
   - Submit
   - Wait 30 seconds
   ```

3. **Check Vercel logs for errors:**
   ```bash
   vercel logs --since 10m --level error
   ```
   Expected: No `/api/lead` errors. If errors appear, investigate immediately.

---

## Hour 2–24: First Day Monitoring

Monitor every 4 hours (set alarms). Quick checks, 10 min each.

### Every 4 Hours — Quick Check

**Checklist:**
- [ ] Homepage loads without errors
- [ ] Contact form still works
- [ ] No pattern of 500 errors in Vercel logs
- [ ] GHL sync is working (check inbox — see below)

**Commands:**

```bash
# Check Vercel error rate (should be <1% of requests):
vercel logs --since 4h --level error | wc -l

# Check for /api/lead failures specifically:
vercel logs --since 4h | grep api/lead | grep -i error
```

Expected: 0 errors, or only pre-launch known warnings.

### Day 1 — Form Submissions Check (every 4 hours)

**Check GoHighLevel inbox:**
1. Open GoHighLevel → Contacts
2. Filter by "Created this week"
3. Look for new contact submissions
4. Check creation time matches your time zone (no timezone mismatch)

**For each new contact:**
- [ ] Verify name, email, phone appear correctly
- [ ] Check that pipeline/stage/owner are correct (should auto-populate from form submission)
- [ ] Confirm no duplicates (check by email address)
- [ ] Mark as reviewed in GHL (or reply if live leads come in)

**Expected behavior:**
- First submission may come within 5–10 minutes of launch
- Form should route correctly (buyer form → buyer stage, etc.)
- No data loss or corruption

---

## Hour 24–48: Second Day Monitoring

Monitor every 8 hours. Checklist remains the same, but expand to include longer-term health.

### Every 8 Hours — Extended Check

**All checks from "Every 4 Hours" plus:**

- [ ] Sitemap and robots.txt still respond (no 404)
- [ ] No memory leaks (Vercel Function duration trending upward)
- [ ] GHL API rate limits not hit (check GHL logs)
- [ ] No suspicious traffic patterns (unusually high traffic from one IP)

**Commands:**

```bash
# Verify sitemap and robots still work:
curl -sI https://www.liveinportmoody.com/sitemap.xml | head -1
curl -sI https://www.liveinportmoody.com/robots.txt | head -1

# Check Vercel Function response times (should stay <1000ms):
vercel logs --since 8h | grep "duration:" | tail -5
```

Expected:
- Sitemap: HTTP/2 200
- Robots: HTTP/2 200
- Duration: <1000ms avg (not increasing)

---

## Broken Link Checks (Day 1, then Day 2)

### Day 1 — Manual Spot Check (1 hour after launch)

Navigate and click through key paths:
1. Homepage → Click "Buy" in nav → See /buy page loads
2. Homepage → Click "Sell" in nav → See /sell page loads
3. Homepage → Click "Resources" dropdown → See resources page loads
4. /buyer-guide → Check all CTA buttons work
5. /neighbourhoods → Click 2 neighbourhoods → Verify page loads
6. /contact → Submit form → Verify no errors

### Day 2 — Automated Link Check (if available)

If using a link checker tool (like Screaming Frog, Broken Link Checker):
```bash
# Run against production (with time limit to avoid overload):
# - Check all internal links on 25 phase-one pages
# - Expected: 100% 200 responses
# - Any 4xx or 5xx = immediate investigation
```

**If broken links found:**
- Identify the broken URL
- Check if it's in the codebase (search `/src/**` and `/public/**`)
- Redeploy if code fix is needed, or file as P2 post-launch issue

---

## Vercel Logs — Critical Error Monitoring

### What to Watch For (set up alerts)

**Critical (page-breaking errors):**
- [ ] /api/lead returning 500
- [ ] Middleware errors blocking routes
- [ ] Unhandled exceptions in main routes (/, /buy, /sell, /contact)

**Actionable (fix before Day 2):**
- [ ] Any new 404 errors on known routes
- [ ] Database connection failures (none expected in phase-one, but watch)
- [ ] Third-party API timeouts (GHL, image CDN)

**Informational (log for analysis, not urgent):**
- [ ] Image CDN warnings (low priority images missing)
- [ ] Analytics event tracking warnings
- [ ] CSS/font loading warnings

**Check logs command:**

```bash
# All errors in past 24 hours:
vercel logs --since 24h --level error

# Filter to /api/lead errors only:
vercel logs --since 24h --level error | grep api/lead

# Check for 500 errors (excluding expected ones):
vercel logs --since 24h --level error | grep "500"

# See raw function output (for debugging):
vercel logs --since 24h --level info | head -30
```

### Rollback Trigger (if critical errors occur)

If you see a pattern of errors like:
- More than 10 `/api/lead` 500 errors in 1 hour
- Entire routes returning 500 (not just API)
- Middleware blocking all requests

**ROLLBACK IMMEDIATELY:**
```bash
# Re-enable coming-soon gate (3 min to deploy):
vercel env rm COMING_SOON_ENABLED production
vercel --prod

# Then investigate what broke
```

---

## Phone and Email Monitoring

### Owner Contact Workflow (Day 1–2)

1. **Email notifications:**
   - Set up email forwarding from contact form → owner inbox
   - GoHighLevel should auto-notify on new leads
   - Check inbox every 4 hours for first 24 hours

2. **Phone calls:**
   - If anyone calls the business number listed in contact form, log the call
   - Record: Name, phone, topic, outcome
   - Add to GHL manually if not captured

3. **Response protocol:**
   - **Qualified leads (buyer/seller intent):** Respond within 2 hours (Day 1) or next business day (after Day 2)
   - **General inquiries (questions/feedback):** Respond within 24 hours
   - **Spam/bot submissions:** Delete from GHL, no response needed

### GHL Inbox Monitoring

**Check GHL contacts every 4 hours:**
1. Open GoHighLevel → Contacts
2. Filter: "Created this week"
3. Sort: "Most recent first"
4. For each new contact:
   - [ ] Read the submission details
   - [ ] Verify email/phone/name are correct
   - [ ] Check pipeline and stage (should auto-populate)
   - [ ] Assign to owner if needed
   - [ ] Mark as reviewed or schedule follow-up

**Expected first 48 hours:**
- 0–5 submissions (launch day often slow as traffic ramps up)
- Increase on Day 2 as organic/search traffic arrives
- Most common: /buyer-guide form submissions

---

## Broken Form Submission Workflow

If a form submission fails (user reports, or you see errors in Vercel logs):

1. **Immediate check (5 min):**
   - Try submitting the form yourself from /contact
   - Check if submission appears in GHL within 30 seconds
   - Note the exact error message (if any)

2. **Investigate Vercel logs (10 min):**
   ```bash
   vercel logs --since 1h | grep api/lead
   ```
   Look for:
   - Auth errors (GHL token expired?)
   - Network timeouts (GHL API slow?)
   - Data validation errors (form field mismatch?)

3. **Check GHL status (5 min):**
   - Log into GoHighLevel
   - Check API token is still valid (Settings → API)
   - Confirm pipeline, stage, owner IDs haven't changed
   - Try a manual contact creation in GHL UI (does it work?)

4. **Recovery:**
   - If GHL API token expired: regenerate and update Vercel env var
   - If network timeout: wait 5 min and retry (may be temporary)
   - If data validation: check form field names match GHL schema
   - If unresolvable: file as blocker, consider rollback

---

## Day 2 — Extended Health Check

Run this full health check at end of Day 2 (48 hours after launch):

**Checklist:**
- [ ] Homepage response time <500ms (check Vercel logs)
- [ ] No 500 errors in any critical route (/buy, /sell, /contact, /neighbourhoods)
- [ ] GHL inbox has received at least 1 real contact (or wait until Day 3 if low traffic)
- [ ] Sitemap and robots.txt still accessible
- [ ] No broken images on homepage
- [ ] Navigation all works (no dead links)
- [ ] Contact form submits and routes to GHL
- [ ] Mobile site loads and is usable

**If all ✅:** Monitoring can move to "normal" cadence (1x daily).

**If any ❌:** Investigate and fix before Day 3.

---

## When to Escalate / Rollback

**CRITICAL — Rollback immediately:**
1. More than 50% of /api/lead requests returning 500
2. Homepage returning 500 or 404
3. All forms non-functional for >15 minutes
4. Unknown error cascading across multiple routes

**URGENT — Fix within 1 hour:**
1. GHL integration broken (forms submit but don't reach GHL)
2. Mobile site unusable (broken layout, unclickable buttons)
3. Broken links on main navigation

**STANDARD — Fix by end of Day 2:**
1. Minor broken links in secondary pages
2. Analytics tracking not working
3. Images slow to load (but page still renders)

**DEFER — Post-launch P2 items:**
1. Social links still show placeholders
2. Leilani photo still on placeholder
3. Comparison table overflow on mobile
4. Performance optimizations

---

## Daily Report Template (for team standup)

**Day 1 Check (Day 2 morning):**
```
✅ Site Status: LIVE AND STABLE
- Homepage: Loading fine
- Forms: Working (0 errors in 24h)
- GHL: Syncing correctly
- Traffic: [X] visits, [X] form submissions
- Errors: None critical
- Action items: None
```

**Day 2 Check (Day 3 morning):**
```
✅ Site Status: LIVE AND STABLE
- 48-hour health check: PASSED
- Total submissions: [X]
- Average response time: [Xms]
- 500 errors: 0
- Rollback: Not needed
- Ready for: Normal monitoring + post-launch content phase
```

---

## Success Criteria (After 48 Hours)

✅ Site is live, no coming-soon gate  
✅ No critical errors (500s) on main routes  
✅ Forms submit successfully to GHL  
✅ At least 1 contact received (if traffic is flowing)  
✅ No broken images or major layout issues  
✅ Navigation works end-to-end  
✅ Rollback was not needed  
✅ Team has logs and monitoring data for review  

If all ✅, launch is successful. Move to post-launch content and ongoing monitoring (POOL-P1-S29S and beyond).

---

## Contacts and Escalation

**Paul (Owner):**
- Email: paul@lgis.ca
- Role: Final approval, GHL account owner

**Leilani (Owner):**
- Role: Day-to-day operations, lead follow-up

**Operations escalation:**
- Critical issue during 48h monitoring: Contact Paul immediately
- Forms not working: Check Vercel logs, GHL API status, then call
- Rollback decision: Paul's call (escalate within 15 min of issue)

---

## Quick Reference — Commands

```bash
# Check site is live:
curl -sI https://www.liveinportmoody.com/ | grep HTTP

# Check for errors:
vercel logs --since 4h --level error

# Check /api/lead specifically:
vercel logs --since 4h | grep api/lead

# Test form submission:
curl -X POST https://www.liveinportmoody.com/api/lead \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"555-1234","message":"test"}'
  
# Check sitemap:
curl -s https://www.liveinportmoody.com/sitemap.xml | head -20

# Check robots.txt:
curl -s https://www.liveinportmoody.com/robots.txt
```

---

## Notes

- Monitoring interval: Every 4h (Day 1), Every 8h (Day 2)
- Escalation threshold: 15 min of critical errors = rollback decision
- After 48h: Move to daily checks, then weekly reviews
- Post-launch phase begins when all first-48h checks pass
