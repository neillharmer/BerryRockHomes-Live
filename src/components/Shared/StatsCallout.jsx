'use client';

import { motion } from 'framer-motion';

const backgrounds = {
    berry: 'bg-berry-50',
    navy: 'bg-navy-100',
    neutral: 'bg-neutral-100',
    sky: 'bg-sky-50',
};

const dividerByBg = {
    berry: 'bg-berry-200/60',
    navy: 'bg-navy-200/60',
    neutral: 'bg-slate-300/60',
    sky: 'bg-sky-200/60',
};

const StatsCallout = ({
    title,
    subtitle,
    stats = [],
    background = 'berry',
    eyebrow,
    topBorder = true,
}) => {
    const bg = backgrounds[background] || backgrounds.berry;
    const divider = dividerByBg[background] || dividerByBg.berry;

    return (
        <section className={`container mx-auto px-4 max-w-6xl my-24${topBorder ? ' pt-24 border-t border-slate-200' : ''}`}>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    {eyebrow && (
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">
                            {eyebrow}
                        </p>
                    )}
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight tracking-tight">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-xl text-slate-600 leading-relaxed">{subtitle}</p>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`${bg} rounded-2xl p-10 md:p-14 shadow-sm`}
                >
                    {stats.map((stat, i) => (
                        <div key={i}>
                            <div className="flex items-center gap-6">
                                <span className="text-5xl md:text-6xl font-light text-navy-800 tracking-tight whitespace-nowrap">
                                    {stat.value}
                                </span>
                                <span className="text-lg text-slate-700 font-medium leading-snug">
                                    {stat.label}
                                </span>
                            </div>
                            {i < stats.length - 1 && (
                                <div className={`w-full h-px ${divider} my-10`} />
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsCallout;
