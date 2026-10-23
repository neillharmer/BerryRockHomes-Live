'use client';

import { BadgeCheck, Users, Search, Home, ArrowRight } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const StepsTimeline = () => {
    const steps = [
        {
            num: "01",
            icon: <Search className="w-8 h-8" />,
            title: "Choose Your Home",
            desc: "We identify and purchase market-listed homes that match your needs, giving you real choice and neighborhood agency.",
            time: "1 - 2 Weeks",
        },
        {
            num: "02",
            icon: <Home className="w-8 h-8" />,
            title: "Move In Through the Pathway Program",
            desc: "You contribute 7% of the purchase price as Option Consideration. It travels with you and is credited toward the purchase price at closing.",
            time: "~30 Days",
        },
        {
            num: "03",
            icon: <BadgeCheck className="w-8 h-8" />,
            title: "Build Credit and Ownership Habits",
            desc: "We report payments to all three credit bureaus. You treat the home like it's already yours, because it will be.",
            time: "12 - 60 Months",
        },
        {
            num: "04",
            icon: <Users className="w-8 h-8" />,
            title: "Transition to Ownership",
            desc: "When you're mortgage-ready, you purchase the home with improved credit and confidence.",
            time: "When You're Ready",
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-16 px-4">
            <div className="space-y-12 md:space-y-0 relative">
                {/* Dynamic Glowing Vertical track for desktop */}
                <div className="hidden md:block absolute left-12 top-10 bottom-10 w-1 bg-neutral-200/50 rounded-full z-0 overflow-hidden">
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: '100%', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="w-full bg-gradient-to-b from-berry-400 via-berry-600 to-berry-400 shadow-[0_0_15px_rgba(162,44,58,0.5)]"
                    ></motion.div>
                </div>

                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="relative z-10 md:flex items-start md:space-x-12 pt-8"
                    >

                        <div className="flex items-center md:items-start space-x-4 md:space-x-0 mb-6 md:mb-0">
                            <div className="md:w-24 md:flex-shrink-0 flex md:justify-center">
                                <div className="w-16 h-16 rounded-full bg-berry-700 text-white flex items-center justify-center shadow-lg relative z-10 group-hover:bg-berry-800 transition-colors">
                                    {step.icon}
                                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-white border-2 border-berry-100 rounded-full flex items-center justify-center text-xs font-bold text-berry-700 shadow-sm">
                                        {step.num}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 md:hidden">{step.title}</h3>
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-soft border border-neutral-100 flex-grow relative hover:border-berry-200 transition-colors">
                            {/* Arrow pointing to card on desktop */}
                            <div className="hidden md:block absolute top-8 -left-3 w-6 h-6 bg-white border-b border-l border-neutral-100 transform rotate-45"></div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <h3 className="hidden md:block text-2xl font-bold text-slate-900">{step.title}</h3>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium text-xs whitespace-nowrap w-fit">
                                    Timeline: {step.time}
                                </span>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StepsTimeline;
