# Post-Launch Smoke and Crawl Verification Plan

**Purpose:** Verify site functionality immediately after removing coming-soon gate.

**When to execute:** Within 15 minutes of deploying COMING_SOON_ENABLED=false to production.

---

## Pre-Verification Checklist

Before running checks, confirm:

- [ ] COMING_SOON_ENABLED has been set to "false" in Vercel production env vars
- [ ] Deployment has completed and is showing as "Ready" in Vercel Dashboard
- [ ] At least 2-3 minutes have passed since deployment completion
- [ ] You have access to vercel CLI or dashboard

---

## Verification Steps

### Step 1: Run Smoke Test

Tests that all 71 routes respond with HTTP 200 after coming-soon removal.

```bash
npm run smoke:prelaunch
```

**Expected result:** ✅ PASS — 71/71 routes passing

**If it fails:**
- Check Vercel function logs: `vercel logs <deployment-url> --level error --since 1h`
- Look for any errors in `/api/lead` specifically
- If critical routes are down, consider rollback (see below)

---

### Step 2: Run Crawl Test

Tests that 106 pages are properly indexed with correct metadata.

```bash
npm run crawl:prelaunch
```

**Expected result:** ✅ PASS — 106/106 pages

**Expected warnings (OK):**
- ⚠️ Leilani photo not found (if not uploaded yet — expected, not blocking)

**If critical failures occur:**
- Check that no pages are accidentally returning 404 or 403
- Verify sitemap and robots.txt are correct
- Look for any 5xx errors in Vercel logs

---

### Step 3: Manual Homepage Check

Verify homepage is accessible **without** a preview cookie:

```bash
curl -sI https://www.liveinportmoody.com/ | grep HTTP
```

**Expected result:** `HTTP/2 200`

**This confirms:**
- Coming-soon gate is removed ✅
- Homepage is publicly accessible ✅

---

### Step 4: Verify All Phase-One Sitemap Routes

All 25 routes in sitemap.xml should be public:

```bash
curl -s https://www.liveinportmoody.com/sitemap.xml | grep -oP '(?<=<loc>)[^<]+' | head -10
```

**Expected:** All URLs return 200 in step 1 (smoke test covers this)

---

### Step 5: Contact Form Visibility Check

Verify contact form is accessible and visible:

```bash
curl -s https://www.liveinportmoody.com/contact | grep -q "contact" && echo "✅ Contact page found"
```

**Expected result:** ✅ Contact page found

---

### Step 6: GHL Form Test (Safe Check)

Test that GHL integration is still working by checking the form endpoint:

```bash
curl -sI https://www.liveinportmoody.com/api/lead -X POST | head -1
```

**Expected result:** Should return a method or status header (not 404)

**Full test:** If you want to test a real submission:
- Use the /contact form manually
- Submit a test form with a real email inbox you control
- Confirm contact appears in GoHighLevel within 30 seconds
- **Important:** Delete test contact from GHL immediately after verification

---

### Step 7: Preview Pages Still Protected

Confirm preview guides still have noindex (not accidentally public):

```bash
curl -sI -b "__lipm_preview=lgis2026" https://www.liveinportmoody.com/buildings/heritage-mountain | grep -i "x-robots-tag\|noindex"
```

**Expected result:** Should show noindex or x-robots-tag preventing indexing

---

### Step 8: API Error Check

Check Vercel function logs for any errors in the past hour:

```bash
vercel logs --since 1h | grep -i "error\|exception" | head -10
```

**Expected result:** No /api/lead errors (some background warnings are OK)

**If errors found:**
- Review error details
- Check if they're pre-launch (expected) or new (investigate)
- Consider rollback if critical

---

### Step 9: Browser Console Check (Manual)

1. Open https://www.liveinportmoody.com in an incognito window
2. Open DevTools → Console tab
3. Look for red error messages (warnings are OK)

**Expected:** No runtime errors, only normal logs and warnings

---

### Step 10: Robots and Sitemap Verification

Confirm robots.txt and sitemap are accessible:

```bash
curl -s https://www.liveinportmoody.com/robots.txt | head -3
curl -sI https://www.liveinportmoody.com/sitemap.xml | head -1
```

**Expected:**
- robots.txt responds with User-Agent: * Allow: /
- sitemap.xml returns HTTP/2 200

---

## Rollback Procedure (If Checks Fail)

If any critical check fails, you can re-enable coming-soon without code changes:

```bash
# Remove the env var (re-enables gate)
vercel env rm COMING_SOON_ENABLED production

# Redeploy
vercel --prod
```

The gate will be back up in ~3 minutes. Preview access (with preview cookie) continues to work during rollback.

---

## Post-Verification

### If All Checks Pass ✅

1. Document results in launch report
2. Continue with first-48-hours monitoring runbook (POOL-P1-S29U)
3. Monitor Vercel logs for the next 30 minutes
4. Be ready to respond to first user inquiries via GHL

### If Checks Fail ❌

1. Review which check failed
2. Investigate root cause in Vercel logs and code
3. Decide: fix and re-test, or rollback to coming-soon
4. If rollback: note the issue for post-launch fix
5. Document failure reason and next steps

---

## First-30-Minutes Monitoring

After verification passes, monitor:

- **Vercel logs:** Watch for any new errors every 5 minutes
- **GHL contacts:** Confirm first real form submissions appear correctly
- **Homepage analytics:** Check that traffic is flowing (Google Analytics, if enabled)
- **Error budget:** Track if any known issues are occurring

---

## Success Criteria

✅ Smoke test passes (71/71)  
✅ Crawl test passes (106/106)  
✅ Homepage publicly accessible (HTTP 200)  
✅ All sitemap routes public  
✅ Contact form visible and accessible  
✅ GHL endpoint responding  
✅ No critical API errors  
✅ No browser console errors  
✅ Preview pages still protected (noindex)  

If all ✅, launch is successful. Proceed to post-launch monitoring.
