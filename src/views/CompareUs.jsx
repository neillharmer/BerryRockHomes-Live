'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import QualifyCTA from '@/components/Home/QualifyCTA';

// ── Comparison data ────────────────────────────────────────────────────────────
// Each row states the dimension, what the Pathway Program delivers, and what
// traditional renting leaves you with. Keep copy concise so the table stays clean.
const comparison = [
    {
        group: 'Lifestyle Benefits',
        rows: [
            {
                feature: 'Home choice',
                brh: 'Choose any home you love on the open market that meets our requirements.',
                trad: 'Limited to whatever rentals happen to be available.',
            },
            {
                feature: 'Stability and security',
                brh: 'A long-term plan with predictable, known terms.',
                trad: 'Rent hikes and non-renewals can upend your plans.',
            },
            {
                feature: 'Make it your own',
                brh: 'Treat it like your future home, with freedom to personalize.',
                trad: 'Changes are limited by landlord policies.',
            },
            {
                feature: 'Ownership flexibility',
                brh: 'Buy when you are ready, on your own timeline.',
                trad: 'No path to ownership, ever.',
            },
        ],
    },
    {
        group: 'Financial Benefits',
        rows: [
            {
                feature: 'Building toward ownership',
                brh: '7% Option Consideration plus monthly rent credits build toward your purchase.',
                note: 'Participants exit with an average 19% price appreciation advantage.',
                trad: '$0 built. Every payment goes to the landlord.',
            },
            {
                feature: 'Benefit of increased home value',
                brh: 'Buyers can potentially benefit from increased home value through the program.',
                trad: 'No opportunity to benefit from home value when renting.',
            },
            {
                feature: 'Locked-in purchase price',
                brh: 'Your purchase price is fixed up front, with only a 2 to 8% markup depending on timing.',
                trad: 'Fully exposed to future price increases.',
            },
            {
                feature: 'Predictable costs',
                brh: 'Payments rise just 3% every 2 years, known in advance.',
                trad: 'Unpredictable annual rent increases.',
            },
            {
                feature: 'Credit building',
                brh: 'Live in your future home while you strengthen your credit with on-time payments.',
                trad: 'Renting does nothing to build mortgage readiness.',
            },
            {
                feature: 'Market protection',
                brh: 'No bidding wars or scarcity when it is time to buy.',
                trad: 'Risk paying a much higher price later.',
            },
            {
                feature: 'Upfront cost',
                brh: 'A low Option Consideration that is credited back to you.',
                trad: 'A security deposit that is often non-refundable.',
            },
        ],
    },
];

// ── Icon badges ──────────────────────────────────────────────────────────────
const CheckBadge = () => (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-berry-600 shrink-0">
        <Check size={16} strokeWidth={3} className="text-white" aria-hidden="true" />
    </span>
);

const XBadge = () => (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-200 shrink-0">
        <X size={16} strokeWidth={3} className="text-slate-400" aria-hidden="true" />
    </span>
);

// ── Desktop table ──────────────────────────────────────────────────────────────
const ComparisonTable = () => (
    <div className="relative max-w-5xl mx-auto">
        <table className="hidden md:table table-fixed w-full relative border-collapse">
            <caption className="sr-only">
                Berry Rock Homes Pathway Program compared to traditional renting
            </caption>
            <colgroup>
                <col style={{ width: '34%' }} />
                <col style={{ width: '33%' }} />
                <col style={{ width: '33%' }} />
            </colgroup>
            <thead>
                <tr>
                    <th className="text-left align-bottom pb-6" scope="col">
                        <span className="sr-only">Feature</span>
                    </th>
                    <th className="align-bottom pb-6 px-4" scope="col">
                        <span className="flex items-center justify-center">
                            <img
                                src="/images/BRH_LOGO_BK.png"
                                alt="Berry Rock Homes"
                                className="h-14 w-auto"
                            />
                        </span>
                    </th>
                    <th className="align-bottom pb-6 px-4 text-center" scope="col">
                        <span className="text-base font-semibold text-slate-500 leading-snug block">
                            Traditional<br />Renting
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {comparison.map((section, sIdx) => (
                    <Fragment key={section.group}>
                        {/* Section label — sits in the white gap, separating the two tinted blocks */}
                        <tr>
                            <td colSpan={3} className={sIdx === 0 ? 'pb-4' : 'pt-12 pb-4'}>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-navy-700">
                                    {section.group}
                                </span>
                            </td>
                        </tr>
                        {section.rows.map((row, rIdx) => {
                            const isFirst = rIdx === 0;
                            const isLast = rIdx === section.rows.length - 1;
                            return (
                                <tr key={row.feature}>
                                    <td className={`align-top pr-6 py-6 ${!isLast ? 'border-b border-slate-100' : ''}`}>
                                        <span className="text-[15px] font-semibold text-navy-800 leading-snug">
                                            {row.feature}
                                        </span>
                                    </td>
                                    <td
                                        className={[
                                            'align-top px-5 bg-berry-50 text-center',
                                            isFirst ? 'rounded-t-3xl pt-7' : 'pt-6',
                                            isLast ? 'rounded-b-3xl pb-7' : 'pb-6 border-b border-berry-100',
                                        ].join(' ')}
                                    >
                                        <div className="flex flex-col items-center gap-2.5">
                                            <CheckBadge />
                                            <span className="text-[13.5px] font-medium text-navy-800 leading-snug">
                                                {row.brh}
                                            </span>
                                            {row.note && (
                                                <span className="text-[12px] font-semibold text-berry-700 leading-snug">
                                                    {row.note}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className={`align-top px-4 py-6 text-center ${!isLast ? 'border-b border-slate-100' : ''}`}>
                                        <div className="flex flex-col items-center gap-2.5">
                                            <XBadge />
                                            <span className="text-[13.5px] text-slate-500 leading-snug">
                                                {row.trad}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </Fragment>
                ))}
            </tbody>
        </table>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-8">
            {comparison.map((section) => (
                <div key={section.group}>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 block mb-4">
                        {section.group}
                    </span>
                    <div className="space-y-4">
                        {section.rows.map((row) => (
                            <div
                                key={row.feature}
                                className="rounded-2xl border border-slate-100 overflow-hidden shadow-soft bg-white"
                            >
                                <div className="px-5 py-3 bg-navy-800">
                                    <span className="text-white font-semibold text-sm">{row.feature}</span>
                                </div>
                                <div className="p-5 bg-berry-50 flex items-start gap-3">
                                    <CheckBadge />
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-berry-700 mb-1">
                                            Berry Rock Homes
                                        </p>
                                        <p className="text-sm font-medium text-navy-800 leading-snug">{row.brh}</p>
                                        {row.note && (
                                            <p className="text-[12px] font-semibold text-berry-700 leading-snug mt-1.5">
                                                {row.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="p-5 flex items-start gap-3 border-t border-slate-100">
                                    <XBadge />
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                                            Traditional Renting
                                        </p>
                                        <p className="text-sm text-slate-500 leading-snug">{row.trad}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// ── View ─────────────────────────────────────────────────────────────────────
const CompareUs = () => {
    return (
        <div className="bg-white min-h-screen">

            {/* ── Hero ── */}
            <section className="bg-white">
                <div className="container mx-auto px-6 max-w-3xl text-center pt-[180px] lg:pt-[220px] pb-16 lg:pb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-5"
                    >
                        See the Difference
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.07 }}
                        className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-navy-800 leading-[1.08] tracking-tight mb-5"
                    >
                        Compare Berry Rock
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto"
                    >
                        See exactly how the Pathway Program stacks up against traditional renting. We
                        believe in total transparency, so you can make the best decision for your future.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.18 }}
                        className="flex flex-wrap items-center justify-center gap-4"
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
                            className="inline-flex items-center gap-2 text-navy-800 hover:text-navy-600 font-medium text-sm border border-slate-300 hover:border-slate-400 px-7 py-3.5 rounded-full transition-colors"
                        >
                            How It Works
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── Eligibility callout ── */}
            <section className="bg-white pb-4">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5"
                        style={{ backgroundColor: '#dce6f1' }}
                    >
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                            <Info size={24} className="text-navy-600" aria-hidden="true" />
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-lg md:text-xl font-bold text-navy-800 mb-2">
                                Already eligible for a traditional mortgage?
                            </h2>
                            <p className="text-base text-slate-700 leading-relaxed">
                                Our pathway is built for folks who need flexibility and time to become
                                mortgage-ready. If you already qualify for a traditional mortgage with
                                favorable terms, we strongly recommend going that route first. The whole point
                                of the Pathway Program is to help you become mortgage-ready and purchase your
                                home in your own right as soon as possible.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Comparison table ── */}
            <section className="bg-white py-20 lg:py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto mb-14 lg:mb-16"
                    >
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">
                            Side by Side
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight tracking-tight">
                            A clearer path than renting
                        </h2>
                        <p className="text-base lg:text-lg text-slate-600 leading-relaxed mt-4">
                            Every month of renting builds your landlord's wealth. The Pathway Program builds yours.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ComparisonTable />
                    </motion.div>
                </div>
            </section>

            {/* ── Closing CTA — shared module for site consistency ── */}
            <QualifyCTA showFaqLink />

        </div>
    );
};

export default CompareUs;
