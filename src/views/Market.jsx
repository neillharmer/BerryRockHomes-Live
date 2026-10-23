'use client';

import Link from 'next/link';
import { MapPin, ArrowRight, TrendingUp, Home, Users, Clock, GraduationCap, LineChart, Building2, Compass, ExternalLink, Info } from 'lucide-react';
import PageHeader from '../components/Shared/PageHeader';
import InteractiveCalculator from '../components/Calculator/InteractiveCalculator';
import { getMarketBySlug } from '../data/markets';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Mock database of market information
const KC_DATA = {
    name: 'Kansas City, MO/KS',
    state: 'Kansas & Missouri',
    heroImage: '/images/kansas_city_market.png',
    description: 'Kansas City spans two states and one incredible community. With a booming tech and logistics economy, rich cultural heritage, and some of the most affordable neighborhoods in the Midwest, the entire KC metro is an active Berry Rock Homes market.',
    neighborhoods: ['Kansas City, KS', 'Overland Park', 'Olathe', 'Shawnee', 'Lenexa', 'Gladstone', 'Liberty'],
    exclusion: 'We currently can\'t purchase in Jackson County, MO.',
    marketBlurb: `Kansas City spans two states and delivers the rare combination of big-city opportunity and genuinely affordable homeownership. Anchored by a fast-growing tech and logistics corridor, KC has attracted major employers on both sides of the state line while keeping home prices well below comparable metros. The Berry Rock Homes Pathway Program is active across the KC metro, from the established suburbs of Overland Park and Olathe on the Kansas side to growing Missouri communities like Gladstone and Liberty. Whether your credit is still building or your income doesn't fit a traditional W-2 box, Kansas City is one of our most active and successful markets.`,
    mapEmbed: 'https://www.google.com/maps/d/embed?mid=1HIeamVJTkvsj_Cj1B5z-qKQPCJCA1CA',
    resources: {
        schools: 'https://www.greatschools.org/missouri/kansas-city/',
        market: 'https://www.redfin.com/city/35751/MO/Kansas-City/housing-market',
        neighborhoods: 'https://www.niche.com/places-to-live/kansas-city-jackson-mo/',
        visit: 'https://www.visitkc.com/',
    },
    stats: [
        { Icon: Home,       label: 'Median home price',      value: '$265K' },
        { Icon: TrendingUp, label: 'YoY price growth',        value: '3.9%'  },
        { Icon: Users,      label: 'Program participants',    value: '250+'  },
        { Icon: Clock,      label: 'Avg. time to ownership',  value: '14 mo.' },
    ],
};

const MARKET_DATA = {
    'indianapolis-in': {
        name: 'Indianapolis, IN',
        state: 'Indiana',
        heroImage: '/images/indianapolis_market.png',
        description: 'Known as the Crossroads of America, Indianapolis offers a thriving job market, excellent schools, and incredibly affordable family homes. Our Pathway Program is actively expanding across the greater Indy metro area.',
        neighborhoods: ['Carmel', 'Fishers', 'Broad Ripple', 'Greenwood'],
        marketBlurb: `Indianapolis is one of the fastest-growing metros in the Midwest and one of the most affordable entry points for first-time buyers anywhere in the country. Anchored by healthcare, logistics, and a fast-expanding tech sector, Indy's job market is strong and its neighborhoods are genuinely livable. The Berry Rock Homes Pathway Program is active across the full metro, from Carmel's top-rated schools to Broad Ripple's walkable, neighborhood-focused streets. Indianapolis is a market where the math works in your favor, even if you don't fit a traditional lender's checklist.`,
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=19XY5qrm0iBa-2VZB-ishFyLDRcwoybI',
        resources: {
            schools: 'https://www.greatschools.org/indiana/indianapolis/',
            market: 'https://www.redfin.com/city/9170/IN/Indianapolis/housing-market',
            neighborhoods: 'https://www.niche.com/places-to-live/indianapolis-marion-in/',
            visit: 'https://www.visitindy.com/',
        },
        stats: [
            { Icon: Home,       label: 'Median home price',      value: '$285K' },
            { Icon: TrendingUp, label: 'YoY price growth',        value: '4.2%'  },
            { Icon: Users,      label: 'Program participants',    value: '300+'  },
            { Icon: Clock,      label: 'Avg. time to ownership',  value: '14 mo.' },
        ],
    },
    'kansas-city-mo': KC_DATA,
    'kansas-city-ks': KC_DATA,
    'kansas-city': KC_DATA,
    'oklahoma-city-ok': {
        name: 'Oklahoma City, OK',
        state: 'Oklahoma',
        heroImage: '/images/oklahoma_city_market.png',
        description: "Oklahoma City is defined by its rapid economic growth, friendly communities, and unmatched real estate value. It's an ideal market for our clients looking to transition from renting to owning quickly alongside their growing families.",
        neighborhoods: ['Edmond', 'Moore', 'Norman', 'Midtown'],
        marketBlurb: `Oklahoma City consistently ranks among the most affordable housing markets in the entire country, and it's growing fast. With a diversified economy spanning energy, aerospace, and healthcare, OKC offers stable employment and a cost of living that makes homeownership genuinely achievable. The Berry Rock Homes Pathway Program is active from Edmond's family-friendly suburbs to Midtown's revitalized urban core. For buyers who don't fit the traditional mortgage box, OKC is one of the strongest markets in our network for reaching ownership ahead of schedule.`,
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=1sGOx44XbNYtfmms09TkgaVj7kVRge44',
        resources: {
            schools: 'https://www.greatschools.org/oklahoma/oklahoma-city/',
            market: 'https://www.redfin.com/city/14237/OK/Oklahoma-City/housing-market',
            neighborhoods: 'https://www.niche.com/places-to-live/oklahoma-city-oklahoma-ok/',
            visit: 'https://www.visitokc.com/',
        },
        stats: [
            { Icon: Home,       label: 'Median home price',      value: '$215K' },
            { Icon: TrendingUp, label: 'YoY price growth',        value: '5.1%'  },
            { Icon: Users,      label: 'Program participants',    value: '180+'  },
            { Icon: Clock,      label: 'Avg. time to ownership',  value: '13 mo.' },
        ],
    },
    'st-louis-mo': {
        name: 'St. Louis, MO',
        state: 'Missouri',
        heroImage: '/images/st_louis_market.png',
        description: "St. Louis boasts storied neighborhoods, rich American history, and a fiercely loyal local culture. With a stable housing market and affordable entry points, it's a brilliant place to lay down roots.",
        neighborhoods: ['Florissant', 'Chesterfield', 'Kirkwood', 'St. Charles'],
        marketBlurb: `St. Louis offers some of the most stable home values in the Midwest, with a long history of tight-knit neighborhoods and deep community roots. Its diversified economy (healthcare, education, financial services) means consistent employment even when other markets cool off. The Berry Rock Homes Pathway Program serves buyers across the full STL metro, from the tree-lined streets of Kirkwood to the growing suburbs of St. Charles County. If you've been building toward homeownership and need a structured path to get there, St. Louis rewards the patient buyer.`,
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=13tYlaOO_596eMc_scE25ruTuJaotlOM',
        resources: {
            schools: 'https://www.greatschools.org/missouri/st.-louis/',
            market: 'https://www.redfin.com/city/16661/MO/St-Louis/housing-market',
            neighborhoods: 'https://www.niche.com/places-to-live/st-louis-mo/',
            visit: 'https://explorestlouis.com/',
        },
        stats: [
            { Icon: Home,       label: 'Median home price',      value: '$205K' },
            { Icon: TrendingUp, label: 'YoY price growth',        value: '3.4%'  },
            { Icon: Users,      label: 'Program participants',    value: '120+'  },
            { Icon: Clock,      label: 'Avg. time to ownership',  value: '15 mo.' },
        ],
    },
    'tulsa-ok': {
        name: 'Tulsa, OK',
        state: 'Oklahoma',
        heroImage: '/images/tulsa_market.png',
        description: 'Tulsa is rapidly emerging as a hub for entrepreneurship and family life. Known for its beautiful parks and architecture, Tulsa offers an unbeatable cost of living and a welcoming community.',
        neighborhoods: ['Broken Arrow', 'Owasso', 'Jenks', 'Bixby'],
        marketBlurb: 'Tulsa has quietly become one of the most compelling markets for first-time buyers in the South-Central US. With a cost of living well below the national average, a thriving arts district, and a remote-worker incentive program that has drawn thousands of new residents, demand for quality housing is rising while prices remain accessible. The Berry Rock Homes Pathway Program is active across the Tulsa metro, from the family-oriented suburbs of Broken Arrow and Jenks to the established neighborhoods of Owasso. For buyers ready to stop renting and start benefiting from increased home value, Tulsa makes the numbers work.',
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=1vEpxYNs1K2iPUW9xrFje1XGWu6llW2U',
        resources: {
            schools: 'https://www.greatschools.org/oklahoma/tulsa/',
            market: 'https://www.redfin.com/city/35765/OK/Tulsa/housing-market',
            neighborhoods: 'https://www.niche.com/places-to-live/tulsa-tulsa-ok/',
            visit: 'https://www.visittulsa.com/',
        },
        stats: [
            { Icon: Home,       label: 'Median home price',      value: '$195K' },
            { Icon: TrendingUp, label: 'YoY price growth',        value: '4.8%'  },
            { Icon: Users,      label: 'Program participants',    value: '90+'   },
            { Icon: Clock,      label: 'Avg. time to ownership',  value: '14 mo.' },
        ],
    },
};

// Shared shape for the per-market resource links rendered in the Market Snapshot
// section. URLs live per-market on MARKET_DATA[slug].resources, keyed by `key`.
// Each opens in a new tab.
const RESOURCE_LINKS = [
    { key: 'schools',       Icon: GraduationCap, title: 'Local schools',     desc: 'Ratings & reviews',     source: 'GreatSchools' },
    { key: 'market',        Icon: LineChart,     title: 'Housing market',    desc: 'Prices & trends',       source: 'Redfin' },
    { key: 'neighborhoods', Icon: Building2,     title: 'Neighborhood guide', desc: 'Best places to live',   source: 'Niche' },
    { key: 'visit',         Icon: Compass,       title: 'Things to do',      desc: 'Parks, dining & culture', source: 'Visitor guide' },
];

const Market = ({ params }) => {
    const { marketId } = params;

    // Fallback if market is not found in our data
    const market = MARKET_DATA[marketId];

    if (!market) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-neutral-50 px-4">
                <MapPin className="text-slate-300 w-24 h-24 mb-6" />
                <h1 className="text-3xl font-bold text-navy-800 mb-4">Market Not Found</h1>
                <p className="text-slate-500 mb-8 max-w-md text-center">We couldn't find the real estate market you are looking for, or we haven't expanded there yet.</p>
                <Link href="/" className="text-berry-600 font-bold hover:text-berry-700 flex items-center gap-2">
                    &larr; Return to Homepage
                </Link>
            </div>
        );
    }

    // City name without the state suffix (eyebrow already carries the state).
    const city = market.name.split(',')[0];
    // Canonical slug (KC aliases resolve to kansas-city-mo) for the calculator formula.
    const calculatorMarket = getMarketBySlug(marketId)?.slug;

    return (
        <>
        <div className="min-h-screen bg-neutral-50">
            {/* Contextual Page Header */}
            <PageHeader
                variant="light"
                eyebrow={`Berry Rock Homes · ${market.state}`}
                title={`Your path to ownership in ${city}`}
                subtitle={`Stop renting. Start owning. See how the Pathway Program opens a path to homeownership across the ${city} market.`}
            />

            {/* ── Market Overview ── */}
            <section className="bg-white border-b border-slate-100 py-20 lg:py-28">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-[450px]"
                        >
                            <img src={market.heroImage} alt={market.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/20 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="text-[clamp(1.5rem,7.5vw,2.25rem)] font-bold mb-2 leading-[1.05] whitespace-nowrap">{market.name}</div>
                                <div className="text-white/90 font-medium text-base flex items-center gap-2.5">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-berry-500 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-berry-500" />
                                    </span>
                                    Active Market
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/2 flex flex-col"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight tracking-tight">Why Choose {market.state}?</h2>
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-10">
                                {market.description}
                            </p>

                            <div className="mb-10">
                                <h4 className="text-xs font-bold text-navy-600 mb-4 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-3">
                                    <MapPin size={16} className="text-berry-600" /> Popular Areas
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {market.neighborhoods.map((ns, idx) => (
                                        <span key={idx} className="bg-sand-50 text-slate-700 text-sm font-medium px-4 py-2 rounded-full border border-sand-200 w-auto">
                                            {ns}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Coverage / eligibility FYI — mirrors site-wide program language */}
                            <div className="flex items-start gap-2.5 border-t border-slate-100 pt-4 text-xs text-slate-500 leading-relaxed">
                                <Info size={14} className="text-slate-600 mt-0.5 flex-shrink-0" />
                                <p>
                                    Berry Rock Homes isn&apos;t a listings service. You and your agent choose any qualifying home for sale on the open market within the {market.name.split(',')[0]} coverage area, and it must appraise at the purchase price, be insurable, and fall within your estimated eligible amount.{market.exclusion ? ` ${market.exclusion}` : ''}{' '}
                                    <Link href="/faq" className="text-berry-600 underline underline-offset-2 hover:text-berry-700 font-medium">
                                        Some restrictions apply.
                                    </Link>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Market Snapshot — unique per-market content for SEO ── */}
            {market.marketBlurb && (
                <section className="bg-sand-50 border-b border-slate-100 py-20 lg:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="container mx-auto px-6 max-w-7xl"
                    >
                        <div className="mb-10 lg:mb-12 max-w-2xl">
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">Market snapshot</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight tracking-tight">
                                Inside the {city} market
                            </h2>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                                {market.marketBlurb}
                            </p>
                            {market.resources && (
                                <div className="bg-white rounded-2xl shadow-sm p-3">
                                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] px-3 pt-3 pb-2">
                                        Explore {market.name.split(',')[0]}
                                    </p>
                                    <div className="flex flex-col">
                                        {RESOURCE_LINKS.map(({ key, Icon, title, desc, source }) => {
                                            const href = market.resources[key];
                                            if (!href) return null;
                                            return (
                                                <a
                                                    key={key}
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-4 p-3 rounded-xl hover:bg-sand-50 transition-colors"
                                                >
                                                    <span className="w-11 h-11 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors">
                                                        <Icon size={18} />
                                                    </span>
                                                    <div className="min-w-0">
                                                        <p className="font-bold text-slate-900 text-sm leading-snug group-hover:text-berry-700 transition-colors">{title}</p>
                                                        <p className="text-xs text-slate-500 leading-snug mt-0.5">{desc} · {source}</p>
                                                    </div>
                                                    <ExternalLink size={15} className="ml-auto text-slate-500 group-hover:text-berry-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </section>
            )}

            {/* ── Service Area Map — surfaced here, directly under the market links, per client walkthrough ── */}
            {market.mapEmbed && (
                <section className="bg-white border-b border-slate-100 py-20 lg:py-28">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-10 max-w-2xl">
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">Service Area</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight tracking-tight">
                                Where we&rsquo;re active in {city}
                            </h2>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-100 h-[420px]">
                            <iframe
                                src={market.mapEmbed}
                                title={`${market.name} service area map`}
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* ── Payment calculator — pinned to this market's formula ── */}
            {calculatorMarket && (
                <section className="bg-neutral-50 border-b border-slate-100 py-20 lg:py-28">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-10 max-w-2xl">
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">Your Numbers</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight tracking-tight">
                                What a home in {city} could cost you
                            </h2>
                        </div>
                        <InteractiveCalculator
                            market={calculatorMarket}
                            initialState={marketId === 'kansas-city-ks' ? 'KS' : undefined}
                        />
                    </div>
                </section>
            )}

            {/* ── How It Works bridge callout ── */}
            <section className="bg-neutral-50 py-20 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-3 tracking-tight">
                            The Pathway Program bridges the gap from renting to owning in {market.name}.
                        </h2>
                        <p className="text-base lg:text-lg text-slate-600 leading-relaxed md:max-w-xl">
                            Six transparent steps. A locked purchase price from day one. Every payment builds toward closing, not your landlord's mortgage.
                        </p>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-auto">
                        <Link href="/how-it-works" className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-sm group">
                            See How It Works <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>

        {/* ── There's more to the story (learn more about Berry Rock + the Pathway) ── */}
        <section className="pb-0 bg-neutral-50">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="container mx-auto px-6 max-w-7xl"
            >
                <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-sand-50 via-sand-50 to-berry-50/60 ring-1 ring-slate-900/5">
                    {/* Soft decorative wash */}
                    <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-berry-100/50 blur-3xl" />

                    <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] items-end gap-8 lg:gap-4">
                        {/* Left: message for readers who want the bigger picture */}
                        <div className="px-8 pt-12 pb-10 lg:px-12 lg:pt-16 lg:pb-20">
                            <p className="text-xs font-bold text-berry-700 uppercase tracking-[0.22em] mb-4">Get to know us</p>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
                                There&apos;s more to the<br />
                                <span className="text-berry-600">Berry Rock story.</span>
                            </h2>
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-md">
                                Curious how it all works? Learn who we are and why we built a different path to homeownership, then see how our pathway program is designed to help you ultimately achieve home ownership.
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                                >
                                    Learn About Berry Rock
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right: people cutout anchored to the bottom edge */}
                        <div className="relative flex items-end justify-center lg:justify-end self-stretch">
                            <img
                                src="/images/family2.png"
                                alt="A Berry Rock Homes family"
                                className="block w-full max-w-none h-auto object-contain object-bottom select-none pointer-events-none origin-bottom scale-[1.28] translate-x-0 lg:scale-[1.6] lg:-translate-x-28"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
        </>
    );
};

export default Market;
