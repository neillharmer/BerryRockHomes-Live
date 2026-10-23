'use client';

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Plus, Calendar, Send, ArrowRight, Mail, UserCheck, DollarSign, Maximize2, Home, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AgentRegistrationCta from '../components/Agent/AgentRegistrationCta';
import { markets } from '../data/markets';

// Anchor jump-links for the sticky section nav. The `id` matches each section's
// element id so scroll-spy can highlight the section currently in view.
const navLinks = [
    { label: 'Market Coverage', href: '#markets', id: 'markets' },
    { label: 'Property Criteria', href: '#property-criteria', id: 'property-criteria' },
    { label: 'Offer Guides', href: '#templates', id: 'templates' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Consultation', href: '#training', id: 'training' },
    { label: 'Realtor FAQs', href: '#realtor-faqs', id: 'realtor-faqs' },
];

// Aug 7 (00:48:44), Nick's structure for this section: "we just leave the offer
// cover letter. We get rid of the closing cost schedule and just add each
// individual offer guide underneath it." Oct 6: the redesigned one-page offer
// guides no longer embed the closing-cost schedule — they point to a separate
// "Seller Paid Closing Costs sheet" — so it is back as its own download.
const coverLetter = {
    icon: <Send size={18} />,
    title: "Offer Cover Letter",
    desc: "Download this cover letter to include with your offer in any market. It helps familiarize the seller and their agent with Berry Rock Homes and the offer they are receiving.",
    href: "/agent%20resources/Seller_20Cover_20Letter.pdf",
    size: "PDF 170 KB",
    cta: "Download cover letter",
};

const closingCosts = {
    icon: <DollarSign size={18} />,
    title: "Seller Paid Closing Costs",
    desc: "How much to request in seller-paid closing costs based on the offer price, plus the NAR compensation notice. Every offer guide refers to this sheet.",
    href: "/agent%20resources/Seller_20Paid_20Closing_20Costs.pdf",
    cta: "Download closing costs",
};

const inspectionGuide = {
    icon: <FileText size={18} />,
    title: "Inspection Guide",
    desc: "A full breakdown of the inspection process, from ordering through report review and repair requests.",
    href: "/agent%20resources/Inspection%20Process.pdf",
    size: "PDF 172 KB",
};

const processes = [
    {
        title: "Securing Your Referral Link",
        intro: "Getting set up takes just a few minutes. Once you register, you'll have a custom referral link to share with every client you send our way.",
        steps: [
            { n: '1', title: 'Register as a Partner', body: 'Complete the quick registration so you are in our system and ready to start referring.' },
            { n: '2', title: 'Get Your Link',         body: 'We generate a custom referral link tied to your account, so every client you send is registered to you.' },
            { n: '3', title: 'Share With Clients',    body: 'Send your link to clients to use when they apply, so you stay attached to the deal from day one.' },
            { n: '4', title: 'Access Your Toolkit',   body: 'Unlock the marketing toolkit, offer templates, and a direct line to our agent success team.' },
        ]
    },
    {
        title: "Referring a Client",
        intro: "Spot the right fit, point them to your link, and we'll handle the heavy lifting — while your client stays yours.",
        steps: [
            // Aug 7 (00:53:32): "qualify the fit... seems a little narrow. I don't want
            // agents to think that only people [need] to build credit or savings.
            // Identify clients who are ready for a new home but find themselves
            // outside of mortgage eligibility."
            { n: '1', title: 'Qualify the Fit',      body: 'Identify clients who are ready for a new home but find themselves outside of mortgage eligibility.' },
            { n: '2', title: 'Client Applies',       body: 'Your client applies through your referral link. You receive the pre-qualified amount, based on their stated application information.' },
            // Aug 7 (00:54:54 – 00:56:27), Nick's dictation. He called this the part
            // "we need to do a better job explaining on this website."
            { n: '3', title: 'Consultation & Verification',  body: 'Every client has an in-depth consultation within 48 hours of applying. After the consultation we verify income and assets, then send you an email with the final approval amount letting you know your client is offer-ready.' },
            { n: '4', title: 'Shop Together',        body: 'You and your client shop for homes within their approved amount and write the offer.' },
        ]
    },
    {
        title: "The Closing Process",
        intro: "Our reliable closing process is designed to be as fast, straightforward, and transparent as possible for you and your client. All closings happen remotely.",
        // Aug 7 (00:57:21 – 01:03:35). Nick renamed step 2 off "due diligence"
        // ("we call that inspection"), asked us to delete the 7-day window because
        // the contract standard is 10, and was explicit that Berry Rock Homes orders
        // the inspection and appraisal.
        steps: [
            { n: '1', title: 'Offer Accepted',  body: 'Once the seller accepts our offer, your client has three days to fund their 7% option consideration and sign all documents with us.' },
            { n: '2', title: 'Inspections & Appraisal', body: 'Berry Rock Homes will order the inspection and appraisal. See the Inspection Process tab for full details.' },
            { n: '3', title: 'Prepare for Closing',  body: 'No mortgage underwriting delays. Coordinate with title to make sure they have all documents, addendums, and invoices associated with the transaction.' },
            { n: '4', title: 'Closing Day',     body: 'Typically about 30 days from acceptance. Berry Rock Homes closes every property remotely. Pick up your commission check and the keys from title once we have notified you that the home is closed and funded, then deliver the keys to your client.' },
        ]
    },
    {
        title: "The Inspection Process",
        intro: "Before we close, every home is independently inspected to confirm it's a safe, sound investment for your client's eventual purchase.",
        // Aug 7 (01:04:41 – 01:15:50). Nick walked through all four of these. The
        // previous version had us reviewing the report with the client, which is
        // backwards: the agent reviews it with their client and compiles their
        // requests, and Berry Rock Homes sends its own list separately.
        steps: [
            { n: '1', title: 'Inspection Ordered', body: 'We order a licensed, third-party home inspection as soon as the offer is accepted.' },
            { n: '2', title: 'Schedule & Coordinate', body: 'The inspector will reach out to you directly to schedule the inspection. Please work with them to coordinate it in a timely manner.' },
            { n: '3', title: 'Review Report',       body: 'Review the inspection report with your client, as you normally would, and compile a list of their repair requests. Reach out to Berry Rock Homes to get our inspection requirements. We primarily look for major systems.' },
            { n: '4', title: 'Submit for Signatures', body: 'Once the buyer and seller agree, send the final compiled report to Berry Rock Homes to sign and communicate any negotiated items from the seller.' },
        ]
    }
];

const faqs = [
    {
        q: "How and when do I get paid my commission?",
        a: "When your client's application is accepted and they select a home, you write the offer with Berry Rock Homes as the buyer. Upon closing, you represent Berry Rock Homes and earn the full commission offered by the seller — you receive your full standard commission upon closing, just like any other transaction."
    },
    {
        q: "Does Berry Rock Homes pay an additional commission?",
        a: "No. Berry Rock Homes does not pay an additional commission on top of what the seller offers. Fully negotiate your commission in the contract with the seller and include it in the closing costs, the same as you would on any other transaction."
    },
    {
        q: "What types of properties will Berry Rock Homes buy?",
        // Aug 7 (01:17:54): "take town homes out... take out that they must meet
        // the FHA appraisal conditions. I would just say homes must be insurable
        // and habitable. For a full list of requirements, please see the property
        // criteria page."
        a: "We purchase high-quality, move-in ready, single-family homes in the markets we serve. Every home must be insurable and habitable. See our Property Criteria for the full list of requirements."
    },
    {
        q: "How fast can you close once we find a home?",
        // Aug 7 (01:20:28): Nick was careful here. "We don't have financing
        // contingencies outside of the home appraising" — he specifically did not
        // want the phrase "appraisal requirements," which means something else.
        // Tiffany landed the answer on "our typical closing is 30 days."
        a: "Our standard offers are written for a 30-day close, and because we have no financing contingencies outside of the home appraising, our typical closing is 30 days. If your client already had a home under contract and their mortgage fell through, contact us: we can sometimes provide an expedited closing if the appraisal and inspection have already been completed."
    }
];

const AgentResources = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [activeProcess, setActiveProcess] = useState(0);
    const [activeSection, setActiveSection] = useState(navLinks[0].id);

    // Scroll-spy: highlight the section pill currently nearest the top of the viewport.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActiveSection(visible[0].target.id);
            },
            { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
        );
        navLinks.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <section className="bg-neutral-50 border-b border-slate-100 pt-[200px] lg:pt-[240px] pb-20">
                <div className="container mx-auto px-6 max-w-7xl">
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
                        className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5 max-w-2xl"
                    >
                        Your Berry Rock Homes<br />
                        <span className="text-berry-600">agent toolkit.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.13 }}
                        className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mb-8"
                    >
                        Everything you need to educate clients, structure offers, and close more deals with Berry Rock Homes.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.18 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                    >
                        <a
                            href="https://bookings.cloud.microsoft/book/BerryRockHomes1@NETORG734010.onmicrosoft.com/?ismsaljsauthenabled=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                        >
                            <Calendar size={14} />
                            Schedule a consultation
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <a
                            href="#agent-network"
                            className="inline-flex items-center gap-1.5 font-semibold text-navy-700 hover:text-berry-700 text-sm transition-colors group"
                        >
                            Become a partner
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ── Anchor nav — jump links (Realtor Resources only) ── */}
            {/* Underline tabs with dividers mirror the Articles & Insights category nav;
                scroll-spy drives the active (navy) tab as the reader moves down the page.
                Navy is used so the indicator stays distinct from the berry pill CTAs. */}
            <section className="bg-white/95 backdrop-blur-sm border-b border-slate-100 sticky top-20 z-30">
                <div className="container mx-auto px-6 max-w-7xl">
                    <nav
                        aria-label="Page sections"
                        className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {navLinks.map(({ label, href, id }, i) => {
                            const isActive = activeSection === id;
                            return (
                                <div key={href} className="flex items-center">
                                    {i > 0 && <span aria-hidden className="h-4 w-px bg-slate-200 mx-1 shrink-0" />}
                                    <a
                                        href={href}
                                        aria-current={isActive ? 'true' : undefined}
                                        className={`relative whitespace-nowrap px-4 py-4 text-sm font-semibold transition-colors ${
                                            isActive ? 'text-navy-900' : 'text-slate-500 hover:text-navy-800'
                                        }`}
                                    >
                                        {label}
                                        {/* Static per-tab underline. Unlike the click-driven
                                            Articles nav, this indicator is driven by scroll-spy,
                                            so a shared layoutId underline would slide (and wiggle
                                            back and forth at section boundaries) as the active
                                            section flips during scroll — especially on mobile
                                            where sections are short. Render it in place instead. */}
                                        {isActive && (
                                            <span className="absolute left-0 right-0 -bottom-px h-[2.5px] bg-navy-800 rounded-full" />
                                        )}
                                    </a>
                                </div>
                            );
                        })}
                    </nav>
                </div>
            </section>

            <div className="container mx-auto px-6 max-w-7xl py-16 space-y-28">

                {/* ── Our Markets ── */}
                <section id="markets" className="scroll-mt-40">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">Market Coverage</p>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Berry Rock Market Information</h2>
                    {/* Aug 7 (00:43:28): Tiffany asked whether the property criteria and
                        program areas are inside the offer guide. Nick: "no, none of that
                        stuff really is. So program area is not on there either." His
                        replacement wording for this line is at 00:44:20. */}
                    <p className="text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
                        Berry Rock Homes operates in these metro areas. For each market you can download
                        the offer guide for detailed instructions on how to write a Berry Rock Homes offer
                        for your client, view the full market page, or expand the coverage map. See{' '}
                        <a href="#property-criteria" className="font-semibold text-berry-700 hover:text-berry-800 underline decoration-berry-200 hover:decoration-berry-400 underline-offset-2 transition-colors">Property Criteria</a>{' '}
                        for the homes we can purchase.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {markets.map(({ name, slug, mapEmbed, guideHref, guideSize }, idx) => (
                            <motion.div
                                key={slug}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.06 }}
                                className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-md transition-shadow flex flex-col"
                            >
                                {/* Map preview — embed chrome cropped out, interaction disabled */}
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <iframe
                                        src={mapEmbed}
                                        title={`${name} market map`}
                                        className="absolute left-0 w-full border-0 pointer-events-none"
                                        style={{ top: '-88px', height: 'calc(100% + 88px)' }}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                <div className="px-5 py-4 flex flex-col flex-grow">
                                    <span className="block font-bold text-navy-800 mb-3">{name}</span>

                                    {/* Primary action — download the offer guide */}
                                    <a
                                        href={guideHref}
                                        download
                                        className="inline-flex items-center justify-center gap-1.5 bg-berry-700 hover:bg-berry-800 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
                                    >
                                        <Download size={14} />
                                        Download Offer Guide
                                    </a>
                                    <span className="text-xs text-slate-400 mt-1.5 text-center">{guideSize}</span>

                                    {/* Secondary actions */}
                                    <div className="flex items-center justify-center gap-5 mt-4 pt-4 border-t border-gray-100">
                                        <a
                                            href="/agent%20resources/Seller_20Cover_20Letter.pdf"
                                            download
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-berry-700 transition-colors"
                                        >
                                            Cover letter
                                            <Download size={13} />
                                        </a>
                                        <Link
                                            href={`/markets/${slug}`}
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-berry-600 transition-colors"
                                        >
                                            View market
                                            <ArrowRight size={13} />
                                        </Link>
                                        <a
                                            href={mapEmbed.replace('/embed?', '/viewer?')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-berry-700 transition-colors"
                                        >
                                            Expand map
                                            <Maximize2 size={13} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── Property Criteria ── */}
                <section id="property-criteria" className="scroll-mt-40">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">Property Criteria</p>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">What Homes Qualify</h2>
                    <p className="text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
                        Before you shop, make sure the home fits our criteria. Every property we purchase must meet the following:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {[
                            { icon: <Home size={18} />, text: 'Located within one of our active service areas' },
                            { icon: <CheckCircle2 size={18} />, text: 'Single-family home — no modular or mobile homes' },
                            { icon: <Maximize2 size={18} />, text: 'Five acres or less' },
                            { icon: <CheckCircle2 size={18} />, text: 'Insurable and habitable' },
                        ].map(({ icon, text }, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-4">
                                <div className="w-9 h-9 rounded-full bg-berry-50 text-berry-700 flex items-center justify-center shrink-0">
                                    {icon}
                                </div>
                                <span className="text-base font-medium text-slate-800">{text}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-slate-500 max-w-2xl">
                        Berry Rock Homes reserves the right to deny or exclude any property at its discretion.
                    </p>
                </section>

                {/* ── Berry Rock Realtor Templates ── */}
                <section id="templates" className="scroll-mt-40">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">Offer Guides</p>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Berry Rock Realtor Offer Guides</h2>
                    <p className="text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
                        Everything you need to write a Berry Rock Homes offer: the cover letter that
                        goes with every offer, the seller-paid closing-cost sheet, and the detailed
                        offer guide for each market.
                    </p>

                    {/* Cover letter (and the closing-cost sheet every guide refers to) run
                        full width across the top — Nick asked for it "kind of going across
                        the top" with the market guides listed below it. */}
                    {[coverLetter, closingCosts].map((doc) => (
                        <motion.div
                            key={doc.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-sand-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 mb-5"
                        >
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 text-navy-600">
                                {doc.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-navy-800 mb-1.5">{doc.title}</h3>
                                <p className="text-slate-700 text-base leading-relaxed">{doc.desc}</p>
                            </div>
                            <a
                                href={doc.href}
                                download
                                className="inline-flex items-center justify-center gap-1.5 bg-berry-700 hover:bg-berry-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shrink-0 whitespace-nowrap"
                            >
                                <Download size={14} />
                                {doc.cta}
                            </a>
                        </motion.div>
                    ))}

                    {/* One offer guide per market */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                        {markets.map(({ name, slug, guideHref, guideSize }, idx) => (
                            <motion.div
                                key={slug}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.06 }}
                                className="bg-sand-50 rounded-2xl p-6 flex flex-col"
                            >
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mb-5 text-navy-600">
                                    <FileText size={18} />
                                </div>
                                <h3 className="font-bold text-navy-800 mb-2">{name} Offer Guide</h3>
                                <p className="text-slate-700 text-base leading-relaxed mb-5 flex-grow">
                                    Detailed instructions on how to write a Berry Rock Homes offer for
                                    your client in {name}.
                                </p>
                                <a
                                    href={guideHref}
                                    download
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-berry-700 transition-colors mt-auto"
                                >
                                    <Download size={13} />
                                    Download offer guide
                                    <span className="font-normal text-slate-600">({guideSize})</span>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Inspection guide */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-sand-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6"
                    >
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 text-navy-600">
                            {inspectionGuide.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-navy-800 mb-1.5">{inspectionGuide.title}</h3>
                            <p className="text-slate-700 text-base leading-relaxed">{inspectionGuide.desc}</p>
                        </div>
                        <a
                            href={inspectionGuide.href}
                            download
                            className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-berry-700 transition-colors shrink-0 whitespace-nowrap"
                        >
                            <Download size={14} />
                            Download inspection guide
                            <span className="font-normal text-slate-600">({inspectionGuide.size})</span>
                        </a>
                    </motion.div>
                </section>

                {/* ── How It Works: Closing & Inspection ── */}
                <section id="process" className="scroll-mt-40">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">How It Works</p>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">Every step, broken down</h2>
                    <p className="text-base text-slate-600 leading-relaxed max-w-2xl mb-10">
                        A high-level look at each part of partnering with Berry Rock Homes — from securing your referral link and referring a client to inspection and closing day. Select a process to see how it works.
                    </p>

                    {/* Selector — plain buttons swapping a panel, not ARIA tabs.
                        See the note in components/IsItForMe/IsThisYou.jsx: the
                        tab roles promised an arrow-key model that was never
                        implemented, so the honest role is used instead. */}
                    <div className="flex gap-8 border-b border-gray-200 mb-8" role="group" aria-label="Process">
                        {processes.map((proc, idx) => {
                            const isActive = activeProcess === idx;
                            return (
                                <button
                                    key={proc.title}
                                    type="button"
                                    id={`process-btn-${idx}`}
                                    aria-pressed={isActive}
                                    aria-controls="process-panel"
                                    onClick={() => setActiveProcess(idx)}
                                    className={`relative -mb-px pb-4 text-sm sm:text-base font-bold transition-colors ${
                                        isActive
                                            ? 'text-berry-700'
                                            : 'text-slate-600 hover:text-navy-800'
                                    }`}
                                >
                                    {proc.title}
                                    {isActive && (
                                        <motion.span
                                            layoutId="processTabUnderline"
                                            className="absolute left-0 right-0 -bottom-px h-[2.5px] bg-berry-600 rounded-full"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active process content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProcess}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            id="process-panel"
                            role="region"
                            aria-labelledby={`process-btn-${activeProcess}`}
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-navy-800 mb-2">{processes[activeProcess].title}</h3>
                                <p className="text-base text-slate-600 leading-relaxed max-w-2xl">{processes[activeProcess].intro}</p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {processes[activeProcess].steps.map(({ n, title, body }, idx) => (
                                    <motion.div
                                        key={n}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.08 }}
                                        className="bg-sand-50 rounded-2xl p-6 flex flex-col"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mb-5 text-navy-600 text-sm font-bold">{n}</div>
                                        <h3 className="font-bold text-navy-800 mb-2">{title}</h3>
                                        <p className="text-slate-700 text-base leading-relaxed">{body}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </section>

                {/* ── Training CTA ── */}
                <motion.section
                    id="training"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-navy-800 rounded-3xl relative overflow-visible scroll-mt-40"
                >
                    {/* glow, clipped to the panel */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                        <div className="absolute -top-20 left-0 w-72 h-72 bg-berry-600/20 rounded-full blur-[90px]" />
                    </div>

                    {/* Realtor cutout — extrudes past the panel's right edge */}
                    <img
                        src="/images/training-pose-1-dark.png"
                        alt="Two Berry Rock Homes partner agents"
                        className="hidden md:block absolute z-20 bottom-0 -right-24 lg:-right-40 h-[86%] lg:h-[94%] w-auto max-w-none object-contain pointer-events-none select-none drop-shadow-2xl"
                    />

                    {/* Content — left side */}
                    <div className="relative z-10 p-8 md:py-12 md:pl-12 md:pr-[38%] lg:py-14 lg:pl-14 lg:pr-[40%]">
                        <p className="text-xs font-bold text-berry-300 uppercase tracking-[0.2em] mb-4">Agent Consultation</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                            A 30-minute deep dive, one&#8209;on&#8209;one.
                        </h2>
                        <p className="text-navy-200 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                            Sit down with our agent success team and we&rsquo;ll walk you through the whole process &mdash; from structuring your first offer to getting paid.
                        </p>
                        <div className="space-y-4 mb-9 max-w-lg">
                            {[
                                { icon: FileText, title: 'Structuring offers', desc: 'Write a clean, competitive Berry Rock Homes offer, backed by a reliable closing.' },
                                { icon: UserCheck, title: 'Qualifying clients', desc: 'Spot the right fit and get your first client approved.' },
                                { icon: DollarSign, title: 'Earning commission', desc: 'Understand exactly how and when you get paid.' },
                            ].map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white mb-0.5">{title}</p>
                                        <p className="text-navy-200 text-base leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            href="https://bookings.cloud.microsoft/book/BerryRockHomes1@NETORG734010.onmicrosoft.com/?ismsaljsauthenabled=true"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-navy-800 font-bold px-7 py-3.5 rounded-full whitespace-nowrap shadow-lg transition-colors text-sm group"
                        >
                            <Calendar size={15} />
                            Schedule a consultation
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </motion.section>

                {/* ── Realtor FAQ ── */}
                <section id="realtor-faqs" className="scroll-mt-40">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">FAQs</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-8">Commonly Asked Realtor Questions</h2>
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        {/* Left: FAQ accordion */}
                        <div className="lg:col-span-7">
                            <div className="space-y-3">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="border border-gray-200 rounded-xl overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                            className="w-full flex items-start justify-between gap-4 p-5 bg-white hover:bg-neutral-50 transition-colors text-left"
                                        >
                                            <span className="font-semibold text-navy-800 leading-snug flex-1">{faq.q}</span>
                                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-navy-800 text-white flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                                                <Plus size={14} />
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="border-t border-gray-100 bg-neutral-50 p-5"
                                                >
                                                    <p className="text-base text-slate-700 leading-relaxed">{faq.a}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right: sticky contact callout */}
                        <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
                            <div className="rounded-2xl p-8" style={{ backgroundColor: '#dce6f1' }}>
                                <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">Still Have Questions?</p>
                                <h3 className="text-2xl font-bold text-navy-800 leading-snug mb-3">
                                    We&rsquo;re here to help you close.
                                </h3>
                                <p className="text-base text-slate-700 leading-relaxed mb-6">
                                    Our agent support team is available Monday–Friday. Reach out anytime and we&rsquo;ll get you a fast answer.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-6 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                                >
                                    <Mail size={15} />
                                    Contact Berry Rock Homes
                                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>

            </div>

            {/* ── Agent Registration CTA — very bottom ── */}
            <AgentRegistrationCta />
        </div>
    );
};

export default AgentResources;
