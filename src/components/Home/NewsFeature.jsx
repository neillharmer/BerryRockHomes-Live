'use client';

import { ArrowRight, Tv } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsFeature = () => (
    <section className="py-24 bg-neutral-50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
            <motion.a
                href="https://www.news9.com/story/6775a50607a18da5ad2eb5cd/oklahoma-company-helps-keep-homeownership-dreams-alive-for-struggling-families-"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 group"
            >
                {/* Logo / badge */}
                <div className="shrink-0 flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm">
                    <Tv size={22} className="text-slate-700" />
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-600">As seen on</p>
                        <p className="font-extrabold text-slate-900 text-lg leading-tight">News 9</p>
                    </div>
                </div>

                {/* Headline */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-2">PLACEHOLDER</p>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug group-hover:text-berry-700 transition-colors">
                        &ldquo;Oklahoma company helps keep homeownership dreams alive for struggling families&rdquo;
                    </h3>
                </div>

                {/* CTA arrow */}
                <div className="shrink-0 flex items-center gap-2 text-slate-800 hover:text-sky-500 font-semibold text-sm group-hover:gap-3 transition-all whitespace-nowrap">
                    Watch the story <ArrowRight size={15} />
                </div>
            </motion.a>
        </div>
    </section>
);

export default NewsFeature;
