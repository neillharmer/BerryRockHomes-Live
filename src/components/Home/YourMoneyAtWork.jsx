'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const metrics = [
    {
        stat: '7%',
        title: 'Option Consideration',
        desc: 'Paid at contract. Fully credited toward the purchase price at closing. Not a fee.',
    },
    {
        stat: '0.1%',
        title: 'Monthly Rent Credit',
        desc: 'Of your purchase price credited per on-time payment. Reduces your buyout balance every month.',
    },
    {
        stat: '$0',
        title: 'Lost to Fees',
        desc: 'Every dollar you put in moves with you to closing. Nothing disappears.',
    },
];

const exampleRows = [
    { item: 'Option Consideration (7%)', amount: '$17,500', note: 'Due within 3 days of contract' },
    { item: 'Rent Credits (12–24 months)', amount: '~$6,000–$12,000', note: 'Earned on every on-time payment' },
    { item: 'Total Applied at Purchase', amount: '$17,500+', note: 'Credited toward the purchase price', highlight: true },
];

const YourMoneyAtWork = () => (
    <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">

            {/* Header row */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-14">
                <div>
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">THE PATHWAY PROGRAM</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">Your Money at Work</h2>
                </div>
                <div>
                    <p className="text-slate-500 text-base leading-relaxed">
                        Berry Rock Homes helps bridge the gap between where you are today and owning your home. Every dollar you put in (your Option Consideration, your monthly payments) moves with you straight to closing. Nothing gets thrown away on rent.
                    </p>
                    <Link
                        href="/how-it-works"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-berry-700 hover:text-berry-800 transition-colors mt-4 group"
                    >
                        See how the program works
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Stat cards */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
                {metrics.map(({ stat, title, desc }, i) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="rounded-2xl p-7 flex flex-col gap-3 bg-sand-50"
                    >
                        <p className="text-5xl md:text-6xl font-light text-navy-800 leading-none tracking-tight">{stat}</p>
                        <div className="pt-2 border-t border-sand-200">
                            <p className="text-3xl font-light uppercase tracking-wide text-slate-900 mb-1">{title}</p>
                            <p className="text-base text-slate-700 leading-relaxed">{desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Example breakdown */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl border border-sand-200 overflow-hidden"
            >
                <div className="bg-sand-50 px-6 py-4 border-b border-sand-200 flex items-center justify-between flex-wrap gap-2">
                    <div>
                        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-0.5">Example Breakdown</p>
                        <p className="font-bold text-slate-900">$250,000 Home</p>
                    </div>
                    <p className="text-xs text-slate-600">Based on a typical Berry Rock Homes pathway</p>
                </div>
                <div className="divide-y divide-slate-100 bg-white">
                    {exampleRows.map(({ item, amount, note, highlight }) => (
                        <div key={item} className={`flex items-center justify-between px-6 py-4 ${highlight ? 'bg-navy-800/[0.03]' : ''}`}>
                            <div>
                                <p className={`text-sm ${highlight ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>{item}</p>
                                <p className="text-xs text-slate-600 mt-0.5">{note}</p>
                            </div>
                            <p className={`text-xl font-bold tabular-nums ${highlight ? 'text-navy-800' : 'text-slate-800'}`}>{amount}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

        </div>
    </section>
);

export default YourMoneyAtWork;
