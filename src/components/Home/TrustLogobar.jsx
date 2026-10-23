'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '< 4 min',  label: 'to apply' },
    { value: '~30 days', label: 'offer to move-in' },
    { value: '$0',       label: 'hidden fees' },
    // HOLD (83% success rate is ~18 months old — confirm still current with Nick before changing)
    { value: '83%',      label: 'reach ownership' },
];

const TrustLogobar = () => (
    <section className="bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap justify-between divide-x divide-slate-100"
            >
                {stats.map(({ value, label }, i) => (
                    <div key={i} className="flex items-center gap-3 py-5 px-6 flex-1 justify-center">
                        <span className="text-navy-800 font-light text-2xl md:text-3xl leading-none tracking-tight whitespace-nowrap">
                            {value}
                        </span>
                        <span className="text-slate-600 text-xs uppercase tracking-[0.12em] font-medium">
                            {label}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default TrustLogobar;
