'use client';

import { motion } from 'framer-motion';
import { Mail, Download, ExternalLink, ArrowRight, BookOpen, Newspaper, Megaphone, ImageIcon, Sparkles, Play } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

// ── Featured (pinned) story shown at the top of the newsroom ──
const featuredCoverage = {
    station: "News 9",
    market: "Oklahoma City, OK",
    date: "January 2025",
    title: "Oklahoma Company Helps Keep Homeownership Dreams Alive for Struggling Families",
    summary: "News 9 sat down with Berry Rock Homes to explore how the company's lease-to-purchase program is opening doors to homeownership for Oklahoma families.",
    videoSrc: "/video/news9-helping-families-own-homes.mp4",
    url: "https://www.news9.com/story/6775a50607a18da5ad2eb5cd/oklahoma-company-helps-keep-homeownership-dreams-alive-for-struggling-families-",
};

// ── Latest news: press coverage of Berry Rock ──
const latestNews = [
    {
        id: 'flatiron-landmark-oklahoman',
        date: "August 18, 2026",
        title: "Oklahoma City Gets a New Flatiron-Style Landmark",
        linkText: "Read in The Oklahoman",
        url: "https://www.oklahoman.com/story/business/real-estate/2026/08/18/whats-that-new-building-in-downtown-okc-what-to-know-about-berry-rock/91310410007/",
    },
    {
        id: 'flatiron-oklahoman',
        date: "September 25, 2025",
        title: "A New Office Building Is Joining OKC's Skyline: Inside the Plans for the Berry Rock Building",
        linkText: "Read in The Oklahoman",
        url: "https://www.oklahoman.com/story/business/downtown/2025/09/25/downtown-okc-new-construction-berry-rock-office-building/86308790007/",
    },
    {
        id: 'flatiron-costar',
        date: "September 25, 2025",
        title: "New Headquarters Building for Prism Bank and Berry Rock Underway in Oklahoma City",
        linkText: "Read on CoStar News",
        url: "https://www.costar.com/article/1362645958/new-headquarters-building-for-prism-bank-berry-rock-underway-in-oklahoma-city",
    },
    {
        id: 'flatiron-yahoo',
        date: "September 24, 2025",
        title: "Berry Rock Breaks Ground on Landmark OKC Flatiron District Project",
        linkText: "Read on Yahoo Finance",
        url: "https://finance.yahoo.com/news/berry-rock-breaks-ground-landmark-200500922.html",
    },
    {
        id: 'flatiron-freepress',
        date: "January 5, 2026",
        title: "Landmark OKC Flatiron District Project Begins Downtown",
        linkText: "Read in OKC Free Press",
        url: "https://freepressokc.com/press-release-landmark-okc-flatiron-district-project-begins-downtown/",
    },
    {
        id: 'clo-guest-column-oklahoman',
        date: "August 26, 2025",
        title: "Guest Column: A Partnership That Paid Off for Oklahoma Families and Schools",
        linkText: "Read in The Oklahoman",
        url: "https://www.oklahoman.com/story/opinion/columns/guest/2025/08/26/public-private-investment-housing-education-families/85761644007/",
    },
];

// ── Official press releases ──
const pressReleases = [
    {
        id: 'flatiron-groundbreaking',
        date: "September 24, 2025",
        title: "Berry Rock Breaks Ground on Landmark OKC Flatiron District Project",
        linkText: "Read Press Release",
        url: "/news/press/flatiron-groundbreaking",
    },
];

// Framed video player for the featured story, with a custom play-button overlay.
const FeaturedVideo = ({ src, station }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        videoRef.current?.play();
    };

    return (
        <div className="relative bg-slate-900 aspect-video overflow-hidden">
            <video
                ref={videoRef}
                controls={isPlaying}
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="absolute inset-0 w-full h-full object-contain bg-slate-900"
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {!isPlaying && (
                <button
                    type="button"
                    onClick={handlePlay}
                    aria-label={`Play ${station} video`}
                    className="group/play absolute inset-0 flex items-center justify-center bg-slate-900/25 hover:bg-slate-900/10 transition-colors cursor-pointer"
                >
                    <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/95 text-berry-700 shadow-[0_10px_40px_rgba(15,23,42,0.35)] group-hover/play:scale-105 transition-transform">
                        <Play size={30} className="translate-x-0.5 fill-current" />
                    </span>
                </button>
            )}
        </div>
    );
};

// Section header used across the newsroom streams.
const SectionHeader = ({ icon, title, action }) => (
    <div className="flex items-end justify-between mb-6">
        <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center shrink-0">
                {icon}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
        </div>
        {action}
    </div>
);

// A single dated row used by the Latest News and Press Releases streams.
const PressRow = ({ item, index, isLast }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="group relative"
    >
        <div className="-mx-4 px-4 py-4 rounded-xl transition-colors group-hover:bg-slate-50">
            <time className={`text-sm font-bold tracking-widest uppercase ${item.placeholder ? 'text-slate-500' : 'text-slate-600'}`}>
                {item.date}
            </time>
            <h3 className={`text-lg md:text-xl font-bold mt-2 mb-4 leading-snug ${item.placeholder ? 'text-slate-500' : 'text-slate-900 group-hover:text-berry-700 transition-colors'}`}>
                {item.title}
            </h3>
            {item.placeholder ? (
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 italic">
                    {item.linkText}
                </span>
            ) : item.url.startsWith('/') ? (
                <Link
                    href={item.url}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-berry-700 hover:text-berry-800 transition-colors group/link"
                >
                    {item.linkText}
                    <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
            ) : (
                <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-berry-700 hover:text-berry-800 transition-colors group/link"
                >
                    {item.linkText}
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
            )}
        </div>
        {!isLast && <div className="mt-8 border-b border-slate-100" />}
    </motion.div>
);

const News = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* ── Hero ── */}
            <section className="bg-neutral-50 border-b border-slate-100 pt-[200px] lg:pt-[240px] pb-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                    >
                        News &amp; Media
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.07 }}
                        className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5 max-w-2xl"
                    >
                        Berry Rock Homes<br />
                        <span className="text-berry-600">Pressroom.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.13 }}
                        className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl"
                    >
                        Press coverage, company announcements, and the latest from the Berry Rock Homes newsroom.
                    </motion.p>
                </div>
            </section>

            {/* ── Featured (pinned) story ── */}
            <section className="pt-16 lg:pt-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                        <Sparkles size={13} className="text-berry-600" /> Featured Story
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="group relative overflow-hidden rounded-3xl ring-1 ring-slate-900/5 bg-gradient-to-br from-sky-50 via-slate-50 to-sky-100/70 transition-shadow hover:shadow-[0_28px_70px_rgba(15,23,42,0.16)]"
                    >
                        {/* Soft decorative sky wash — kept cooler than the navy featured-article module */}
                        <div aria-hidden className="pointer-events-none absolute -right-28 -top-24 w-[460px] h-[460px] rounded-full bg-sky-200/40 blur-3xl" />
                        <div aria-hidden className="pointer-events-none absolute -left-24 -bottom-16 w-[340px] h-[340px] rounded-full bg-slate-200/50 blur-3xl" />

                        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-8 lg:gap-12">
                            {/* Left: story copy */}
                            <div className="px-8 pt-12 pb-10 lg:px-12 lg:py-16">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600 mb-5">
                                    {featuredCoverage.station}
                                </p>
                                <h3 className="text-2xl md:text-3xl lg:text-[2.1rem] font-bold text-slate-900 leading-[1.12] tracking-tight mb-5 group-hover:text-berry-700 transition-colors">
                                    {featuredCoverage.title}
                                </h3>
                                <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-7 max-w-xl">
                                    {featuredCoverage.summary}
                                </p>
                                <a
                                    href={featuredCoverage.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm shadow-md w-fit"
                                >
                                    Watch on {featuredCoverage.station}
                                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>

                            {/* Right: framed video player — matches the article "reading window" motif */}
                            <div className="px-8 pb-12 lg:py-16 lg:pl-0 lg:pr-12">
                                <div className="relative rounded-2xl bg-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-slate-900/5 overflow-hidden">
                                    <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-100 bg-sky-50">
                                        <span className="w-2.5 h-2.5 rounded-full bg-sky-300" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-sky-200" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-sky-100" />
                                        <span className="ml-2 flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-[0.15em]">
                                            <Newspaper size={12} /> {featuredCoverage.station}
                                        </span>
                                    </div>
                                    <FeaturedVideo src={featuredCoverage.videoSrc} station={featuredCoverage.station} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Main Content Grid ── */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column (News streams) */}
                        <div className="lg:col-span-8 flex flex-col gap-16">

                            {/* Latest News */}
                            <div>
                                <SectionHeader icon={<Newspaper className="w-5 h-5" />} title="Latest News" />
                                <div className="space-y-8">
                                    {latestNews.map((item, index) => (
                                        <PressRow key={item.id} item={item} index={index} isLast={index === latestNews.length - 1} />
                                    ))}
                                </div>
                            </div>

                            {/* Press Releases */}
                            <div>
                                <SectionHeader icon={<Megaphone className="w-5 h-5" />} title="Press Releases" />
                                <div className="space-y-8">
                                    {pressReleases.map((item, index) => (
                                        <PressRow key={item.id} item={item} index={index} isLast={index === pressReleases.length - 1} />
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column (Sticky info rail) */}
                        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">

                            {/* Media Contact Box */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-5">Media Contact</h3>
                                <p className="text-slate-700 text-base leading-relaxed mb-6">
                                    For all press inquiries, interview requests, and media assets, please reach out directly.
                                </p>
                                <p className="text-base font-bold text-slate-900">Anthony Triana</p>
                                <a
                                    href="mailto:atriana@saxum.com"
                                    className="mt-3 inline-flex items-center gap-3 text-slate-700 hover:text-berry-700 transition-colors group"
                                >
                                    <span className="w-10 h-10 rounded-full bg-sand-50 border border-slate-100 flex items-center justify-center group-hover:bg-berry-50 group-hover:border-berry-100 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </span>
                                    <span className="font-medium">atriana@saxum.com</span>
                                </a>
                            </div>

                            {/* Logo Kit download */}
                            <div className="bg-sand-50 rounded-2xl p-8">
                                <div className="w-11 h-11 rounded-full bg-white/70 text-navy-600 flex items-center justify-center mb-5">
                                    <ImageIcon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Logo Kit</h3>
                                <p className="text-slate-700 text-base leading-relaxed mb-6">
                                    Logos, wordmarks, and icons in multiple formats, ready for print and web.
                                </p>
                                <a
                                    href="/downloads/BRH-Logo-Kit.zip"
                                    download
                                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white py-3 px-4 rounded-full font-semibold hover:bg-berry-700 transition-colors"
                                >
                                    <Download size={18} />
                                    Download Logo Kit
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ── Articles callout (full-width) ── */}
            <section className="pb-16 lg:pb-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-navy-900 ring-1 ring-white/10 p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
                    >
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                                    <BookOpen className="w-5 h-5" />
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Articles</h2>
                            </div>
                            <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                                Explore our library of educational articles on homeownership, credit, and the lease-to-purchase pathway.
                            </p>
                        </div>
                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-2 bg-white text-navy-900 font-semibold px-7 py-3.5 rounded-full hover:bg-berry-700 hover:text-white transition-colors shrink-0 group"
                        >
                            View Articles
                            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── We're in good company (learn more about Berry Rock) ── */}
            <section className="pb-0">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="container mx-auto px-6 max-w-7xl"
                >
                    <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-sand-50 via-sand-50 to-berry-50/60 ring-1 ring-slate-900/5">
                        {/* Soft decorative wash */}
                        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-berry-100/50 blur-3xl" />

                        <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] items-end gap-8 lg:gap-4">
                            {/* Left: message for readers who want the bigger picture */}
                            <div className="px-8 pt-12 pb-10 lg:px-12 lg:pt-16 lg:pb-20">
                                <p className="text-xs font-bold text-berry-700 uppercase tracking-[0.22em] mb-4">We&apos;re in good company</p>
                                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
                                    There&apos;s more to the<br />
                                    <span className="text-berry-600">Berry Rock story.</span>
                                </h2>
                                <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-md">
                                    Covering our work or just getting to know us? Our About page tells the full story: who we are, why we built a different path to homeownership, and the families behind the headlines.
                                </p>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Link
                                        href="/about"
                                        className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                                    >
                                        Learn About Berry Rock
                                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right: people cutout anchored to the bottom edge */}
                            <div className="relative flex items-end justify-center lg:justify-end self-stretch">
                                <img
                                    src="/images/family3.png"
                                    alt="A Berry Rock Homes father and son"
                                    className="block w-full max-w-none h-auto object-contain object-bottom select-none pointer-events-none origin-bottom scale-[1.28] translate-x-0 lg:scale-[1.7] lg:-translate-x-40"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default News;
