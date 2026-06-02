# First 48 Hours Monitoring Runbook (Post-Launch)

## Overview
This runbook outlines the essential checks for the first 48 hours following the removal of the coming-soon gate on `liveinportmoody.com`.

## Monitoring Checklist

### Form Submissions & CRM (GHL)
- **Check GHL Inbox:** Monitor `New Lead` stage in `Warm Lead Nurture` pipeline for buyer/seller inquiries.
- **Form Test:** Perform a smoke test of `Contact`, `Home Evaluation`, and `LeadForm` on the production site (post-launch). Ensure tags (`source:liveinportmoody`, etc.) are correctly assigned in GHL.

### Vercel Monitoring
- **Error Logs:** Regularly check Vercel logs (`vercel logs liveinportmoody --level error`) for any unexpected 5xx errors or runtime exceptions.
- **Traffic Patterns:** Observe traffic peaks to ensure scalability and performance.

### Sitemap & Crawl
- **Google Search Console:** Verify the new pages are being crawled (if GSC is connected).
- **Crawl Checks:** Ensure no preview-only pages or sensitive files (like `/.next`) are being indexed.

### Broken Link & Performance Checks
- **Manual Spot Checks:** Regularly navigate through key site paths to check for broken links or unexpected redirects.

### Owner Communication & Workflow
- **Owner Response:** Ensure Paul Bennett and Leilani Fong are receiving the lead notifications as expected.
- **Feedback Loop:** Document any user feedback regarding usability or content clarity.

## Rollback Triggers
- Immediate rollback (`COMING_SOON_ENABLED=true`) if:
  - Critical site breakage (5xx errors, unusable forms).
  - Unintended data leakage or security issue.
  - Significant negative impact on sitemap/indexing integrity.
