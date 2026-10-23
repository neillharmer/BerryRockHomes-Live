'use client';

import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
    { value: '14 months',  label: 'to ownership' },
    { value: '+87 points', label: 'credit score increase' },
    { value: '$14,200',    label: 'rent credits at closing' },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const MixedTestimonialsGrid = () => (
    <section className="pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24 lg:pb-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* ── Left: story content ── */}
                <div className="flex flex-col">

                    <motion.p {...fadeUp(0)} className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-5">
                        Featured Success Story
                    </motion.p>

                    <motion.h2 {...fadeUp(0.07)} className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight tracking-tight mb-5">
                        From renter to homeowner in 14 months.
                    </motion.h2>

                    <motion.p {...fadeUp(0.13)} className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
                        Sarah and David needed a different path to homeownership. With Berry Rock Homes, they followed a structured path, built credit while living in the home, and closed with $14,200 in rent credits.
                    </motion.p>

                    {/* Pull quote */}
                    <motion.blockquote
                        {...fadeUp(0.18)}
                        className="mb-8"
                    >
                        <p className="text-lg font-semibold text-navy-800 leading-snug mb-2">
                            &ldquo;Berry Rock Homes gave us a real shot at the home we wanted.&rdquo;
                        </p>
                        <footer className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="font-semibold text-slate-700">Sarah &amp; David M.</span>
                            <span className="text-slate-300">·</span>
                            <span className="flex items-center gap-1"><MapPin size={11} className="shrink-0" /> Indianapolis, IN</span>
                        </footer>
                    </motion.blockquote>

                    {/* Stats */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
                        }}
                        className="grid grid-cols-3 gap-3 mb-10"
                    >
                        {stats.map((s) => (
                            <motion.div
                                key={s.label}
                                variants={{
                                    hidden: { opacity: 0, y: 12 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                                }}
                                className="bg-sand-50 rounded-2xl px-4 py-4"
                            >
                                <p className="text-xl font-bold text-navy-800 leading-none mb-1.5">{s.value}</p>
                                <p className="text-xs text-slate-500 leading-snug">{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div {...fadeUp(0.42)} className="flex flex-wrap items-center gap-3">
                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-6 py-3 rounded-full text-sm shadow-sm transition-colors group"
                        >
                            Read their story
                            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="/apply"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
                        >
                            See If You Qualify
                        </Link>
                    </motion.div>
                </div>

                {/* ── Right: home photo ── */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative lg:order-last order-first"
                >
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-soft">
                        <img
                            src="/images/featured_story_home.png"
                            alt="Sarah and David's Berry Rock home"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
);

export default MixedTestimonialsGrid;
