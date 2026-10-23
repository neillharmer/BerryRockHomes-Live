# Berry Rock Homes Website

The marketing website for **Berry Rock Homes (BRH)** and its **Pathway**
lease-to-own program. Built with **Next.js 15 (App Router)**, **React 19**,
**JavaScript/JSX** (not TypeScript), **Tailwind CSS 3**, and **Framer Motion**.

> **New here? Read [`CLAUDE.md`](CLAUDE.md) first** — it's the full project
> context (architecture, non-obvious functionality, gotchas). Other docs:
> [`SITEMAP.md`](SITEMAP.md) (page map), [`REDIRECTS.md`](REDIRECTS.md) (SEO/
> redirects), [`.impeccable.md`](.impeccable.md) (brand & design).

## Quick start

You need **Git** and **Node.js** installed.

```bash
git clone https://github.com/SaxumDigital/2026_BerryRockHomes.git
cd 2026_BerryRockHomes
npm install
npm run dev          # → http://localhost:3000
```

Other commands: `npm run build` (production build), `npm run start` (serve the
build), `npm run lint` (eslint).

## Architecture at a glance

- Routes live in `src/app/<route>/page.jsx` — these are **thin wrappers** that
  set SEO `metadata` and render a matching component from `src/views/`.
- Reusable UI is in `src/components/`; page bodies are in `src/views/`.
- **All site copy/content lives in `src/data/`** (articles, markets, press
  releases, legal text, structured data) — not hardcoded in components.

See [`CLAUDE.md`](CLAUDE.md) for the full picture and [`SITEMAP.md`](SITEMAP.md)
for every page.

## The workflow (how everyone should work)

GitHub is the **source of truth**. The standard loop:

1. **Clone & install** — `git clone …` then `npm install` (see Quick start).
2. **Branch** — create a branch off `main` before you change anything.
   **Never commit directly to `main`.**
   ```bash
   git checkout main
   git pull                       # get the latest
   git checkout -b feature/my-change
   ```
3. **Work locally** — edit the files (with an AI assistant or by hand).
4. **Preview locally** — `npm run dev`, open http://localhost:3000, and check
   your change. Run `npm run lint` before you finish.
5. **Approve** — confirm it looks right in the local preview.
6. **Commit & push your branch:**
   ```bash
   git add .
   git commit -m "Describe what you changed"
   git push -u origin feature/my-change
   ```
7. **Open a Pull Request** into `main` on GitHub, review it, then **merge**.
   Delete the branch after it's merged.

### Branch rules — when and how

- **`main` is the deployed source of truth** and should always be in a working,
  previewable state. **Do not push directly to `main`** — use a branch + PR.
- **One branch per unit of work**, and keep them short-lived. Naming:
  - `feature/<slug>` — new pages, sections, or functionality (e.g.
    `feature/pathway-mobile`)
  - `fix/<slug>` — bug fixes (e.g. `fix/apply-prefill`)
  - `content/<slug>` — copy, articles, press releases (e.g.
    `content/october-press-release`)
- **Always branch off the latest `main`** (`git checkout main && git pull`
  first).
- **Keep branches focused and small** so PRs are easy to review. Open the PR
  while it's still small rather than batching many unrelated changes.
- **Merge to `main` only after** local preview + PR review, then **delete the
  branch**.
- If a branch gets stale, bring it up to date: `git pull origin main` and
  merge/rebase before continuing.

## A note on the Google Drive copy

This project folder may live in Google Drive so the team can access it. **The
GitHub repo — not the Drive folder — is the source of truth. Always clone from
GitHub** and follow the workflow above.

If you open the Drive copy directly:

- **Don't trust or sync `node_modules/` and `.next/`.** Google Drive does *not*
  respect `.gitignore` and will try to sync these — they contain thousands of
  files (`node_modules`) and a constantly-rewritten build cache (`.next`), which
  makes Drive slow and noisy for no benefit. Both regenerate on your own machine
  from `npm install` / `npm run build`, so it's safe (and recommended) to delete
  them from the Drive copy or exclude them from Drive sync.
- Do your real work from a **GitHub clone on your own machine**, not from inside
  the synced Drive folder.
