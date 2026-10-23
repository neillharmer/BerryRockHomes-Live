'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const steps = [
    {
        num: '01',
        title: 'Apply in Minutes',
        desc: 'Online or by phone. Soft credit check only. No impact to your score. You and your realtor receive your estimated eligibility by email.',
    },
    {
        num: '02',
        title: 'Find Your Dream Home',
        desc: 'Shop with your realtor. We purchase any listed home that appraises, is insurable, and is within our service areas.',
    },
    {
        num: '03',
        title: 'Fund Your Option Consideration',
        desc: '7% of the purchase price, due within 3 days of contract. Fully refunded if the offer is not accepted.',
    },
    {
        num: '04',
        title: 'We Submit an Offer for a Reliable Closing',
        desc: 'We submit a strong offer, order the appraisal and inspection, and typically close in about 30 days.',
    },
    {
        num: '05',
        title: 'Move In & Build Toward Ownership',
        desc: "You're home. Every on-time payment is reported to all 3 credit bureaus and earns a Rent Credit toward your purchase.",
    },
];

const ProcessAtAGlance = () => (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

                {/* Left: intro + image */}
                <div className="lg:col-span-2 flex flex-col justify-start lg:pt-2">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">HOW IT WORKS</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
                        Five steps to your front door
                    </h2>
                    <p className="text-slate-500 text-base leading-relaxed mb-8">
                        Our process is designed to be simple and transparent, from your first application to the day you move in.
                    </p>

                    {/* Home photo */}
                    <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
                        <img
                            src="/images/process_home.png"
                            alt="A home available through the Berry Rock Homes Pathway Program"
                            className="w-full h-52 object-cover object-center"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <Link
                            href="/apply"
                            className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-md group w-fit"
                        >
                            Apply Now
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors"
                        >
                            Full program details →
                        </Link>
                    </div>
                </div>

                {/* Right: steps */}
                <div className="lg:col-span-3">
                    <div className="space-y-0">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="flex gap-5 group"
                            >
                                {/* Number + line */}
                                <div className="flex flex-col items-center shrink-0">
                                    <div className="w-9 h-9 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
                                        {i + 1}
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className="w-px flex-1 bg-sky-100 my-2 min-h-[1.5rem]" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className={`pb-8 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                                    <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">{step.num}</p>
                                    <h3 className="text-base font-bold text-slate-900 mb-1">{step.title}</h3>
                                    <p className="text-base text-slate-700 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default ProcessAtAGlance;
