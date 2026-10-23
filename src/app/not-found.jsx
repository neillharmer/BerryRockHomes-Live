'use client';

import Link from 'next/link';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Home, Map, Newspaper, Library } from 'lucide-react';

const quickLinks = [
    { name: 'The Pathway Program', path: '/how-it-works', icon: Map },
    { name: 'News', path: '/news', icon: Newspaper },
    { name: 'Articles', path: '/articles', icon: Library },
];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function NotFound() {
    return (
        <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden bg-neutral-50 pt-36 pb-24 lg:pt-44">
            <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
                {/* Eyebrow */}
                <motion.p
                    {...fadeUp}
                    transition={{ duration: 0.5 }}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-navy-600"
                >
                    Page Not Found
                </motion.p>

                {/* 404 */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: 0.06 }}
                    className="mt-4 leading-none"
                >
                    <span className="text-[7rem] font-extrabold tracking-tighter text-navy-800 sm:text-[10rem] lg:text-[12rem]">
                        4<span className="text-berry-600">0</span>4
                    </span>
                </motion.div>

                <motion.h1
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: 0.14 }}
                    className="mx-auto mt-2 max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-5xl"
                >
                    Looks like this page took{' '}
                    <span className="text-berry-600">a different path home.</span>
                </motion.h1>

                <motion.p
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 lg:text-lg"
                >
                    The address you followed may have moved or never existed, but your
                    journey to homeownership is still right where you left it. Let&apos;s get
                    you back on track.
                </motion.p>

                {/* Primary actions */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: 0.26 }}
                    className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-berry-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-berry-800"
                    >
                        <Home size={16} strokeWidth={2.25} />
                        Back to Home
                        <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-0.5"
                        />
                    </Link>
                    <Link
                        href="/contact"
                        className="btn btn-light px-7 py-3.5 text-sm"
                    >
                        Contact Us
                    </Link>
                </motion.div>

                {/* Helpful destinations */}
                <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: 0.34 }}
                    className="mx-auto mt-16 max-w-2xl"
                >
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                        Popular destinations
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {quickLinks.map(({ name, path, icon: Icon }) => (
                            <Link
                                key={path}
                                href={path}
                                className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-berry-200 hover:shadow-md"
                            >
                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-800 text-white transition-colors group-hover:bg-berry-700">
                                    <Icon size={16} strokeWidth={2.25} />
                                </span>
                                <span className="text-sm font-semibold leading-snug text-slate-800">
                                    {name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
