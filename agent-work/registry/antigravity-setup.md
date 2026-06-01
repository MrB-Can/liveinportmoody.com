# Antigravity CLI — Setup Note

## Current Status

Gemini CLI is installed and usable now as Agent 5 and Agent 6.

Antigravity CLI is Google's migration path from Gemini CLI. As of June 2026, verify the official install method from Google's documentation before proceeding.

## Do Not

- Do not run random install scripts from non-official sources
- Do not install npm packages named "antigravity" or similar unless official Google docs explicitly name that package
- Do not use community forks or similarly named tools

## Official Migration Path

Check the official Gemini / Google AI Studio CLI documentation for the current Antigravity install command. The migration guide is maintained at Google's developer docs.

Do not invent or guess the install command. Verify it from the official source before running.

## After Install

Once Antigravity CLI is confirmed installed and working:

1. Use the same task-file workflow as Gemini CLI (A5/A6 task files in backlog/)
2. The permanent bootstrap prompt lives in:
   - agent-work/registry/agent-5-antigravity-cli.md
   - agent-work/registry/agent-6-antigravity-cli.md
3. Start Antigravity with that bootstrap prompt at the top of the session
4. Assign tasks the same way as Gemini CLI tasks

## Slot Mapping

| Slot | Current | After migration |
|---|---|---|
| A5 | Gemini CLI | Antigravity CLI |
| A6 | Gemini CLI | Antigravity CLI |

Until migration is verified, A5 and A6 remain on Gemini CLI.
