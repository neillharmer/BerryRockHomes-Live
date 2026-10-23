'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, ArrowLeft, ArrowRight, BookOpen, User } from 'lucide-react';
import { getArticleBySlug, getRelatedArticles, getCategoryTagClass } from '@/data/articles';

// Renders a single typed content block from the article body.
const ContentBlock = ({ block }) => {
    switch (block.type) {
        case 'heading':
            return (
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mt-12 mb-5 scroll-mt-28">
                    {block.text}
                </h2>
            );
        case 'subheading':
            return (
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mt-8 mb-4">
                    {block.text}
                </h3>
            );
        case 'paragraph':
            return <p className="text-lg text-slate-700 leading-relaxed mb-6">{block.text}</p>;
        case 'list':
            return (
                <ul className="mb-6 space-y-3">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-lg text-slate-700 leading-relaxed">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-berry-500" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        case 'orderedList':
            return (
                <ol className="mb-6 space-y-4">
                    {block.items.map((item, i) => (
                        <li key={i} className="flex gap-4 text-lg text-slate-700 leading-relaxed">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-berry-700 text-sm font-bold text-white">
                                {i + 1}
                            </span>
                            <span className="pt-0.5">{item}</span>
                        </li>
                    ))}
                </ol>
            );
        case 'callout':
            return (
                <div className="my-8 rounded-2xl bg-sand-50 p-6 md:p-8">
                    {block.title && (
                        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-berry-700">
                            {block.title}
                        </p>
                    )}
                    <p className="text-lg text-slate-700 leading-relaxed">{block.text}</p>
                </div>
            );
        case 'quote':
            return (
                <blockquote className="my-16 border-l-4 border-slate-200 pl-6">
                    <p className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed italic">
                        &ldquo;{block.text}&rdquo;
                    </p>
                    {block.attribution && (
                        <footer className="mt-3 text-sm font-semibold text-slate-500">
                            {block.attribution}
                        </footer>
                    )}
                </blockquote>
            );
        default:
            return null;
    }
};

const NotFound = () => (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-neutral-50 px-4">
        <BookOpen className="text-slate-300 w-24 h-24 mb-6" />
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Article Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md text-center">
            We couldn&apos;t find the article you&apos;re looking for. It may have been moved or renamed.
        </p>
        <Link href="/articles" className="text-berry-600 font-bold hover:text-berry-700 flex items-center gap-2">
            <ArrowLeft size={16} /> Back to all articles
        </Link>
    </div>
);

const RelatedCard = ({ post }) => (
    <Link
        href={`/articles/${post.slug}`}
        className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all"
    >
        <div className="p-6 flex flex-col flex-grow">
            <span
                className={`self-start text-[10px] font-semibold px-2.5 py-1 rounded-full border mb-3 ${getCategoryTagClass(post.category)}`}
            >
                {post.category}
            </span>
            <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-berry-700 transition-colors">
                {post.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-4 line-clamp-3">{post.excerpt}</p>
            <span className="text-berry-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Read article <ArrowRight size={14} />
            </span>
        </div>
    </Link>
);

const Article = ({ slug }) => {
    const article = getArticleBySlug(slug);

    if (!article) return <NotFound />;

    const related = getRelatedArticles(slug, 3);

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <header className="bg-neutral-50 border-b border-slate-100 pt-[140px] lg:pt-[180px] pb-12 lg:pb-16">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-berry-700 transition-colors mb-8"
                        >
                            <ArrowLeft size={16} /> All Articles
                        </Link>
                        <div className="flex flex-wrap items-center gap-2 mb-5">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 flex items-center gap-1.5">
                                <BookOpen size={11} /> Educational
                            </span>
                            <span
                                className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getCategoryTagClass(article.category)}`}
                            >
                                {article.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            {article.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5">
                                <User size={14} /> {article.author?.name || 'Berry Rock Homes Team'}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} /> {article.readTime}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Body */}
            <article className="py-12 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="container mx-auto px-6 max-w-3xl"
                >
                    <p className="text-xl text-slate-600 leading-relaxed font-light border-b border-slate-100 pb-8 mb-8">
                        {article.excerpt}
                    </p>
                    {article.content.map((block, i) => (
                        <ContentBlock key={i} block={block} />
                    ))}
                </motion.div>
            </article>

            {/* Inline CTA */}
            <section className="pb-16 lg:pb-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="rounded-3xl bg-navy-900 text-white p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-berry-900/40 via-transparent to-transparent" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                                Ready to start owning your future?
                            </h2>
                            <p className="text-navy-200 mb-8 max-w-lg mx-auto leading-relaxed">
                                Find out what you qualify for in minutes. No credit damage, no obligation.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/apply"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-berry-700 text-white font-semibold hover:bg-berry-800 transition-all"
                                >
                                    See If You Qualify <ArrowRight size={16} className="ml-2" />
                                </Link>
                                <Link
                                    href="/how-it-works"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
                                >
                                    How It Works
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related articles */}
            {related.length > 0 && (
                <section className="py-16 bg-neutral-50 border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="flex items-end justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                                Keep reading
                            </h2>
                            <Link
                                href="/articles"
                                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-berry-700 hover:text-berry-800 transition-colors group"
                            >
                                View all <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {related.map((post) => (
                                <RelatedCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Article;
