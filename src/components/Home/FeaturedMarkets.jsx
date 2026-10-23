'use client';

import { useState } from 'react';
import Link from 'next/link';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { markets } from '../../data/markets';
import { usCoverageMap } from '../../data/usCoverageMap';

const FeaturedMarkets = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="relative overflow-hidden py-28 bg-gradient-to-br from-white via-navy-50 to-navy-100 border-t border-slate-100">
            {/* Soft decorative blue wash */}
            <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 w-[480px] h-[480px] rounded-full bg-navy-200/40 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 w-[360px] h-[360px] rounded-full bg-navy-100/60 blur-3xl" />

            <div className="relative container mx-auto px-4 max-w-7xl">
                {/* Header — frames this as a service area, not a catalog of listings */}
                <div className="max-w-2xl mb-14">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">Where We Operate</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        The markets we serve today
                    </h2>
                    <p className="text-lg text-slate-600">
                        Berry Rock isn&rsquo;t a listings site. We partner with you and your agent to find a home
                        that&rsquo;s already for sale on the open market in our service and coverage areas, then buy
                        it and put you on the Pathway to owning it.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden grid lg:grid-cols-[1.55fr,1fr]"
                >
                    {/* Coverage map */}
                    <div className="relative p-6 sm:p-10 bg-gradient-to-br from-slate-50 to-white">
                        <svg
                            viewBox={usCoverageMap.viewBox}
                            className="w-full h-auto"
                            role="img"
                            aria-label="Map of the United States showing Berry Rock Homes' active markets"
                        >
                            <path d={usCoverageMap.nationPath} fill="#dce6f1" stroke="#b9cde3" strokeWidth="1.2" strokeLinejoin="round" />
                            <path d={usCoverageMap.bordersPath} fill="none" stroke="#ffffff" strokeWidth="1" strokeLinejoin="round" />

                            {markets.map((m) => {
                                const isActive = active === m.slug;
                                return (
                                    <g
                                        key={m.slug}
                                        className="cursor-pointer"
                                        onMouseEnter={() => setActive(m.slug)}
                                        onMouseLeave={() => setActive(null)}
                                    >
                                        {/* live-market pulse */}
                                        <circle
                                            cx={m.mapX}
                                            cy={m.mapY}
                                            r="9"
                                            fill="#E8553D"
                                            opacity="0.35"
                                            className="animate-ping"
                                            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                                        />
                                        <circle
                                            cx={m.mapX}
                                            cy={m.mapY}
                                            r={isActive ? 9 : 7}
                                            fill="#E8553D"
                                            stroke="#ffffff"
                                            strokeWidth="2.5"
                                            className="transition-all duration-200"
                                        />
                                        {isActive && (
                                            <text
                                                x={m.mapX}
                                                y={m.mapY - 16}
                                                textAnchor="middle"
                                                className="fill-navy-900 font-bold"
                                                style={{ fontSize: '17px' }}
                                            >
                                                {m.shortName}
                                            </text>
                                        )}
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Legend / city list */}
                    <div className="p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-berry-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-berry-600" />
                            </span>
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em]">Now Serving</p>
                        </div>

                        <ul className="flex flex-col">
                            {markets.map((m) => (
                                <li key={m.slug}>
                                    <Link
                                        href={`/markets/${m.slug}`}
                                        onMouseEnter={() => setActive(m.slug)}
                                        onMouseLeave={() => setActive(null)}
                                        className={`group flex items-center gap-3 py-3 border-b border-slate-100 transition-colors ${
                                            active === m.slug ? 'text-berry-700' : 'text-slate-800'
                                        }`}
                                    >
                                        <span
                                            className={`h-2.5 w-2.5 rounded-full flex-shrink-0 transition-transform ${
                                                active === m.slug ? 'bg-berry-600 scale-125' : 'bg-berry-500'
                                            }`}
                                        />
                                        <span className="font-bold text-base">{m.name}</span>
                                        <ArrowRight
                                            size={15}
                                            className="ml-auto text-slate-300 group-hover:text-berry-600 group-hover:translate-x-0.5 transition-all"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <p className="text-sm text-slate-500 mt-6 leading-relaxed">
                            Don&rsquo;t see your city? We&rsquo;re expanding into new metros regularly &mdash;{' '}
                            <Link href="/contact" className="text-berry-700 font-semibold hover:text-berry-800">
                                tell us where you&rsquo;re looking
                            </Link>
                            .
                        </p>
                    </div>
                </motion.div>

                <p className="text-sm text-slate-400 mt-5">
                    Other restrictions apply.{' '}
                    <Link href="/contact" className="text-slate-500 hover:text-berry-700 underline underline-offset-2">
                        Contact for details
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
};

export default FeaturedMarkets;
