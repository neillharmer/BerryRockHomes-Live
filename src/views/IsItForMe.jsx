'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Home, KeyRound, Landmark, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import IsThisYou from '../components/IsItForMe/IsThisYou';
import QualifyCTA from '../components/Home/QualifyCTA';






// The four qualification criteria, one line each.
//
// The previous version of this lived in a "What makes someone a good candidate"
// section where each criterion carried a detail line plus a three-line note. Nick
// asked for that to go on Aug 5 (01:20:08) because "there's a lot of information,"
// and Tiffany noted the criteria are covered elsewhere (they are, in full, at
// FAQ.jsx "What are the basic qualification requirements?"). This keeps the facts
// findable on the page where people actually ask the question, at a fraction of
// the length.
//
// No credit score figure here on purpose: Nick questioned publishing one at all
// ("I don't know if you need to have a number on credit, do you?"), so this leads
// with the hard disqualifier instead. The credit story framing lives in the
// persona cards below.
const criteria = [
    { Icon: Landmark,    label: 'Household income',     value: '$50,000+ per year' },
    { Icon: Home,        label: 'Housing payments',     value: 'Current for the past 6 months' },
    { Icon: KeyRound,    label: 'Option consideration', value: '7% of the purchase price at contract' },
    { Icon: ShieldCheck, label: 'Credit',               value: 'No active, open bankruptcies' },
];

const whyBerryRock = [
    { Icon: Heart,           title: 'A real, human experience', body: 'Clear answers and steady guidance at every step, with no runaround and no jargon.' },
    { Icon: Landmark,        title: 'More than a decade in',    body: "We've spent over ten years getting families to the front door. That track record means a proven process and a partner who will still be standing beside you on closing day." },
    { Icon: ShieldCheck, title: 'Transparent from day one',     body: 'Every number is on the table before you sign. No hidden fees, no surprises.' },
    { Icon: Sparkles,    title: 'On your side, start to finish', body: 'We only win when you reach the front door, so your goal is our goal.' },
];


const IsItForMe = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <div className="relative overflow-hidden pt-[200px] lg:pt-[240px]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:min-h-[560px]">

                        {/* Left: text + CTAs */}
                        <div className="relative z-10 pb-12 lg:pb-28">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                            >
                                Pathway Program<sup className="text-[0.6em] tracking-normal">SM</sup>
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.07 }}
                                className="text-4xl md:text-5xl font-bold text-navy-800 tracking-tight leading-tight mb-5"
                            >
                                Is It For Me?
                            </motion.h1>
                            {/* Per Aug 5 (01:22:01): Nick asked for this as a subheading
                                directly under "Is It For Me?" — "have 7% of the purchase
                                price and stable income, you're a good fit ... because
                                people overthink whether their clients qualified or not." */}
                            <motion.p
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl font-semibold text-navy-700 leading-snug mb-5 max-w-lg"
                            >
                                Have 7% of the purchase price and stable income? You&rsquo;re a good fit.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.13 }}
                                className="text-lg leading-relaxed mb-8 max-w-lg"
                                style={{ color: '#4b5563' }}
                            >
                                If you have 7% of the price of the home you want and steady income, you are a good candidate for Berry Rock Homes. We built this for people who don&rsquo;t fit the traditional mortgage box. They can afford a home. Their situation just doesn&rsquo;t fit a narrow checklist.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-3"
                            >
                                <Link href="/apply" className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md">
                                    See If You Qualify <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* Buyers image — inline on mobile, anchored to bottom-right on desktop */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="px-6 mt-4 lg:mt-0 lg:px-0 lg:absolute lg:bottom-0 lg:right-[5%] xl:right-[3%] lg:w-[80%] xl:w-[74%] lg:max-w-[1400px] pointer-events-none"
                >
                    <img
                        src="/images/buyers-header-1.png"
                        alt="A diverse group of prospective homebuyers smiling together"
                        className="block w-full h-auto"
                    />
                </motion.div>
            </div>

            {/* ── What is the Pathway Program ── */}
            <section className="bg-neutral-50 py-16 lg:py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-3xl mb-12">
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">What Is the Pathway Program?</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-4">
                            A responsible bridge from renting to owning.
                        </h2>
                        <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                            The Pathway Program fills the gap for people who can comfortably afford a home but aren&rsquo;t traditionally mortgage-eligible just yet. Berry Rock Homes buys the home you choose, you move in and lease it, and you buy it once you qualify for a mortgage — with your purchase price locked in from day one.
                        </p>
                    </div>

                    {/* Bridge: where you are → the program → where you're headed */}
                    <div className="grid md:grid-cols-[1fr_auto_1.15fr_auto_1fr] gap-5 md:gap-3 items-stretch">

                        {/* Where you are */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
                            <div className="w-12 h-12 rounded-full bg-sand-50 flex items-center justify-center shrink-0">
                                <KeyRound size={22} className="text-navy-600" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.14em] mb-1.5">Where you are</p>
                                <p className="text-lg font-semibold text-navy-800 mb-1">Renting and ready</p>
                                <p className="text-base text-slate-700 leading-relaxed">You pay rent on time and can afford a home, but a bank&rsquo;s checklist says &ldquo;not yet.&rdquo;</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex items-center justify-center text-navy-300" aria-hidden="true">
                            <ArrowRight size={22} />
                        </div>

                        {/* The program (highlighted) */}
                        <div className="bg-navy-800 rounded-2xl p-6 shadow-md flex flex-col gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <Home size={22} className="text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.14em] mb-1.5 text-berry-300">The bridge</p>
                                <p className="text-lg font-semibold text-white mb-1">The Pathway Program</p>
                                <p className="text-base leading-relaxed text-navy-100">We buy the home for you and lease it back while you build credit, savings, and mortgage readiness — at a locked-in price.</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex items-center justify-center text-navy-300" aria-hidden="true">
                            <ArrowRight size={22} />
                        </div>

                        {/* Where you're headed */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
                            <div className="w-12 h-12 rounded-full bg-sand-50 flex items-center justify-center shrink-0">
                                <Home size={22} className="text-berry-600" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.14em] mb-1.5">Where you&rsquo;re headed</p>
                                <p className="text-lg font-semibold text-navy-800 mb-1">Homeownership</p>
                                <p className="text-base text-slate-700 leading-relaxed">You buy the home at your locked-in price — the keys, and the benefit of increased home value, are yours.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── What we look at (the four criteria) ── */}
            <section id="qualify" className="bg-white py-16 lg:py-20 scroll-mt-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-2xl mb-10">
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">Could This Be a Fit?</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-4">The four things we look at</h2>
                        <p className="text-base leading-relaxed" style={{ color: '#334155' }}>
                            A picture of readiness, not a rigid checklist. If one of these isn&rsquo;t quite there yet, reach
                            out anyway.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {criteria.map(({ Icon, label, value }) => (
                            <div key={label} className="bg-sand-50 rounded-2xl p-6">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 mb-4">
                                    <Icon size={18} className="text-navy-700" aria-hidden="true" />
                                </div>
                                <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.14em] mb-1.5">{label}</p>
                                <p className="text-base font-semibold text-navy-800 leading-snug">{value}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-slate-500 mt-6 leading-relaxed">
                        W-2, self-employed, and 1099 income all count with proper documentation.{' '}
                        <Link href="/faq" className="text-berry-700 font-semibold hover:text-berry-800">
                            See the FAQ
                        </Link>{' '}
                        for the full detail, including property and location restrictions.
                    </p>
                </div>
            </section>

            {/* ── Is This You? ── */}
            <IsThisYou />

            {/* ── Why Berry Rock ── */}
            <section className="pt-20 lg:pt-28 bg-navy-800 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <p className="text-xs font-bold text-berry-300 uppercase tracking-[0.2em] text-center mb-2">Why Berry Rock Homes</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">More than a program, a partner in your corner.</h2>
                    <p className="text-navy-100 text-center max-w-2xl mx-auto mb-12 leading-relaxed">We built Berry Rock Homes to treat people like people, not credit scores. From your first question to closing day, you get a real team that answers honestly, moves quickly, and roots for you the whole way. It&rsquo;s why our buyers feel supported and why realtors love partnering with us.</p>

                    <div className="grid md:grid-cols-2 gap-5">
                        {whyBerryRock.map(({ Icon, title, body }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white/5 rounded-2xl p-7 flex gap-5 items-start border border-white/10 hover:bg-white/[0.07] transition-colors"
                            >
                                <div className="w-11 h-11 rounded-full bg-white/10 text-berry-300 flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-2">{title}</h3>
                                    <p className="text-navy-100 text-base leading-relaxed">{body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Closing band — get to know the team, anchored to the bottom of the module */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="container mx-auto px-6 max-w-7xl mt-16 lg:mt-24"
                >
                    <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 ring-1 ring-white/10 lg:grid lg:grid-cols-2 lg:items-stretch">
                        {/* Soft decorative wash */}
                        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-berry-600/20 blur-3xl" />

                        {/* Featured image — banner on mobile, right-hand column on desktop */}
                        <div className="relative min-h-[220px] lg:order-2 lg:min-h-0">
                            <img
                                src="/images/pathway/get-to-know-us.png"
                                alt="Two people reviewing home purchase paperwork together at a kitchen table"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div
                                aria-hidden
                                className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-transparent lg:bg-gradient-to-r lg:from-navy-950/70 lg:via-navy-950/10 lg:to-transparent"
                            />
                        </div>

                        <div className="relative max-w-xl lg:order-1">
                            <div className="px-8 pt-12 pb-12 lg:px-12 lg:pt-16 lg:pb-20">
                                <p className="text-xs font-bold text-berry-300 uppercase tracking-[0.22em] mb-4">Get to know us</p>
                                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-[1.08] tracking-tight mb-5">
                                    Get to know the team<br />
                                    <span className="text-berry-300">behind your path home.</span>
                                </h3>
                                <p className="text-base lg:text-lg text-navy-100 leading-relaxed mb-8 max-w-md">
                                    The same team that answers your first question is right beside you all the way to closing day. See who we are and why families and realtors trust us with the path home.
                                </p>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                                >
                                    Get to know Berry Rock
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── Get Started ── */}
            <QualifyCTA showFaqLink />

        </div>
    );
};

export default IsItForMe;
