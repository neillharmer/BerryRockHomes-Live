# SITEMAP.md — Berry Rock Homes page map

A human-readable map of every page on the site: its URL, the files that render
it, and what it's for. This complements the machine-generated sitemap at
[`src/app/sitemap.js`](src/app/sitemap.js) (the `sitemap.xml` served to crawlers)
and the visual [`sitemap-diagram.svg`](sitemap-diagram.svg).

**How routing works here:** each route folder in `src/app/<route>/page.jsx` is a
thin wrapper (metadata + delegation) that renders a component from
`src/views/`. See [`CLAUDE.md`](CLAUDE.md) for the full architecture.

---

## Primary / product pages

| URL | Renders (`src/app/` → `src/views/`) | Purpose |
| --- | --- | --- |
| `/` | `page.jsx` → `Home.jsx` | Home / landing page |
| `/how-it-works` | `how-it-works/` → `HowItWorks.jsx` | Step-by-step explanation of the program (the canonical Pathway page; `/pathway` 301s here) |
| `/is-it-for-me` | `is-it-for-me/` → `IsItForMe.jsx` | Self-qualification / "is this right for you" |
| `/apply` | `apply/` → `Apply.jsx` | The application — embeds the live **Formsite** form |
| `/compare-us` | `compare-us/` → `CompareUs.jsx` | BRH vs. alternatives comparison |
| `/faq` | `faq/` → `FAQ.jsx` | Frequently asked questions |

## About / trust pages

| URL | Renders | Purpose |
| --- | --- | --- |
| `/about` | `about/` → `WhyUs.jsx` | About BRH / why us (view keeps its pre-launch name) |
| `/your-money-at-work` | `your-money-at-work/` → `ByTheNumbers.jsx` | The numbers / how funds are used (view keeps its pre-launch name) |
| `/contact` | `contact/` → `Contact.jsx` | Contact page — **display-only form, no backend wiring** |

## Realtor / partner pages

| URL | Renders | Purpose |
| --- | --- | --- |
| `/realtor-referral-partner` | `realtor-referral-partner/` → `ForAgents.jsx` | Realtor Referral Partner (view keeps its pre-launch name) |
| `/realtor-quick-connect` | `realtor-quick-connect/` → `RealtorQuickConnect.jsx` | Lets agents refer a client; prefills into `/apply` — **display-only form** |
| `/agent-resources` | `agent-resources/` → `AgentResources.jsx` | Downloadable resources for agents |

## Content pages (data-driven)

| URL | Renders | Purpose |
| --- | --- | --- |
| `/resources` | `resources/` → `Resources.jsx` | Resource hub |
| `/news` | `news/` → `News.jsx` | News index |
| `/news/press/[slug]` | `news/press/[slug]/` → `PressRelease.jsx` | Individual press release — **dynamic**, from `data/pressReleases.js` |
| `/articles` | `articles/` → `Articles.jsx` | Articles index |
| `/articles/[slug]` | `articles/[slug]/` → `Article.jsx` | Individual article — **dynamic**, from `data/articles.js` |
| `/markets/[marketId]` | `markets/[marketId]/` → `Market.jsx` | Metro market page — **dynamic**, from `data/markets.js` (5 metros) |

**Market slugs:** `indianapolis-in`, `kansas-city-mo`, `oklahoma-city-ok`,
`st-louis-mo`, `tulsa-ok` (`kansas-city-ks` was merged into `kansas-city-mo`).

## Legal pages (excluded from public sitemap, `noindex`)

| URL | Renders | Purpose |
| --- | --- | --- |
| `/terms` | `terms/` → `Terms.jsx` | Terms of service |
| `/privacy` | `privacy/` → `Privacy.jsx` | Privacy policy |
| `/fair-housing` | `fair-housing/` → `FairHousing.jsx` | Fair housing statement |

Content for these comes from `src/data/legalContent.js`.

## Internal / dev routes (not for the public)

| URL | Notes |
| --- | --- |
| `/styleguide` | Design-system reference (`src/styleguide/`). Disallowed in `robots.js`. |
| `/hero-preview` | Dev/preview scratch route for hero variants. |
| (404) | `src/app/not-found.jsx` — custom 404 page. |

---

### Keeping this in sync

When you **add, remove, or rename a route**, update all of:
1. This file (`SITEMAP.md`)
2. `src/app/sitemap.js` (public crawler sitemap) — if it's a public, indexable page
3. `next.config.mjs` (`redirects()`) — if you renamed a route that already had traffic
4. Navigation links in `src/components/Navigation/`
