# CLAUDE.md — Project Context for Berry Rock Homes Website

> This file is the canonical context for anyone (human or AI assistant) working
> on this project. Read it first. Related docs: [`README.md`](README.md) (setup
> & workflow), [`SITEMAP.md`](SITEMAP.md) (page map), [`REDIRECTS.md`](REDIRECTS.md)
> (SEO/redirect strategy), [`.impeccable.md`](.impeccable.md) (brand & design brief).

## What this is

The marketing website for **Berry Rock Homes (BRH)**. The product it sells is the
**Pathway** program — a lease-to-own path to homeownership aimed at people who
have been **denied a traditional mortgage** but want to own a home. The primary
audience is those renters/would-be buyers; a secondary audience is **realtors**
who refer clients into the program.

The site was **migrated from Wix** to this custom Next.js codebase, which is why
there is a detailed legacy-URL redirect strategy (see `REDIRECTS.md`).

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **JavaScript / JSX — NOT TypeScript.** Files are `.jsx`. There is only a
  `jsconfig.json` (no `tsconfig.json`). The `@/*` import alias maps to `./src/*`.
- **Tailwind CSS 3** for styling (+ PostCSS, autoprefixer). One global stylesheet
  at `src/app/globals.css`; everything else is Tailwind utility classes.
- **Framer Motion 12** for animation; **lucide-react** for icons.
- Rendered as SSG / server components where possible.
- **Note:** the `vite.svg` / `index.html` references in `tailwind.config.js` are
  vestigial leftovers from an earlier scaffold — this is not a Vite project.

## Commands

```bash
npm install        # install dependencies (run once after cloning)
npm run dev        # local dev server → http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint (next/core-web-vitals)
```

There is no test suite committed. `playwright` is present as a devDependency but
there are no test files in `src/`.

## Architecture — the mental model

**1. Routes are thin wrappers; the UI lives in `views/`.**
Every route file `src/app/**/page.jsx` typically does two things: export
`metadata` (for SEO) and render a matching component from `src/views/*.jsx`. The
actual `'use client'` page UI lives in `views/`.

```
src/app/apply/page.jsx      →  src/views/Apply.jsx
src/app/how-it-works/page.jsx  →  src/views/HowItWorks.jsx
src/app/contact/page.jsx    →  src/views/Contact.jsx
```

Some view files kept their **pre-launch names** after the route was renamed, so
the folder name and the view name differ:

| Route (`src/app/`)          | View (`src/views/`)   |
| --------------------------- | --------------------- |
| `/about`                    | `WhyUs.jsx`           |
| `/your-money-at-work`       | `ByTheNumbers.jsx`    |
| `/realtor-referral-partner`  | `ForAgents.jsx`       |

(These renames are also enforced as redirects in `next.config.mjs`.)

**2. Reusable UI lives in `src/components/`**, grouped by area:
`Home/`, `Navigation/`, `Shared/`, `Apply/`, `Calculator/`, `IsItForMe/`,
`Agent/`.

**3. Content is data, not hardcoded in components.** All copy/content lives in
`src/data/` modules and is iterated by dynamic routes and the sitemap:
- `articles.js`, `pressReleases.js` — blog/news content (+ their slugs)
- `markets.js` — the 5 metro market pages (`getMarketBySlug`)
- `successStories.js`, `legalContent.js`, `usCoverageMap.js`
- `schema.js` — JSON-LD builders (`pathwayServiceSchema`,
  `buildMarketServiceSchema`, `buildBreadcrumb`, etc.)

**4. `src/app/template.jsx`** re-implements scroll-to-top on navigation — a
migration artifact replacing React Router's old `ScrollToTop`.

**5. `src/app/layout.jsx`** is the true entry point: global `<Navbar>`,
`<Footer>`, `<CookieConsent>`, Organization + WebSite JSON-LD, and the Google
fonts **Outfit** (sans) + **Newsreader** (serif) via `next/font/google`
(self-hosted at build; no runtime font CDN).

See [`SITEMAP.md`](SITEMAP.md) for the full route list.

## Non-obvious functionality (things you would not guess)

- **Pathway "click-lock" scroll interaction** —
  `src/components/Home/PathwaySection.jsx` (a home-page section — the Pathway
  program itself is explained on `/how-it-works`). On desktop it's a scroll-pinned
  "stage" with 6 named
  personas on an arc, driven by Framer Motion `useSpring`. Clicking a persona
  fires a programmatic smooth-scroll, which itself emits `scroll` events that
  would otherwise re-derive (and overwrite) the active persona — the classic
  "click Aaron, see Priya" bug. The `clickLockRef` mechanism ignores
  scroll-derived updates while locked and **releases only on genuine user input**
  (`wheel` / `touchmove` / `keydown`), because programmatic scroll never fires
  those. Mobile uses an entirely separate `MobilePathway` vertical timeline.

- **Formsite embeds** — the generic embed lives in
  `src/components/Shared/FormsiteEmbed.jsx`: it injects Formsite's
  `embedManager.js` from `fs9.formsite.com` and takes `embedId` / `eParam`
  props (plus optional `prePopulate`), so submission and PII handling stay
  entirely on Formsite. Three forms use it: the **Apply** form (via the wrapper
  `src/components/Apply/FormsiteEmbed.jsx`, which adds **realtor-referral
  prefill** two ways — (a) URL query params (`/apply?firstName=…&hasRealtor=…`)
  and (b) a `postMessage` fallback with 2s timeout — mapped to Formsite field
  refs `id30`, `id31`, `id59`, …), the **Realtor Quick Connect** form
  (`views/RealtorQuickConnect.jsx`, embed `1373593870` / `BerryRockHomes/form7`),
  and the **Realtor Partner registration** form
  (`components/Agent/AgentRegistrationCta.jsx`, embed `944023638` /
  `BerryRockHomes/5nocezfqjf`, shared by `views/ForAgents.jsx` and
  `views/AgentResources.jsx`). All three reproduce the exact embeds the legacy
  Wix site used. The iframe is cleaned up on unmount.

- **The Contact form is display-only** —
  `views/Contact.jsx` validates client-side (`checkValidity()` toggles the
  button) but the submit button is `type="button"` with **no handler and no
  backend**. It does not post anywhere yet. See **Outstanding work → forms**
  below.

- **InteractiveCalculator** — `src/components/Calculator/InteractiveCalculator.jsx`
  computes program numbers client-side from a home-price slider (option
  consideration, monthly rental credit, estimated payment). The monthly payment
  uses a **per-market formula** (`PAYMENT_FORMULAS` / `monthlyPayment` in
  `data/markets.js`; Kansas City has separate KS/MO formulas via
  `stateOptions`, shown as a state toggle). Pass `market` to pin it to one
  market (as each market page does); without it, the visitor picks a market.

- **Redirects** — `next.config.mjs`'s `redirects()` holds ~18 permanent 301s from
  old Wix URLs plus pre-launch internal renames. Full rationale in `REDIRECTS.md`.

## Design & brand

- Brand brief (voice, audience, palette, principles): [`.impeccable.md`](.impeccable.md).
  Voice is plain-spoken, reassuring, dignified; aesthetic is editorial/documentary,
  light theme.
- Design tokens (custom color scales — `berry`/coral `#E8553D`, `navy` `#002e5d`,
  plus `sand`, `sage`, `khaki`; custom shadows `soft`/`glow`/`glass`) live in
  `tailwind.config.js`.
- Component/token reference: the `/styleguide` route (`src/styleguide/`,
  `moduleRegistry.js`, `tokens.js`) and the standalone `BRH-Style-Guide.html`.
  `/styleguide` is disallowed in `robots.js`.

## SEO

- JSON-LD: `src/data/schema.js` + `src/components/Shared/JsonLd.jsx`, plus the
  Organization/WebSite schema in `layout.jsx`.
- `src/app/sitemap.js` generates the public sitemap (iterates `data/`); legal
  pages are intentionally excluded and carry `noindex`.
- `src/app/robots.js` disallows `/api/` and `/styleguide`.
- Migration/redirect details: `REDIRECTS.md`.

## Integrations & gotchas

- **Formsite** (`fs9.formsite.com`) is the **only real data pipeline.** The Apply
  form submits there.
- **Google Tag Manager** (container `GTM-P652B7QF`) is loaded via
  `src/components/Shared/GtmLoader.jsx` — a small client wrapper around
  `@next/third-parties/google` (`<GoogleTagManager>`), rendered from
  `src/app/layout.jsx`. It applies **two gates** before injecting anything:
  (1) a `window.location.hostname` check — it loads **only** on
  `berryrockhomes.com` / `www.berryrockhomes.com`, never on the Vercel dev
  alias (`2026-berry-rock-homes.vercel.app`) or localhost (a runtime check, not
  `NODE_ENV`/`VERCEL_ENV`, because the same production build serves both the
  live domain and the dev alias); and (2) the **consent gate** (see next
  bullet).
- **Google Analytics (GA4, measurement ID `G-BY5Q067WRC`)** is configured as
  **tags inside the GTM container** (`GTM-P652B7QF`), **not** loaded in this
  repo. As of this writing the container holds a base *Google Tag* firing on
  *Initialization – All Pages* plus a *GA4 Event* tag firing on a *History
  Change – SPA* trigger (the App Router does client-side navigation, so a
  History Change trigger is what captures subsequent pageviews). Because GTM
  owns GA4, **do not add a code-based GA4 loader** (`<GoogleAnalytics>` /
  `GaLoader`) for `G-BY5Q067WRC` in this repo — running both fires every
  pageview twice and inflates GA4. (An earlier `GaLoader` did exactly this and
  was removed for that reason; it never reached `main`.) Any other
  analytics/pixels (Meta, ad tags, etc.) are likewise configured **inside the
  GTM container**, not in this repo; the consent gate on `GtmLoader` keeps all
  of them — GA4 included — from firing pre-consent. Note: the Next GTM
  component injects only the `gtm.js` script, **not** the `<noscript>` iframe
  fallback (by design).
- **Consent gate** — `src/lib/consent.js` is the single source of truth.
  It stores `granted` / `denied` in the `brh-cookie-consent` localStorage key
  and exposes `getConsent()`, `setConsent()`, `openConsentBanner()`, and a
  `useConsent()` hook. `GtmLoader` holds off loading until
  `consent === 'granted'`, so **no analytics fire before the visitor clicks
  Accept** — and because GA4 lives inside the gated container, that covers GA4
  too. `src/components/Shared/CookieConsent.jsx` is the Accept/Decline
  banner (shown only while consent is undecided); the footer's **"Cookie
  Settings"** control calls `openConsentBanner()` to re-open it so a choice can
  be changed. Same-tab clicks propagate via a `brh-consent-change`
  `CustomEvent` (the native `storage` event only fires cross-tab), so Accept
  mounts the loader without a reload. Back-compat: the pre-gate banner stored
  `accepted`, which `getConsent()` maps to `granted`. Caveat: **withdrawing**
  consent unmounts the React components but does not remove already-injected
  `gtag`/GTM scripts from the current page — it takes full effect on the next
  page load. This is a hard load-time gate, **not** Google Consent Mode v2.
- **No `.env` is needed** — integrations (the Formsite key) are hardcoded in
  components. There is no `.env.example` and no env-var convention.
- **No deployment config is committed** (no `vercel.json` / `netlify.toml` /
  GitHub Actions). Vercel appears to be the intended target — see `REDIRECTS.md`
  for host-level redirect steps to do at deploy time.
- No custom backend / API routes exist (`/api/` is precautionary in robots).

## Outstanding work

### Forms — still need to be connected

Four lead-capture forms exist in the UI. Apply, Realtor Quick Connect, and
Realtor Partner submit via Formsite embeds; General Contact is a display-only
shell (see "display-only" note above) and **still needs to be wired to a
backend — either Formsite or Salesforce** (destination TBD).

| Form | Where | Status | To do |
| --- | --- | --- | --- |
| **Apply** | `components/Apply/FormsiteEmbed.jsx` (via `views/Apply.jsx`) | ✅ Connected (Formsite) | **Test** end-to-end submission + realtor-referral prefill |
| **General Contact** | `views/Contact.jsx` | ❌ Display-only, no backend | Connect to Formsite or Salesforce |
| **Realtor Quick Connect** | `views/RealtorQuickConnect.jsx` (via `components/Shared/FormsiteEmbed.jsx`) | ✅ Connected (Formsite, same form the legacy Wix site embedded) | **Test** end-to-end submission |
| **Realtor Partner** ("Ready to become a Realtor Partner?") | `components/Agent/AgentRegistrationCta.jsx` (shared by `views/ForAgents.jsx` and `views/AgentResources.jsx`) | ✅ Connected (Formsite, same form the legacy Wix site's `/realtors` page embedded) | **Test** end-to-end submission |

Notes for whoever picks this up: the Contact form currently uses a
`type="button"` submit with **no handler** (`checkValidity()` only toggles the
button's enabled state). Wiring it means choosing the destination (Formsite
form vs. Salesforce), then either posting to it or, for Formsite, rendering
`components/Shared/FormsiteEmbed.jsx` with that form's embed key — if a
Formsite form already exists for it on the same account (check the Formsite
dashboard for `BerryRockHomes` on fs9), this is the low-risk path the two
realtor-form ports took.

## Workflow

See [`README.md`](README.md) for the full setup and the clone → branch → work →
preview → approve → push → PR workflow, including branch naming rules. Short
version: **branch off `main`, never commit directly to `main`, preview locally
with `npm run dev`, then open a PR.**
