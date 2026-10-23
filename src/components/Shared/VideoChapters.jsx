'use client';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import { useState } from 'react';

// Build the autoplay embed URL for a chapter. Supports YouTube and Vimeo.
// Returns '' when no video id is set yet (chapter is still in "coming soon" state).
const getEmbedUrl = (ch) => {
    if (ch.youtubeId) return `https://www.youtube.com/embed/${ch.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
    if (ch.vimeoId) return `https://player.vimeo.com/video/${ch.vimeoId}?autoplay=1`;
    return '';
};

const VideoChapters = ({ chapters = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    if (!chapters.length) return null;

    const active = chapters[activeIndex];
    const embedUrl = getEmbedUrl(active);
    const hasVideo = Boolean(embedUrl);

    const selectChapter = (i) => {
        setActiveIndex(i);
        // Auto-start the newly selected chapter once the viewer has engaged,
        // or whenever the chosen chapter actually has a video.
        setIsPlaying(Boolean(getEmbedUrl(chapters[i])));
    };

    return (
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
            <div className="grid lg:grid-cols-3">

                {/* ── Featured player ── */}
                <div className="lg:col-span-2 p-5 sm:p-6 lg:p-8">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
                        {isPlaying && hasVideo ? (
                            <iframe
                                key={active.youtubeId || active.vimeoId}
                                src={embedUrl}
                                title={active.title}
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                                allowFullScreen
                            />
                        ) : (
                            <button
                                type="button"
                                onClick={() => hasVideo && setIsPlaying(true)}
                                className="group absolute inset-0 w-full h-full text-left"
                                aria-label={hasVideo ? `Play: ${active.title}` : `${active.title} — coming soon`}
                            >
                                {/* Poster: thumbnail if provided, else a branded gradient with the chapter number */}
                                {active.thumbnail ? (
                                    <img
                                        src={active.thumbnail}
                                        alt={active.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-berry-700 flex items-center justify-center">
                                        <span className="text-[120px] lg:text-[160px] font-black text-white/10 leading-none select-none">
                                            {String(activeIndex + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                                {/* Play control / coming-soon state */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {hasVideo ? (
                                        <span className="w-20 h-20 bg-berry-600 rounded-full flex items-center justify-center group-hover:bg-berry-700 group-hover:scale-105 transition-all shadow-lg">
                                            <Play size={30} className="text-white ml-1" fill="currentColor" />
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                                            Video coming soon
                                        </span>
                                    )}
                                </div>

                                {/* Title overlay, bottom-left */}
                                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 bg-gradient-to-t from-black/70 to-transparent">
                                    <p className="text-xs font-bold text-berry-300 uppercase tracking-[0.18em] mb-1">
                                        Chapter {String(activeIndex + 1).padStart(2, '0')}
                                    </p>
                                    <p className="text-white font-bold text-lg sm:text-xl leading-snug">{active.title}</p>
                                </div>
                            </button>
                        )}
                    </div>

                    {/* Active chapter blurb */}
                    {active.blurb && (
                        <p className="text-slate-600 text-base leading-relaxed mt-5 max-w-2xl">{active.blurb}</p>
                    )}
                </div>

                {/* ── Chapter playlist ── */}
                <div className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-slate-200 bg-neutral-50">
                    <ul className="px-3 py-4 lg:max-h-[520px] overflow-y-auto">
                        {chapters.map((ch, i) => {
                            const isActive = i === activeIndex;
                            return (
                                <li key={ch.title}>
                                    <button
                                        type="button"
                                        onClick={() => selectChapter(i)}
                                        className={`w-full flex items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                                            isActive ? 'bg-white shadow-sm border border-slate-200' : 'hover:bg-white'
                                        }`}
                                    >
                                        <span
                                            className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-colors ${
                                                isActive ? 'bg-berry-700 text-white' : 'bg-white border border-slate-200 text-slate-500'
                                            }`}
                                        >
                                            {isActive && isPlaying ? (
                                                <Play size={14} fill="currentColor" />
                                            ) : (
                                                String(i + 1).padStart(2, '0')
                                            )}
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className={`block font-semibold leading-snug ${isActive ? 'text-navy-800' : 'text-slate-600'}`}>
                                                {ch.title}
                                            </span>
                                            {ch.duration && (
                                                <span className="mt-1 inline-flex items-center gap-1 text-xs text-slate-400">
                                                    <Clock size={11} />
                                                    {ch.duration}
                                                </span>
                                            )}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default VideoChapters;
