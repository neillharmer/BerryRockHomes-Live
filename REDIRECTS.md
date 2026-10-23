# Redirect Strategy — Wix site to new Next.js site

Maps every indexed URL on the old Wix site (`www.berryrockhomes.com`) to its new destination.
All redirects are implemented as permanent (301) redirects in [`next.config.mjs`](next.config.mjs)
under `redirects()`, so they are enforced server-side and versioned with the code.

Old URL inventory sourced from `https://www.berryrockhomes.com/pages-sitemap.xml` (Wix, lastmod 2026-05-21).

## Host canonicalization

**Decision: `www.berryrockhomes.com` is the canonical host** (matches the old Wix site, so existing
rankings and backlinks carry over).

Two parts, both required:

1. **Code (done):** `metadataBase`, sitemap, robots, and JSON-LD schema now all emit
   `https://www.berryrockhomes.com`. Files updated: `src/app/layout.jsx`, `src/app/sitemap.js`,
   `src/app/robots.js`, `src/data/schema.js`. Per-page `alternates.canonical` are relative paths,
   so they resolve to www automatically.
2. **Hosting (to do at deploy):** add a host-level 301 so the bare apex `berryrockhomes.com`
   forwards to `www.berryrockhomes.com`. This lives at the hosting/DNS provider, not in this repo.
   On Vercel: add both domains to the project and set `www` as primary (apex auto-redirects).
   On Netlify/Cloudflare: set the apex-to-www redirect rule.

## Path redirect map

| Old URL | New URL | Notes |
|---------|---------|-------|
| `/` | `/` | Home. No redirect needed. |
| `/contact` | `/contact` | Same path. No redirect needed. |
| `/faq` | `/faq` | Same path. No redirect needed. |
| `/news` | `/news` | Same path. No redirect needed. |
| `/application` | `/apply` | Application form renamed. |
| `/who-we-are` | `/about` | About page. |
| `/by-the-numbers` | `/your-money-at-work` | Already covered by pre-launch rename. |
| `/the-process` | `/how-it-works` | Process explainer. |
| `/the-paperwork` | `/how-it-works` | Paperwork/process folded into How It Works. |
| `/program` | `/how-it-works` | Buyer lease-to-purchase program (confirmed). |
| `/pathway` | `/how-it-works` | Redundant with How It Works; page removed and consolidated. |
| `/video` | `/how-it-works` | Video content lives on How It Works. |
| `/realtors` | `/realtor-referral-partner` | Realtor landing. |
| `/realtor-quick-connect` | `/realtor-quick-connect` | Same path. No redirect needed — the new site has a native Quick Connect page at this URL (realtor client referral form). |
| `/clientlanding` | `/` | Client campaign landing page (campaign ended; sent to home). |
| `/remarketing-kc-landing-page` | `/` | KC remarketing campaign LP (campaign ended; sent to home). |
| `/copy-of-new-realtor-landing-page` | `/realtor-referral-partner` | Wix editor duplicate. |
| `/copy-of-the-paperwork` | `/how-it-works` | Wix editor duplicate. |
| `/copy-of-video` | `/how-it-works` | Wix editor duplicate. |

## New pages with no old equivalent

These are net-new on the Next.js site (no redirect needed; submit the new sitemap so they get
crawled): `/is-it-for-me`, `/compare-us`, `/agent-resources`, `/resources`,
`/articles` (+ article slugs), `/markets/*`, `/news/press/*`, `/terms`, `/privacy`, `/fair-housing`.

## Post-launch checklist

- [ ] Deploy with the `redirects()` config live.
- [ ] Add the host-level www/apex 301 at the hosting layer.
- [ ] Submit the new sitemap (`/sitemap.xml`) in Google Search Console.
- [ ] Use GSC "Removals" / "Change of Address" if the Wix property was verified there.
- [ ] Spot-check each old URL returns `301` to the correct new URL (`curl -sI <old-url>`).
- [ ] Monitor GSC Coverage/404 report for 30-60 days for any missed legacy URLs.
