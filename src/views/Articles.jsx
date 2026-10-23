'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, BookOpen, Quote, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { articles as educationalPosts, getCategoryTagClass } from '@/data/articles';

// Educational articles are sourced from the single source of truth in @/data/articles.
// Success-story posts are intentionally disabled until real, approved stories are
// available. The placeholder data in @/data/successStories is not published anywhere.
// To re-enable: restore the map over `stories` (see git history) and the filter tab below.
const successStoryPosts = [];

// Category tag colors are codified in @/data/articles (getCategoryTagClass) so the
// landing grid, featured card, and article subpages all stay in sync.

// Category navigation is derived from the published educational articles so the tabs
// always match what's actually on the page. "All" is prepended as the default view.
const ALL = 'All';

const EducationalCard = ({ post }) => (
    <motion.a
        href={`/articles/${post.slug}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] hover:border-slate-300 transition-all"
    >
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryTagClass(post.category)}`}>
                    {post.category}
                </span>
                <span className="text-slate-600 text-xs flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                </span>
            </div>
            <h3 className="text-lg font-bold text-navy-800 mb-3 leading-snug group-hover:text-berry-700 transition-colors">
                {post.title}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed flex-grow mb-5">
                {post.excerpt}
            </p>
            <div className="flex items-center justify-end pt-4 border-t border-slate-100">
                <span className="text-berry-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article <ArrowRight size={14} />
                </span>
            </div>
        </div>
    </motion.a>
);

// Preserved for the future re-enablement of success-story posts (see note above).
// eslint-disable-next-line no-unused-vars
const SuccessStoryCard = ({ post }) => (
    <motion.a
        href={post.slug}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all hover:border-slate-300 flex flex-col"
    >
        {/* Photo */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
            <img
                src={post.photo}
                alt={post.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <span className="absolute top-3 left-3 bg-berry-700 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Quote size={10} /> Success Story
            </span>
            <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="font-bold text-base leading-tight">{post.name}</p>
                <p className="text-xs text-white/80 flex items-center gap-1.5 mt-0.5">
                    <MapPin size={10} /> {post.location}
                    {post.timeToBuy && (
                        <>
                            <span className="text-white/40">·</span>
                            <Clock size={10} /> {post.timeToBuy} to ownership
                        </>
                    )}
                </p>
            </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-grow">
            <blockquote className="text-slate-700 leading-relaxed italic mb-5 flex-grow">
                &ldquo;{post.excerpt}&rdquo;
            </blockquote>
            {post.stats && (
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                    {post.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-sm font-bold text-slate-900 leading-tight">{stat.value}</p>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex items-center justify-end pt-4 mt-4 border-t border-slate-100">
                <span className="text-berry-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read full story <ArrowRight size={14} />
                </span>
            </div>
        </div>
    </motion.a>
);

const FeaturedArticle = ({ post }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14 lg:mb-16"
    >
        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
            <Sparkles size={13} className="text-berry-600" /> Featured Article
        </p>

        <Link
            href={`/articles/${post.slug}`}
            className="group relative block overflow-hidden rounded-3xl ring-1 ring-navy-900/5 bg-gradient-to-br from-navy-50 via-slate-50 to-navy-100/70 transition-shadow hover:shadow-[0_28px_70px_rgba(15,23,42,0.16)]"
        >
            {/* Soft decorative blue wash — mirrors the markets callout module */}
            <div aria-hidden className="pointer-events-none absolute -right-28 -top-24 w-[460px] h-[460px] rounded-full bg-navy-200/40 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-16 w-[340px] h-[340px] rounded-full bg-navy-100/60 blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-8 lg:gap-12">
                {/* Left: article copy */}
                <div className="px-8 pt-12 pb-10 lg:px-12 lg:py-16">
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryTagClass(post.category)}`}>
                            {post.category}
                        </span>
                        <span className="text-slate-500 text-xs flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold text-slate-900 leading-[1.12] tracking-tight mb-5 group-hover:text-berry-700 transition-colors">
                        {post.title}
                    </h2>
                    <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center gap-5">
                        <span className="inline-flex items-center gap-2 bg-berry-700 group-hover:bg-berry-800 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm shadow-md">
                            Read article
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </div>
                </div>

                {/* Right: editorial "reading window" motif — matches the site's panel cards */}
                <div className="px-8 pb-12 lg:py-16 lg:pl-0 lg:pr-12">
                    <div className="relative rounded-2xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-navy-900/5 overflow-hidden">
                        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100 bg-navy-50">
                            <span className="w-2.5 h-2.5 rounded-full bg-navy-300" />
                            <span className="w-2.5 h-2.5 rounded-full bg-navy-200" />
                            <span className="w-2.5 h-2.5 rounded-full bg-navy-100" />
                            <span className="ml-2 flex items-center gap-1.5 text-xs font-bold text-navy-600 uppercase tracking-[0.15em]">
                                <BookOpen size={12} /> Article
                            </span>
                        </div>
                        <div className="p-6">
                            {/* Faux article body — a few skeleton lines that hint at the read */}
                            <div className="h-2.5 rounded-full bg-navy-100/80 w-3/4 mb-3" />
                            <div className="h-2.5 rounded-full bg-slate-100 w-full mb-3" />
                            <div className="h-2.5 rounded-full bg-slate-100 w-5/6 mb-6" />
                            <div className="rounded-xl bg-berry-50 border border-berry-100 px-4 py-4">
                                <p className="text-xs font-bold text-berry-700 uppercase tracking-[0.15em] mb-2">In this guide</p>
                                <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="mt-6 flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-navy-600 text-white flex items-center justify-center shrink-0 font-bold text-xs">BR</div>
                                <div className="min-w-0">
                                    <p className="text-sm font-bold text-navy-800 truncate">{post.author?.name || 'Berry Rock Homes Team'}</p>
                                    <p className="text-xs text-slate-400 truncate">{post.author?.role || 'Homeownership Education'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </motion.div>
);

const Articles = () => {
    const [filter, setFilter] = useState(ALL);

    // Categories in first-seen order, with counts, for the navigation pills.
    const categories = useMemo(() => {
        const order = [];
        const counts = { [ALL]: educationalPosts.length };
        educationalPosts.forEach((p) => {
            if (!order.includes(p.category)) order.push(p.category);
            counts[p.category] = (counts[p.category] || 0) + 1;
        });
        return [ALL, ...order].map((id) => ({ id, count: counts[id] }));
    }, []);

    const filtered = useMemo(
        () => (filter === ALL ? educationalPosts : educationalPosts.filter((p) => p.category === filter)),
        [filter]
    );

    const featured = filtered[0];
    const grid = filtered.slice(1);

    return (
        <div className="min-h-screen bg-white flex flex-col">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden bg-white border-b border-slate-100 pt-[200px] lg:pt-[240px] pb-14 lg:pb-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                    >
                        Articles &amp; Insights
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.07 }}
                        className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5"
                    >
                        Guidance for the road<br />
                        <span className="text-berry-600">to homeownership.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.13 }}
                        className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl"
                    >
                        Practical guides on homeownership, credit, and the lease-to-purchase pathway. Clear answers to help you take the next step with confidence.
                    </motion.p>
                </div>
            </section>

            {/* ── Category navigation — underline tabs with dividers (navy active,
                kept distinct from the berry pill CTAs) ── */}
            <section className="bg-white/95 backdrop-blur-sm border-b border-slate-100 sticky top-20 z-30">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {categories.map(({ id, count }, i) => {
                            const isActive = filter === id;
                            return (
                                <div key={id} className="flex items-center">
                                    {i > 0 && <span aria-hidden className="h-4 w-px bg-slate-200 mx-1 shrink-0" />}
                                    <button
                                        onClick={() => setFilter(id)}
                                        className={`relative whitespace-nowrap px-4 py-4 text-sm font-semibold transition-colors flex items-center gap-2 ${
                                            isActive ? 'text-navy-900' : 'text-slate-500 hover:text-navy-800'
                                        }`}
                                    >
                                        {id}
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-navy-100 text-navy-700' : 'bg-slate-100 text-slate-400'}`}>
                                            {count}
                                        </span>
                                        {/* Static per-tab underline. A shared layoutId underline
                                            slides between tabs and janks/wiggles when framer-motion
                                            measures inside this sticky, horizontally-scrollable bar
                                            on mobile. Render it in place instead. */}
                                        {isActive && (
                                            <span className="absolute left-0 right-0 -bottom-px h-[2.5px] bg-navy-800 rounded-full" />
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Articles ── */}
            <section className="py-16 lg:py-20 bg-neutral-50 flex-grow">
                <div className="container mx-auto px-6 max-w-7xl">

                    {featured && <FeaturedArticle post={featured} />}

                    {grid.length > 0 && (
                        <>
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-6">
                                {filter === ALL ? 'More Articles' : `More in ${filter}`}
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {grid.map((post) => (
                                    <EducationalCard key={post.slug} post={post} />
                                ))}
                            </div>
                        </>
                    )}

                    {!featured && (
                        <p className="text-center text-slate-500 py-16">No articles in this category yet.</p>
                    )}
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
                <div aria-hidden className="absolute -top-24 -right-24 w-96 h-96 bg-berry-600/20 rounded-full blur-[100px] pointer-events-none" />
                <div aria-hidden className="absolute -bottom-28 -left-20 w-80 h-80 bg-navy-700/40 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative container mx-auto px-6 max-w-3xl text-center">
                    <p className="text-xs font-bold text-berry-300 uppercase tracking-[0.2em] mb-4">Still have questions?</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                        Have a question we<br className="hidden sm:block" /> haven&apos;t answered?
                    </h2>
                    <p className="text-navy-200 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                        Browse our FAQ for quick answers, or reach out to our team. We&apos;re happy to help you figure out your next step.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-8 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                        >
                            Contact Us
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <Link
                            href="/faq"
                            className="inline-flex items-center justify-center h-[50px] px-8 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
                        >
                            Visit FAQ
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Articles;
