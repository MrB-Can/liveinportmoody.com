# Wiring docs-drift into CI and git hooks

## GitHub Action

1. Copy `assets/docs-drift.yml` to `.github/workflows/docs-drift.yml`.
2. Add repo secret `ANTHROPIC_API_KEY` (Settings → Secrets and variables →
   Actions). `GITHUB_TOKEN` is provided automatically.
3. Commit the skill itself to `.claude/skills/docs-drift/` in the repo so the CI
   checkout has it. A skill installed only in your personal account is not
   visible to the runner.

The workflow posts one PR comment and edits it in place on each push, rather
than stacking a new comment per commit.

### Making it non-blocking

Delete the final "Fail on blocking findings" step, or add
`continue-on-error: true` to the job. Recommended for the first couple of weeks
while you calibrate what counts as blocking for your repo.

### Cost

One model call per PR push. Batch it down by changing the trigger to
`pull_request: types: [opened, ready_for_review]` only, or gate the job:

```yaml
    if: github.event.pull_request.draft == false
```

## Pre-push hook

```bash
cp assets/pre-push .git/hooks/pre-push && chmod +x .git/hooks/pre-push
```

It is advisory by default: it prints findings and lets the push through. It
also self-skips when the push contains no code changes, or when docs were
already edited alongside the code, so the common cases cost nothing.

`.git/hooks/` is not versioned. To share the hook across the team, commit it to
`.githooks/` and have everyone run
`git config core.hooksPath .githooks` once.

## Calibrating "blocking"

Out of the box, blocking means a doc makes a statement the code contradicts.
Undocumented additions and unwritten decisions are reported but never block.

If your repo has docs that are intentionally approximate (a roadmap, a design
sketch), list them in `.docs-drift-ignore`, one glob per line, and have the
skill treat them as non-blocking:

```
docs/roadmap.md
docs/rfc/draft-*.md
```
