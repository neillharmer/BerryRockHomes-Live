'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Apply',            tag: '< 4 min'       },
    { num: '02', title: 'Choose Your Home', tag: 'Eligibility confirmed' },
    { num: '03', title: 'Move In',          tag: 'Reliable closing'  },
    { num: '04', title: 'Build Credit',     tag: 'All 3 bureaus'  },
    { num: '05', title: 'Own It',           tag: 'Your home'      },
];

const HowItWorksPreview = () => (
    <section className="py-20 bg-white" id="how-it-works">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* ── Left column: copy ── */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">
                        HOW IT WORKS
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-5">
                        Confidence<br />from day one.
                    </h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-sm">
                        A clear, five-step path from application to ownership, built for people who are ready to stop renting.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/apply"
                            className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm"
                        >
                            See if You Qualify
                            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm px-4 py-3.5 transition-colors"
                        >
                            Full program details →
                        </Link>
                    </div>
                </motion.div>

                {/* ── Right column: widget card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full"
                >
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">

                        {/* Card header */}
                        <div className="bg-navy-800 px-6 py-5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src="/images/BRH_ICON_WT.png" alt="Berry Rock Homes" className="h-6 w-auto" />
                                <span className="text-white font-semibold text-sm tracking-wide">Pathway Program</span>
                            </div>
                            <span className="text-white/50 text-xs font-medium">5 steps to ownership</span>
                        </div>

                        {/* Step rows */}
                        <div className="divide-y divide-slate-50">
                            {steps.map(({ num, title, tag }, i) => (
                                <motion.div
                                    key={num}
                                    initial={{ opacity: 0, x: 12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.15 + i * 0.07 }}
                                    className="flex items-center justify-between px-6 py-4 hover:bg-slate-50/60 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="w-7 h-7 rounded-full bg-navy-800 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                                            {i + 1}
                                        </span>
                                        <span className="font-semibold text-slate-800 text-sm">{title}</span>
                                    </div>
                                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Card footer */}
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                            <p className="text-xs text-slate-600">No impact to your credit score</p>
                            <Link
                                href="/apply"
                                className="text-xs font-bold text-berry-700 hover:text-berry-800 transition-colors flex items-center gap-1"
                            >
                                Apply now <ArrowRight size={11} />
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
);

export default HowItWorksPreview;
