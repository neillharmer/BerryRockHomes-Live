# AGENTS.md

This is the marketing website for **Berry Rock Homes (BRH)** — a Next.js 15 (App
Router) + React 19 site written in **JavaScript/JSX (not TypeScript)**, styled
with Tailwind CSS 3 and animated with Framer Motion. It promotes the **Pathway**
lease-to-own program for people who've been denied a traditional mortgage.

**The full project context for AI assistants lives in [`CLAUDE.md`](CLAUDE.md).**
Read it before making changes — it covers the architecture (routes in `src/app/`
are thin wrappers over `src/views/`; content lives in `src/data/`), the
non-obvious functionality (the Pathway "click-lock" interaction, the Formsite
embed, display-only forms), and important gotchas.

Other references:
- [`README.md`](README.md) — setup and the clone → branch → preview → PR workflow
- [`SITEMAP.md`](SITEMAP.md) — the full page map
- [`REDIRECTS.md`](REDIRECTS.md) — SEO/redirect strategy from the Wix migration
- [`.impeccable.md`](.impeccable.md) — brand and design brief

## Quick reference

```bash
npm install      # after cloning
npm run dev      # → http://localhost:3000
npm run lint     # before committing
```

Work on a branch off `main` (never commit directly to `main`), preview locally,
then open a pull request. See `README.md` for the branch rules.
