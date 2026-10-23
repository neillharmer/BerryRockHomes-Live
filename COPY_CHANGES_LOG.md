# Copy Changes Log — Client Walkthrough Revisions

Branch: `client-edits/aug-walkthrough`
Source: consolidated feedback from the August 5, 7, and 10, 2026 walkthroughs (see `BRH_edit_checklist.md`).

**Important note on this branch's history:** this branch was originally cut from a local snapshot that turned out to be ~4 weeks behind the real `origin/main` (a credentials issue in the working environment prevented fetching). That earlier work is preserved on `client-edits/aug-walkthrough-stale-base` for reference, but none of it was ever applied to the real site. This branch was re-cut from the correct, current `origin/main` (`d981ab8`), and the terminology/tone/branding sweep below was redone from scratch against the real current codebase — including several locations that only exist in newer upstream commits and weren't part of the original pass (`articles.js`, `schema.js`, `IsItForMe.jsx`, `HomeTestimonials.jsx`, and a second founder photo).

This log tracks every copy/content change made on this branch, in commit order, so the team can review before merge.

---

## Commit `ae30324` — Full terminology, tone, founder-photo, values, and metrics sweep (2026-08-24)

### 1. Terminology removed sitewide

**"equity" → "locked-in price" / "benefit of increased home value" / reworded** (calculator's own "Avg. Equity at Exit" stat and `InteractiveCalculator.jsx` left untouched — client's explicit exception, handling separately)

| File | Before | After |
|---|---|---|
| `HomeTestimonials.jsx` | "Now I own my home — and have equity to boot." | "Now I own my home, and every bit of it is mine." |
| `Market.jsx` (Tulsa) | "...start building equity, Tulsa makes the numbers work." | "...start benefiting from increased home value, Tulsa makes the numbers work." |
| `articles.js` (×4) | "builds equity for your landlord" / "No equity, no asset..." / "Each mortgage payment builds equity..." / "...the equity you could have been building goes unbuilt." | "builds your landlord's wealth" / "No ownership stake, no asset..." / "...builds ownership in the home..." / "...the benefit of increased home value you could have captured goes unrealized." |
| `IsItForMe.jsx` | "...the keys, and the equity, are yours." | "...the keys, and the benefit of increased home value, are yours." |
| `CompareUs.jsx` (×2) | `feature: 'Potential equity opportunity'` / "Buyers can potentially build equity..." / "No equity opportunity when renting." / "builds your landlord's equity" | `feature: 'Benefit of increased home value'` / "...benefit from increased home value..." / "No opportunity to benefit from home value when renting." / "builds your landlord's wealth" |
| `ByTheNumbers.jsx` | "...the potential equity you can build on your way to owning the home." | "...the potential benefit of increased home value on your way to owning the home." |

**"cash" / "cash buyer" / "cash closings" / "cash offers" → "reliable closings"** — 20+ locations across `AtAGlance.jsx`, `ProcessSteps.jsx`, `ProcessAtAGlance.jsx`, `HowItWorksPreview.jsx`, `successStories.js` (×3), `articles.js` (×3), `schema.js`, `FAQ.jsx` (×5), `AgentResources.jsx` (×6), `HowItWorks.jsx` (image alt), `ForAgents.jsx` (×3). Representative examples:

| File | Before | After |
|---|---|---|
| `AtAGlance.jsx` | "We submit a strong cash offer..." | "We submit a strong offer backed by a reliable closing..." |
| `FAQ.jsx` | "...purchases it in cash on your behalf..." (×4 similar) | "...purchases it through a reliable closing on your behalf..." |
| `AgentResources.jsx` | "Clear to Close" / "...prepare cash wires." | "Prepare for Closing" / "...work with title and prepare for closing." |
| `ForAgents.jsx` | title: 'Reliable cash closings' | title: 'Reliable closings' |
| `HowItWorks.jsx` | imageAlt: "A clean cash offer being signed at a closing table." | "A reliable closing being finalized at the table." |

*Left alone:* `HowItWorks.jsx`'s `imageSrc: '/images/pathway/step-5-cash-offer.png'` (asset filename, not visible copy) and `IsThisYou.jsx`'s "cash flow" (unrelated financial term).

**"fair market rent" → reworded as leasing + buy-when-qualified**

| File | Before | After |
|---|---|---|
| `FAQ.jsx` (×3) | "...sets your monthly payment at fair market rent..." / "Your monthly lease payment is set at fair market rent for the home, based on current comparable rentals..." | "...sets your monthly lease payment..." / "You lease the home for a monthly payment, and you have the option to buy once you qualify for a mortgage." |
| `HowItWorks.jsx` (×2) | "...sets your monthly payment at fair market rent..." / `points: ['Fair market rent', ...]` | "...sets your monthly lease payment..." / `points: ['A locked-in monthly lease payment', ...]` |
| `IsItForMe.jsx` | "...lease it at fair market rent, and you use that time to build toward a mortgage..." | "...lease it, and you buy it once you qualify for a mortgage..." |

**"empowerment" → "opportunity", "dignity"/"dignified" → "stability"**

| File | Before | After |
|---|---|---|
| `about/page.jsx` | "...a dignified pathway to homeownership." | "...a stable pathway to homeownership." |
| `layout.jsx` | "...empowering responsible renters to achieve their dreams." | "...giving responsible renters the opportunity to achieve their dreams." |
| `Footer.jsx` | "...empowering responsible renters to achieve their dream of home ownership." | "...giving responsible renters the opportunity to achieve their dream of home ownership." |
| `successStories.js` | "A completely dignified experience." | "A completely stable experience." |
| `FAQ.jsx` | "...a clearer, more dignified way home." | "...a clearer way home." |
| `WhyUs.jsx` (values, ×2) | title: "Empowerment" / title: "Dignity" | title: "Opportunity" / title: "Stability" (see Core Values section below for full rewrite) |
| `WhyUs.jsx` (mission) | "...with your dignity intact the whole way through." | "...with stability the whole way through." |
| `WhyUs.jsx` (closing band) | "...a clearer, more dignified way home." | "...a clearer way home." |

**"loophole" / "gimmick" / "shortcut" removed**

| File | Before | After |
|---|---|---|
| `articles.js` | "A lease-to-purchase pathway is not a loophole or a gimmick. It is a structured bridge between renting and owning..." | "The lease-purchase pathway is a structured bridge between renting and owning..." |

**"no cost" / "free" / "no fees" / "no membership" removed from realtor messaging** — per notes: *"Shift the lead message from 'always free to partner' / 'no cost' to earning value... an additional tool in your tool belt to help you serve more families and earn more commission."*

| File | Before | After |
|---|---|---|
| `ForAgents.jsx` | title: "Always free to partner" / "No fees, no membership dues, no marketing spend. It's free to partner..." | title: "An additional tool for your tool belt" / "An additional tool in your tool belt to help you serve more families and earn more commission for clients who don't fit the traditional mortgage box." |
| `AgentResources.jsx` | "...no cost, no obligation, and no need to wait for your first client." | "...to get instant access to your referral link and toolkit — no need to wait for your first client." |
| `AgentRegistrationCta.jsx` (×2) | "...There's no cost and no obligation to become a partner." / "Schedule a free 30-minute consultation" | (sentence removed) / "Schedule a 30-minute consultation" |
| `realtor-partner-program/page.jsx` | "...Full commissions, no hidden costs, seamless process." | "...full commissions and a reliable, seamless closing process." |

**"clear to close" → "work with title" / "prepare for closing"**

| File | Before | After |
|---|---|---|
| `AgentResources.jsx` | title: "Clear to Close" / "...review title and prepare cash wires." | title: "Prepare for Closing" / "...work with title and prepare for closing." |

---

### 2. Founder photos removed

| File | Change |
|---|---|
| `WhyUs.jsx` | Removed hero `<img>` (`nic-and-cam-2.jpg`) + figcaption "Co-founders Nick Berry and Cameron Rock" (full-name violation); collapsed hero to single column. Deleted unused dead-code `team` array (photos + full bios, never rendered). |
| `IsItForMe.jsx` | Removed a second founder photo (`nic-and-cam2-dark.webp`) in the "Get to know the team" closing band — this location didn't exist in the original (stale) pass. Collapsed to single column. |

*Left alone (per client decision):* `src/data/pressReleases.js` — formal press-release quote attributions using "Cameron Rock, Co-Founder" / "Nick Berry, Co-Founder" (different context from on-page marketing copy).

---

### 3. Core values reordered + rewritten — `WhyUs.jsx`

Reordered Integrity/Transparency/Empowerment/Dignity → **Opportunity, Integrity, Transparency, Stability** (styling `card`/`icon_bg` fields preserved per value):

| Title | Description |
|---|---|
| Opportunity | "Placed in the home of their choice from the start, residents climb the ladder with their head held high." *(unchanged)* |
| Integrity | "A 10-year track record of delivering for our clients — doing exactly what we said we would, from day one." *(Nick's confirmed phrase, Part 3)* |
| Transparency | "We manage expectations with clear detail regarding the road to homeownership." *(unchanged)* |
| Stability | "A stable home is the foundation of a healthy family — a place to call home that lets you make confident decisions about the future." |

Also on `WhyUs.jsx`, per Section 2 checklist items that live here (not the homepage, despite the checklist's page label):
- "Clear Pathway" feature description → "Unlike traditional renting, our program is designed with a clear goal: home ownership. We outline the exact steps from day one."
- "Credit Support" → renamed **"Credit Reporting"**, description → "We work with partners to report your on-time payments to improve your credit score during your lease period, preparing you for a traditional mortgage."
- "Aligned with your goals" subtitle: "We are here to help you become a homeowner..." → "We are here to improve access to home ownership... Our program was built and designed to create a clear, transparent path for your family. We don't just say that, we built the track record to prove it."
- Hero subhead: "...what you have been denied and what you deserve..." → "...where you are today and the home you deserve..."
- Mission paragraph: removed "a single rejection can make owning a home feel out of reach" → "owning a home can feel out of reach"

---

### 4. Metrics — client confirmed the walkthrough figures should supersede current live numbers

| Metric | Before (live) | After |
|---|---|---|
| Families (`WhyUs.jsx`) | "1,100+" | **"1,600+"** |
| Partner agents (`ForAgents.jsx`) | "300+" | **"2,500+"** |
| Markets | "5" | unchanged (already matched) |

**HOLD — left unchanged, visible code comments added** at `WhyUs.jsx` and `ForAgents.jsx` for Nick to confirm before either changes:
- $275M+ funding volume (Part 2 vs Part 3 conflict: $275M vs $300M)
- 83% success rate (~18 months old, needs reconfirmation)

---

### 5. Tone shift: crisis/debt-relief → inspirational/opportunity-focused

Per notes: *"frame the company as an opportunity creator, not charity or crisis relief; remove negative framing about traditional mortgage lenders."*

**`successStories.js`** — rewrote 4 of 5 client stories, removing "turned away," "rejections," "crushed," "demoralizing," "gave up," "looked like a risk," "seemed impossible," "stepped in and saved," "last resort," "second-class," "falling behind," plus two UI stat labels built on rejection/rescue framing ("Lender rejections before" → "Years running his own business"; "Client deals saved" → "Client deals closed").

**`PathwaySection.jsx`** — the Maya persona (which now reads "She didn't take no for an answer." / "Three lenders turned Maya down..." — this exact content only exists in the current upstream version and wasn't part of the original pass) rewritten:
- question: "Is owning a home even possible for me?" → "What's my path to owning a home?"
- title: "She didn't take no for an answer." → "A different path forward."
- body: "Three lenders turned Maya down..." → "As a freelancer, Maya's income didn't fit the standard mortgage checklist. She didn't know there was another way — until she found one built for people like her."
- Shared default/fallback body (2 spots): "...turned away by a traditional lender..." → "...outside the traditional mortgage box..."

**`MixedTestimonialsGrid.jsx`** — headline "From lender 'no' to homeowner..." → "From renter to homeowner..."; "turned away by traditional lenders" → "needed a different path to homeownership"; pull quote "...when others just said no." → "...gave us a real shot at the home we wanted."

**`TestimonialsSlider.jsx`** — "denied a traditional mortgage" → "traditional mortgage lenders didn't have a path for their income"; matching pull-quote fix; removed "Getting a mortgage was nearly impossible before" lead-in (kept the rest of that quote unchanged).

**`WhyUs.jsx`** (mission) — "a single rejection can make owning a home feel out of reach" → "owning a home can feel out of reach."

**`FAQ.jsx`** — "turned away by banks" → "didn't fit the traditional banking checklist"; "Am I disqualified?" → "Can I still qualify?"

**`Market.jsx`** — Indianapolis: "priced out or turned away by a lender... math finally works in your favor" → "a market where the math works in your favor, even if you don't fit a traditional lender's checklist." Oklahoma City: "told no by traditional lenders" → "don't fit the traditional mortgage box."

**`News.jsx`** — site's own summary (not the quoted press headline, left verbatim per prior decision): "...locked out of traditional homeownership." → "...opening doors to homeownership for Oklahoma families."

**`IsThisYou.jsx`** — "Less than two years at one employer." → "Not enough employment history." (exact phrase from client notes; other 3 "lender sees" fields left as factual/neutral, not crisis-toned).

**`articles.js`** — two additional instances found only during this pass: "If you have been turned away by a mortgage lender... rigid box a traditional bank requires" → "If traditional mortgage lenders haven't had a path for your situation... standard requirements a traditional bank uses."

*Left alone:* `styleguide/page.jsx` (internal reference page), cookie-consent state values ("denied"/"granted" — unrelated technical terms), "priced out of the coasts" in a Midwest-markets article (unrelated real-estate affordability idiom, not lender-rejection framing).

---

## Commit `80df6df` — Section 2 (Homepage): redundant CTA (2026-08-25)

Audited the actual live homepage (`Home.jsx` composes `Hero.jsx` → `PathwaySection.jsx` → `CalculatorSection.jsx` → `HomeTestimonials.jsx` → `FeaturedMarkets.jsx` → `QualifyCTA.jsx`). Most Section 2 checklist items turned out to already be satisfied on the About page (`WhyUs.jsx`), not the homepage — the checklist's page labels aren't reliable, same issue as Core Values. Two judgment calls resolved with the client, one fix applied:

| Item | Resolution |
|---|---|
| Hero headline ("We are the bridge...") | **Kept the current live headline** ("Stop renting your future and start owning it.") — it was a deliberate, more recent redesign (commit "remove three-pillar bullets, bold first sentence") postdating the walkthrough notes. Not changed. |
| "He didn't take no for an answer" / referral clarification | **Already satisfied** — not by Maya (already retoned in the Section 1 pass), but by the existing **Devon** persona in `PathwaySection.jsx`, which already reads "His realtor and Berry Rock Homes worked together to help him apply for it — clear terms, a locked purchase price, no surprises waiting at closing." No edit needed. |
| Redundant "Learn how it works" CTA | **Fixed.** `PathwaySection.jsx` had two prominent primary-styled buttons (desktop + mobile) both linking to `/how-it-works`, duplicating Hero's own "How it works →" link on the same page. Changed both to link to `/apply` with "See If You Qualify" label, matching Hero's primary CTA — funnels toward application per the notes. |

Also confirmed no metrics graphic exists on the homepage (`CalculatorSection.jsx` is just the calculator) and "Built for the families the system overlooked" / "trust, clarity, unwavering support" are already live verbatim on `WhyUs.jsx` — no homepage duplication needed.

---

## Commit `f1670ea` — Sections 3–4, 5, 7, 8, 13: everything confirmable without new decisions (2026-08-25)

Audited every remaining checklist section against current code. Applied every item that was a clear copy fix; flagged the rest (see "Still open" below) as either needing a client decision, new factual content we don't have, or a bigger feature build than a copy edit.

### Section 3 — Calculator / "Your Money at Work"
One checklist section, two files: `src/views/ByTheNumbers.jsx` (the actual page at `/your-money-at-work`) and `src/components/Calculator/InteractiveCalculator.jsx` (a shared widget embedded in `ByTheNumbers.jsx`, `Apply.jsx`, and the homepage). Equity stat block and the widget's core logic left untouched per the client's standing exception.

| File | Before | After |
|---|---|---|
| `InteractiveCalculator.jsx` (×3) | "estimated monthly payment" / "Estimated Monthly Payment" label + tooltip | "monthly lease payment" / "Monthly Lease Payment" |
| `Apply.jsx` | "...preview your Option Consideration, estimated monthly payment..." | "...monthly lease payment..." |
| `ByTheNumbers.jsx` (×2) | "monthly payment estimate" / `label: 'Monthly Payment'` | "monthly lease payment" / `label: 'Monthly Lease Payment'` |
| `ByTheNumbers.jsx` | "...your monthly Rental Credits keep lowering your payoff. We'll always show you exactly where every dollar goes." | (trailing sentence removed) |
| `ByTheNumbers.jsx` | sub: "The exact price Berry Rock Homes purchases the property for." | sub: "The price Berry Rock Homes purchases the property for." |
| `ByTheNumbers.jsx` | "...Guaranteed Right to Purchase indefinitely, as long as you remain in good standing... You can exercise your right to purchase at any time." | "...Guaranteed Right to Purchase at any time during the lease, as long as you remain in good standing..." |
| `ByTheNumbers.jsx` | label: "Final Payout" | label: "Final Buyback Price" |

### Section 4 — How It Works
| File | Before | After |
|---|---|---|
| `HowItWorks.jsx` (hero) | "...no bank needed up front. Berry Rock Homes purchases the home you choose, you lease it while building mortgage readiness..." | "A clear path from renting to owning... you lease it while you build your own mortgage readiness on your own timeline..." |
| `HowItWorks.jsx` (Lock It In step) | "A 7% Option Consideration holds your home within 3 days." | "A 7% Option Consideration and your lease-option paperwork are due within 3 days of going under contract." |
| `HowItWorks.jsx` (final step title) | "Move in. Build toward ownership." | "Move in and buy on your timeline." |
| `HowItWorks.jsx` (application trust badges) | "Decision in 24–48 hours" / "Zero hidden fees" | "Automated pre-qualification" / "Zero application fee" |

*Confirmed already satisfied, no change:* step order (Lock It In → We Step In already correctly sequences deposit before purchase); "We Step In" section already describes BRH submitting an offer alongside the client's realtor.

### Section 5 — Application and Verification
| File | Change |
|---|---|
| `HowItWorks.jsx`, `IsItForMe.jsx` | Removed "Landlord contact for rental verification" and "Social Security number (soft credit pull only)" from the document-requirements lists, per "remove the request for Social Security numbers here... and remove landlord-contact requirements." |

*Confirmed already satisfied:* "Soft credit check only" messaging is already present multiple times on `Apply.jsx`.

### Section 7 — Who we serve / is it for me
| File | Before | After |
|---|---|---|
| `IsItForMe.jsx` (hero) | "We built this for people traditional lenders turn away. Not because they can't afford a home, but because they don't fit neatly into a narrow box." | "We built this for people who don't fit the traditional mortgage box. Not because they can't afford a home, but because their situation doesn't fit a narrow checklist." |
| `IsThisYou.jsx` (headline + "not sure which one is you") | "Built for people the bank overlooks." / "...Not sure which one is you? We'll figure it out together." | "A different way to look at your readiness." / "These are some of the most common reasons people come to Berry Rock Homes — not a checklist you need to match exactly." |

*Confirmed already satisfied:* "less than 2 years" employment framing already reads "Not enough employment history" (fixed in an earlier batch).

### Section 8 — Lease-to-purchase explanation
All in `src/data/articles.js`'s "What Is a Lease-to-Purchase Program" article:

| Before | After |
|---|---|
| Excerpt: "...transition to homeownership with predictable costs, credit-building, and readiness support." | "...transition to homeownership." |
| "...reports your on-time payments to the credit bureaus, and gives you a clear path to walk away if your plans change." | "...and reports your on-time payments to the credit bureaus." *(walk-away clause removed)* |
| "Who it is designed for" list, 4th item: "Families who can comfortably afford a monthly payment but have not saved a full down payment yet." | *(item removed, 3 items remain)* |

*Confirmed already satisfied, no change needed:* no "cash buyer" language exists in this article; the walk-away language never actually implied money-back (Option Consideration is consistently described elsewhere as non-refundable) — removed anyway per the explicit instruction.

### Section 13 — Realtor / Referral Partner section
| File | Before | After |
|---|---|---|
| `AgentResources.jsx` | "...single-family homes and townhomes in our program markets." | "...single-family homes in our program markets." |
| `AgentResources.jsx` | "...inspection within days of an accepted offer." | "...inspection as soon as the offer is accepted." |
| `AgentResources.jsx` | FAQ: "Can I represent the client when they buy the home back?" | *(removed — terms are predetermined, per notes)* |
| `AgentResources.jsx` | nav label "Templates" / eyebrow "Templates" / heading "Berry Rock Realtor Templates" | "Offer Guides" / "Offer Guides" / "Berry Rock Realtor Offer Guides" |

---

## Commit `a6f790c` — Section 9 (About/program description) (2026-08-25)

| File | Before | After |
|---|---|---|
| `WhyUs.jsx` (mission) | "...stack toward the day the home becomes yours for good." | "...stack toward the day you're ready to make it yours for good." *(removes deterministic phrasing implying the outcome is automatic rather than conditional on exercising the purchase option)* |
| `WhyUs.jsx` ("For future homeowners" card) | "See exactly how the Pathway Program turns your monthly payments into a home of your own, with your purchase price locked in from day one." | "See how our pathway program is designed to help you ultimately achieve home ownership, with your purchase price locked in from day one." *(matches the notes' exact requested phrasing, avoiding "turns X into Y" automatic-transformation framing)* |

---

## Commit `63fc89c` — Realtor / Referral Partner section: full pass (2026-08-25)

A deep re-audit against the raw meeting notes (not just the compressed checklist) turned up 17 distinct realtor-section requirements that hadn't been checked yet. Most turned out to be missing content the notes already fully specify — not new facts to invent. Three items needed a client decision first (all resolved, see below); everything else applied directly.

### Rename: "Realtor Partner Program" → "Realtor Referral Partner"
Per client decision: the site hasn't launched yet, so no redirect needed — clean rename including the URL.

| What | Before | After |
|---|---|---|
| Route | `/realtor-partner-program` | `/realtor-referral-partner` |
| Page title/H1/meta/OG | "Realtor Partner Program" | "Realtor Referral Partner" |
| Nav (`Navbar.jsx`) | dropdown "Partner Program", CTA "Become a Partner" | "Referral Partner", "Become a Referral Partner" |
| Footer | "Partner Program" | "Referral Partner" |
| Body CTA (`AgentRegistrationCta.jsx`) | "Ready to become a Realtor Partner?" | "Ready to become a Realtor Referral Partner?" |
| Video captions, sitemap, internal links (`WhyUs.jsx`, `Contact.jsx`, `RealtorQuickConnect.jsx`, `sitemap.js`) | old URL/wording throughout | updated consistently — confirmed zero remaining references via grep |

### Agent journey clarity — `ForAgents.jsx` "Your five steps"
Realigned terminology with the notes: "pre-approved budget" → "pre-qualified amount," and added the missing pieces — income/asset verification before offer-ready, and the "offer ready" approval-amount email.

| Step | Before | After |
|---|---|---|
| 3. Get notified | "...let you know their pre-approved budget..." | "...notify you with their initial pre-qualified amount..." |
| 5. (renamed) | "We handle signatures" — "...complete the client consultation and verification and move them to offer-ready status, so you can send us the offer for signature." | "Verification & offer-ready" — "While you search, we complete income and asset verification. Once your client is approved, you'll get an email with their offer-ready amount, and can use the offer guide to submit the offer." |

### Closing process & commission — `AgentResources.jsx`
| Location | Change |
|---|---|
| Closing Process intro | Added: "All closings happen remotely." |
| Due Diligence step | "We complete standard inspections within 7 days..." → "We order all inspections and appraisals through licensed third-party vendors within 7 days. Review the report with your client, compile any repair requests, and coordinate with us on inspection requirements." |
| Closing Day step | "...The home is bought, and you are paid." → "...you pick up your keys and commission check directly from the title company once everything is closed and funded." |
| Commission FAQ | Added: "Upon closing, you represent Berry Rock Homes and earn the full commission offered by the seller" (exact phrase from notes) |
| New FAQ | "Does Berry Rock Homes pay an additional commission?" — No, negotiate with the seller and include it in closing costs |
| Property-type FAQ | Added "insurable and habitable," now links to the new Property Criteria section |
| Closing-speed FAQ | Added the expedited-closing exception (financing falls through post-appraisal/inspection) |

### New: Property Criteria tab — `AgentResources.jsx`
Built as a 5th tab matching the page's existing pattern (Market Coverage → **Property Criteria** → Offer Guides → Process → Training → Realtor FAQs). Content: service area, no modular/mobile homes, five acres or less, insurable and habitable, plus the discretion disclaimer ("Berry Rock Homes reserves the right to deny or exclude any property at its discretion" — exact phrase from notes).

### Offer Guides restructure
- Reordered so **Offer Cover Letter** is the first template listed (was second, after Closing Cost Schedule) — "cover letter at the top."
- Added a standalone "Cover letter" download link to **every market card** in the Market Coverage grid (reuses the existing single PDF — no new asset needed), satisfying "include the offer cover letter as a standalone download for every market."

### Inspection Guide — coming-soon state (client decision)
Added a third toolkit card ("Inspection Guide") matching the existing two, but rendered as a disabled/greyed state labeled "Coming soon" instead of a working download — the actual document doesn't exist yet and needs to come from Nick.

---

## Commit `b219d59` — Contact page and Markets/service areas (2026-08-25)

### Contact page
| Item | Before | After |
|---|---|---|
| Body copy | "Ready to own a home? Begin your application and we'll guide you through every step." | "Begin your application and we'll guide you through every step." *(removed the "Ready to own a home?" phrase per notes; it was body copy inside a card, not a heading)* |
| Realtor CTA button | "Explore the program" | "Start referring today" *(one of the two options the notes named; "Apply now" kept for the client-facing card, matching the notes' other option)* |
| Page order | Next Steps section was the last section, at the bottom | Moved to appear directly after the Hero, before Contact Details + Map — "the primary CTA" now takes the user there first |

*Confirmed already satisfied:* the primary contact CTA ("Apply now") already links directly to `/apply`.

### Markets / service areas
| Item | Change |
|---|---|
| Service-area maps | Added a real Google Maps embed (reusing the same `mapEmbed` URLs already used on the realtor resources page — no new assets) to every public `/markets/[marketId]` page, directly under the market snapshot/links. Covers all 5 markets, including Indianapolis and Oklahoma City specifically named in the notes. Previously these maps existed only buried in `AgentResources.jsx` (the realtor page). |
| Market.jsx tone consistency | Found the same deterministic "turns your monthly payments into a home of your own" phrasing already fixed in `WhyUs.jsx` — applied the identical fix here too for consistency. |
| Unserved-market inquiry | The "tell us where you're looking" link pointed to `/apply` — misleading, since visitors in unserved markets can't actually apply. Changed to point to `/contact` (a real, working destination) instead. **A dedicated Formsite inquiry form (per the notes) still doesn't exist** — needs a real Formsite form ID from Nick, same situation as the inspection guide document. |

---

## Commit `d482443` — QualifyCTA.jsx headline + benefit (2026-08-25)

Per notes (Part 1): *"Change the value-prop headline 'more people qualify than you think' to 'risk-free application.' Add explicit 'zero application fee' and 'soft credit check only.'"* Shared component (`components/Home/QualifyCTA.jsx`), default heading/benefits reused as-is on Home, CompareUs, IsItForMe, and ByTheNumbers — one edit covers all four pages.

| Item | Before | After |
|---|---|---|
| Headline | "More people qualify than you think." | "A risk-free application." |
| Benefit card | "Answers within 48 hours" | "Zero application fee" *("Soft credit check only" was already the first benefit card — no change needed there)* |
| `styleguide/moduleRegistry.js` description | referenced old headline/benefits | updated to match |

---

## Commit `8113e6b` — How It Works restructure + calculator market selector / "See full numbers" (2026-08-25)

### How It Works — step restructure
Per notes (Part 1): *"Restructure the steps to reflect the real workflow: consultation, then verification, then choose a home; separate application, verification, and closing."* Went from 6 steps to 7 by splitting the old single "Check your eligibility" step into two distinct phases. Every new line is traced to the notes — nothing invented.

| # | Before | After | Source |
|---|---|---|---|
| 02 | "Check Eligibility" — "Check your eligibility in minutes." / "...Your estimated eligibility arrives within 24 to 48 hours." | **"Consultation"** — "Start with a consultation." / "...zero application fee and a soft credit check only... Based on your consultation, an automated pre-qualification gives you your initial pre-qualified amount." | *"Change 'decision in 24 to 48 hours' to 'automated pre-qualification' based on the consultation"*; *"zero application fee"*; *"soft credit check only"*; realtor-side mirror: *"we notify you with their initial pre-qualified amount"* |
| 03 | *(did not exist)* | **"Verification"** (new step) — "Verify your income and funds." / "...income and asset verification: a government-issued photo ID, income verification, evidence of your 7% funds, and your last two months of bank statements. Once you are approved, you receive your offer-ready amount." | Notes' verification-document list verbatim; realtor-side mirror: *"we complete income and asset verification. Once your client is approved, you'll get an email with their offer-ready amount"* |
| 04 | "Choose Your Home" — "...within your estimated eligible amount." | Same step, renumbered 03→04 — "...within your **offer-ready amount**." | Aligns with the verification step that now precedes it; "offer-ready" is the client's own term |
| 05 | "Lock It In" (was 04) | unchanged, renumbered | already matched notes (7% + paperwork within 3 days) |
| 06 | "We Step In" (was 05) | unchanged, renumbered | already matched notes |
| 07 | "Move In & Build" (was 06) — "Every on-time payment is reported... The finish line gets closer every single month." | **"Move In & Buy"** — "You get the keys on closing day... **You control the timeline, and you buy the home when you are ready.**" | *"the client controls the timeline and receives the keys on closing day"* |

**Step 01 ("The Starting Point")** — retoned in a follow-up commit (`01e6282`), the last crisis-framed line left on the page:

| Before | After |
|---|---|
| Title: "Traditional financing didn't work out." / Body: "**Traditional lenders have a narrow checklist.** Your credit, income history, or savings may not have checked every box. The Pathway Program was built for exactly this moment." | Title: "**A real shot at owning your home.**" / Body: "Your credit, income history, or savings may not fit the traditional mortgage box yet. That doesn't mean you aren't ready to own. The Pathway Program is the bridge from where you are today to the home you deserve." |

Source: *"emphasize 'opportunity' and 'a real shot'"*; *"remove negative framing about traditional mortgage lenders"*; *"frame the program as a bridge for people not yet traditionally mortgage-eligible."* Wording reuses phrasing already established sitewide ("traditional mortgage box," "the home you deserve").

### Calculator — `InteractiveCalculator.jsx` and `ByTheNumbers.jsx`
| Item | Change | Source |
|---|---|---|
| **Market selector** | Added a market dropdown above the price slider, populated from `data/markets.js` (all 5 markets). | *"Add a market selector; pricing varies by location"* (Parts 1 & 2) |
| **"See full numbers" CTA** | Added below the calculator on `/your-money-at-work`, anchored to the $100k financial-model section (`id="full-numbers"`). | *"Add a 'See full numbers' call-to-action under the calculator, anchored to the financial-model / 'buy the numbers' section"* (Part 1) |
| Disclaimer | Now reads "...vary based on **your market**, exact property taxes..." | Reflects the new selector |
| Formulas | **Still placeholder rates** (flat 7% / 0.8% / 0.1%). Added a `TODO(Nick)` comment in the code noting the real formulas are pending and should be keyed off the selected market. | *"Calculator formulas. Coming from Nick... Build the UI and labels now; leave the math stubbed with a clear comment"* |

**⚠️ Note for review:** the market selector is wired up and functional as a control, but because the formulas are still placeholders, **changing the market does not currently change the numbers.** That is the intended interim state per the notes ("build the UI now, stub the math"), but it is visible to a user. If we'd rather not ship a control that appears inert, the alternative is to hold the selector until Nick's formulas land.

---

## Pre-merge fix — legacy redirects still pointed at the old realtor URL

The `/realtor-partner-program` → `/realtor-referral-partner` rename (commit `63fc89c`) renamed the route folder but left three legacy redirects in `next.config.mjs` pointing at the old path, so three inbound URLs were 301-ing straight into a 404:

| Source URL | Was redirecting to | Now redirects to |
|---|---|---|
| `/for-agents` | `/realtor-partner-program` (404) | `/realtor-referral-partner` |
| `/realtors` | `/realtor-partner-program` (404) | `/realtor-referral-partner` |
| `/copy-of-new-realtor-landing-page` | `/realtor-partner-program` (404) | `/realtor-referral-partner` |

`/realtors` and `/copy-of-new-realtor-landing-page` are indexed legacy Wix URLs, so this would have been a live SEO problem at launch. Verified against a production build: all three now return 308 → 200. Doc references in `REDIRECTS.md`, `SITEMAP.md`, and `CLAUDE.md` updated to match.

---

## Risk-free application module: drop the supporting sentences (2026-08-26)

`components/Home/QualifyCTA.jsx`. Shared component, so this covers Home, Compare Us, Is It For Me, and Your Money at Work in one edit.

The three reassurance points each carried a sentence of explanation underneath. Those sentences were pre-walkthrough copy that predated the Aug 5 review and were never part of it: the walkthrough only changed the headline and swapped the third point. Removed all three, leaving icon plus label.

| Label | Sentence removed |
|---|---|
| Soft credit check only | "Finding out where you stand will never hurt your score." |
| No commitment required | "Just exploring? That's completely fine. No pressure to move forward." |
| Zero application fee | "Find out where you stand without paying a thing." |

Rationale from the Part 1 discussion (00:20:09 to 00:22:30): the three points were framed throughout as short labels sitting under the headline, and as the answer to "how is it risk-free" rather than something needing its own explanation. Tiffany's phrasing was "change that subhead to risk-free application and then under that we can say something like 0% application fees, no commitment required." Abbey's was "if you say risk-free, it's like, okay, exactly how is it risk-free? But 'no cost,' everyone understands that."

Note: the notes never explicitly asked for the sentences to be deleted, so this was a judgment call consistent with the intent, confirmed with the client-side reviewer before applying.

Layout: label bumped from 14px to 16px now that it stands alone. On mobile the icon moved inline beside the label (it was stacked above), which cuts the module's mobile height roughly in half. Desktop keeps the stacked icon-above-label in three columns, unchanged. Styleguide module description updated to match.

---

> **Superseded.** This was merged as PR #52, then corrected by "How It Works should
> be six steps, not seven" below. The seven-step premise came from the
> auto-generated meeting summary; the verbatim transcript says to *combine* two
> steps, landing on six. Kept here for the record. The PathwaySection subhead fix
> described at the end of this entry is still good and remains in place.

## Follow-up fix: step count left at six after the 6-to-7 restructure (2026-08-26)

Commit `8113e6b` split the old "Check your eligibility" step into Consultation and
Verification, taking How It Works from six steps to seven. The step list and its
"01 / 07" counter updated correctly, but six other places still said six. The
`/how-it-works` headline read "Six simple steps to owning your home" directly
above seven numbered steps.

| File | Was | Now |
|---|---|---|
| `views/HowItWorks.jsx` (headline) | "Six simple steps to owning your home." | "Seven simple steps to owning your home." |
| `views/HowItWorks.jsx` (aria-label) | "Pathway Program — six steps" | "— seven steps" |
| `app/how-it-works/page.jsx` (meta description) | "transparent 6-step Pathway Program" | "7-step" |
| `app/page.jsx` (meta description) | "Our 6-step Pathway Program" | "7-step" |
| `views/Market.jsx` | "Six transparent steps." | "Seven transparent steps." |
| `data/schema.js` | HowTo with **the old six steps and their pre-retone copy** | rebuilt to mirror all seven current steps |
| `styleguide/moduleRegistry.js` | "6-Step Pathway Slider" (×4) | "7-Step Pathway Slider" |

The `schema.js` case was the most consequential: the structured data Google reads
still described the old six-step flow *and* carried copy the retone had already
removed ("Traditional lenders have a narrow checklist"), so it contradicted the
visible page. All seven step names and anchor ids now match `views/HowItWorks.jsx`,
and a comment there flags that the two must be kept in sync.

Also fixed in passing, in `components/Home/PathwaySection.jsx`: its subhead read
"Six steps from a bank turndown to homeownership," which both conflated the six
*personas* with the step flow and kept the crisis framing the retone removed. Now
"One path from renting to owning. Follow it through the eyes of six people who
walked it." The six personas themselves are correct and unchanged.

---

## Correction: How It Works should be six steps, not seven (2026-08-26)

Commit `8113e6b` restructured How It Works into **seven** steps. That was a
misreading of the Aug 5 discussion, and it shipped in PR #51.

What the transcript actually says (Part 1, 00:37:42). Tiffany raises the count:
*"I feel like seven gets to be like 'seven simple steps'... but I also don't want
to leave anything out."* Nick's answer merges rather than adds:

> "Maybe combine one and two, and then add that second layer in there that you're
> describing, of client consultation and verification."
>
> "Let's take that header, keep the number one starting point as the one on the
> left, but then also keep the header, and then just take the check eligibility
> paragraph and put it there as one."
>
> Tiffany: "And then change number two to the income verification."
> Nick: "Correct. Consultation, verification. I think that's great."

Six, minus one for the merge, plus one for the new stage, is six. Corroborated in
Part 3 (Aug 10), where Tiffany refers to *"the six steps"* five days later. The
only support for seven was the auto-generated meeting summary ("restructure the 7
steps"), which contradicts the verbatim transcript. The "Six simple steps"
headline was correct all along; the step list drifted away from it.

Now six:

| # | Step | Change |
|---|---|---|
| 01 | The Starting Point | Absorbs the application and the immediate pre-qualification, per Nick's merge |
| 02 | Consultation & Verification | One stage: the 48-hour consultation call, then income and asset verification to offer-ready |
| 03 | Choose Your Home | See below |
| 04 | Lock It In | Unchanged, renumbered |
| 05 | We Step In | Unchanged, renumbered |
| 06 | Move In & Buy | Unchanged, renumbered |

### Three further items from the same passage, also missed the first time

| Nick said | Was | Now |
|---|---|---|
| "I said remove *or ours*" | "Work with your own realtor or ours." | "Work with your own realtor." |
| "Reiterate *choose your home* instead of *any home*" | "Choose any home." | "Choose your home." |
| Apply → immediate automated pre-qual → consultation → verification | Step 2 had pre-qualification arriving *from* the consultation, reversing it | Pre-qualification is immediate off the application; the consultation follows within 48 hours |

The "any home" wording carries a real cost. Nick: *"People are super stupid about
that. We've had to change that a few times"* because visitors read "any" as
permission for mobile homes and large acreage.

### Structured data
`data/schema.js` was doubly stale on `main`: it still described the pre-restructure
six steps **and** carried copy the retone had removed ("Traditional lenders have a
narrow checklist"). Rebuilt to mirror the current six, with all six anchor ids
matching `views/HowItWorks.jsx`, and a comment in each file noting they must stay
in sync.

Side effect: this also retires the reference to `step-3-verification.png`, an image
that never existed and was falling back to a generic photo.

---

## Remaining checklist items, applied from the verbatim transcripts (2026-08-26)

After the six-versus-seven error, I re-audited all 106 checklist items against the
shipped site, working from the transcripts rather than the auto-generated meeting
summary. Five real gaps remained. All are now applied, each traced to Nick's own
words rather than the summary's paraphrase.

### §6 — the third document was missing
Part 1, 01:02:09. Nick: *"we probably say three documents and the third document is
the maintenance responsibility ... that tells them they're responsible for all
maintenance and repairs."* And on the deductible: *"we'll file an insurance claim on
the property, but they are responsible for the deductible portion of that since
they're responsible for maintenance. So make sure that you include that as one of
the little check marks below."*

The section said "Two documents." Added **The Maintenance Responsibility Agreement**
as the third, with the deductible as one of its check marks. Heading and intro now
read three.

### §5 — the qualification subheading was missing
Part 1, 01:22:01. Nick asked for it directly under the "Is It For Me?" heading,
*"because people overthink whether their clients qualified or not."* Added:
"Have 7% of the purchase price and stable income? You're a good fit," with his
paragraph beneath it.

Related, from 01:20:08: Nick questioned publishing a credit score at all (*"I don't
know if you need to have a number on credit, do you?"*). The "~550+ credit score"
figure is gone; that card now leads with the one hard disqualifier.

### §7 — credit messaging
Part 1, 01:16:36. Nick asked to drop "real momentum" because *"some people can be
like, well, is my credit actually moving up or whatever."* His replacement wording:
*"there's a story behind every credit number ... we look beyond credit to provide
opportunities,"* then *"we rely on income and assets over a credit score, allowing
more flexibility in approval, and providing time for you to rebuild your score."*
Both applied verbatim in substance.

Employment card aligned to his phrasing too: "stringent employment requirements"
and "other forms of verification," which were missing.

### §2 / §9 — the program line
Part 3, 00:08:56. Nick: *"we believe home ownership still is the bedrock of the
American dream and our pathway program was designed with you in mind."* That
sentence now closes the About mission copy, replacing a generic line.

### §5 — naming consistency
"What you need to apply" is now "What you'll need to apply," matching "What you'll
need to buy."

### Held figures were only half-flagged
The 83% success rate appears in four live places but carried a HOLD comment in only
two, so a reviewer confirming it with Nick could easily have missed the others.
All four are now flagged. Both funding-figure instances were already flagged.

### Verified by clicking through, not just grepping
The documents section and the persona cards are tabbed, and only the active tab is
in the page HTML, so a plain search of the served page reports the copy as missing
whether it is there or not. Every item above was confirmed by opening the relevant
tab in a real browser and reading the rendered text.

---

## Is It For Me: removed the qualifications block (2026-08-26)

Part 1, 01:20:08. Nick: *"I don't know if you need to have a number on credit, do
you? ... have we covered this—"* Tiffany: *"Like could we just scrap this whole
thing?"* Nick: *"Potentially. There's a lot of information."* Tiffany: *"Yeah,
because we have covered it in other places."* Nick: *"This can be cut."*

The transcript does not name which block was on screen, so this was initially left
in place and raised with the client, who confirmed the fuller cut.

Two things then corroborated it independently of the transcript:

1. The section's documents list ("Government-issued photo ID", "Last 2 months of pay
   stubs", "2 years of tax returns", "Last 2 months of bank statements", "Proof of
   any additional income sources") is a **word-for-word duplicate** of the "What
   you'll need to buy" tab on `/how-it-works`. Tiffany's "we have covered it in
   other places" is literally accurate.
2. Nothing anywhere on the site links to the section's `#qualify` anchor, so removing
   it breaks no navigation.

Removed from `views/IsItForMe.jsx`: the "What makes someone a good candidate"
section, including its four criteria cards (Income, Credit Path, Rental History,
Option Consideration) and the duplicated documents list, plus the now-unused
`qualifications` and `documents` arrays and two orphaned icon imports.

The page still answers the question, through the 7% and stable income subheading
added in the hero (Nick's own framing, since "people overthink whether their clients
qualified or not"), the "Is This You?" persona cards, and the program explainer.
Section order is now Hero, What Is the Pathway Program, Is This You?, Why Berry
Rock, Get Started.

**Note for review:** the criteria that only lived here are the rental-history
requirement ("current on housing payments for the past 6 months, no recent severe
evictions") and the income floor ("$50,000+ household income per year"). The 7%
option consideration and the credit guidance are covered elsewhere; those two are
not. If they should remain visible somewhere, the FAQ is the natural home.

---

## Is It For Me: qualifications given a compact home (2026-08-26)

Follow-up to the removal above. Removing the "What makes someone a good candidate"
section took two facts off every page of the site: the $50,000 income floor and the
six-month housing-payment requirement. Audit of where each criterion lives:

| Criterion | Also appears |
|---|---|
| $50,000+ household income | `FAQ.jsx` "What are the basic qualification requirements?" |
| Current on housing payments, 6 months, no severe evictions | same FAQ answer |
| 7% option consideration | same FAQ answer, plus How It Works step 04 and the calculator |
| Bankruptcy / credit | same FAQ answer, plus `FAQ.jsx` "I have a prior bankruptcy" |

So nothing was ever actually lost: `FAQ.jsx` carries all four in one answer, in the
same order and with the same figures. Tiffany's "we have covered it in other places"
was accurate about the criteria as well as the documents list.

The FAQ is not where someone asks the question, though. Added a compact "The four
things we look at" section to `/is-it-for-me`, one line per criterion:

- Household income — $50,000+ per year
- Housing payments — Current for the past 6 months
- Option consideration — 7% of the purchase price at contract
- Credit — No active, open bankruptcies

This is deliberately a fraction of the length of what was removed. The old version
gave each criterion a detail line plus a three-line note, and carried a duplicated
documents list, which is what drew Nick's "there's a lot of information." No credit
score figure, since he questioned publishing one at all. A closing line covers
W-2/self-employed/1099 income and links to the FAQ for full detail.

The `#qualify` anchor id moved onto the new section, so it stays a valid target.

**Open question for Nick:** `FAQ.jsx` still publishes "a minimum credit score of
around 550." If a credit number should not appear on the site, that instance needs
the same treatment. Left alone here because Nick said in Part 2 that he and Cam
would edit FAQ answers directly through a login rather than routing through the
agency.

---

## Resolved: Option Consideration refundability and the funding figure (2026-08-26)

Both were flagged as "conflicts needing Nick." Going back to the recordings, the
transcripts settle both. Neither was actually a conflict.

### Refundability was never contradictory

The earlier note (and the checklist) read two statements about **different
scenarios** as opposing each other. Nick's full policy, in his own words:

**Part 1, 00:51:34:**
> "If the offer is not accepted, it's fully refunded. If the home's already under
> contract and it falls through, it's fully refunded minus the hard cost."

**Part 2, 00:14:11 through 00:15:17:**
> "It's truly priced like an option ... the premium is not refunded either, but
> it's factored into the strike price ... it's not like a deposit where you get it
> back. It is a fee because if you walk away, you don't get it back."

**Part 3:**
> Nick: "I don't want to insinuate to them that they can just say, 'Hey, I want my
> money back.'" Tiffany: "They can walk away but without their money."

Four distinct outcomes, all compatible:

| Scenario | Outcome |
|---|---|
| Offer not accepted | Fully refunded |
| Under contract, contract falls through | Refunded minus hard costs already incurred |
| You are in the home and choose not to buy | Not refunded |
| You buy | 100% credited toward the option price |

The site was missing the hard-costs condition entirely and stated "non-refundable"
without a qualifier in two places, which is what read as a contradiction.

| File | Change |
|---|---|
| `views/FAQ.jsx` ("How much do I pay up front?") | Now states all three conditions. Also dropped "This is not a fee," which Nick's own words contradict ("technically it is a fee"). Kept his preferred framing, "credited toward the option price." |
| `views/FAQ.jsx` ("What is the Option Consideration?") | "It is non-refundable and is not a down payment" → "It is not a down payment, and it is non-refundable if you choose not to buy." |
| `app/faq/page.jsx` | Same qualifier added to the unqualified "non-refundable Option Consideration." |
| `views/HowItWorks.jsx` (step 04) | "or refunded if the offer falls through" → full refund if the offer is not accepted, refund minus hard costs if the contract falls through. |
| `data/schema.js` | Same correction, keeping the structured data in step with the page. |

### Funding volume is $300M

**Part 2, 00:29:28.** Tiffany asks "Is the 275 million correct?" Nick first says
yes, then corrects himself in the same exchange:

> "We're technically over 300 million to close and fund."

Tiffany: "So 275 is 300 million and this copy is good." Nick: "Yeah. Yeah."

Restated in **Part 3** as the agreed figure: "1,600 plus 300 million in homes
funded and closed." Updated `$275M+` to `$300M+` in `WhyUs.jsx`, `ForAgents.jsx`,
and both styleguide references. HOLD comments replaced with the source citation.

### 83% stays held, correctly

This one genuinely is unresolved. Part 2: *"Let me go look at that and see. That's
probably a year and a half old number."* Part 3: Tiffany reminds him, Nick says
*"Yeah, I'll check on that."* No confirmation followed. All four live instances
remain flagged.

---

## Part 2 and Part 3 re-audit, read from the verbatim transcripts (2026-09-02)

Every earlier pass on the August 7 and August 10 meetings worked from
`BRH_edit_checklist.md`, a condensed summary. That checklist is the source of the
seven-step error and it labelled three settled items as unresolvable conflicts, so
both meetings were re-read line by line, start to finish, the way Part 1 eventually
was. **The Part 1 re-read turned up four instructions that never reached the
checklist. This one turned up 27.**

Each change below quotes the instruction behind it. Timestamps are from the meeting
transcripts, not the summaries.

### Your Money at Work (`views/ByTheNumbers.jsx`)

| # | Change | Source |
|---|---|---|
| 1 | Hero gains the missing sentence: "Our goal is to help you get in the best position possible to purchase your home as soon as you're ready." | Aug 7 (00:08:43), Nick dictated it |
| 2 | Hero: "**and** your monthly Rental Credits keep lowering your **payoff**" → "**while** your monthly Rental Credits keep lowering your **option price**" | Aug 7 (00:08:43). Nick changed "and" to "while"; he said "lower your option price" twice, and separately replaced "payout" with a purchase-price term |
| 3 | Section intro: "what you **earn back** each month" → "what you **get credited** each month" | Aug 7 (00:10:32): "what you get credited each month instead of earned back" |
| 4 | Section intro: "the potential benefit of increased home value" → "all resulting in the opportunity to end up in a financially stronger position" | Aug 7 (00:10:32): "want to get away from that equity word… all resulting in a financially stronger position" |
| 5 | Option Consideration card no longer says "**not a fee**"; now "Fully credited toward your option price when you purchase the home from Berry Rock Homes." | Aug 7 (00:14:11): "fully applied to the option price upon your purchase. I'd say that because **technically it is a fee**." The old line asserted the opposite of what he told us |
| 6 | "Avg. Equity **at Exit**" → "Avg. Equity **After Purchase**", with the figure now defined underneath: the average difference between your option price and the home's value when you buy it back | Aug 7 (00:11:58): "just say average equity after purchase," then define it below. He was explicit about why: "if anyone ever sues us again, which they will on this, they're going to pull that and say you guys advertise equity" |
| 7 | $100k model: "Includes estimated taxes and insurance" → "Your out-the-door payment, less any HOA or community fees." | Aug 7 (00:16:22 and again 00:17:53): "take out the includes estimated taxes and insurance and just say your out the door payment less any HOA or community fees. Just say that." |
| 8 | Payment Structure no longer promises an automatic minimum 3% rise every two years. It now says the payment is reviewed every 2 years and holds unless underlying property costs go up, with Nick's asterisk added under the payment schedule | Aug 7 (00:19:00): "if underlying cost of the property increase above 3%, Berry Rock reserves the right to raise rent accordingly every two years — underneath the payment schedule" |

Item 8 matters beyond wording. The old copy committed to a guaranteed increase; the
contract condition Nick described is narrower.

### Calculator (`components/Calculator/InteractiveCalculator.jsx`)

| # | Change | Source |
|---|---|---|
| 9 | Tooltip said the payment "covers rent plus estimated property taxes, insurance, **and any HOA fees**." Now: "This is your out-the-door monthly payment, less any HOA or community fees." | Aug 7 (00:17:53). This was the one place on the site that was **actively wrong** about HOA: both meetings agree HOA is excluded |

### Realtor Referral Partner (`views/ForAgents.jsx`)

| # | Change | Source |
|---|---|---|
| 10 | Reliable closings now says how: "We purchase with pre-approved bank lines and typically close in about 30 days, with no financing contingencies outside of the home appraising." | Aug 7 (00:25:12): "we don't close in cash. We pull down on a line of credit… we purchase with pre-approved bank lines." Appraisal carve-out from 01:20:28 |
| 11 | Toolkit: the standalone "closing-cost schedules" claim removed; it lives inside each offer guide | Aug 7 (00:46:44 – 00:48:44) |
| 12 | Toolkit: "Done-for-you templates" → "Offer cover letter", with Nick's purpose for it | Aug 7 (00:49:46) renamed templates to offer guides |
| 13 | Toolkit: "Agent training" → "Agent consultation", desc → "Learn how to prospect and create more leads with Berry Rock Homes." | Aug 7 (00:37:48): "I'd just probably get rid of [agent training]… underneath it just say learn how to prospect and create more leads with Berry Rock Homes" |
| 14 | Toolkit graphic: "Closing Cost Schedule" row replaced with a second market offer guide; floating card relabelled "Agent consultation" | Same two instructions as 11 and 13 |
| 15 | **The five realtor steps rebuilt to Nick's dictated order.** Step 1 is now a working link to the registration form instead of "go to the Realtors tab"; step 2 says who to send the link to; step 3 adds that verification is required for final approval; step 4 becomes "Help your client find the perfect home" once the official budget is set; step 5 becomes "We handle signatures" with the offer-guide submission | Aug 7 (00:30:40 – 00:36:16). On step 1 Nick said: "It says sign up online. It's telling me to go to the realtor's tab. Well, we're on the realtor's tab, aren't we?… So where's directing him to go to sign up?" |
| 16 | Closing line: "They keep building toward mortgage eligibility and ownership — so you close more deals." → "**Together, we make more homeowners.**" | Aug 7 (00:37:48): "I would get rid of that last point at the bottom… get rid of that and just say together we make more homeowners" |

### Agent Resources (`views/AgentResources.jsx`)

This page carried the most unapplied items.

| # | Change | Source |
|---|---|---|
| 17 | Offer Guides section rebuilt: cover letter runs across the top, the five market offer guides sit beneath it, and the standalone Closing Cost Schedule card is gone | Aug 7 (00:48:44): "we just leave the offer cover letter. We get rid of the closing cost schedule and just add each individual offer guide underneath it" |
| 18 | Cover letter description now states its purpose: helping the seller and their agent recognize Berry Rock Homes and the offer they are receiving | Aug 7 (00:49:46), Nick's own wording |
| 19 | Market intro claimed the offer guide contains "property criteria, price caps, and program areas." It does not. Replaced with Nick's line, plus a link to Property Criteria | Aug 7 (00:43:28). Tiffany asked whether that content was in the guide; Nick: "**no, none of that stuff really is.** So program area is not on there either" |
| 20 | Referring a Client, step 1: "Identify clients who need time to build **credit or savings**" → "Identify clients who are **ready for a new home but find themselves outside of mortgage eligibility**" | Aug 7 (00:53:32): "that seems a little narrow. I don't want agents to think that only people [need] to build credit or savings" |
| 21 | Referring a Client, step 2 now says the pre-qualified amount is based on stated application information | Aug 7 (00:54:54) |
| 22 | Referring a Client, step 3: "We Review & Approve / We review the application and provide an estimated eligible amount" → "**Consultation & Verification**", with the 48-hour consultation, the income and asset verification, and the offer-ready email | Aug 7 (00:54:54 – 00:56:27). Nick: "that is one of the confusing parts we need to do a better job explaining on this website" |
| 23 | Referring a Client, step 4: "shop **program-area** homes" → "shop for homes within their approved amount" | Aug 7 (00:56:27). Tiffany flagged that "program area" sounded like a restriction; Nick: "you and your client shop for homes" |
| 24 | Securing Your Referral Link: step 1 → "so you are in our system and ready to start referring"; step 2 → clients are "registered to you" | Aug 7 (00:50:47) |
| 25 | Closing Process, step 1 gains the real content: the client has three days to fund their 7% and sign all documents | Aug 7 (00:57:21) |
| 26 | Closing Process, step 2: "**Due Diligence**" → "**Inspections & Appraisal**", body → "Berry Rock Homes will order the inspection and appraisal," and the "within 7 days" window deleted | Aug 7 (00:58:26): "not due diligence — inspections and appraisal… **Berry Rock Homes will order the inspection and appraisal. Period.** That's a definitive thing that we need to say." And: "delete the seven days, because it's standard in the contract of 10" |
| 27 | Closing Process, step 3 now says to coordinate with title on all documents, addendums, and invoices; step 4 adds that the agent delivers the keys to the client | Aug 7 (01:02:07 – 01:03:35) |
| 28 | Inspection Process, step 2: "On-Site Walkthrough / evaluates structure, roof, foundation against **FHA appraisal conditions**" → "**Schedule & Coordinate** / the inspector will reach out to you directly" | Aug 7 (01:04:41), plus the FHA removal at 01:17:54 |
| 29 | Inspection Process, step 3 corrected: the **agent** reviews the report with their client and compiles their requests, and Berry Rock Homes sends its own list separately. The old copy had us doing the review | Aug 7 (01:10:28 – 01:11:36) |
| 30 | Inspection Process, step 4: "**Green Light**" → "**Submit for Signatures**" | Aug 7 (01:15:50): "instead of green light, say submit for signatures" |
| 31 | Realtor FAQ: "must meet standard **FHA appraisal conditions**" removed | Aug 7 (01:17:54): "take out that they must meet the FHA appraisal conditions. I would just say homes must be insurable and habitable" |
| 32 | Realtor FAQ on closing speed rewritten to Nick's careful phrasing: no financing contingencies **outside of the home appraising** | Aug 7 (01:20:28). He specifically rejected "appraisal requirements" as meaning something else |
| 33 | "Agent Training" section and nav pill relabelled "Consultation"; the button now reads "Schedule a consultation," matching the other two on the page | Aug 7 (00:37:48 – 00:39:22) |

### About (`views/WhyUs.jsx`)

| # | Change | Source |
|---|---|---|
| 34 | Hero paragraph: "We are the **connection between where you are today and the home you deserve**" → "We are the **bridge between today and mortgage eligibility**" | Aug 10 (00:07:52). Nick read the line back and rewrote it; Tiffany swapped "connection" for "bridge" and he agreed. **The H1 above it was approved unchanged in the same exchange**, which closes the hero-headline question that was previously listed as needing a decision |
| 35 | Stats subtitle: the "clear the financing roadblocks that hold so many families back" clause removed | Aug 10 (00:16:57). Tiffany asked if it was problematic; Nick wanted it gone because it read as Berry Rock walking alongside the client |
| 36 | Core value "Opportunity" description rewritten to his framing: "We believe in creating opportunities for people to become homeowners." The old line leaned on the dignity framing he asked us to drop | Aug 10 (00:22:48): "We're opportunity creators" |

### Contact (`views/Contact.jsx`)

| # | Change | Source |
|---|---|---|
| 37 | "Partner with us" now deep-links to the registration form (`#agent-network`) instead of the top of the realtor page | Aug 10 (00:36:16): "have that, when you click that first one from contact, have it take you there directly" |

### How It Works (`views/HowItWorks.jsx`)

| # | Change | Source |
|---|---|---|
| 38 | "What you'll need to apply" said "you'll have an answer in **24 to 48 hours**." Now: automatic pre-qualification based on the information you give us, with verification later | Aug 5 (01:05:00): "instead of decision in 24 to 48 hours… automatic pre-qualification based on stated application information, verification required." This also contradicted step 01, which now says pre-qualification is immediate |

### Confirmed already correct

Checked against the transcripts and needing no change: every "cash" reference is gone
sitewide; townhomes are out of the property criteria; the Property Criteria section
carries all four of Nick's requirements; the four consumer FAQ answers he dictated
match; the lease-to-purchase article already reflects every Part 3 edit ("structured
bridge between renting and owning," no loophole or gimmick language, no cash buyer, no
predictable costs); founder photos are removed with "Nick & Cam, Co-Founders" retained;
1,600+ families, $300M+, five markets, and 2,500+ partner agents are all correct;
"dignified" is out of the closing band; the four core values match; and all four
instances of the 83% figure carry HOLD comments.

### Verification

- Production build passes, 39 pages. Lint clean apart from the one pre-existing
  `tailwind.config.js` warning.
- **66 assertions checked in a real browser** against the production build, clicking
  every process tab and opening every FAQ, because closed tabs and accordions never
  appear in the served HTML. Each change was checked for the new copy being present
  *and* the old copy being gone.

---

## Still open — needs a decision, new factual content, or is a bigger feature build

Three items that previously sat here have been resolved from the verbatim
transcripts and are no longer open: the **payment definition** (both meetings agree
HOA is excluded and Berry Rock Homes pays taxes and insurance during the lease — all
three locations are now aligned), the **funding figure** ($300M+, Nick corrected 275
in the same Aug 7 exchange), and **Option Consideration refundability** (the four
scenarios are compatible, not contradictory). The **hero headline** is also settled:
Nick approved the existing H1 on Aug 10 and rewrote only the paragraph beneath it.

### Needs Nick

- **83% success rate** — Nick called it "probably a year and a half old" on Aug 7 and
  said "yeah, I'll check on that" again on Aug 10. Never came back. Live in four
  places (`TrustLogobar.jsx`, `HowItWorks.jsx`, `ForAgents.jsx`, `WhyUs.jsx`), all four
  flagged with HOLD comments so a single confirmation updates all of them.
- **Calculator formulas** — the real math. The market selector UI is built and inert
  until this lands.
- **Inspection guide document** — Nick asked for "a really long button… with a little
  vector graphic" linking to a downloadable inspection process, pulled out of the last
  page of the offer guide and restyled to match the site. The card is in place in a
  "coming soon" state; it needs the document.
- **Insurance deductible policy** — the actual terms, for the FAQ. Nick confirmed the
  client covers the deductible; the specifics do not exist anywhere yet.
- **Lease and Right to Purchase examples** — to finalize the document check marks.
- **Formsite access** — Nick committed to granting it on Aug 7 (01:29:31): "I'm going
  to give you access right now." Needed to round the buttons on the three embedded
  forms so they match the site. Still outstanding.
- **FAQ login for Nick and Cam** — they asked to edit FAQ answers themselves rather
  than route them through us (Aug 7, 00:20:36). Two consequences of that decision are
  still live: `FAQ.jsx:144` says "preliminary decision within 24–48 hours," which Nick
  replaced with automatic pre-qualification elsewhere, and `FAQ.jsx:102` says payments
  "increase 3% every two years," which is the automatic-increase claim corrected on
  Your Money at Work. Both are FAQ answers he owns, so they were left alone rather than
  edited around him. **Flag them when the login goes over.**
- **FAQ credit score** — `FAQ.jsx:64` still publishes "a minimum credit score of around
  550" while Is It For Me publishes no number, after Nick questioned putting one on the
  site at all. Same FAQ-ownership caveat.

### Needs a decision from Tiffany

- **Market selector** — ships inert until the formulas arrive. Ship it or hide it.
- **Unserved-market inquiry form** — built on `feature/market-inquiry-form` and parked.
  Needs a free Resend account, one API key into Vercel, and a call on whether to verify
  the domain. Branch is 8 commits behind and needs a rebase before merge.
- **General Contact form backend** — display-only. Needs a destination: Formsite or
  Salesforce.
