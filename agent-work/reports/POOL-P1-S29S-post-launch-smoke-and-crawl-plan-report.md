# POOL-P1-S29S Report: Post-Launch Smoke and Crawl Plan

**AGENT:** Agent 2 (Claude Code)

**TASK:** POOL-P1-S29S — Create Post-Launch Smoke and Crawl Plan

**STATUS:** ✅ DONE

**DATE COMPLETED:** 2026-05-29

---

## What Was Required

1. Create `docs/post-launch-smoke-crawl-plan.md` with verification checks
2. Include checks for:
   - Homepage public without cookie
   - All phase-one sitemap routes public
   - Contact form visible
   - GHL form still works or safe test route
   - robots/sitemap validation
   - Preview noindex remains on preview guides
   - No API errors
   - No obvious console/runtime errors
3. Include exact commands:
   - `npm run smoke:prelaunch`
   - `npm run crawl:prelaunch`
4. Commit docs/report only
5. Move task to done

---

## What Was Delivered

**File created:** `docs/post-launch-smoke-crawl-plan.md`

**Contents:**
- Pre-verification checklist (6 items)
- 10 verification steps with exact commands and pass/fail criteria:
  1. Run smoke test (71/71 expected)
  2. Run crawl test (106/106 expected)
  3. Manual homepage HTTP check
  4. Phase-one sitemap routes verification
  5. Contact form visibility check
  6. GHL form test (safe endpoint check)
  7. Preview pages still protected (noindex verification)
  8. API error check via Vercel logs
  9. Browser console check (manual)
  10. Robots and sitemap verification
- Rollback procedure (if checks fail)
- Post-verification guidance (all-pass vs. fail paths)
- First-30-minutes monitoring checklist
- Success criteria (8 items, all with checkboxes)

**Key commands included verbatim:**
- `npm run smoke:prelaunch`
- `npm run crawl:prelaunch`
- `vercel logs --since 1h | grep -i "error\|exception"`
- `curl -sI https://www.liveinportmoody.com/ | grep HTTP`
- `curl -s https://www.liveinportmoody.com/sitemap.xml`
- `curl -sI https://www.liveinportmoody.com/robots.txt`

---

## Verification

✅ Document created at expected path  
✅ All 10 verification steps documented with expected results  
✅ Exact npm commands included as required  
✅ GHL safety check included (endpoint response verification, not live submission)  
✅ Preview noindex check included  
✅ Rollback procedure provided  
✅ Pass/fail decision trees included  
✅ Success criteria checklist (8 items)

---

## Files Committed

```
docs/post-launch-smoke-crawl-plan.md
agent-work/reports/POOL-P1-S29S-post-launch-smoke-and-crawl-plan-report.md
agent-work/done/POOL-P1-S29S-post-launch-smoke-and-crawl-plan.md
```

---

## Next Steps

The post-launch smoke and crawl plan is now ready for execution immediately after COMING_SOON_ENABLED=false is deployed to production. All 10 verification steps are documented with exact commands, expected results, and both success and failure paths.

Ready to claim next P1 task.
