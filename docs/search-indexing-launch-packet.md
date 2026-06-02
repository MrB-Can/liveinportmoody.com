# Search Indexing and Sitemap Launch Packet

**Purpose:** Post-launch checklist for Google Search Console, Bing Webmaster Tools, and sitemap submission.

**When to execute:** Within 24 hours of removing the coming-soon gate (after COMING_SOON_ENABLED=false is deployed).

---

## Pre-Submission Checklist

Before submitting to search engines:

- [ ] Coming-soon gate is removed (COMING_SOON_ENABLED=false deployed)
- [ ] Homepage is publicly accessible at https://www.liveinportmoody.com (no redirect)
- [ ] All phase-one pages are live and return HTTP 200
- [ ] robots.txt is correct and allows crawling
- [ ] sitemap.xml exists and is valid at https://www.liveinportmoody.com/sitemap.xml
- [ ] No critical errors in Vercel logs for the past 24 hours

---

## Step 1: Verify Public Accessibility

Confirm the site is public before submitting to search engines:

```bash
curl -sI https://www.liveinportmoody.com/ | grep HTTP
```

**Expected result:** `HTTP/2 200`

Check that homepage loads in a browser without redirects:
1. Open https://www.liveinportmoody.com/ in incognito mode
2. Verify it shows the real homepage (not coming-soon)
3. Check that no redirects occur (address bar stays on www.liveinportmoody.com)

---

## Step 2: Verify Sitemap

Confirm sitemap is valid and accessible:

```bash
curl -s https://www.liveinportmoody.com/sitemap.xml | grep -c "<loc>"
```

**Expected result:** 25 or more URLs listed

Verify sitemap has correct structure:
```bash
curl -s https://www.liveinportmoody.com/sitemap.xml | head -20
```

Expected output:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.liveinportmoody.com/</loc>
    ...
```

---

## Step 3: Submit to Google Search Console

1. **Access Google Search Console:**
   - Go to https://search.google.com/search-console/
   - Ensure you own/manage liveinportmoody.com property
   - If not already verified, add the property with DNS record or HTML file

2. **Submit the sitemap:**
   - In Search Console, go to: Sitemaps (left menu) → Add a sitemap
   - Enter: `https://www.liveinportmoody.com/sitemap.xml`
   - Click Submit
   - Verify it shows "Success" (not pending)

3. **Request indexing for homepage:**
   - In Search Console, go to: URL Inspection (top search bar)
   - Paste: `https://www.liveinportmoody.com/`
   - Click "Request indexing"
   - Watch for confirmation: "Indexing requested"

---

## Step 4: Submit to Bing Webmaster Tools

1. **Access Bing Webmaster Tools:**
   - Go to https://www.bing.com/webmasters/
   - Add https://www.liveinportmoody.com if not already there
   - Verify ownership if required

2. **Submit the sitemap:**
   - In Webmaster Tools, go to: Sitemaps (left menu)
   - Click "Submit sitemap"
   - Paste: `https://www.liveinportmoody.com/sitemap.xml`
   - Click Submit

3. **Submit homepage:**
   - In Webmaster Tools, go to: URL Submission (left menu)
   - Paste: `https://www.liveinportmoody.com/`
   - Click Submit

---

## Step 5: Inspect Key Pages in Search Console

After submission, monitor these key pages over the next 7 days:

**Homepage:**
- URL: `https://www.liveinportmoody.com/`
- Go to URL Inspection → check "Coverage" status
- Expected: "URL is on Google" (can take 24–48 hours after indexing request)

**Buyer Guide:**
- URL: `https://www.liveinportmoody.com/buyer-guide`
- Check Coverage status

**Seller Guide:**
- URL: `https://www.liveinportmoody.com/seller-guide`
- Check Coverage status

**Local Businesses Page:**
- URL: `https://www.liveinportmoody.com/local-businesses`
- Check Coverage status

**Neighbourhoods Page:**
- URL: `https://www.liveinportmoody.com/neighbourhoods`
- Check Coverage status

---

## Step 6: What Gets Indexed vs. What Doesn't

### Pages that WILL be indexed (public):

✅ All 25 phase-one pages in sitemap.xml  
✅ /  
✅ /buyer-guide, /seller-guide, /buyer-guide-resources  
✅ /neighbourhoods, /complexes, /buildings  
✅ /move-to-port-moody, /market, /presales  
✅ /events, /testimonials, /accolades  
✅ /resources, /local-businesses  
✅ /faq, /request-recent-sales  

### Pages that MUST NOT be indexed (preview-only):

❌ `/preview/*` — All preview guide URLs  
❌ `/buildings/[id]/preview` — Preview comparisons  
❌ Any URL accessed with `__lipm_preview` cookie  

**Verify preview protection:**
```bash
curl -s -H "User-Agent: Googlebot" -b "__lipm_preview=lgis2026" \
  https://www.liveinportmoody.com/buildings/somebuilding \
  | grep -i "noindex\|x-robots-tag"
```

Expected: Should return noindex header or meta tag (preview URLs protected from indexing)

---

## Step 7: Monitor Indexed Pages

**First 7 days (daily check):**
- [ ] Day 1: Homepage submitted, no indexed pages yet (expected)
- [ ] Day 2–3: Check if homepage appears as "Indexed" in Search Console
- [ ] Day 4–7: Check if buyer-guide, seller-guide, neighbourhoods appear as indexed
- [ ] Day 7: Verify at least 20 of 25 pages show coverage (some may take longer)

**Google Search Console checks (inspect each key page):**
1. Go to URL Inspection
2. Paste each URL
3. Look for: "URL is on Google" with green ✅
4. If red ❌: Check the "Coverage" error and troubleshoot

**Command to check indexation status programmatically:**

For homepage:
```bash
curl -s "https://www.google.com/search?q=site:liveinportmoody.com" | grep -q "did not match any documents" && echo "Not indexed yet" || echo "Indexed"
```

For all site pages:
```bash
curl -s "https://www.google.com/search?q=site:liveinportmoody.com" | grep -c "www.liveinportmoody.com"
```

Expected after 7 days: at least 20+ pages should appear in Google search results.

---

## Step 8: What Not to Index (Critical)

**DO NOT allow these to be indexed:**

1. **Preview guides** — `/buildings/X/preview`, `/neighbourhoods/X/preview`
   - These are internal review pages, not for public
   - Sitemap should EXCLUDE all preview URLs
   - Preview URLs must return `X-Robots-Tag: noindex` header

2. **Coming-soon page** (optional)
   - `/coming-soon` can technically be indexed, but it's not useful
   - Current config: included in sitemap (okay if coming-soon gate is down)

3. **Admin/internal routes**
   - None exist in this phase-one deployment
   - Future: `/admin/*`, `/api/*`, `/internal/*` must be blocked

**Verify preview URLs are protected (spot check):**
```bash
# With preview cookie (should have noindex):
curl -sI -b "__lipm_preview=lgis2026" \
  https://www.liveinportmoody.com/buildings/heritage-mountain/preview | grep -i noindex

# Without cookie (should redirect or show coming-soon, not public):
curl -sI https://www.liveinportmoody.com/buildings/heritage-mountain/preview | head -5
```

---

## Step 9: When to Check Back

**After 24 hours:**
- Verify homepage is showing in Google search results
- Check Google Search Console for any crawl errors

**After 7 days:**
- Verify at least 20 pages indexed
- Check Bing and Google for indexed page count
- Monitor for any "Excluded" or "Crawl anomaly" errors

**After 30 days:**
- Run full indexation audit: `site:liveinportmoody.com` search
- Expected: 20–25 results for phase-one pages
- Check Google Search Console Performance report for:
  - Click-through rate (CTR)
  - Impressions (queries showing your page)
  - Average position (rank in SERP)

**Ongoing:**
- Monitor Google Search Console weekly for new errors
- Check Bing Webmaster Tools monthly
- If new pages are added post-launch, add them to sitemap.xml and resubmit

---

## Troubleshooting

### "URL is not on Google" after 7 days

**Likely causes:**
1. robots.txt blocking (check: `curl -s liveinportmoody.com/robots.txt`)
2. Page returning 4xx or 5xx error (check: `curl -sI https://www.liveinportmoody.com/[page]`)
3. Noindex meta tag or header (check page source or curl headers)
4. Crawler can't access due to middleware/auth

**Fix:**
- Verify robots.txt allows `/` (User-Agent: * Allow: /)
- Verify page returns HTTP 200
- Check for accidental noindex on public pages
- Verify no middleware blocks Googlebot user agent

### "Crawl anomaly" errors

**Check Vercel logs for 5xx errors:**
```bash
vercel logs --since 1h | grep -i "5[0-9][0-9]"
```

If found, investigate the error and redeploy if needed.

### Sitemap too large

If sitemap exceeds 50MB or 50k URLs:
- Split into index sitemap: `sitemap_index.xml`
- Then reference sub-sitemaps: `sitemap_1.xml`, `sitemap_2.xml`, etc.
- For phase-one (25 URLs): not needed, single sitemap is fine

---

## Success Criteria

✅ Sitemap accessible and returns 200  
✅ Google Search Console shows sitemap submitted  
✅ Bing Webmaster shows sitemap submitted  
✅ Homepage indexed within 48 hours  
✅ At least 20 phase-one pages indexed within 7 days  
✅ No "Excluded" or "Crawl anomaly" errors in GSC  
✅ `site:liveinportmoody.com` search shows 20+ results  
✅ Preview URLs remain noindex (not indexed)  

If all ✅, search indexation is complete. Proceed to post-launch monitoring.

---

## Reference

- **Google Search Console:** https://search.google.com/search-console/
- **Bing Webmaster Tools:** https://www.bing.com/webmasters/
- **Sitemap format:** https://www.sitemaps.org/
- **robots.txt reference:** https://www.robotstxt.org/
