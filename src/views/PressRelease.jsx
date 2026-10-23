'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowLeft, ArrowRight, Megaphone, Mail, Phone, ExternalLink } from 'lucide-react';
import { getPressReleaseBySlug } from '@/data/pressReleases';

// Renders a single typed content block from the release body.
const ContentBlock = ({ block }) => {
    switch (block.type) {
        case 'heading':
            return (
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mt-12 mb-5">
                    {block.text}
                </h2>
            );
        case 'paragraph':
            // Lead paragraphs (with the dateline) are rendered directly by the view.
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
        case 'quote':
            return (
                <blockquote className="my-12">
                    <p className="text-2xl md:text-[1.75rem] font-medium leading-[1.55] tracking-tight">
                        <span className="box-decoration-clone bg-navy-50 px-3 py-2 text-slate-800">
                            {block.text}
                        </span>
                    </p>
                    {block.attribution && (
                        <footer className="mt-6 text-sm font-semibold text-slate-500">
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
        <Megaphone className="text-slate-300 w-24 h-24 mb-6" />
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Press Release Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md text-center">
            We couldn&apos;t find the press release you&apos;re looking for. It may have been moved or renamed.
        </p>
        <Link href="/news" className="text-berry-600 font-bold hover:text-berry-700 flex items-center gap-2">
            <ArrowLeft size={16} /> Back to the newsroom
        </Link>
    </div>
);

const PressRelease = ({ slug }) => {
    const release = getPressReleaseBySlug(slug);

    if (!release) return <NotFound />;

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <header className="bg-neutral-50 border-b border-slate-100 pt-[140px] lg:pt-[180px] pb-12 lg:pb-16">
                <div className="container mx-auto px-6 max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                        <Link
                            href="/news"
                            className="group flex w-fit items-center gap-2 text-sm font-semibold text-slate-500 hover:text-berry-700 transition-colors mb-8"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" /> Newsroom
                        </Link>
                        <span className="block w-fit text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 mb-5">
                            Press Release
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-5">
                            {release.title}
                        </h1>
                        {release.subtitle && (
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                                {release.subtitle}
                            </p>
                        )}
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5">
                                <Calendar size={14} /> {release.date}
                            </span>
                            {release.wireUrl && (
                                <a
                                    href={release.wireUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 font-semibold text-berry-700 hover:text-berry-800 transition-colors"
                                >
                                    <ExternalLink size={14} /> View on PR Newswire
                                </a>
                            )}
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
                    {release.content.map((block, i) =>
                        block.lead ? (
                            <p
                                key={i}
                                className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed mb-6"
                            >
                                {release.dateline && (
                                    <span className="font-bold uppercase tracking-wide text-slate-900">
                                        {release.dateline}
                                    </span>
                                )}
                                {release.dateline ? ': ' : ''}
                                {block.text}
                            </p>
                        ) : (
                            <ContentBlock key={i} block={block} />
                        )
                    )}

                    {/* Media contact */}
                    {release.contact && (
                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <p className="text-sm font-bold uppercase tracking-widest text-slate-600 mb-4">
                                Media Contact
                            </p>
                            <p className="text-lg font-bold text-slate-900">{release.contact.name}</p>
                            <div className="mt-3 flex flex-col gap-2 text-slate-600">
                                {release.contact.email && (
                                    <a
                                        href={`mailto:${release.contact.email}`}
                                        className="inline-flex items-center gap-2 hover:text-berry-700 transition-colors w-fit"
                                    >
                                        <Mail size={15} /> {release.contact.email}
                                    </a>
                                )}
                                {release.contact.phone && (
                                    <a
                                        href={`tel:${release.contact.phone.replace(/[^0-9+]/g, '')}`}
                                        className="inline-flex items-center gap-2 hover:text-berry-700 transition-colors w-fit"
                                    >
                                        <Phone size={15} /> {release.contact.phone}
                                    </a>
                                )}
                            </div>
                        </div>
                    )}
                </motion.div>
            </article>

            {/* Inline CTA */}
            <section className="pb-16 lg:pb-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="rounded-3xl bg-navy-900 text-white p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-berry-900/40 via-transparent to-transparent" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                                Learn more about Berry Rock
                            </h2>
                            <p className="text-navy-200 mb-8 max-w-lg mx-auto leading-relaxed">
                                Who we are, why we built a different path to homeownership, and the families behind the headlines.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-berry-700 text-white font-semibold hover:bg-berry-800 transition-all"
                                >
                                    About Berry Rock <ArrowRight size={16} className="ml-2" />
                                </Link>
                                <Link
                                    href="/news"
                                    className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
                                >
                                    Back to Newsroom
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PressRelease;
