'use client';

import Link from 'next/link';
import { ArrowRight, Calculator, HelpCircle, UserCheck } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const tools = [
    {
        title: 'Pre-qualify',
        desc: 'Soft credit check only. See your budget in minutes.',
        link: '/apply',
        Icon: UserCheck,
    },
    {
        title: 'Calculators',
        desc: 'Estimate your monthly payment and path to ownership.',
        link: '/calculator',
        Icon: Calculator,
    },
    {
        title: 'FAQs',
        desc: 'Get honest answers about how the program works.',
        link: '/faq',
        Icon: HelpCircle,
    },
];

const HomeBuyingToolkit = () => {
    return (
        <section className="bg-neutral-50 py-20 border-y border-slate-200 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: text + tools */}
                    <div className="flex flex-col">
                        <motion.h2
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight"
                        >
                            Your home buying toolkit
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="text-slate-500 mb-10 text-lg"
                        >
                            Everything you need to move from renting to owning, all in one place.
                        </motion.p>

                        <div className="flex flex-col gap-3">
                            {tools.map((tool, idx) => (
                                <motion.div
                                    key={tool.title}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + idx * 0.07 }}
                                >
                                    <Link
                                        href={tool.link}
                                        className="flex items-center gap-4 bg-white rounded-2xl p-4 pr-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 group transition-all"
                                    >
                                        <div className="bg-sky-50 p-3 rounded-xl shrink-0 group-hover:bg-sky-100 transition-colors">
                                            <tool.Icon className="w-6 h-6 text-sky-500" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-slate-900 text-sm leading-tight">{tool.title}</p>
                                            <p className="text-slate-700 text-base mt-0.5 leading-relaxed">{tool.desc}</p>
                                        </div>
                                        <div className="shrink-0 w-8 h-8 rounded-full bg-slate-100 group-hover:bg-sky-500 flex items-center justify-center transition-colors">
                                            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: craftsman home photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative min-h-[420px] lg:min-h-[500px] w-full rounded-3xl overflow-hidden shadow-xl"
                    >
                        <img
                            src="https://images.pexels.com/photos/12700439/pexels-photo-12700439.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Beautiful craftsman home"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Subtle bottom badge */}
                        <div className="absolute bottom-6 left-6">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Avg. time to own</p>
                                <p className="text-2xl font-bold text-slate-900">14 months</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HomeBuyingToolkit;
