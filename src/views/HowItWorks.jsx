'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, Plus, Clock, ShieldCheck, DollarSign, ChevronLeft, ChevronRight, Lock, FileText, KeyRound, Check, CreditCard, Receipt, FileSpreadsheet, Landmark, Banknote, Phone } from 'lucide-react';

// ── Step data ────────────────────────────────────────────────────────────────
// To swap images: update `imageSrc` for each step. `imageFallback` is the
// existing site photo shown automatically while the final image is missing.
const steps = [
    {
        id: 'starting-point',
        stepNumber: '01',
        navLabel: 'The Starting Point',
        title: 'A real shot at owning your home.',
        // Per Aug 5 (00:37:42): Nick asked to combine the old steps 01 and 02 —
        // "keep the number one starting point ... and then just take the check
        // eligibility paragraph and put it there as one" — so the application and
        // the immediate pre-qualification live here. Order matters: the automated
        // pre-qualification comes off the stated application, before the call.
        body: "Your credit, income history, or savings may not fit the traditional mortgage box yet. That doesn't mean you aren't ready to own. Apply online or by phone with zero application fee and a soft credit check only, so there is no impact to your score. You will immediately receive an estimated pre-qualification based on your stated application.",
        imageSrc: '/images/pathway/step-1-starting-point.png',
        imageFallback: '/images/neighborhood_street.png',
        imageAlt: 'A hopeful homebuyer reviewing paperwork at a kitchen table.',
        imagePosition: 'center center',
    },
    {
        id: 'consultation-verification',
        stepNumber: '02',
        navLabel: 'Consultation & Verification',
        title: 'We talk it through, then verify.',
        // Nick's dictated copy, Aug 5: "we'll reach out within 48 hours of
        // receiving your application to have a client consultation and ensure you
        // understand the program ... after that you'll need to upload income and
        // asset verification ... to get your full approval and become offer ready."
        body: 'We reach out within 48 hours of receiving your application for a consultation, so you understand exactly how the program works. After that you upload income and asset verification: a government-issued photo ID, income verification, evidence of your 7% funds, and your last two months of bank statements. Once you are approved you become offer-ready, and you receive your offer-ready amount.',
        imageSrc: '/images/pathway/step-2-pre-approved.png',
        imageFallback: '/images/man-coffee.png',
        imageAlt: 'A homebuyer on a consultation call, gathering income documents.',
        imagePosition: '42% center',
    },
    {
        id: 'choose-home',
        stepNumber: '03',
        navLabel: 'Choose Your Home',
        // "Choose your home", not "any home": Nick, Aug 5 — people read "any" as
        // permission for mobile homes and acreage, and they have had to correct it
        // on the live site more than once. "or ours" removed at his request too.
        title: 'Choose your home.',
        body: 'Work with your own realtor. Choose your home on the open market (not our inventory), as long as it appraises at the purchase price, is insurable, and is within your offer-ready amount.',
        imageSrc: '/images/pathway/step-3-choose-home.png',
        imageFallback: '/images/neighborhood_aerial.png',
        imageAlt: 'A couple touring a home they are considering buying.',
        imagePosition: 'center center',
    },
    {
        id: 'lock-it-in',
        stepNumber: '04',
        navLabel: 'Lock It In',
        title: 'Secure it with a deposit.',
        body: "A 7% Option Consideration and your lease-option paperwork are due within 3 days of going under contract. It is fully credited toward the purchase price at closing, fully refunded if your offer is not accepted, and refunded minus any hard costs already incurred if the contract falls through.",
        imageSrc: '/images/pathway/step-4-lock-it-in.png',
        imageFallback: '/images/jessica_home.png',
        imageAlt: 'Buyer standing confidently in front of their chosen home.',
        imagePosition: 'center center',
    },
    {
        id: 'we-buy-it',
        stepNumber: '05',
        navLabel: 'We Step In',
        title: 'We handle the purchase for you.',
        body: 'Berry Rock Homes submits a clean, competitive offer on your behalf, working alongside your realtor and with no financing contingency attached. Appraisal and inspection ordered. Typical close: about 30 days.',
        imageSrc: '/images/pathway/step-5-cash-offer.png',
        imageFallback: '/images/process_home.png',
        imageAlt: 'A reliable closing being finalized at the table.',
        imagePosition: 'center center',
    },
    {
        id: 'move-in',
        stepNumber: '06',
        navLabel: 'Move In & Buy',
        title: 'Move in and buy on your timeline.',
        body: 'You get the keys on closing day. Every on-time payment is reported to all three credit bureaus and your rent credits accumulate toward your purchase. You control the timeline, and you buy the home when you are ready.',
        imageSrc: '/images/pathway/step-6-move-in.png',
        imageFallback: '/images/family_in_kitchen.png',
        imageAlt: 'A family settling happily into their new home.',
        imagePosition: 'center center',
    },
];

const StepsShowcase = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [dir, setDir] = useState(0);
    const cooldownRef = useRef(false);
    const sectionRef = useRef(null);
    const cardRef = useRef(null);
    const touchStartRef = useRef(null);

    const go = useCallback((i) => {
        if (i < 0 || i >= steps.length || i === activeStep) return false;
        setDir(i > activeStep ? 1 : -1);
        setActiveStep(i);
        return true;
    }, [activeStep]);

    const advance = useCallback((d) => {
        if (cooldownRef.current) return false;
        const target = activeStep + d;
        if (target < 0 || target >= steps.length) return false;
        cooldownRef.current = true;
        go(target);
        setTimeout(() => { cooldownRef.current = false; }, 650);
        return true;
    }, [activeStep, go]);

    // Wheel: only intercept when the cursor is over the card itself, never the full section
    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        const onWheel = (e) => {
            const d = e.deltaY > 0 ? 1 : -1;
            const target = activeStep + d;
            if (target < 0 || target >= steps.length) return;
            e.preventDefault();
            advance(d);
        };
        el.addEventListener('wheel', onWheel, { passive: false });
        return () => el.removeEventListener('wheel', onWheel);
    }, [advance, activeStep]);

    // Touch swipe
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const onTouchStart = (e) => { touchStartRef.current = e.touches[0].clientY; };
        const onTouchEnd = (e) => {
            if (touchStartRef.current === null) return;
            const dy = touchStartRef.current - e.changedTouches[0].clientY;
            touchStartRef.current = null;
            if (Math.abs(dy) < 40) return;
            advance(dy > 0 ? 1 : -1);
        };
        el.addEventListener('touchstart', onTouchStart, { passive: true });
        el.addEventListener('touchend', onTouchEnd, { passive: true });
        return () => {
            el.removeEventListener('touchstart', onTouchStart);
            el.removeEventListener('touchend', onTouchEnd);
        };
    }, [advance]);

    const step = steps[activeStep];
    const isFirst = activeStep === 0;
    const isLast  = activeStep === steps.length - 1;

    return (
        <section
            ref={sectionRef}
            aria-label="Pathway Program — six steps"
            className="bg-neutral-50 pb-16 pt-16 lg:pb-20 lg:pt-20"
        >
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">
                        The Process, Step by Step
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight">
                        Six simple steps to owning your home.
                    </h2>
                </div>

                {/* ── Desktop layout: nav | photo | content — no outer card box ── */}
                <div ref={cardRef} className="hidden lg:flex gap-8 items-stretch">

                    {/* Nav — sits on page background, no box */}
                    <nav aria-label="Jump to a step" className="shrink-0 w-52 flex flex-col justify-center">
                        <ol className="space-y-1">
                            {steps.map((s, i) => {
                                const isActive = i === activeStep;
                                const isDone   = i < activeStep;
                                return (
                                    <li key={s.id} className="relative">
                                        {isActive && (
                                            <motion.span
                                                layoutId="stepNavIndicator"
                                                className="absolute left-0 top-1.5 bottom-1.5 w-[2.5px] bg-berry-600 rounded-full"
                                            />
                                        )}
                                        <button
                                            onClick={() => go(i)}
                                            aria-current={isActive ? 'step' : undefined}
                                            className={[
                                                'w-full flex items-center gap-3 pl-4 pr-3 py-3 rounded-r-lg text-left transition-colors duration-200',
                                                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy-800',
                                                isActive ? '' : 'hover:bg-white/70',
                                            ].join(' ')}
                                        >
                                            <span
                                                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors"
                                                style={{
                                                    background: isActive ? '#E8553D' : isDone ? '#002e5d' : 'rgba(15,23,60,0.12)',
                                                    color: isActive || isDone ? '#fff' : 'rgba(15,23,60,0.38)',
                                                }}
                                            >
                                                {i + 1}
                                            </span>
                                            <span
                                                className="text-base leading-snug transition-colors"
                                                style={{
                                                    color:      isActive ? '#E8553D' : isDone ? 'rgba(0,46,93,0.65)' : 'rgba(15,23,60,0.36)',
                                                    fontWeight: isActive ? 700 : 500,
                                                }}
                                            >
                                                {s.navLabel}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>

                    {/* Photo — height driven by content column; rounded corners on all steps */}
                    <div className="flex-1 overflow-hidden relative rounded-2xl" style={{ minHeight: '460px' }}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeStep}
                                src={step.imageSrc}
                                alt={step.imageAlt}
                                onError={(e) => {
                                    if (e.currentTarget.src !== step.imageFallback) {
                                        e.currentTarget.src = step.imageFallback;
                                    }
                                }}
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{ objectPosition: step.imagePosition }}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Content — plain text column, no background box */}
                    <div className="shrink-0 w-80 flex flex-col justify-center">
                        <div className="flex items-baseline gap-[5px] mb-4">
                            <span className="text-[22px] font-bold tabular-nums leading-none" style={{ color: '#E8553D' }}>
                                {step.stepNumber}
                            </span>
                            <span className="text-[15px] font-light" style={{ color: 'rgba(15,23,60,0.22)' }}>/</span>
                            <span className="text-[13px] font-semibold tabular-nums" style={{ color: 'rgba(15,23,60,0.28)' }}>
                                {String(steps.length).padStart(2, '0')}
                            </span>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: dir * 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: dir * -18 }}
                                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                                <h3 className="text-xl lg:text-2xl font-semibold text-navy-800 mb-4 leading-[1.3]">
                                    {step.title}
                                </h3>
                                <p className="text-base text-slate-700 leading-relaxed">
                                    {step.body}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-8">
                            <button
                                onClick={() => advance(-1)}
                                disabled={isFirst}
                                aria-label="Previous step"
                                className="inline-flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-full transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy-800"
                                style={{
                                    visibility: isFirst ? 'hidden' : 'visible',
                                    color: 'rgba(15,23,60,0.45)',
                                }}
                            >
                                <ChevronLeft size={14} /> Previous
                            </button>

                            {isLast ? (
                                <Link
                                    href="/apply"
                                    className="inline-flex items-center gap-2 text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-sm transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    style={{ background: '#E8553D' }}
                                >
                                    See If You Qualify
                                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            ) : (
                                <button
                                    onClick={() => advance(1)}
                                    aria-label={`Next: ${steps[activeStep + 1]?.navLabel}`}
                                    className="inline-flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-full transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy-800"
                                    style={{ background: '#002e5d', color: '#fff' }}
                                >
                                    Next <ChevronRight size={14} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── Mobile layout: step indicator + stacked card ── */}
                <div className="lg:hidden">

                    {/* "Step X of 6 · Label" indicator row */}
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[13px] font-semibold text-navy-800">
                            Step {activeStep + 1}{' '}
                            <span className="font-normal" style={{ color: 'rgba(15,23,60,0.4)' }}>of {steps.length}</span>
                        </span>
                        <span className="text-[12px]" style={{ color: 'rgba(15,23,60,0.45)' }}>{step.navLabel}</span>
                    </div>

                    {/* Horizontal dot stepper — each button has a tall hit target */}
                    <div className="flex items-center gap-1.5 mb-5" role="list" aria-label="Steps">
                        {steps.map((s, i) => (
                            <button
                                key={s.id}
                                role="listitem"
                                onClick={() => go(i)}
                                aria-label={`Step ${i + 1}: ${s.navLabel}`}
                                aria-current={i === activeStep ? 'step' : undefined}
                                className="flex items-center justify-center py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-navy-800"
                                style={{ minWidth: i === activeStep ? '20px' : '7px' }}
                            >
                                <span
                                    className="block rounded-full transition-all duration-300"
                                    style={{
                                        width:      i === activeStep ? '20px' : '7px',
                                        height:     '7px',
                                        background: i === activeStep ? '#E8553D' : i < activeStep ? '#002e5d' : 'rgba(15,23,60,0.14)',
                                    }}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Stacked image + content card */}
                    <div className="rounded-2xl overflow-hidden shadow-sm bg-white">

                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeStep}
                                    src={step.imageSrc}
                                    alt={step.imageAlt}
                                    onError={(e) => {
                                        if (e.currentTarget.src !== step.imageFallback) {
                                            e.currentTarget.src = step.imageFallback;
                                        }
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    style={{ objectPosition: step.imagePosition }}
                                />
                            </AnimatePresence>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-baseline gap-[4px] mb-3">
                                <span className="text-lg font-bold tabular-nums leading-none" style={{ color: '#E8553D' }}>
                                    {step.stepNumber}
                                </span>
                                <span className="text-[13px] font-light" style={{ color: 'rgba(15,23,60,0.22)' }}>/</span>
                                <span className="text-[11px] font-semibold tabular-nums" style={{ color: 'rgba(15,23,60,0.28)' }}>
                                    {String(steps.length).padStart(2, '0')}
                                </span>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-xl font-semibold text-navy-800 mb-3 leading-[1.3]">{step.title}</h3>
                                    <p className="text-base text-slate-700 leading-relaxed">{step.body}</p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Mobile Previous / Next */}
                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                                <button
                                    onClick={() => advance(-1)}
                                    disabled={isFirst}
                                    aria-label="Previous step"
                                    className="min-h-[44px] inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1"
                                    style={{
                                        visibility: isFirst ? 'hidden' : 'visible',
                                        color: 'rgba(15,23,60,0.45)',
                                    }}
                                >
                                    <ChevronLeft size={14} /> Previous
                                </button>

                                {isLast ? (
                                    <Link
                                        href="/apply"
                                        className="min-h-[44px] inline-flex items-center gap-2 text-white font-bold px-5 py-2.5 rounded-full text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                        style={{ background: '#E8553D' }}
                                    >
                                        See If You Qualify <ArrowRight size={13} />
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => advance(1)}
                                        aria-label={`Next: ${steps[activeStep + 1]?.navLabel}`}
                                        className="min-h-[44px] inline-flex items-center gap-1 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1"
                                        style={{ background: '#002e5d', color: '#fff' }}
                                    >
                                        Next <ChevronRight size={14} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

// ── Qualifications ───────────────────────────────────────────────────────────

const faqItems = [
    {
        category: 'The Basics',
        items: [
            {
                q: 'What exactly is a lease-to-purchase program?',
                a: "A lease-to-purchase program lets you move into the home you want to buy before you qualify for a traditional mortgage. Berry Rock Homes purchases the home on your behalf, leases it to you at market rate, and gives you the exclusive Right to Purchase it at a locked-in price. You use the lease period to build credit, save, or establish employment history.",
            },
            {
                q: 'Is the purchase price locked in at the start?',
                a: "Yes. Your future purchase price is agreed upon and locked in on the day we go under contract, before you move in. Whether the market goes up or down during your lease, your price does not change.",
            },
            {
                q: 'What paperwork will I sign?',
                a: "Two documents, both reviewed with you before you move in. First, a residential lease that sets your monthly lease payment and covers the term and maintenance terms of living in the home. Second, a Right to Purchase agreement that grants you the exclusive, guaranteed option to buy the home at your locked-in price. Together they give you a tenant's place to live and a buyer's protected path to ownership.",
            },
            {
                q: "Will applying affect my credit score?",
                a: "Our initial review uses a soft credit pull, which does not affect your score. A hard pull is only conducted later in the process, with your explicit consent, and only when you are ready to proceed.",
            },
        ],
    },
    {
        category: 'Your Commitment',
        items: [
            {
                q: 'Am I obligated to buy the home?',
                a: "Our program is designed for people who intend to buy, but you are not legally obligated to close. If you decide not to purchase, you can walk away at the end of your lease term, though your Option Consideration is non-refundable. The vast majority of our participants do purchase.",
            },
            {
                q: 'Are there hidden fees or surprise costs?',
                a: "No. Every number is disclosed before you sign anything: your monthly lease payment, your locked-in purchase price, your Option Consideration, and what happens to your rent credits. No origination fees, no processing fees, no surprises.",
            },
        ],
    },
];

// ── FAQ Accordion ────────────────────────────────────────────────────────────

const FAQAccordion = ({ category, items }) => {
    const [expanded, setExpanded] = useState(null);
    return (
        <div>
            <h3 className="text-lg font-semibold text-navy-800 mb-4">{category}</h3>
            <div className="space-y-3">
                {items.map((faq, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => setExpanded(expanded === idx ? null : idx)}
                            className="w-full flex items-start justify-between gap-4 p-5 bg-white hover:bg-neutral-50 transition-colors text-left"
                        >
                            <span className="font-semibold text-navy-800 leading-snug flex-1">{faq.q}</span>
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-navy-800 text-white flex items-center justify-center transition-transform ${expanded === idx ? 'rotate-45' : ''}`}>
                                <Plus size={14} />
                            </div>
                        </button>
                        {expanded === idx && (
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
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// ── Documents & Paperwork (tabbed) ────────────────────────────────────────────

const docTabs = [
    {
        id: 'to-apply',
        tabLabel: 'To Apply',
        Icon: Clock,
        title: "What you'll need to apply",
        // Aug 5 (01:05:00): "instead of decision in 24 to 48 hours... automatic
        // pre-qualification based on stated application information, verification
        // required." Step 01 now says pre-qualification is immediate, so the old
        // 24-to-48-hour line contradicted the step flow above it.
        intro: "Applying to see if you qualify takes about 5 minutes and asks for basic information only. No documents to upload and no hard credit pull. You get an automatic pre-qualification based on the information you give us, and verification comes later.",
        type: 'checklist',
        items: [
            { Icon: Phone,       label: 'Your name, email, and phone number' },
            { Icon: DollarSign,  label: 'A rough estimate of your annual household income' },
            { Icon: Banknote,    label: 'How much you have saved toward your option consideration' },
            { Icon: ShieldCheck, label: 'Consent for a soft credit check (no score impact)' },
        ],
    },
    {
        id: 'to-buy',
        tabLabel: 'To Buy',
        Icon: FileText,
        title: "What you'll need to buy",
        intro: "These documents are for the full mortgage process when you're ready to purchase, not the qualification check. Gathering them ahead of time keeps everything moving when the time comes.",
        type: 'checklist',
        items: [
            { Icon: CreditCard,      label: 'Government-issued photo ID' },
            { Icon: Receipt,         label: 'Last 2 months of pay stubs' },
            { Icon: FileSpreadsheet, label: '2 years of tax returns (if self-employed)' },
            { Icon: Landmark,        label: 'Last 2 months of bank statements' },
            { Icon: Banknote,        label: 'Proof of any additional income sources' },
        ],
    },
    {
        id: 'to-close',
        tabLabel: 'To Close',
        Icon: KeyRound,
        title: 'Three documents, no fine-print surprises',
        intro: "These are the documents we provide to you, putting everything we've committed to in writing. The Pathway Program rests on three agreements you review and sign before you move in. Together they spell out exactly what you pay, what you build, what you are responsible for, and your protected path to ownership.",
        type: 'documents',
        items: [
            {
                Icon: FileText,
                title: 'The Lease',
                body: 'Your residential lease sets your monthly lease payment and defines the term, maintenance responsibilities, and day-to-day terms of living in the home. Every on-time payment is reported to all three credit bureaus and earns a Monthly Rental Credit toward your purchase.',
                points: ['A locked-in monthly lease payment', 'On-time payments build your credit', 'Rental credits accrue toward closing'],
            },
            {
                Icon: KeyRound,
                title: 'The Right to Purchase Agreement',
                body: "Your Right to Purchase agreement gives you the exclusive, guaranteed option to buy the home at a price locked in on the day we go under contract. It is secured by your 7% Option Consideration and held in your name from day one — no one can buy the home out from under you.",
                points: ['Purchase price locked in up front', 'Exclusive option held in your name', 'Your right to buy, never an obligation'],
            },
            {
                // Third document per Aug 5 (01:02:09): "we probably say three
                // documents and the third document is the maintenance
                // responsibility ... that tells them they're responsible for all
                // maintenance and repairs." Nick was explicit that the insurance
                // deductible belongs here as one of the check marks: "we'll file an
                // insurance claim on the property, but they are responsible for the
                // deductible portion of that since they're responsible for
                // maintenance."
                Icon: Receipt,
                title: 'The Maintenance Responsibility Agreement',
                body: 'Living in the home as its future owner means taking care of it like one. This document states plainly that you are responsible for all maintenance and repairs during the lease, so there are no surprises about who handles what.',
                points: [
                    'You handle maintenance and repairs',
                    'We file insurance claims on the property',
                    'You cover the deductible on a claim',
                ],
            },
        ],
    },
];

const DocumentsTabs = () => {
    const [active, setActive] = useState(0);
    const tab = docTabs[active];

    return (
        <div className="mt-24 lg:mt-32">
            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">Documents &amp; Paperwork</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-8 max-w-2xl">
                What you'll need at every stage
            </h2>

            {/* Not ARIA tabs. These are plain buttons that swap a panel:
                each one is individually tab-reachable and activates on
                Enter/Space, which is exactly what a button does. The markup
                used to claim role="tablist"/role="tab", which promises the
                ARIA tabs keyboard model — arrow keys to move between tabs,
                Home/End, and only the selected tab in the tab sequence —
                none of which was implemented. Declaring the honest role is
                better than announcing a model the widget does not honour.
                role="group" keeps the useful grouping announcement. */}
            {/* ── Selector row — underline style (aligned with site tabs) ── */}
            <div
                className="flex flex-nowrap justify-start gap-6 sm:gap-8 border-b border-gray-200 mb-8 overflow-x-auto -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ WebkitOverflowScrolling: 'touch' }}
                role="group"
                aria-label="Documents and paperwork"
            >
                {docTabs.map(({ Icon, tabLabel, id }, i) => {
                    const isActive = i === active;
                    return (
                        <button
                            key={id}
                            type="button"
                            id={`doc-btn-${id}`}
                            aria-pressed={isActive}
                            aria-controls="doc-panel"
                            onClick={() => setActive(i)}
                            className={`relative -mb-px pb-4 inline-flex items-center gap-2 text-sm sm:text-base font-bold whitespace-nowrap flex-none transition-colors ${
                                isActive ? 'text-berry-700' : 'text-slate-600 hover:text-navy-800'
                            }`}
                        >
                            <Icon
                                size={17}
                                strokeWidth={1.8}
                                className={isActive ? 'text-berry-600' : 'text-slate-500'}
                                aria-hidden="true"
                            />
                            {tabLabel}
                            {isActive && (
                                <motion.span
                                    layoutId="docTabUnderline"
                                    className="absolute left-0 right-0 -bottom-px h-[2.5px] bg-berry-600 rounded-full"
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* ── Panel ── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={tab.id}
                    id="doc-panel"
                    role="region"
                    aria-labelledby={`doc-btn-${tab.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div className="mb-8 max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-navy-800 leading-tight mb-3">
                            {tab.title}
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed">{tab.intro}</p>
                    </div>

                    {tab.type === 'checklist' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {tab.items.map(({ Icon, label }) => (
                                <div
                                    key={label}
                                    className="bg-sand-50 rounded-2xl p-5 flex items-center gap-4"
                                >
                                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                                        <Icon size={20} className="text-navy-600" aria-hidden="true" />
                                    </div>
                                    <span className="text-base text-slate-700 font-medium leading-snug">{label}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {tab.items.map(({ Icon, title, body, points }) => (
                                <div key={title} className="bg-sand-50 rounded-2xl p-7 lg:p-8">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100 mb-5">
                                        <Icon size={22} className="text-navy-600" aria-hidden="true" />
                                    </div>
                                    <h4 className="text-xl font-bold text-navy-800 mb-3">{title}</h4>
                                    <p className="text-base text-slate-700 leading-relaxed mb-5">{body}</p>
                                    <ul className="space-y-4">
                                        {points.map((point) => (
                                            <li key={point} className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                                    <Check size={17} className="text-navy-600" aria-hidden="true" />
                                                </div>
                                                <span className="text-base text-slate-600 font-medium leading-snug">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

// ── View ─────────────────────────────────────────────────────────────────────

const HowItWorks = () => {
    return (
        <div className="bg-white min-h-screen">

            {/* ── Page Hero — white: keeps it distinct from the neutral-50 process section below ── */}
            <section className="bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-[200px] lg:pt-[240px] pb-20 lg:pb-24">

                        <div className="flex flex-col">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-5"
                            >
                                Pathway Program<sup className="text-[0.6em] tracking-normal">SM</sup>
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.07 }}
                                className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-navy-800 leading-[1.08] tracking-tight mb-4"
                            >
                                How It Works
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-base lg:text-lg text-slate-600 leading-relaxed mb-7 max-w-md"
                            >
A clear path from renting to owning. Berry Rock Homes purchases the home you choose, you lease it while you build your own mortgage readiness on your own timeline, and you move toward ownership when you're ready.
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
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="hidden lg:flex flex-col items-center justify-center w-full"
                        >
                            {/* Poster only — see the note on ForAgents.jsx. */}
                            <div className="w-full aspect-video bg-black rounded-3xl flex items-center justify-center relative overflow-hidden group">
                                <img
                                    src="/images/video-thumb-cam.png"
                                    alt="Pathway Program overview video"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 bg-berry-600 rounded-full flex items-center justify-center group-hover:bg-berry-700 transition-colors">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 text-sm font-medium text-slate-500 text-center">Pathway Program Overview</p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── 5 Steps — scroll-driven feature showcase ── */}
            <StepsShowcase />

            {/* ── Program at a Glance — bento: factual, scannable, confirming ── */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Header: heading left, framing copy right */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-end mb-10 lg:mb-12">
                        <div>
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">Program at a Glance</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight">What to know up front</h2>
                        </div>
                        <p className="text-base text-slate-600 leading-relaxed lg:pb-1">
                            These are the numbers that shape the Pathway Program. Each figure is a typical outcome. Your exact timeline and terms depend on your goals, the home you choose, and your local market.
                        </p>
                    </div>

                    {/* Bento grid — light, airy, stats intermixed with imagery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[190px]">

                        {/* Lifestyle image — tall anchor (left) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="lg:row-span-2 rounded-2xl overflow-hidden shadow-sm min-h-[240px] lg:min-h-0"
                        >
                            <img
                                src="/images/priya_photo.png"
                                alt="Priya, a Pathway Program participant, at the home she is buying."
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* ~18 months to ownership */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.05 }}
                            className="bg-sky-50 rounded-2xl p-6 flex flex-col justify-between min-h-[150px]"
                        >
                            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-600">Time to ownership</span>
                            <div>
                                <p className="text-4xl md:text-5xl font-light text-navy-800 leading-none tracking-tight">~18 mo</p>
                                <p className="text-sm text-slate-600 leading-relaxed mt-2">Typical, and it varies. Most reach closing in 12 to 24 months.</p>
                            </div>
                        </motion.div>

                        {/* 83% reach ownership */}
                        {/* HOLD (83% success rate is ~18 months old — confirm still current with Nick before changing) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="bg-berry-50 rounded-2xl p-6 flex flex-col justify-between min-h-[150px]"
                        >
                            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-berry-700">Reach ownership</span>
                            <div>
                                <p className="text-4xl md:text-5xl font-light text-navy-800 leading-none tracking-tight">83%</p>
                                <p className="text-sm text-slate-600 leading-relaxed mt-2">of participants who complete the program go on to own.</p>
                            </div>
                        </motion.div>

                        {/* Apply Now — focal point (tall, saturated) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="lg:row-span-2 rounded-2xl bg-berry-700 shadow-glow p-7 flex flex-col justify-between min-h-[220px]"
                        >
                            <div>
                                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Ready when you are</span>
                                <p className="text-2xl md:text-3xl font-bold text-white leading-tight mt-3">See if you qualify in 5 minutes</p>
                                <p className="text-sm text-white/85 leading-relaxed mt-2">Soft credit check only. No impact to your score, no commitment.</p>
                            </div>
                            <Link
                                href="/apply"
                                className="group inline-flex items-center justify-center gap-2 bg-white text-berry-700 font-semibold px-6 py-3.5 rounded-full hover:bg-sand-50 transition-colors w-full"
                            >
                                Apply Now
                                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                            </Link>
                        </motion.div>

                        {/* Zero hidden fees */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="bg-sand-50 rounded-2xl p-6 flex flex-col justify-between min-h-[150px]"
                        >
                            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-600">Hidden fees</span>
                            <div>
                                <p className="text-4xl md:text-5xl font-light text-navy-800 leading-none tracking-tight">Zero</p>
                                <p className="text-sm text-slate-600 leading-relaxed mt-2">Every cost disclosed before you sign.<br />No surprises.</p>
                            </div>
                        </motion.div>

                        {/* 7% option consideration */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.25 }}
                            className="bg-navy-50 rounded-2xl p-6 flex flex-col justify-between min-h-[150px]"
                        >
                            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-600">To secure the home</span>
                            <div>
                                <p className="text-4xl md:text-5xl font-light text-navy-800 leading-none tracking-tight">7%</p>
                                <p className="text-sm text-slate-600 leading-relaxed mt-2">Option consideration, fully credited toward your purchase.</p>
                            </div>
                        </motion.div>

                        {/* ~30 days to close (wide, bottom left) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="sm:col-span-2 bg-sand-50 rounded-2xl p-6 flex flex-col justify-between min-h-[150px]"
                        >
                            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-navy-600">To close</span>
                            <div>
                                <p className="text-4xl md:text-5xl font-light text-navy-800 leading-none tracking-tight">~30 days</p>
                                <p className="text-sm text-slate-600 leading-relaxed mt-2">Typical timeline once you are under contract on your home.</p>
                            </div>
                        </motion.div>

                        {/* Lifestyle image — wide (bottom right) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.35 }}
                            className="sm:col-span-2 rounded-2xl overflow-hidden shadow-sm min-h-[200px] lg:min-h-0"
                        >
                            <img
                                src="/images/for_agents_hero.png"
                                alt="A homebuyer settling into the home they are purchasing through the Pathway Program."
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                    </div>

                    {/* ── Documents & paperwork — collapsed into tabs ── */}
                    <DocumentsTabs />
                </div>
            </section>

            {/* ── Qualify CTA — mirrors home page module ── */}
            <section className="pt-24 pb-48 bg-sand-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">See If You Qualify</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-10">
                                Is this program<br className="hidden sm:block" /> right for me?
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6 mb-10">
                                {[
                                    { Icon: ShieldCheck, title: 'No perfect credit required', desc: 'We look at the full picture, not just a number. A past denial doesn\'t disqualify you.' },
                                    { Icon: Clock,       title: 'Your timeline, not the bank\'s', desc: 'Use the lease period to build credit, save, and get mortgage-ready at a pace that works for you.' },
                                ].map(({ Icon, title, desc }) => (
                                    <div key={title}>
                                        <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white mb-3">
                                            <Icon size={16} strokeWidth={2.25} />
                                        </div>
                                        <p className="font-semibold text-slate-900 text-lg mb-1.5 leading-snug">{title}</p>
                                        <p className="text-slate-700 text-base leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/is-it-for-me"
                                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-full transition-colors text-sm group"
                            >
                                Is it for me?
                                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Photo collage */}
                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="hidden lg:grid grid-cols-[1.2fr_1fr] grid-rows-[16rem_11rem] gap-4"
                        >
                            <div
                                className="overflow-hidden bg-slate-200"
                                style={{
                                    WebkitMaskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 220' preserveAspectRatio='none'><path fill='black' d='M94 4 Q100 0 106 4 L194 78 Q200 82 200 90 L200 206 Q200 220 186 220 L14 220 Q0 220 0 206 L0 90 Q0 82 6 78 Z'/></svg>\")",
                                    maskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 220' preserveAspectRatio='none'><path fill='black' d='M94 4 Q100 0 106 4 L194 78 Q200 82 200 90 L200 206 Q200 220 186 220 L14 220 Q0 220 0 206 L0 90 Q0 82 6 78 Z'/></svg>\")",
                                    WebkitMaskSize: '100% 100%', maskSize: '100% 100%',
                                    WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
                                }}
                            >
                                <img src="/images/woman_coffee_kitchen.png" alt="New homeowner unlocking their front door for the first time" className="block w-full h-full object-cover object-center" />
                            </div>
                            {/* Man with plants — head breaks out of the frame */}
                            <div className="relative translate-y-24">
                                {/* Body, clipped to the rounded frame */}
                                <div className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-200">
                                    <img
                                        src="/images/family_in_kitchen.png"
                                        alt="Man holding a box of plants in front of his new home"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[132%] max-w-none"
                                    />
                                </div>
                                {/* Cutout of the man, unclipped — his head + shoulders break above the frame */}
                                <img
                                    src="/images/man_plants_cutout.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[132%] max-w-none pointer-events-none"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden">
                                <img src="/images/neighborhood_aerial.png" alt="Couple touring a home during a walkthrough" className="block w-full h-full object-cover object-center" />
                            </div>
                            <div className="rounded-2xl overflow-hidden translate-y-24">
                                <img src="/images/neighborhood_street.png" alt="A charming suburban home with great curb appeal" className="block w-full h-full object-cover object-center" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── FAQ — neutral-50: calm, honest, reassuring ── */}
            <section className="bg-neutral-50 py-20 lg:py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        {/* Left: FAQ accordion */}
                        <div className="lg:col-span-7">
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">Common Questions</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-10">Answers before you apply</h2>
                            <div className="space-y-8">
                                {faqItems.map((group, i) => (
                                    <FAQAccordion key={i} category={group.category} items={group.items} />
                                ))}
                            </div>
                            <div className="mt-8">
                                <Link
                                    href="/faq"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-berry-700 hover:text-berry-800 transition-colors group"
                                >
                                    View all FAQs
                                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right: sticky CTA callout */}
                        <div className="lg:col-span-5 lg:sticky lg:top-[120px]">
                            <div className="rounded-2xl p-8" style={{ backgroundColor: '#dce6f1' }}>
                                <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">Ready to Start?</p>
                                <h3 className="text-2xl font-bold text-navy-800 leading-snug mb-3">
                                    Find out if you qualify in 5 minutes.
                                </h3>
                                <p className="text-base text-slate-700 leading-relaxed mb-6">
                                    Soft credit check only. No impact to your score. Get a fast answer with no obligation to proceed.
                                </p>
                                <Link
                                    href="/apply"
                                    className="inline-flex items-center justify-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-6 py-3.5 rounded-full transition-colors group text-sm shadow-md mb-8"
                                >
                                    See If You Qualify
                                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                                <div className="space-y-4">
                                    {[
                                        { icon: ShieldCheck, text: 'Soft credit check — no score impact' },
                                        { icon: Clock,       text: 'Automated pre-qualification' },
                                        { icon: DollarSign,  text: 'Zero application fee' },
                                    ].map(({ icon: Icon, text }) => (
                                        <div key={text} className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                                <Icon size={17} className="text-navy-600" />
                                            </div>
                                            <span className="text-base text-slate-600 font-medium">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default HowItWorks;
