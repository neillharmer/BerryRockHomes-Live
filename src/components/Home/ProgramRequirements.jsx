'use client';

import { motion } from 'framer-motion';
import { Home, Coins, Clock, TrendingUp, Lock, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const requirements = [
    {
        icon: Home,
        title: 'Any Home on the Market',
        desc: 'Shop any listed home in our service areas. Max 5 acres, must be insurable and appraised at purchase price. No mobile, manufactured, or modular homes.',
    },
    {
        icon: Coins,
        title: '7% Option Consideration',
        desc: 'Secures your Guaranteed Right to Purchase. It travels with you to closing and is credited toward the purchase price at closing.',
    },
    {
        icon: Clock,
        title: 'No Time Limits',
        desc: 'Renew your lease as long as you need. No minimum or maximum program length. There is no clock running against you.',
    },
    {
        icon: TrendingUp,
        title: 'Monthly Purchase Credits',
        desc: 'Each on-time payment earns a credit equal to 0.1% of your purchase price, reducing what you owe at buyout.',
    },
    {
        icon: Lock,
        title: 'Purchase Price Locked at Closing',
        desc: 'Original price +2% within 6 months, +4% within a year, +6% within 2 years, +8% anytime after. Your Guaranteed Right to Purchase never expires while your lease is current.',
    },
    {
        icon: BadgeCheck,
        title: 'Flexible Qualification',
        desc: 'Designed for how people earn today. Recent life changes, self-employment, or credit rebuilding: we evaluate the full picture.',
    },
];

const ProgramRequirements = () => (
    <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">

            {/* Header */}
            <div className="mb-14">
                <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">PROGRAM REQUIREMENTS</p>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight max-w-lg">
                        What you need to know, at a glance
                    </h2>
                    <Link
                        href="/how-it-works"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors shrink-0"
                    >
                        Full program details <ArrowRight size={13} />
                    </Link>
                </div>
                <p className="text-slate-500 text-lg mt-3 max-w-2xl">
                    If you have to live somewhere while you become mortgage-ready, it might as well be in the home you want to own.
                </p>
            </div>

            {/* Requirements grid */}
            <div className="grid md:grid-cols-2 gap-3">
                {requirements.map(({ icon: Icon, title, desc }, i) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-start gap-4 bg-sand-50 rounded-2xl p-5"
                    >
                        <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon size={17} className="text-navy-600" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 mb-1">{title}</p>
                            <p className="text-base text-slate-700 leading-relaxed">{desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-8 py-4 rounded-full transition-colors text-sm shadow-md group"
                >
                    See If You Qualify
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                    href="/how-it-works"
                    className="text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors"
                >
                    Read the full program details →
                </Link>
            </div>

        </div>
    </section>
);

export default ProgramRequirements;
