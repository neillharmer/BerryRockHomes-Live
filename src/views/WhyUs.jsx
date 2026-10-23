'use client';

import { Route, BadgeDollarSign, HeartHandshake, Home as HomeIcon, ArrowRight, Eye, Heart, ShieldCheck, Handshake, Sparkles } from 'lucide-react';
import Link from 'next/link';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import StatsCallout from '@/components/Shared/StatsCallout';

const WhyUs = () => {

    const features = [
        { icon: <Route className="w-6 h-6" />,           title: "Clear Pathway",            description: "Unlike traditional renting, our program is designed with a clear goal: home ownership. We outline the exact steps from day one." },
        { icon: <BadgeDollarSign className="w-6 h-6" />, title: "Locked-In Purchase Price", description: "Your future purchase price is agreed upon before you move in. If home values skyrocket, you still pay the lower agreed price." },
        { icon: <HeartHandshake className="w-6 h-6" />,  title: "Credit Reporting",          description: "We work with partners to report your on-time payments to improve your credit score during your lease period, preparing you for a traditional mortgage." },
        { icon: <HomeIcon className="w-6 h-6" />,           title: "Choose the Home",           description: "You aren't limited to our inventory. You pick the home you want from the market, we buy it, and you lease it back." },
    ];

    const values = [
        // Aug 10 (00:22:48): "We believe in creating opportunities for people to
        // become homeowners... the central idea being opportunity. We're opportunity
        // creators." The previous line leaned on the dignity framing he asked us to
        // drop in the same exchange.
        { title: "Opportunity",  icon: <Sparkles className="w-6 h-6" />,    description: "We believe in creating opportunities for people to become homeowners, in the home of their choice, from the start.", card: "bg-sage-50", icon_bg: "bg-sage-200 text-sage-700" },
        { title: "Integrity",    icon: <ShieldCheck className="w-6 h-6" />, description: "A 10-year track record of delivering for our clients — doing exactly what we said we would, from day one.", card: "bg-navy-50",  icon_bg: "bg-navy-100 text-navy-700" },
        { title: "Transparency", icon: <Eye className="w-6 h-6" />,         description: "We manage expectations with clear detail regarding the road to homeownership.",               card: "bg-sky-50",   icon_bg: "bg-sky-100 text-sky-500" },
        { title: "Stability",    icon: <Heart className="w-6 h-6" />,       description: "A stable home is the foundation of a healthy family — a place to call home that lets you make confident decisions about the future.", card: "bg-berry-50", icon_bg: "bg-berry-100 text-berry-700" },
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden bg-white border-b border-slate-100 pt-[200px] lg:pt-[240px]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="max-w-2xl">

                        {/* Text + CTAs */}
                        <div className="relative z-10 pb-12 lg:pb-16">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                            >
                                About Berry Rock Homes
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.07 }}
                                className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5"
                            >
                                A trusted bridge<br />
                                <span className="text-berry-600">to homeownership.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.13 }}
                                className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-md"
                            >
                                {/* Aug 10 (00:07:52). Nick read this line back and changed it:
                                    "We are the connection between today and mortgage
                                    eligibility, built on integrity, transparency and a belief
                                    that everyone deserves a front door to call their own."
                                    Tiffany then swapped "connection" for "bridge" and he agreed.
                                    The H1 above was approved as-is in the same exchange. */}
                                We are the bridge between today and mortgage eligibility, built on integrity, transparency, and a belief that everyone deserves a front door to call their own.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.18 }}
                                className="flex flex-row items-center gap-4"
                            >
                                <Link
                                    href="/apply"
                                    className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                                >
                                    See If You Qualify
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                                <Link href="/how-it-works" className="text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors">
                                    How it works →
                                </Link>
                            </motion.div>
                        </div>

                    </div>

                    <div className="relative pb-12 lg:pb-16">
                        <img
                            src="/images/pathway/get-to-know-us-2.png"
                            alt="A new homeowner receiving their house keys on the front porch"
                            className="w-full h-auto rounded-2xl shadow-soft object-cover"
                        />
                    </div>
                    </div>
                </div>
            </section>

            {/* ── Why we built Berry Rock (mission / story) ── */}
            <section className="py-24 lg:py-28 bg-sand-50 border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left: eyebrow + headline */}
                        <div className="lg:col-span-5">
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-xs font-bold text-berry-700 uppercase tracking-[0.22em] mb-6"
                            >
                                Why we built Berry Rock
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: 0.05 }}
                                className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.05] tracking-tight"
                            >
                                Built for the families<br />
                                <span className="text-berry-600">the system overlooked.</span>
                            </motion.h2>
                        </div>

                        {/* Right: narrative — one consistent size, emphasis by weight/color */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.12 }}
                            className="lg:col-span-7 lg:pt-1 space-y-6 text-lg leading-relaxed text-slate-600"
                        >
                            <p>
                                The traditional mortgage system works beautifully, but only for the people who fit its mold. For millions of others, the self-employed, the credit-rebuilders, the families who&apos;ve simply been told <span className="italic">&ldquo;not yet&rdquo;</span>, owning a home can feel out of reach for good. We didn&apos;t believe that was right, so we built a different way in.
                            </p>
                            <p>
                                We buy the home you choose and lease it back to you, with your purchase price locked in from day one. Every month, your payments build real credit and stack toward the day you're ready to make it yours for good. It&apos;s a deliberate, transparent system, engineered to carry you from renting to owning with stability the whole way through.
                            </p>
                            {/* Nick's own line, Part 3 (00:08:56): "we believe home
                                ownership still is the bedrock of the American dream and
                                our pathway program was designed with you in mind." He
                                asked for this section to lean inspirational rather than
                                feature-heavy. */}
                            <p className="font-semibold text-slate-900">
                                We believe home ownership is still the bedrock of the American dream, and our Pathway Program was designed with you in mind.
                            </p>

                            <p className="pt-6 border-t border-slate-100 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                                Nick &amp; Cam, Co-Founders
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── Why Choose Berry Rock Homes ── */}
            <section className="pt-20 lg:pt-28 bg-neutral-50 border-b border-slate-100 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] text-center mb-2">WHY BERRY ROCK HOMES</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">Why Choose Berry Rock Homes?</h2>
                    <p className="text-slate-500 text-center max-w-lg mx-auto mb-12">We operate on a foundation of trust, clarity, and unwavering support for your journey.</p>

                    <div className="grid md:grid-cols-2 gap-5">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white rounded-2xl p-7 flex gap-5 items-start border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-11 h-11 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                                    <p className="text-slate-700 text-base leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Closing band — real families anchored to the bottom of the module */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="container mx-auto px-6 max-w-7xl mt-16 lg:mt-24"
                >
                    <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-sand-50 via-sand-50 to-berry-50/60 ring-1 ring-slate-900/5">
                        {/* Soft decorative wash */}
                        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-berry-100/50 blur-3xl" />

                        <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] items-end gap-8 lg:gap-4">
                            {/* Left: closing message */}
                            <div className="px-8 pt-12 pb-10 lg:px-12 lg:pt-16 lg:pb-20">
                                <p className="text-xs font-bold text-berry-700 uppercase tracking-[0.22em] mb-4">You're in good company</p>
                                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
                                    Families like yours are<br />
                                    <span className="text-berry-600">already on the path.</span>
                                </h3>
                                <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-md">
                                    Every story starts with one decision. Join the thousands who chose a clearer way home.
                                </p>
                                <Link
                                    href="/apply"
                                    className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                                >
                                    See If You Qualify
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>

                            {/* Right: people cutout anchored to the bottom edge */}
                            <div className="relative flex items-end justify-center lg:justify-end self-stretch">
                                <img
                                    src="/images/family1.png"
                                    alt="A diverse group of Berry Rock Homes families"
                                    className="block w-full max-w-none h-auto object-contain object-bottom select-none pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── Aligned on Your Goals ── */}
            <StatsCallout
                eyebrow="Aligned with your goals"
                title="Berry Rock Homes is on your side, from your first step to your front door."
                // Aug 10 (00:16:57): Tiffany asked whether "clear financing roadblocks"
                // was problematic. Nick wanted it gone, because the brand is the
                // opportunity itself rather than Berry Rock walking alongside the client:
                // "we're here to improve access to home ownership. Our program was built
                // and designed to create a clear and transparent path for your family."
                subtitle="We are here to improve access to home ownership, and we are focused on your future. Our program was built and designed to create a clear, transparent path for your family. We don't just say that, we built the track record to prove it."
                background="navy"
                topBorder={false}
                stats={[
                    { value: '1,600+', label: 'Families on the path to ownership' },
                    // Confirmed Aug 7 (00:29:28): Nick corrected 275 to "we're technically over
                    // 300 million to close and fund"; Part 3 restates it as the agreed figure.
                    { value: '$300M+',  label: 'In homes funded and closed' },
                    // HOLD (83% success rate is ~18 months old — confirm still current with Nick before changing)
                    { value: '83%',     label: 'Pathway completion rate' },
                    { value: '5',       label: 'Markets and growing' },
                ]}
            />

            {/* ── Core Values ── */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] text-center mb-2">OUR CORE VALUES</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-3">What We Stand For</h2>
                    <p className="text-slate-500 text-center max-w-lg mx-auto mb-12">The principles that guide every interaction and decision we make.</p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className={`${value.card} rounded-2xl p-6 flex flex-col gap-3`}
                            >
                                <div className={`w-9 h-9 rounded-full ${value.icon_bg} flex items-center justify-center`}>
                                    {value.icon}
                                </div>
                                <h3 className="font-bold text-slate-900">{value.title}</h3>
                                <p className="text-slate-700 text-base leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Two paths: buyers + realtors ── */}
            <section className="relative overflow-hidden py-20 lg:py-24 bg-gradient-to-br from-white via-navy-50 to-navy-100 border-t border-slate-100">
                {/* Soft decorative blue wash */}
                <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 w-[480px] h-[480px] rounded-full bg-navy-200/40 blur-3xl" />
                <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 w-[360px] h-[360px] rounded-full bg-navy-100/60 blur-3xl" />

                <div className="relative container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">Where to next</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Find your path forward</h2>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Whether you are ready to own a home of your own or you represent clients who are, there is a place for you at Berry Rock Homes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 items-stretch">

                        {/* For buyers */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col bg-berry-700 rounded-2xl p-8 lg:p-10 shadow-md"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/15 text-white flex items-center justify-center mb-6">
                                <HomeIcon className="w-6 h-6" />
                            </div>
                            <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-3">For future homeowners</p>
                            <h3 className="text-2xl font-bold text-white mb-3 leading-snug">Start your path to ownership</h3>
                            <p className="text-base text-white/90 leading-relaxed mb-8">
                                See how our pathway program is designed to help you ultimately achieve home ownership, with your purchase price locked in from day one.
                            </p>
                            <div className="mt-auto">
                                <Link
                                    href="/how-it-works"
                                    className="inline-flex items-center gap-2 bg-white text-berry-700 hover:bg-sand-50 font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-sm"
                                >
                                    See how it works
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* For realtors */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col bg-white rounded-2xl border border-slate-100 p-8 lg:p-10 shadow-sm"
                        >
                            <div className="w-12 h-12 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center mb-6">
                                <Handshake className="w-6 h-6" />
                            </div>
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">For realtors</p>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">Partner with Berry Rock Homes</h3>
                            <p className="text-base text-slate-600 leading-relaxed mb-8">
                                Keep the clients who can't secure traditional financing, earn your full commission at closing, and grow your pipeline with a trusted alternative.
                            </p>
                            <div className="mt-auto">
                                <Link
                                    href="/realtor-referral-partner"
                                    className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-900 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-sm"
                                >
                                    Explore the partner program
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default WhyUs;
