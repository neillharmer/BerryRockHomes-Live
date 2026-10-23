// Design token reference rendered by /styleguide.
// Source of truth: tailwind.config.js + BRH-Style-Guide.html.
// Values are duplicated here so the page can iterate them.

export const colorScales = [
    {
        name: 'Berry (Coral)',
        role: 'Primary action — buttons, CTAs, accents',
        prefix: 'berry',
        shades: [
            { step: 50, hex: '#fff5f3' },
            { step: 100, hex: '#fde8e4' },
            { step: 200, hex: '#fbc5bc' },
            { step: 300, hex: '#f89688' },
            { step: 400, hex: '#f36e5a' },
            { step: 500, hex: '#eb6045' },
            { step: 600, hex: '#E8553D', label: 'Primary' },
            { step: 700, hex: '#c0392b', label: 'Hover' },
            { step: 800, hex: '#9a2d22' },
            { step: 900, hex: '#7a241b' },
            { step: 950, hex: '#4a1510' },
        ],
    },
    {
        name: 'Navy',
        role: 'Primary brand — headings, nav, footer, dark sections',
        prefix: 'navy',
        shades: [
            { step: 50, hex: '#f0f4f9' },
            { step: 100, hex: '#dce6f1' },
            { step: 200, hex: '#b9cde3' },
            { step: 300, hex: '#8aaece' },
            { step: 400, hex: '#5a8db6' },
            { step: 500, hex: '#3a6e9a' },
            { step: 600, hex: '#2b567c' },
            { step: 700, hex: '#1e3f5e' },
            { step: 800, hex: '#002e5d', label: 'Primary' },
            { step: 900, hex: '#002050' },
            { step: 950, hex: '#001030' },
        ],
    },
    {
        name: 'Sky (Accent)',
        role: 'Accent — step numbers, link highlights, icon accents (Tailwind default)',
        prefix: 'sky',
        shades: [
            { step: 50, hex: '#f0f9ff' },
            { step: 100, hex: '#e0f2fe' },
            { step: 200, hex: '#bae6fd' },
            { step: 300, hex: '#7dd3fc' },
            { step: 400, hex: '#38bdf8', label: 'Primary' },
            { step: 500, hex: '#0ea5e9', label: 'Hover' },
            { step: 600, hex: '#0284c7' },
            { step: 700, hex: '#0369a1' },
        ],
    },
    {
        name: 'Neutral',
        role: 'Backgrounds and surfaces',
        prefix: 'neutral',
        shades: [
            { step: 50, hex: '#fafafa', label: 'Page bg' },
            { step: 100, hex: '#f5f5f5' },
            { step: 200, hex: '#e5e5e5' },
        ],
    },
    {
        name: 'Sand (Warm)',
        role: 'Warm cream / parchment — soft section backgrounds. Used on the Qualify CTA module.',
        prefix: 'sand',
        shades: [
            { step: 50, hex: '#faf7f2' },
            { step: 100, hex: '#f5f1eb', label: 'Canonical' },
            { step: 200, hex: '#e8e1d6' },
        ],
    },
    {
        name: 'Sage',
        role: 'Muted green — calm, natural accent. Used on article category tags (Financial Literacy).',
        prefix: 'sage',
        shades: [
            { step: 50, hex: '#f3f6f3', label: 'Tag bg' },
            { step: 200, hex: '#cbd8cb', label: 'Tag border' },
            { step: 700, hex: '#4d6150', label: 'Tag text' },
        ],
    },
    {
        name: 'Khaki',
        role: 'Warm tan — earthy neutral accent. Used on article category tags (Credit Building).',
        prefix: 'khaki',
        shades: [
            { step: 50, hex: '#f7f4ec', label: 'Tag bg' },
            { step: 200, hex: '#e2d8bf', label: 'Tag border' },
            { step: 700, hex: '#6b5d3e', label: 'Tag text' },
        ],
    },
];

export const semanticColors = [
    { role: 'Page background', token: 'bg-neutral-50', hex: '#fafafa' },
    { role: 'Body text', token: 'text-slate-800', hex: '#1e293b' },
    { role: 'Muted text', token: 'text-slate-500', hex: '#64748b' },
    { role: 'Headings', token: 'text-navy-800', hex: '#002e5d' },
    { role: 'Borders (default)', token: 'border-slate-200', hex: '#e2e8f0' },
    { role: 'Primary CTA', token: 'bg-berry-600', hex: '#E8553D' },
    { role: 'Primary CTA hover', token: 'bg-berry-700', hex: '#c0392b' },
    { role: 'Dark section', token: 'bg-navy-800', hex: '#002e5d' },
    { role: 'Accent', token: 'text-sky-400', hex: '#38bdf8' },
];

export const typographyScale = [
    {
        label: 'Display',
        classes: 'text-5xl lg:text-6xl xl:text-[3.4rem] font-extrabold text-navy-800 leading-[1.05] tracking-tight',
        specs: '56px / 800 / 1.05',
        sample: 'Stop renting your future',
        tag: 'h1',
    },
    {
        label: 'H1',
        classes: 'text-4xl lg:text-5xl font-bold text-navy-800 leading-[1.15] tracking-tight',
        specs: '40px / 700 / 1.15',
        sample: 'Become a homeowner',
        tag: 'h1',
    },
    {
        label: 'H2',
        classes: 'text-3xl md:text-4xl font-bold text-navy-800 leading-[1.2] tracking-tight',
        specs: '28–36px / 700 / 1.2',
        sample: 'How the program works',
        tag: 'h2',
    },
    {
        label: 'H3',
        classes: 'text-xl lg:text-2xl font-semibold text-navy-800 leading-[1.3]',
        specs: '20–24px / 600 / 1.3',
        sample: 'Pick the home you love',
        tag: 'h3',
    },
    {
        label: 'H4',
        classes: 'text-lg font-semibold text-navy-800',
        specs: '18px / 600',
        sample: 'Card title',
        tag: 'h4',
    },
    {
        label: 'Eyebrow / Kicker',
        classes: 'text-xs font-medium text-slate-500 uppercase tracking-[0.2em]',
        specs: '12px / 500 / 16px line-height / slate-500',
        sample: 'Welcome to Berry Rock Homes',
        tag: 'p',
    },
    {
        label: 'Lead paragraph',
        classes: 'text-base lg:text-lg text-slate-600 leading-relaxed',
        specs: '16–18px / 400 / 1.7',
        sample: 'We help families become homeowners, even when traditional lenders say no.',
        tag: 'p',
    },
    {
        label: 'Body',
        classes: 'text-base text-slate-700 leading-relaxed',
        specs: '16px / 400 / 1.6',
        sample: 'Every payment you make builds your credit and applies toward your future purchase.',
        tag: 'p',
    },
    {
        label: 'Small / Caption',
        classes: 'text-[13px] text-slate-500 leading-relaxed',
        specs: '13px / 400',
        sample: 'No impact to your credit score',
        tag: 'p',
    },
    {
        label: 'Label / Metadata',
        classes: 'text-xs font-medium text-slate-500 uppercase tracking-wider',
        specs: '12px / 500 / wide',
        sample: 'Step 01',
        tag: 'span',
    },
    {
        label: 'Inline link',
        classes: 'text-berry-600 underline underline-offset-2 hover:text-berry-700',
        specs: 'inherit / 600',
        sample: 'Read our success stories',
        tag: 'a',
    },
];

// ── Callout card patterns ─────────────────────────────────────────────────────
// Three canonical card treatments. The rule: the card always lifts off its
// background. Do not mix patterns within the same section.
export const calloutCards = [
    {
        name: 'Sand callout card',
        role: 'Primary callout card — stat grids, feature lists, program details. Use on white or neutral-50 page backgrounds.',
        classes: 'bg-sand-50 rounded-2xl p-7',
        iconBackground: 'bg-white/70 rounded-full',
        iconColor: 'text-navy-600',
        notes: 'No border, no shadow. Icon background is white/70 to lift off the sand and is always a circle (rounded-full). Never use coral/berry icons on this card.',
        background: 'light',
    },
    {
        name: 'White callout card',
        role: 'Lift card — stat chips, proof modules, any card that sits on a sand-50 or sand-100 section background.',
        classes: 'bg-white rounded-2xl shadow-sm',
        iconBackground: 'bg-sand-50 rounded-full',
        iconColor: 'text-navy-600',
        notes: 'Use shadow-sm (never shadow-md or higher) to stay subtle. Icon background is always a circle (rounded-full). Do not use on white or neutral-50 backgrounds — switch to the sand card instead.',
        background: 'sand',
    },
    {
        name: 'Dark glass card',
        role: 'Card on navy or dark photo backgrounds. Core Values, dark hero overlays.',
        classes: 'bg-white/10 border border-white/15 rounded-2xl',
        iconBackground: 'bg-berry-600/20 rounded-full',
        iconColor: 'text-berry-600',
        notes: 'Berry icons are correct here — they pop on the dark background. Icon background is always a circle (rounded-full). Do not use on light backgrounds.',
        background: 'dark',
    },
];

export const glassmorphism = [
    {
        name: '.glass-panel',
        role: 'Light glass — for cards on light backgrounds where you want subtle depth without a heavy border.',
        classes: 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-glass rounded-3xl',
        background: 'light',
    },
    {
        name: '.glass-card-dark',
        role: 'Dark glass — canonical pattern for cards floating on photos, navy gradients, or hero overlays. White content on top.',
        classes: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-xl',
        background: 'dark',
    },
    {
        name: '.glass-card-dark-interactive',
        role: 'Same as glass-card-dark with a hover state for interactive surfaces (clickable cards, links).',
        classes: 'glass-card-dark + transition-colors hover:bg-white/20',
        background: 'dark',
    },
    {
        name: '.glass-pill-dark',
        role: 'Pill-shaped dark glass for inline tags, badges, secondary buttons on dark backgrounds.',
        classes: 'bg-white/10 backdrop-blur-md border border-white/20 rounded-full',
        background: 'dark',
    },
];

export const shadows = [
    { name: 'shadow-soft', value: '0 4px 20px -2px rgba(0,0,0,0.05)', class: 'shadow-soft' },
    { name: 'shadow-glow', value: '0 0 20px rgba(232,85,61,0.25)', class: 'shadow-glow' },
    { name: 'shadow-glass', value: '0 8px 32px 0 rgba(31,38,135,0.07)', class: 'shadow-glass' },
    { name: 'shadow-sm', value: 'Tailwind default', class: 'shadow-sm' },
    { name: 'shadow-md', value: 'Tailwind default', class: 'shadow-md' },
    { name: 'shadow-lg', value: 'Tailwind default', class: 'shadow-lg' },
    { name: 'shadow-xl', value: 'Tailwind default', class: 'shadow-xl' },
];

export const radii = [
    { name: 'rounded-md', value: '6px' },
    { name: 'rounded-lg', value: '8px' },
    { name: 'rounded-xl', value: '12px' },
    { name: 'rounded-2xl', value: '16px' },
    { name: 'rounded-3xl', value: '24px' },
    { name: 'rounded-full', value: '9999px' },
];

export const spacingScale = [
    { token: 'p-2', px: 8 },
    { token: 'p-3', px: 12 },
    { token: 'p-4', px: 16 },
    { token: 'p-6', px: 24 },
    { token: 'p-8', px: 32 },
    { token: 'p-12', px: 48 },
    { token: 'p-16', px: 64 },
    { token: 'p-20', px: 80 },
    { token: 'p-24', px: 96 },
];

export const breakpoints = [
    { name: 'sm', min: '640px', usage: 'Large phones' },
    { name: 'md', min: '768px', usage: 'Tablets' },
    { name: 'lg', min: '1024px', usage: 'Desktop' },
    { name: 'xl', min: '1280px', usage: 'Large desktop' },
    { name: '2xl', min: '1536px', usage: 'Very large screens' },
];

export const motionConventions = [
    { name: 'Stagger', value: 'delay 0.06s – 0.15s between items', usage: 'Sequenced reveals' },
    { name: 'Fade-in-up', value: 'opacity 0→1, y 12–20→0', usage: 'Hero copy, headings' },
    { name: 'Duration', value: 'duration-300 (UI) / duration-600–700 (content)', usage: 'Tailwind transitions' },
    { name: 'Hover lift', value: '-translate-y-0.5', usage: 'Buttons (.btn-dark / .btn-light)' },
];
