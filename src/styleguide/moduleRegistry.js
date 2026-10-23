import Hero from '@/components/Home/Hero';
import TrustLogobar from '@/components/Home/TrustLogobar';
import StepsTimeline from '@/components/Home/StepsTimeline';
import ProcessSteps from '@/components/Home/ProcessSteps';
import ProcessAtAGlance from '@/components/Home/ProcessAtAGlance';
import AtAGlance from '@/components/Home/AtAGlance';
import HowItWorksPreview from '@/components/Home/HowItWorksPreview';
import PathwaySection from '@/components/Home/PathwaySection';
import YourMoneyAtWork from '@/components/Home/YourMoneyAtWork';
import ProgramRequirements from '@/components/Home/ProgramRequirements';
import FeaturedMarkets from '@/components/Home/FeaturedMarkets';
import HomeBuyingToolkit from '@/components/Home/HomeBuyingToolkit';
import NewsFeature from '@/components/Home/NewsFeature';
import QualifyCTA from '@/components/Home/QualifyCTA';
import MixedTestimonialsGrid from '@/components/Home/MixedTestimonialsGrid';
import HomeTestimonials from '@/components/Home/HomeTestimonials';
import TestimonialsSlider from '@/components/Home/TestimonialsSlider';
import TestimonialCarousel from '@/components/Shared/TestimonialCarousel';
import PartnerTestimonialsSlider from '@/components/Agent/PartnerTestimonialsSlider';
import InteractiveCalculator from '@/components/Calculator/InteractiveCalculator';
import PageHeader from '@/components/Shared/PageHeader';
import VideoPlaceholder from '@/components/Shared/VideoPlaceholder';
import ContentBlock from '@/components/Shared/ContentBlock';
import StatsCallout from '@/components/Shared/StatsCallout';
import FoundersIntro from '@/components/Shared/FoundersIntro';

// Reusable demo cell for ContentBlock previews
const DemoCell = ({ title = 'Cell', body = 'Sample copy.' }) => (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-2">Item</p>
        <h4 className="text-base font-bold text-navy-800 mb-1">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
);

const cells = (n) =>
    Array.from({ length: n }).map((_, i) => (
        <DemoCell key={i} title={`Cell ${i + 1}`} body="Placeholder copy — drop real content here." />
    ));

export const moduleRegistry = [
    // ────────────────────────────────────────────────────────────
    // LAYOUT
    // ────────────────────────────────────────────────────────────
    {
        id: 'page-header',
        name: 'Page Header',
        componentName: 'PageHeader',
        category: 'Layout',
        description: 'Reusable internal-page hero with eyebrow, title, subtitle, optional background image.',
        importPath: '@/components/Shared/PageHeader',
        component: PageHeader,
        sampleProps: {
            eyebrow: 'About the program',
            title: 'A simpler path to homeownership',
            subtitle: 'Move into the home you love. Build credit. Own it.',
            compact: true,
        },
        variants: ['Default', 'Compact', 'With background image'],
        usage: 'Use at the top of every internal page that is not the homepage.',
        notes: 'Set `compact={true}` for shorter pages. `bgImage` swaps the dot pattern for a photo.',
        status: 'canonical',
        previewBackground: 'navy',
        previewPadded: false,
        previewMaxHeight: '420px',
    },
    {
        id: 'navbar',
        name: 'Navbar',
        componentName: 'Navbar',
        category: 'Layout',
        description: 'Fixed floating-capsule nav. Transparent at page top; the white backdrop morphs from a full-bleed bar into a container-width pill on scroll (>60px) while the content stays locked to the hero container. Logo swaps from full lockup (h-12 md:h-14) to icon-only (h-7). Primary links: Pathway Program ▾, Realtors ▾, About, News, Contact — dropdowns on hover (desktop), accordion (mobile). Phone number + "See If You Qualify" berry CTA pill in the right cluster.',
        importPath: '@/components/Navigation/Navbar',
        usage: 'Mounted globally in src/app/layout.jsx. Do not embed in pages directly.',
        variants: ['Transparent (at-top)', 'White capsule (scrolled)', 'CTA hidden on /realtor-referral-partner/* pages'],
        notes: 'GUARDRAILS: (1) Capsule is transparent at top of page and becomes bg-white only after scrollY > 60px. Do not force always-white. (2) Logo transition: full BRH_LOGO_BK.png (h-12 md:h-14) → icon BRH_ICON_BK.png (h-7) at scroll > 60px. (3) Do not add a utility bar above this nav — phone and CTA live in the right cluster. (4) Homepage Hero uses pt-[68px] so the slider content clears the floating nav elements. Internal pages use pt-[200px] lg:pt-[240px] to give breathing room below the transparent nav. (5) NAV_OFFSET_PX = 68 in PathwaySection is a legacy value — actual scrolled capsule bottom is ~96px.',
        status: 'canonical',
        // Preview omitted — sticky position conflicts with embedding.
    },
    {
        id: 'footer',
        name: 'Footer',
        componentName: 'Footer',
        category: 'Layout',
        description: 'Dark navy (navy-800) footer. Left: white logo lockup + "Start owning your future." tagline and supporting line. Right: five nav columns — Pathway Program (with coral "Apply →"), Markets, Realtors, Company, Contact (with Facebook / Instagram / LinkedIn / YouTube). Bottom bar: copyright, legal links (Terms · Privacy · Fair Housing), and an Equal Housing Opportunity badge.',
        importPath: '@/components/Navigation/Footer',
        usage: 'Mounted globally in src/app/layout.jsx. Appears on every page — including the bottom of this style guide, where you can see it live.',
        variants: ['Five-column nav grid (2-col mobile → 3-col sm → 5-col lg)'],
        notes: 'The Company column (About, News) was added and the legacy /why-us route renamed to /about. Social links live inside the Contact column — there is no separate social row. The "Equal Housing Opportunity" badge is a lucide Home icon + text, not an image asset.',
        status: 'canonical',
    },

    // ────────────────────────────────────────────────────────────
    // HERO
    // ────────────────────────────────────────────────────────────
    {
        id: 'hero-home',
        name: 'Home Hero',
        componentName: 'Hero',
        category: 'Hero',
        description: 'Full-viewport (100svh) two-column intro. Left: eyebrow, "Stop renting your future" headline, 1,100-families lede, a 3-pillar icon list, and dual CTAs ("See If You Qualify" + "How it works"). Right: a two-column infinite vertical photo marquee that drifts in alternating directions, clipped flush at top/bottom and fading into the PathwaySection sand below.',
        importPath: '@/components/Home/Hero',
        component: Hero,
        sampleProps: {},
        variants: ['Default'],
        usage: 'Top of the homepage. Only one per site.',
        notes: 'The right-column photo marquee is desktop-only (hidden below lg). More hero variants will be added (internal pages, success stories, agents) — register them here.',
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '720px',
    },

    // ────────────────────────────────────────────────────────────
    // BLOCKS — multipurpose ContentBlock variants
    // ────────────────────────────────────────────────────────────
    {
        id: 'block-1col',
        name: '1 column — centered text',
        componentName: 'ContentBlock',
        category: 'Block',
        description: 'Single-column centered section. Use for eyebrow + headline + lede with no grid.',
        importPath: '@/components/Shared/ContentBlock',
        render: () => (
            <ContentBlock
                columns={1}
                eyebrow="A simple way to begin"
                title="One column. Plenty of breathing room."
                subtitle="Use this block when the section is purely typographic — an intro, a quote, or a manifesto."
                align="center"
                background="white"
                paddingY="md"
            />
        ),
        codeExample:
            "import ContentBlock from '@/components/Shared/ContentBlock';\n\n" +
            "<ContentBlock\n" +
            "  columns={1}\n" +
            "  eyebrow=\"A simple way to begin\"\n" +
            "  title=\"One column. Plenty of breathing room.\"\n" +
            "  subtitle=\"Use this block when the section is purely typographic.\"\n" +
            "  align=\"center\"\n" +
            "  background=\"white\"\n" +
            "  paddingY=\"md\"\n" +
            "/>",
        status: 'canonical',
        usage: 'Intro sections, quote bands, manifesto/copy-only sections.',
        previewPadded: false,
    },
    {
        id: 'block-2col-fixed',
        name: '2 columns — fixed',
        componentName: 'ContentBlock',
        category: 'Block',
        description: 'Equal 2-column grid (1 col on mobile, 2 on md+).',
        importPath: '@/components/Shared/ContentBlock',
        render: () => (
            <ContentBlock
                columns={2}
                layout="fixed"
                eyebrow="Two columns"
                title="Side-by-side"
                subtitle="Same width on both sides. Best for compare/contrast or matched pairs."
                paddingY="md"
            >
                {cells(2)}
            </ContentBlock>
        ),
        codeExample:
            "<ContentBlock columns={2} layout=\"fixed\" title=\"Side-by-side\">\n  <Cell />\n  <Cell />\n</ContentBlock>",
        status: 'canonical',
        usage: 'Feature pairs, comparison rows, text + image splits.',
        previewPadded: false,
    },
    {
        id: 'block-2col-flex',
        name: '2 columns — flex',
        componentName: 'ContentBlock',
        category: 'Block',
        description: 'Flexible 2-column grid that reflows based on minimum item width (auto-fit).',
        importPath: '@/components/Shared/ContentBlock',
        render: () => (
            <ContentBlock
                columns={2}
                layout="flex"
                eyebrow="Two columns — flex"
                title="Reflows automatically"
                subtitle="Items keep a minimum width and wrap if the container is narrow."
                paddingY="md"
            >
                {cells(2)}
            </ContentBlock>
        ),
        codeExample:
            "<ContentBlock columns={2} layout=\"flex\" title=\"Reflows automatically\">\n  <Cell />\n  <Cell />\n</ContentBlock>",
        status: 'canonical',
        usage: 'When item content varies in length and a rigid 50/50 split looks awkward.',
        previewPadded: false,
    },
    {
        id: 'block-3col-fixed',
        name: '3 columns — fixed',
        componentName: 'ContentBlock',
        category: 'Block',
        description: 'Equal 3-column grid (1 → 2 → 3 across breakpoints).',
        importPath: '@/components/Shared/ContentBlock',
        render: () => (
            <ContentBlock
                columns={3}
                layout="fixed"
                eyebrow="Three columns"
                title="Feature grid"
                subtitle="Best for trios — three values, three steps, three pillars."
                paddingY="md"
            >
                {cells(3)}
            </ContentBlock>
        ),
        codeExample:
            "<ContentBlock columns={3} layout=\"fixed\" title=\"Feature grid\">\n  <Cell /><Cell /><Cell />\n</ContentBlock>",
        status: 'canonical',
        usage: 'Pillars, value props, three-step summaries.',
        previewPadded: false,
    },
    {
        id: 'block-3col-flex',
        name: '3 columns — flex',
        componentName: 'ContentBlock',
        category: 'Block',
        description: 'Auto-fit 3-column grid — wraps to 2 or 1 column when constrained.',
        importPath: '@/components/Shared/ContentBlock',
        render: () => (
            <ContentBlock
                columns={3}
                layout="flex"
                eyebrow="Three columns — flex"
                title="Reflowable trio"
                paddingY="md"
            >
                {cells(3)}
            </ContentBlock>
        ),
        codeExample:
            "<ContentBlock columns={3} layout=\"flex\" title=\"Reflowable trio\">\n  <Cell /><Cell /><Cell />\n</ContentBlock>",
        status: 'canonical',
        usage: 'Card grids where the count may change over time (e.g. featured stories).',
        previewPadded: false,
    },
    {
        id: 'block-4col-fixed',
        name: '4 columns — fixed',
        componentName: 'ContentBlock',
        category: 'Block',
        description: 'Equal 4-column grid (1 → 2 → 4 across breakpoints).',
        importPath: '@/components/Shared/ContentBlock',
        render: () => (
            <ContentBlock
                columns={4}
                layout="fixed"
                eyebrow="Four columns"
                title="Stat row"
                paddingY="md"
            >
                {cells(4)}
            </ContentBlock>
        ),
        codeExample:
            "<ContentBlock columns={4} layout=\"fixed\" title=\"Stat row\">\n  <Cell /><Cell /><Cell /><Cell />\n</ContentBlock>",
        status: 'canonical',
        usage: 'Stat rows, logo bars, dense card grids.',
        previewPadded: false,
    },
    {
        id: 'block-4col-flex',
        name: '4 columns — flex',
        componentName: 'ContentBlock',
        category: 'Block',
        description: 'Auto-fill 4-column grid — trailing cells stay at min width instead of stretching.',
        importPath: '@/components/Shared/ContentBlock',
        render: () => (
            <ContentBlock
                columns={4}
                layout="flex"
                eyebrow="Four columns — flex"
                title="Reflowable quartet"
                paddingY="md"
            >
                {cells(4)}
            </ContentBlock>
        ),
        codeExample:
            "<ContentBlock columns={4} layout=\"flex\" title=\"Reflowable quartet\">\n  <Cell /><Cell /><Cell /><Cell />\n</ContentBlock>",
        status: 'canonical',
        usage: 'Dense card grids where item count varies and you want consistent card size.',
        previewPadded: false,
    },

    // ────────────────────────────────────────────────────────────
    // PROCESS
    // ────────────────────────────────────────────────────────────
    {
        id: 'how-it-works-slider',
        name: '6-Step Pathway Slider',
        componentName: 'HowItWorks (view)',
        category: 'Process',
        description: 'Interactive 6-step slider with left nav tabs, full-bleed photo, and step copy column. Desktop: open 3-column layout. Mobile: stacked with AnimatePresence transitions. Canonical interactive carousel.',
        importPath: '@/views/HowItWorks',
        usage: 'Canonical interactive process/carousel pattern. Use on /how-it-works. For homepage teaser, use StepsTimeline.',
        status: 'canonical',
        notes: 'Embedded directly in HowItWorks.jsx — not a standalone component. Extract to @/components/Shared/PathwaySlider if reuse is needed.',
        // No live preview — this is a full-page view, not a droppable component.
    },
    {
        id: 'steps-timeline',
        name: 'Steps Timeline',
        componentName: 'StepsTimeline',
        category: 'Process',
        description: 'Vertical timeline with badge + arrow + card per step. Canonical homepage process teaser.',
        importPath: '@/components/Home/StepsTimeline',
        component: StepsTimeline,
        usage: 'Homepage process teaser only. Links to /how-it-works for the full 6-step slider.',
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '600px',
    },
    {
        id: 'process-steps',
        name: 'Process Steps (old full explainer)',
        componentName: 'ProcessSteps',
        category: 'Process',
        description: 'Alternating left/right layout with inline phone mockups per step.',
        importPath: '@/components/Home/ProcessSteps',
        component: ProcessSteps,
        usage: 'Replaced by the 6-Step Pathway Slider. Do not use on new pages.',
        status: 'needs-standardization',
        previewPadded: false,
        previewMaxHeight: '600px',
        notes: 'Heavy — viewport-sized illustrations. Retire when /how-it-works is fully migrated.',
    },
    {
        id: 'process-at-a-glance',
        name: 'Process at a Glance (old)',
        componentName: 'ProcessAtAGlance',
        category: 'Process',
        description: '5-step compact list paired with a process home image.',
        importPath: '@/components/Home/ProcessAtAGlance',
        component: ProcessAtAGlance,
        status: 'needs-standardization',
        usage: 'Duplicates StepsTimeline. Retire in favour of StepsTimeline.',
        previewPadded: false,
        previewMaxHeight: '600px',
    },
    {
        id: 'at-a-glance',
        name: 'At a Glance (old)',
        componentName: 'AtAGlance',
        category: 'Process',
        description: 'Plain vertical step list — no images or mockups.',
        importPath: '@/components/Home/AtAGlance',
        component: AtAGlance,
        status: 'needs-standardization',
        usage: 'Duplicates StepsTimeline with fewer visuals. Retire.',
        previewPadded: false,
        previewMaxHeight: '600px',
    },
    {
        id: 'how-it-works-preview',
        name: 'How It Works Preview (old)',
        componentName: 'HowItWorksPreview',
        category: 'Process',
        description: 'Compact 5-step table inside a card with paired CTA copy.',
        importPath: '@/components/Home/HowItWorksPreview',
        component: HowItWorksPreview,
        status: 'needs-standardization',
        usage: 'Retire. Use StepsTimeline for homepage teasers.',
        previewPadded: false,
        previewMaxHeight: '600px',
    },

    // ────────────────────────────────────────────────────────────
    // PROOF
    // ────────────────────────────────────────────────────────────
    {
        id: 'trust-logobar',
        name: 'Trust Logobar',
        componentName: 'TrustLogobar',
        category: 'Proof',
        description: 'Thin 4-stat bar — application time, close window, fees, ownership rate.',
        importPath: '@/components/Home/TrustLogobar',
        component: TrustLogobar,
        status: 'canonical',
        usage: 'Place directly below the hero on the homepage.',
        previewPadded: false,
    },
    {
        id: 'mixed-testimonials-hero',
        name: 'Featured Success Story',
        componentName: 'MixedTestimonialsGrid',
        category: 'Proof',
        description: 'Compact 2-column proof module: eyebrow, headline, pull quote, 3 stat chips, photo, and two CTAs. Sits on sand-100 background. Canonical testimonial section.',
        importPath: '@/components/Home/MixedTestimonialsGrid',
        component: MixedTestimonialsGrid,
        status: 'canonical',
        usage: 'Single-story proof module for interior pages. The homepage now uses Homeowner Testimonials (quote slider) instead.',
        previewPadded: false,
        previewMaxHeight: '720px',
    },
    {
        id: 'home-testimonials',
        name: 'Homeowner Testimonials',
        componentName: 'HomeTestimonials',
        category: 'Proof',
        description: 'Editorial deep-navy (navy-900) "Client Stories" proof band: an oversized headline with homeowner portraits woven inline between the words, a manual looping testimonial slider (2–3 cards visible, with prev/next arrows outside the cards), and a Google-reviews callout below — stacked reviewer chips, a real partial-fill rating (4.1), and a "Read what homeowners say" link.',
        importPath: '@/components/Home/HomeTestimonials',
        component: HomeTestimonials,
        status: 'canonical',
        usage: 'Primary social-proof slider on the homepage. Replace GOOGLE_REVIEWS_URL with the live Google Business reviews link and keep GOOGLE_RATING in sync with the live score.',
        notes: 'Headline portraits and reviewer chips pull from /images/person_sq_*.png. The slider is keyboard/scroll friendly (snap-x) and wraps at both ends; arrows are hidden on mobile where it scrolls by swipe.',
        previewPadded: false,
        previewMaxHeight: '720px',
    },
    {
        id: 'pathway-section',
        name: 'Pathway Section',
        componentName: 'PathwaySection',
        category: 'Proof',
        description: 'Scroll-pinned arc of 6 persona steps (desktop) / vertical timeline (mobile). Steps reveal one-by-one as the user scrolls; click any persona to swap the center copy.',
        importPath: '@/components/Home/PathwaySection',
        component: PathwaySection,
        status: 'canonical',
        usage: 'Homepage only. This is a high-production scroll-pinned section, not a drop-in block.',
        previewPadded: false,
        previewMaxHeight: '760px',
        previewNote: 'Scroll-pinned in production; preview shows initial frame only.',
    },
    {
        id: 'partner-testimonials-slider',
        name: 'Partner Testimonials Slider',
        componentName: 'PartnerTestimonialsSlider',
        category: 'Proof',
        description: 'Vertical video thumbnail carousel for agent/partner stories.',
        importPath: '@/components/Agent/PartnerTestimonialsSlider',
        component: PartnerTestimonialsSlider,
        status: 'needs-standardization',
        usage: 'Agent pages only. Visual style not yet reconciled with the 3 canonical card patterns.',
        previewPadded: false,
        previewMaxHeight: '600px',
    },
    {
        id: 'testimonial-carousel',
        name: 'Testimonial Carousel (old)',
        componentName: 'TestimonialCarousel',
        category: 'Proof',
        description: 'Large image + quote card with drag-to-swipe. Replaced by Featured Success Story.',
        importPath: '@/components/Shared/TestimonialCarousel',
        component: TestimonialCarousel,
        status: 'needs-standardization',
        usage: 'Do not use for new pages. Use the Featured Success Story module instead.',
        notes: 'Kept for backward compatibility. Retire when remaining usage is removed.',
        previewPadded: false,
        previewMaxHeight: '600px',
    },
    {
        id: 'testimonials-slider',
        name: 'Testimonials Slider (old)',
        componentName: 'TestimonialsSlider',
        category: 'Proof',
        description: 'Horizontally scrolling 5-star testimonial cards with avatar group footer. Replaced by Featured Success Story.',
        importPath: '@/components/Home/TestimonialsSlider',
        component: TestimonialsSlider,
        status: 'needs-standardization',
        usage: 'Do not use for new pages. Use the Featured Success Story module instead.',
        previewPadded: false,
        previewMaxHeight: '600px',
    },

    // ────────────────────────────────────────────────────────────
    // CONTENT
    // ────────────────────────────────────────────────────────────
    {
        id: 'your-money-at-work',
        name: 'Your Money at Work',
        componentName: 'YourMoneyAtWork',
        category: 'Content',
        description: 'Stat cards + worked breakdown table.',
        importPath: '@/components/Home/YourMoneyAtWork',
        component: YourMoneyAtWork,
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '600px',
    },
    {
        id: 'program-requirements',
        name: 'Program Requirements',
        componentName: 'ProgramRequirements',
        category: 'Content',
        description: '6-icon grid of program qualifications.',
        importPath: '@/components/Home/ProgramRequirements',
        component: ProgramRequirements,
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '600px',
    },
    {
        id: 'featured-markets',
        name: 'Featured Markets',
        componentName: 'FeaturedMarkets',
        category: 'Content',
        description: 'Photo cards linking to each market page.',
        importPath: '@/components/Home/FeaturedMarkets',
        component: FeaturedMarkets,
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '720px',
    },
    {
        id: 'home-buying-toolkit',
        name: 'Home Buying Toolkit',
        componentName: 'HomeBuyingToolkit',
        category: 'Content',
        description: '3 linked tool cards + craftsman image badge.',
        importPath: '@/components/Home/HomeBuyingToolkit',
        component: HomeBuyingToolkit,
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '600px',
    },
    {
        id: 'founders-intro',
        name: 'Founders Intro',
        componentName: 'FoundersIntro',
        category: 'Content',
        description:
            'Editorial team intro — eyebrow pill, large headline + body, asymmetric photo collage on the right, optional "Let\'s connect" team-member section. Framer-style scroll-triggered animations.',
        importPath: '@/components/Shared/FoundersIntro',
        component: FoundersIntro,
        sampleProps: {
            eyebrow: 'Founders',
            title: 'We believe in our mission.',
            body: [
                'Hey friends! 👋 We are Nick and Cam, two builders with one belief: more families deserve a real shot at homeownership. We started Berry Rock Homes to make it happen.',
                'We pair human guidance with a structured pathway. Every payment moves you closer. Every step is transparent.',
            ],
            photos: [
                { src: '/images/founder_1.jpg', alt: 'Founders biking' },
                { src: '/images/partner_1.jpg', alt: 'Partner 1' },
                { src: '/images/founder_2.jpg', alt: 'Founder portrait' },
                { src: '/images/partner_3.jpg', alt: 'Partner 3' },
                { src: '/images/partner_5.jpg', alt: 'Partner 5' },
            ],
            connect: {
                heading: "Let's connect",
                body: "We're the people behind this work. If you want to chat, have questions, or just say hi — reach out.",
                members: [
                    {
                        name: 'Nick',
                        role: 'Co-founder · Lease-to-own systems',
                        photo: '/images/founder_1.jpg',
                        linkedin: 'https://linkedin.com',
                    },
                    {
                        name: 'Cam',
                        role: 'Co-founder · Partner & realtor relations',
                        photo: '/images/founder_2.jpg',
                        linkedin: 'https://linkedin.com',
                    },
                ],
            },
        },
        variants: [
            'With/without `connect` block',
            '3+ photos (collage scales gracefully up to 6)',
            'Custom eyebrow icon (defaults to Info)',
        ],
        usage:
            'Use as a humanizing intro on About / Why Us / Founders pages. Pair photography that feels candid, not corporate.',
        notes:
            'Asymmetric collage uses three flex columns with staggered `pt-*` offsets and per-photo motion variations. Photos enter with subtle Y + X + rotation drift and a custom ease curve (0.22, 1, 0.36, 1) for a Framer-style feel.',
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '720px',
    },
    {
        id: 'stats-callout',
        name: 'Stats Callout',
        componentName: 'StatsCallout',
        category: 'Content',
        description: 'Two-column section with headline + lede on the left and a stacked stat card on the right.',
        importPath: '@/components/Shared/StatsCallout',
        component: StatsCallout,
        sampleProps: {
            title: 'Berry Rock Homes is like you: dedicated to the client.',
            subtitle:
                'We help your clients achieve homeownership. We are focused on your growth, here to take away the financing pain points that slow you down and save your deals.',
            background: 'berry',
            stats: [
                { value: '500+', label: 'Partner Agents' },
                { value: '$300M+', label: 'Client transactions funded and closed' },
                { value: '83%', label: 'Success rate' },
            ],
        },
        variants: [
            'background="berry" (warm coral tint — default)',
            'background="navy" (cool blue tint)',
            'background="neutral" (gray)',
            'background="sky" (light blue)',
        ],
        usage: 'Use as a proof band on internal pages — pair a headline with 2-4 stats. The stat card uses a palette tint to stay distinct from the page background.',
        notes: 'Card background is driven by the `background` prop. Eyebrow is optional.',
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '600px',
    },

    // ────────────────────────────────────────────────────────────
    // CTA
    // ────────────────────────────────────────────────────────────
    {
        id: 'qualify-cta',
        name: 'Get Started',
        componentName: 'QualifyCTA',
        category: 'CTA',
        description: 'Two-column closing CTA on sand-50. Left: a desktop-only bento photo collage where the lead tile is clipped to a house silhouette (echoing the brand mark). Right: "A risk-free application." headline, three icon-and-label reassurance points with no supporting sentence (soft credit check, no commitment, zero application fee), and a single dark "See If You Qualify" pill.',
        importPath: '@/components/Home/QualifyCTA',
        component: QualifyCTA,
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '600px',
    },
    {
        id: 'news-feature',
        name: 'News Feature',
        componentName: 'NewsFeature',
        category: 'CTA',
        description: 'Thin horizontal "as seen on" band linking to external press.',
        importPath: '@/components/Home/NewsFeature',
        component: NewsFeature,
        status: 'canonical',
        previewPadded: false,
    },

    // ────────────────────────────────────────────────────────────
    // FORM / INTERACTIVE
    // ────────────────────────────────────────────────────────────
    {
        id: 'interactive-calculator',
        name: 'Interactive Calculator',
        componentName: 'InteractiveCalculator',
        category: 'Form',
        description: 'Range slider + live calculation panel for pathway pricing.',
        importPath: '@/components/Calculator/InteractiveCalculator',
        component: InteractiveCalculator,
        status: 'canonical',
        previewPadded: false,
        previewMaxHeight: '600px',
    },

    // ────────────────────────────────────────────────────────────
    // UTILITY
    // ────────────────────────────────────────────────────────────
    {
        id: 'video-placeholder',
        name: 'Video Placeholder',
        componentName: 'VideoPlaceholder',
        category: 'Content',
        description: 'Aspect-ratio video frame with cover image + play button.',
        importPath: '@/components/Shared/VideoPlaceholder',
        component: VideoPlaceholder,
        sampleProps: {
            title: 'A look inside the program',
            description: 'Watch how families used Berry Rock to buy their first home.',
        },
        status: 'canonical',
        previewPadded: false,
    },
];

export const categories = [
    'All',
    ...Array.from(new Set(moduleRegistry.map((m) => m.category))),
];
