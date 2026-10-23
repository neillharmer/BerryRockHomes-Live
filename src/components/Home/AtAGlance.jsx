'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Apply Online or Over the Phone',
        desc: 'Apply with one of our representatives. We run a soft credit check only. No impact to your score. Once submitted, we email you and your realtor your estimated eligibility amount.',
    },
    {
        num: '02',
        title: 'Find Your Dream Home',
        desc: "Shop with your realtor. We'll purchase any home you choose as long as it appraises for the purchase price, is insurable, and you have at least 7% of the purchase price for the Option Consideration.",
    },
    {
        num: '03',
        title: 'Pay the 7% Option Consideration',
        desc: "Secure your home by funding the Option Consideration within 3 days of the contract date. It's fully refunded if the offer isn't accepted, and credited toward your purchase when you buy.",
    },
    {
        num: '04',
        title: 'We Submit the Offer & Close',
        desc: 'We submit a strong offer backed by a reliable closing and get the home under contract. Once under contract we order an appraisal and inspection. It typically takes about 30 days to close.',
    },
    {
        num: '05',
        title: 'Move In & Build Toward Ownership',
        desc: 'You move into your new home! Your monthly payments are reported to all 3 credit bureaus while your Rent Credits stack up toward your eventual purchase.',
    },
];

const AtAGlance = () => (
    <section className="py-24 bg-white border-t border-slate-100" id="at-a-glance">
        <div className="container mx-auto px-6 max-w-5xl">

            {/* Header */}
            <div className="mb-14">
                <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">THE PATHWAY PROGRAM</p>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                        At a Glance
                    </h2>
                    <Link
                        href="/how-it-works"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors shrink-0"
                    >
                        Full program details <ArrowRight size={13} />
                    </Link>
                </div>
                <p className="text-slate-500 text-lg mt-3 max-w-xl">
                    From application to keys in hand. Here's how the process works in five steps.
                </p>
            </div>

            {/* Steps */}
            <div className="space-y-0">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.num}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex gap-6 md:gap-10 group"
                    >
                        {/* Left: number + connector line */}
                        <div className="flex flex-col items-center shrink-0">
                            <div className="w-10 h-10 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-sm shrink-0">
                                {i + 1}
                            </div>
                            {i < steps.length - 1 && (
                                <div className="w-px flex-1 bg-slate-200 my-2 min-h-[2.5rem]" />
                            )}
                        </div>

                        {/* Right: content */}
                        <div className={`pb-10 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">{step.num}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1.5">{step.title}</h3>
                            <p className="text-slate-700 text-base leading-relaxed max-w-2xl">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-8 py-4 rounded-full transition-colors text-sm shadow-md group"
                >
                    Apply Now
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                    href="/how-it-works"
                    className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors"
                >
                    See the full program details →
                </Link>
            </div>

        </div>
    </section>
);

export default AtAGlance;
