'use client';

import { ShieldCheck, ArrowRight, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import FormsiteEmbed from '@/components/Apply/FormsiteEmbed';
import InteractiveCalculator from '@/components/Calculator/InteractiveCalculator';

/* ── Hero bento collage (house / tall / wide / square) — the same montage
 *    used in the Get Started call-out. Photos are exclusive to this hero. ── */

// House-silhouette mask, shared with QualifyCTA / HowItWorks.
const houseMask =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 220' preserveAspectRatio='none'><path fill='black' d='M94 4 Q100 0 106 4 L194 78 Q200 82 200 90 L200 206 Q200 220 186 220 L14 220 Q0 220 0 206 L0 90 Q0 82 6 78 Z'/></svg>\")";

// Tiles animate up + in, staggered, on load.
const bentoContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};
const bentoTile = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 120, damping: 18 },
    },
};

/* ── Little illustration moments for the qualify cards ── */

const FormArt = () => (
    <svg viewBox="0 0 200 130" fill="none" className="h-28 w-auto" aria-hidden="true">
        <rect x="48" y="18" width="104" height="94" rx="11" fill="#fff" stroke="#dce6f1" strokeWidth="2" />
        <rect x="64" y="34" width="46" height="8" rx="4" fill="#002e5d" />
        <rect x="64" y="54" width="74" height="6" rx="3" fill="#e8e1d6" />
        <rect x="64" y="68" width="74" height="6" rx="3" fill="#e8e1d6" />
        <rect x="64" y="82" width="48" height="6" rx="3" fill="#e8e1d6" />
        <circle cx="140" cy="98" r="23" fill="#E8553D" />
        <circle cx="140" cy="98" r="23" fill="none" stroke="#fff" strokeWidth="2" opacity="0.35" />
        <path d="M140 98 V86" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M140 98 H150" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
);

const ShieldArt = () => (
    <svg viewBox="0 0 200 130" fill="none" className="h-28 w-auto" aria-hidden="true">
        <rect x="44" y="22" width="112" height="86" rx="12" fill="#fff" stroke="#dce6f1" strokeWidth="2" />
        <rect x="60" y="38" width="40" height="7" rx="3.5" fill="#002e5d" />
        <path d="M68 92 A26 26 0 0 1 120 92" stroke="#e8e1d6" strokeWidth="7" strokeLinecap="round" />
        <path d="M68 92 A26 26 0 0 1 112 72" stroke="#E8553D" strokeWidth="7" strokeLinecap="round" />
        <circle cx="94" cy="92" r="3.5" fill="#002e5d" />
        <circle cx="140" cy="98" r="22" fill="#E8553D" />
        <circle cx="140" cy="98" r="22" fill="none" stroke="#fff" strokeWidth="2" opacity="0.35" />
        <path d="M131 98 l6 6 12 -15" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const EnvelopeArt = () => (
    <svg viewBox="0 0 200 130" fill="none" className="h-28 w-auto" aria-hidden="true">
        <rect x="44" y="40" width="112" height="70" rx="12" fill="#fff" stroke="#dce6f1" strokeWidth="2" />
        <path d="M50 48 L100 82 L150 48" stroke="#002e5d" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="140" cy="98" r="22" fill="#E8553D" />
        <circle cx="140" cy="98" r="22" fill="none" stroke="#fff" strokeWidth="2" opacity="0.35" />
        <text x="140" y="103" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="Outfit, sans-serif">48h</text>
    </svg>
);

const reasons = [
    {
        Art: FormArt,
        tint: 'from-sand-50',
        title: '5-minute application',
        body: 'Just a few basic details. We use them to check whether you qualify for Berry Rock, no heavy paperwork required.',
    },
    {
        Art: ShieldArt,
        tint: 'from-navy-50',
        title: 'Soft credit check only',
        body: "Checking eligibility uses a soft credit pull. It won't impact your score, guaranteed.",
    },
    {
        Art: EnvelopeArt,
        tint: 'from-berry-50',
        title: 'Answers within 48 hours',
        body: "We'll let you know if you qualify and your pre-approved purchase amount within 48 hours.",
    },
];

const Apply = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero: text left, photo right ── */}
            <section className="bg-neutral-50 pt-[200px] lg:pt-[240px] pb-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left: text + CTA */}
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                            >
                                See If You Qualify
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.07 }}
                                className="text-4xl lg:text-5xl xl:text-[3.2rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5"
                            >
                                Start your journey<br />
                                <span className="text-berry-600">to homeownership.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.13 }}
                                className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-md"
                            >
                                A quick, 5-minute check. No hard credit pull. Fast answers, clear next steps.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.18 }}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                            >
                                <a
                                    href="#apply-form"
                                    className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                                >
                                    Begin Application
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </a>
                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <ShieldCheck size={14} className="text-green-500" aria-hidden="true" />
                                    Soft credit pull only
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: four-shape bento collage. Tiles 2 & 4 are shifted
                            down for the staggered montage look; the house tile's
                            family breaks above the roofline. */}
                        <motion.div
                            variants={bentoContainer}
                            initial="hidden"
                            animate="show"
                            className="hidden lg:flex items-center justify-center"
                        >
                            <div className="grid grid-cols-[1.2fr_1fr] grid-rows-[21rem_11rem] gap-4 w-full max-w-xl pt-8">

                                {/* Top-left: house silhouette framing the whole family */}
                                <motion.div variants={bentoTile} className="relative">
                                    <div
                                        className="absolute inset-0 overflow-hidden bg-slate-200"
                                        style={{
                                            WebkitMaskImage: houseMask,
                                            maskImage: houseMask,
                                            WebkitMaskSize: '100% 100%',
                                            maskSize: '100% 100%',
                                            WebkitMaskRepeat: 'no-repeat',
                                            maskRepeat: 'no-repeat',
                                        }}
                                    >
                                        <img
                                            src="/images/person_sq_10.png"
                                            alt="A mom and her kids drawing with chalk in their driveway"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            style={{ objectPosition: 'center top' }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Top-right: tall vertical (shifted down for stagger) */}
                                <motion.div variants={bentoTile} className="rounded-2xl overflow-hidden translate-y-24">
                                    <img
                                        src="/images/person_sq_11.png"
                                        alt="A homeowner mowing the lawn in front of his house"
                                        className="block w-full h-full object-cover object-center"
                                    />
                                </motion.div>

                                {/* Bottom-left: wide landscape */}
                                <motion.div variants={bentoTile} className="rounded-2xl overflow-hidden">
                                    <img
                                        src="/images/person_sq_14.png"
                                        alt="A homeowner folding laundry in her bedroom"
                                        className="block w-full h-full object-cover object-center"
                                    />
                                </motion.div>

                                {/* Bottom-right: small square (shifted down for stagger) */}
                                <motion.div variants={bentoTile} className="rounded-2xl overflow-hidden translate-y-24">
                                    <img
                                        src="/images/person_sq_9.png"
                                        alt="A dad helping his son with homework at the kitchen table"
                                        className="block w-full h-full object-cover object-center"
                                    />
                                </motion.div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ── How you learn if you qualify ── */}
            <section className="bg-white border-t border-slate-100 py-16 lg:py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center mb-12"
                    >
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">
                            Pathway Program Qualification
                        </p>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                            A few minutes now, real answers fast.
                        </h2>
                        <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                            The application below is how we check your eligibility for the Berry Rock pathway. Share a little about yourself and we&apos;ll let you know where you stand, with no hard credit pull and no guesswork.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-3 gap-5">
                        {reasons.map(({ Art, tint, title, body }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden flex flex-col"
                            >
                                <div className={`h-36 flex items-center justify-center bg-gradient-to-b ${tint} to-white`}>
                                    <Art />
                                </div>
                                <div className="p-6">
                                    <p className="text-base font-bold text-navy-800 mb-1.5">{title}</p>
                                    <p className="text-base text-slate-700 leading-relaxed">{body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Application Form (hosted by Formsite) + calculator sidebar ── */}
            <section className="bg-neutral-50 border-t border-slate-100 py-16 lg:py-20">
                <div className="container mx-auto px-6 max-w-7xl">

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* Form (left / below the calculator on mobile) */}
                        <motion.div
                            id="apply-form"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-7 lg:order-1 bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-8"
                        >
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-navy-800 mb-1.5">Berry Rock Homes Pathway Program Qualification Application</h2>
                                <p className="text-slate-700 text-base leading-relaxed">This application helps you understand whether you qualify for the Berry Rock Homes Pathway Program. Share a few details and we&apos;ll let you know where you stand, before any heavy paperwork.</p>
                                <div className="mt-4 flex items-start gap-3 rounded-xl border border-sky-200 bg-sky-50 p-4">
                                    <AlertTriangle size={18} className="shrink-0 mt-0.5 text-sky-600" aria-hidden="true" />
                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 mb-1">Soft credit pull</p>
                                        <p className="text-sm text-slate-700 leading-relaxed">Checking your eligibility uses a soft credit pull. It will NOT affect your credit score.</p>
                                    </div>
                                </div>
                            </div>

                            <FormsiteEmbed />
                        </motion.div>

                        {/* Calculator (right sidebar on desktop, first on mobile) */}
                        <motion.aside
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-5 order-first lg:order-2 lg:sticky lg:top-28"
                        >
                            <div className="mb-5">
                                <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">Interactive Calculator</p>
                                <h3 className="text-xl font-bold text-navy-800 tracking-tight">See your numbers before you apply.</h3>
                                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                    Move the slider to preview your Option Consideration, monthly lease payment, and Rental Credits.
                                </p>
                            </div>
                            <InteractiveCalculator stacked />
                        </motion.aside>

                    </div>

                    <p className="max-w-3xl mx-auto mt-10 text-center text-xs text-slate-500 leading-relaxed">
                        Please note: this is not your application to buy a home. It is your application to see if you qualify for the Berry Rock Homes Pathway Program. Additional paperwork and applications come later in the process.
                    </p>

                </div>
            </section>
        </div>
    );
};

export default Apply;
