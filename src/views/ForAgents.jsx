'use client';

import { ArrowRight, FileText, Send, UserCheck, BadgeCheck, Banknote, Headset, GitBranch, Download, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import StatsCallout from '../components/Shared/StatsCallout';
import YouTubeEmbed from '../components/Shared/YouTubeEmbed';
import AgentRegistrationCta from '../components/Agent/AgentRegistrationCta';
import { markets } from '../data/markets';
import { motion } from 'framer-motion';

const advantages = [
    {
        icon: BadgeCheck,
        title: 'An additional tool for your tool belt',
        body: 'An additional tool in your tool belt to help you serve more families and earn more commission for clients who don’t fit the traditional mortgage box.',
    },
    {
        icon: Banknote,
        title: 'Reliable closings',
        // Aug 7 (00:25:12): "we don't close in cash. We pull down on a line of credit
        // for everything we do... just say reliable closings... we purchase with
        // pre-approved bank lines. And typically closes 30 days with no finance
        // condition." The appraisal carve-out is his, from the FAQ at 01:20:28.
        body: 'We purchase with pre-approved bank lines and typically close in about 30 days, with no financing contingencies outside of the home appraising.',
    },
    {
        icon: Headset,
        title: 'Service that protects your reputation',
        body: 'It’s your pipeline and your client. We deliver excellent, transparent service at every step so the relationship, and your reputation, stays right where it should: with you.',
    },
];

// Aug 7: Nick folded the closing-cost schedule into the offer guides (00:46:44),
// renamed "templates" to offer guides (00:49:46), and replaced "agent training"
// with prospecting language (00:37:48).
const toolkitBenefits = [
    {
        icon: FileText,
        title: 'Offer guides by market',
        desc: 'A market-specific offer guide for each of our five metros, with the closing-cost schedule built in.',
    },
    {
        icon: Send,
        title: 'Offer cover letter',
        desc: 'A standardized cover letter to send with your offer in any market, so the seller and their agent know who Berry Rock Homes is.',
    },
    {
        icon: UserCheck,
        title: 'Agent consultation',
        desc: 'Learn how to prospect and create more leads with Berry Rock Homes.',
    },
    {
        icon: GitBranch,
        title: 'Process breakdowns',
        desc: 'Step-by-step walkthroughs of the closing and inspection process, from accepted offer to closing day.',
    },
];

// Live on the Berry Rock Homes YouTube channel. Tiffany confirmed both were
// approved as-is on Aug 10: "the other videos like Tessa's and Kingston's are
// fine." The program-overview videos are still waiting on Mark's re-cut, so
// those blocks stay posters for now.
const testimonials = [
    {
        thumb: '/images/video_thumb_tessa.png',
        name: 'Tessa Hood',
        company: 'Knight Land Company',
        youtubeId: '-54L_Sc5fgA',
    },
    {
        thumb: '/images/video-thumb_kingston.png',
        name: 'Kingston Dode',
        company: 'Creative Homes Group',
        youtubeId: 'ZC-2Y1SibHs',
    },
];


const ForAgents = () => {
    return (
    <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="relative overflow-hidden pt-[200px] lg:pt-[240px] bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-end lg:min-h-[560px]">

                    {/* Left: text + CTA */}
                    <div className="relative z-10 pb-12 lg:pb-28 lg:self-center">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                        >
                            For Realtors
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.07 }}
                            className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-navy-800 leading-[1.08] tracking-tight mb-5"
                        >
                            Realtor<br />
                            <span className="text-berry-600">Referral Partner</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.13 }}
                            className="text-base lg:text-lg leading-relaxed mb-8 max-w-md"
                            style={{ color: '#4b5563' }}
                        >
                            Don&apos;t lose clients who can&apos;t secure traditional financing. Turn your &ldquo;not yet&rdquo; clients into closed deals and keep your full commission.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-x-7 gap-y-4"
                        >
                            <a
                                href="#agent-network"
                                className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                            >
                                Become a Referral Partner
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            <a
                                href="https://bookings.cloud.microsoft/book/BerryRockHomes1@NETORG734010.onmicrosoft.com/?ismsaljsauthenabled=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 font-semibold text-navy-700 hover:text-berry-700 text-sm transition-colors group"
                            >
                                Schedule a consultation
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: partner agent image — inline on mobile, fills right column on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="px-6 mt-4 lg:mt-0 lg:px-0 lg:self-end flex justify-center lg:justify-end pointer-events-none"
                    >
                        <img
                            src="/images/realtor-pose-2-trim.png"
                            alt="A Berry Rock Homes partner agent"
                            className="block w-full h-auto max-w-[460px] lg:max-w-[560px]"
                        />
                    </motion.div>

                </div>
            </div>
        </div>

        {/* ── The Partner Advantage ── */}
        <section className="bg-navy-900 py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Video */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative hidden lg:block w-full"
                    >
                        {/* Poster only: the program-overview re-cut is still with Mark, so this
                            block deliberately has no play affordance yet. Swap it for
                            <YouTubeEmbed size="lg" /> once the video is up. */}
                        <div className="w-full aspect-video rounded-3xl overflow-hidden relative group shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                            <img
                                src="/images/video-thumb-nick.png"
                                alt="Berry Rock Homes Realtor Referral Partner walkthrough video"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-berry-600 rounded-full flex items-center justify-center group-hover:bg-berry-700 transition-colors shadow-lg">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-sm font-medium text-navy-300 text-center">Berry Rock Homes Realtor Referral Partner Walkthrough</p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-xs font-bold text-berry-300 uppercase tracking-[0.2em] mb-4">The Partner Advantage</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                            Keep your client.<br />
                            Keep your commission.<br />
                            <span className="text-berry-400">Grow your pipeline.</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-navy-200 mb-8 max-w-md">
                            When traditional financing falls through, you don&apos;t have to lose the relationship or the deal. Here&apos;s what partnering with Berry Rock Homes protects.
                        </p>

                        <div className="flex flex-col gap-6">
                            {advantages.map(({ icon: Icon, title, body }) => (
                                <div key={title} className="flex items-start gap-4">
                                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-berry-700 text-white shrink-0">
                                        <Icon size={20} strokeWidth={2.25} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base mb-1">{title}</p>
                                        <p className="text-navy-200 text-base leading-relaxed">{body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>

        {/* ── Our Markets callout → Agent Resources ── */}
        <section className="bg-slate-50 py-20 border-t border-slate-200">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="container mx-auto px-6 max-w-7xl"
            >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-50 via-slate-50 to-navy-100/70 ring-1 ring-navy-900/5">
                    {/* Soft decorative blue wash */}
                    <div aria-hidden className="pointer-events-none absolute -right-28 -top-24 w-[460px] h-[460px] rounded-full bg-navy-200/40 blur-3xl" />
                    <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-16 w-[340px] h-[340px] rounded-full bg-navy-100/60 blur-3xl" />

                    <div className="relative grid lg:grid-cols-[0.95fr_1.05fr] items-center gap-8 lg:gap-12">
                        {/* Left: markets message */}
                        <div className="px-8 pt-12 pb-10 lg:px-12 lg:py-16">
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.22em] mb-4">Coverage Area</p>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
                                The markets we<br />
                                <span className="text-navy-600">serve today.</span>
                            </h2>
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-7 max-w-md">
                                Berry Rock Homes buys in five metro areas. Explore the coverage maps and market-specific offer guides for each one in your agent toolkit.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {markets.map((m) => (
                                    <span
                                        key={m.slug}
                                        className="inline-flex items-center rounded-full border border-navy-100 bg-white/70 px-4 py-1.5 text-sm font-semibold text-navy-800"
                                    >
                                        {m.name}
                                    </span>
                                ))}
                            </div>
                            <Link
                                href="/agent-resources#markets"
                                className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                            >
                                View coverage maps
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>

                        {/* Right: layered market montage — base window panel + floating cards.
                            Outer padding gives the floating cards room to overhang without
                            being clipped by the band's overflow-hidden. */}
                        <div className="px-8 pt-14 pb-20 lg:py-16 lg:pl-8 lg:pr-16">
                            <div className="relative">
                                {/* Base panel — coverage window listing the live markets */}
                                <div className="relative rounded-2xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-navy-900/5 overflow-hidden">
                                    <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100 bg-navy-50">
                                        <span className="w-2.5 h-2.5 rounded-full bg-navy-300" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-navy-200" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-navy-100" />
                                        <span className="ml-2 flex items-center gap-1.5 text-xs font-bold text-navy-600 uppercase tracking-[0.15em]">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-berry-500 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-berry-600" />
                                            </span>
                                            Now serving
                                        </span>
                                    </div>
                                    <div className="p-3 grid grid-cols-2 gap-2.5">
                                        {markets.map((m, i) => (
                                            <div
                                                key={m.slug}
                                                className={`group relative overflow-hidden rounded-xl ring-1 ring-navy-900/5 ${i === markets.length - 1 ? 'col-span-2' : ''}`}
                                            >
                                                <img
                                                    src={m.img}
                                                    alt={`${m.name} market`}
                                                    loading="lazy"
                                                    className="h-24 sm:h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/10 to-transparent" />
                                                <span className="absolute bottom-2 left-2.5 flex items-center gap-1 text-white text-xs font-bold drop-shadow">
                                                    <MapPin size={11} className="shrink-0" />
                                                    {m.shortName}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating card — offer guide */}
                                <div className="hidden sm:flex absolute -top-5 -right-4 w-52 items-center gap-3 rounded-2xl bg-white shadow-xl ring-1 ring-navy-900/5 px-4 py-3">
                                    <div className="w-9 h-9 rounded-full bg-navy-50 border border-navy-100 text-navy-600 flex items-center justify-center shrink-0">
                                        <FileText size={16} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-navy-800 leading-tight">Offer guides</p>
                                        <p className="text-xs text-slate-400">PDF · by market</p>
                                    </div>
                                </div>

                                {/* Floating card — coverage stat */}
                                <div className="hidden sm:flex absolute -bottom-6 -left-4 w-44 items-center gap-3 rounded-2xl bg-white shadow-xl ring-1 ring-navy-900/5 px-4 py-3">
                                    <div className="w-10 h-10 rounded-full bg-berry-700 text-white flex items-center justify-center shrink-0 font-bold text-sm">5</div>
                                    <div>
                                        <p className="text-sm font-bold text-navy-800 leading-tight">Metro areas</p>
                                        <p className="text-xs text-slate-400">Coverage maps</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

        {/* ── Stats ── */}
        <StatsCallout
            eyebrow="Aligned with your goals"
            title="Berry Rock Homes is like you: dedicated to the client."
            subtitle="We help your clients achieve homeownership, focused on your growth and here to eliminate the financing roadblocks that cost you deals. We don't just say that; we've built the track record to prove it."
            background="navy"
            topBorder={false}
            stats={[
                { value: '2,500+', label: 'Partner Agents' },
                // Confirmed Aug 7 (00:29:28): Nick corrected 275 to "we're technically over
                // 300 million to close and fund"; Part 3 restates it as the agreed figure.
                { value: '$300M+', label: 'Client transactions funded and closed' },
                // HOLD (83% success rate is ~18 months old — confirm still current with Nick before changing)
                { value: '83%',   label: 'Success rate' },
            ]}
        />

        {/* ── How It Works for Realtors ── */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-sand-50 via-sand-50 to-berry-50/60 border-t border-gray-200">
            {/* Soft decorative wash — matches the "You're in good company" module */}
            <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-berry-100/50 blur-3xl" />
            <div className="relative container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white rounded-2xl border border-gray-200 p-8"
                    >
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-6">Your five steps</p>
                        {/* Nick dictated these five steps on Aug 7 (00:30:40 – 00:36:16). He
                            called the referral workflow "one of the confusing parts we need to
                            do a better job explaining on this website," so the order is his:
                            sign up, send the link, get the pre-qualified amount, find the home
                            once the official budget is set, then submit through the offer guide. */}
                        <ol className="space-y-6">
                            {[
                                { n: '1', title: 'Sign up online', body: <>Fill out the <a href="#agent-network" className="font-semibold text-berry-700 hover:text-berry-800 underline decoration-berry-200 hover:decoration-berry-400 underline-offset-2 transition-colors">Become a Referral Partner</a> form to get your unique client application link.</> },
                                { n: '2', title: 'Send your link', body: 'Send your unique link to any client you want to refer over. It automatically fills in your information as the referring agent on every application.' },
                                { n: '3', title: 'Get notified', body: 'When your client applies, we let you know the initial amount they are pre-qualified for, based on their stated application information, so you can set them up on a home search. Income and asset verification is required for final approval.' },
                                { n: '4', title: 'Help your client find the perfect home', body: 'We hold an in-depth client consultation within 48 hours of the application, then verify income and assets. You get an email with the final approval amount letting you know your client is offer-ready. With that official budget set, help them find the home they want.' },
                                { n: '5', title: 'We handle signatures', body: 'Once the home is picked out, use the offer guide on our website to send the offer to Berry Rock Homes.' },
                            ].map(({ n, title, body }) => (
                                <li key={n} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-berry-50 border border-berry-200 text-berry-700 flex items-center justify-center font-bold shrink-0 text-sm">{n}</div>
                                    <div>
                                        <p className="font-bold text-navy-800 mb-1">{title}</p>
                                        <p className="text-base leading-relaxed" style={{ color: '#334155' }}>{body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <div className="mt-8">
                            <Link
                                href="/agent-resources"
                                className="inline-flex items-center gap-2 font-semibold text-berry-700 hover:text-berry-800 transition-colors group"
                            >
                                Explore agent resources &amp; processes
                                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">How It Works</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
                            A partner you can<br />
                            <span className="text-berry-600">trust with your client.</span>
                        </h2>
                        <p className="text-lg leading-relaxed mb-6" style={{ color: '#4b5563' }}>
                            We take your client&apos;s trust and your reputation as seriously as you do. From the first referral through closing, Berry Rock Homes is a reliable, transparent, and trustworthy partner — and your client stays exactly where they should be: with you. We stay in constant communication with our realtor partners, keep your client informed and involved at every decision, and guide everyone smoothly through the process.
                        </p>
                        {/* Aug 7 (00:37:48): "I would get rid of that last point at the
                            bottom... they keep building towards mortgage eligibility. Get rid
                            of that and just say together we make more homeowners." */}
                        <p className="text-base leading-relaxed font-semibold text-navy-800">
                            You remain the trusted advisor.<br />
                            Your client buys the home they actually want.<br />
                            Together, we make more homeowners.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>

        {/* ── Agent Toolkit CTA — berry feature block ── */}
        <section className="py-20 lg:py-24 bg-berry-700 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Toolkit asset showcase */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative hidden lg:block py-6 pr-6"
                    >
                        {/* Base panel — downloadable resources window */}
                        <div className="rounded-2xl bg-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] overflow-hidden">
                            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-sand-50">
                                <span className="w-2.5 h-2.5 rounded-full bg-berry-400" />
                                <span className="w-2.5 h-2.5 rounded-full bg-sand-200" />
                                <span className="w-2.5 h-2.5 rounded-full bg-navy-200" />
                                <span className="ml-2 text-xs font-bold text-navy-600 uppercase tracking-[0.15em]">Agent Toolkit</span>
                            </div>
                            <div className="p-5 space-y-3">
                                {[
                                    { icon: Send, label: 'Offer Cover Letter', meta: 'Any market · PDF' },
                                    { icon: FileText, label: 'Oklahoma City Offer Guide', meta: 'PDF · 223 KB' },
                                    { icon: FileText, label: 'Indianapolis Offer Guide', meta: 'PDF · 223 KB' },
                                ].map(({ icon: Icon, label, meta }) => (
                                    <div key={label} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3">
                                        <div className="w-9 h-9 rounded-full bg-sand-50 border border-gray-100 text-navy-600 flex items-center justify-center shrink-0">
                                            <Icon size={16} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-navy-800 truncate">{label}</p>
                                            <p className="text-xs text-slate-600">{meta}</p>
                                        </div>
                                        <Download size={15} className="text-slate-500 shrink-0" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating card — coverage maps */}
                        <div className="absolute -top-6 -right-2 w-44 rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
                            <div className="relative h-20 bg-gradient-to-br from-navy-100 to-sand-100">
                                <span className="absolute left-4 top-7 h-px w-28 bg-white/80 rotate-[18deg]" />
                                <span className="absolute left-8 top-3 h-12 w-px bg-white/80 -rotate-[12deg]" />
                                <MapPin size={20} className="absolute right-6 bottom-4 text-berry-600 fill-berry-600/20" />
                            </div>
                            <div className="px-4 py-3">
                                <p className="text-sm font-bold text-navy-800">Coverage maps</p>
                                <p className="text-xs text-slate-600">5 metro areas</p>
                            </div>
                        </div>

                        {/* Floating card — agent consultation */}
                        <div className="absolute -bottom-5 -left-5 w-52 rounded-2xl bg-white shadow-xl border border-gray-100 p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-berry-700 text-white flex items-center justify-center shrink-0">
                                <Calendar size={18} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-bold text-navy-800 truncate">Agent consultation</p>
                                <p className="text-xs text-slate-400">30-min 1:1 session</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-4">Agent Toolkit</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                            Everything you need<br className="hidden sm:block" /> to close the deal.
                        </h2>

                        <div className="flex flex-col gap-6 mb-10">
                            {toolkitBenefits.map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="flex items-start gap-4">
                                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-berry-600 shrink-0">
                                        <Icon size={20} strokeWidth={2.25} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-base mb-1">{title}</p>
                                        <p className="text-white/85 text-base leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/agent-resources"
                            className="inline-flex items-center gap-2 bg-white hover:bg-berry-50 text-berry-700 font-bold px-8 py-4 rounded-full transition-colors text-sm group shadow-md"
                        >
                            Explore the Agent Toolkit
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>

        {/* ── Partner Testimonials ── */}
        <section className="py-20 lg:py-24 bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
                    <p className="text-xs font-bold text-berry-700 uppercase tracking-[0.2em] mb-4">Hear From Our Partners</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight">
                        Realtors who closed more<br className="hidden sm:block" /> by partnering with us.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
                    {testimonials.map(({ thumb, name, company, youtubeId }) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <YouTubeEmbed
                                videoId={youtubeId}
                                title={`${name}, ${company} — Berry Rock Homes partner testimonial`}
                                thumbnail={thumb}
                                thumbnailAlt={`${name}, ${company} — Berry Rock Homes partner testimonial`}
                                size="md"
                                className="rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                            />
                            <div className="mt-5 text-center">
                                <p className="font-bold text-navy-800 text-lg">{name}</p>
                                <p className="text-base" style={{ color: '#4b5563' }}>{company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── Agent Registration CTA — very bottom ── */}
        <AgentRegistrationCta />

    </div>
    );
};

export default ForAgents;
