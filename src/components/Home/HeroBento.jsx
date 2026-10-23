'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/* ------------------------------------------------------------------ *
 *  Alternate homepage hero: type on the left, an animated bento of
 *  rounded shapes on the right. A couple of the tiles feature people
 *  who "break out" of their frame for visual interest. The set is
 *  intentionally diverse across people and home types.
 * ------------------------------------------------------------------ */

// House-silhouette mask, shared with QualifyCTA / HowItWorks.
const houseMask =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 220' preserveAspectRatio='none'><path fill='black' d='M94 4 Q100 0 106 4 L194 78 Q200 82 200 90 L200 206 Q200 220 186 220 L14 220 Q0 220 0 206 L0 90 Q0 82 6 78 Z'/></svg>\")";

// Clip that leaves the TOP edge open (so a head can poke out) while
// keeping the sides + bottom contained, with rounded bottom corners.
const breakoutTop = 'inset(-100% 0px 0px 0px round 0px 0px 1.5rem 1.5rem)';
// Clip that opens the TOP and BOTH SIDES (head + a child can spill out)
// while keeping the bottom contained.
const breakoutTopSides = 'inset(-100% -100% 0px -100% round 0px 0px 1.5rem 1.5rem)';

// Tiles animate up + in, staggered, on load.
const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.09, delayChildren: 0.15 },
    },
};
const tile = {
    hidden: { opacity: 0, y: 26, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 120, damping: 18 },
    },
};

const HeroBento = () => {
    return (
        <section className="relative bg-neutral-50 overflow-hidden pt-[68px]" style={{ minHeight: '100svh' }}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-center" style={{ minHeight: 'calc(100svh - 68px)' }}>

                    {/* Left column — type */}
                    <div className="flex flex-col justify-center py-12 lg:py-14">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.02 }}
                            className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                        >
                            Welcome to Berry Rock Homes
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.07 }}
                            className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5"
                        >
                            Stop renting<br />
                            your future<br />
                            <span className="text-berry-600">and start owning it.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12 }}
                            className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-md"
                        >
                            <span className="font-semibold text-slate-900">We've helped thousands of families start their path to homeownership with the Pathway Program.</span> We exist to create homeowners responsibly — helping families move from renting to readiness, from uncertainty to stability, and from monthly payments to lasting ownership.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.26 }}
                            className="flex flex-row items-center gap-4"
                        >
                            <Link
                                href="/apply"
                                className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                            >
                                See If You Qualify
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/how-it-works"
                                className="text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors"
                            >
                                How it works →
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right column — one row of three big shapes at staggered heights.
                        The two men break above their frames; the house frames the whole family. */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="hidden lg:flex flex-row items-start justify-center gap-4"
                    >
                        {/* Shape 1 — striped man, his real front-door background, head breaks the top */}
                        <motion.div variants={tile} className="relative w-[30%]" style={{ height: '14rem', marginTop: '3.5rem' }}>
                            <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden bg-slate-200">
                                <img
                                    src="/images/family_in_kitchen.png"
                                    alt="A new homeowner carrying a box of plants up to his front door"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] max-w-none"
                                />
                            </div>
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ clipPath: breakoutTop, WebkitClipPath: breakoutTop }}
                            >
                                <img
                                    src="/images/man_plants_cutout.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] max-w-none"
                                />
                            </div>
                        </motion.div>

                        {/* Shape 2 — taller house framing the whole family playing in the yard */}
                        <motion.div variants={tile} className="relative w-[41%]" style={{ height: '18rem', marginTop: '0.5rem' }}>
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
                                    alt="A mom playing with her kids in the front yard"
                                    className="absolute left-1/2 -translate-x-1/2 w-[107%] max-w-none"
                                    style={{ top: '-1%' }}
                                />
                            </div>
                        </motion.div>

                        {/* Shape 3 — man grilling, his real backyard, head breaks the top and the grill stays in frame */}
                        <motion.div variants={tile} className="relative w-[30%]" style={{ height: '17rem', marginTop: '2.5rem' }}>
                            <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden bg-slate-200">
                                <img
                                    src="/images/man-grilling.png"
                                    alt="A homeowner grilling in his backyard"
                                    className="absolute bottom-0 w-[160%] max-w-none"
                                    style={{ left: '-8%' }}
                                />
                            </div>
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ clipPath: breakoutTop, WebkitClipPath: breakoutTop }}
                            >
                                <img
                                    src="/images/man-grilling-cutout.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="absolute bottom-0 w-[160%] max-w-none"
                                    style={{ left: '-8%' }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Fade into the section below */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#faf7f2] pointer-events-none z-10" />
        </section>
    );
};

export default HeroBento;
