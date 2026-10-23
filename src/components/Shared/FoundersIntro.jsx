'use client';

import { motion, cubicBezier } from 'framer-motion';
import { Info, Linkedin } from 'lucide-react';

const EASE_OUT_QUART = cubicBezier(0.22, 1, 0.36, 1);
const EASE_IN_OUT = cubicBezier(0.65, 0, 0.35, 1);

// Per-photo motion config — small per-index variations make the entrance
// feel composed by hand rather than templated.
const PHOTO_MOTION = [
    { y: 60, x: -12, rotate: -1.5 },
    { y: 80, x: 0, rotate: 1 },
    { y: 50, x: 8, rotate: -0.5 },
    { y: 70, x: -6, rotate: 1.5 },
    { y: 90, x: 10, rotate: -1 },
    { y: 65, x: 0, rotate: 0.8 },
];

const FoundersIntro = ({
    eyebrow = 'Founders',
    eyebrowIcon: EyebrowIcon = Info,
    title = 'We believe in our mission',
    body = [],
    photos = [],
    connect = null,
}) => {
    // Distribute photos into 3 columns with a round-robin so the collage
    // stays balanced regardless of total count.
    const columns = [[], [], []];
    photos.forEach((photo, i) => {
        columns[i % 3].push({ ...photo, index: i });
    });

    // Offsets create the asymmetric / "scattered" feel.
    const columnOffsets = ['pt-16 lg:pt-24', 'pt-0', 'pt-24 lg:pt-36'];

    return (
        <section className="relative py-20 lg:py-28 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 lg:gap-16 items-start">
                    {/* ── Left column: copy + connect ───────────────────── */}
                    <div className="flex flex-col">
                        {/* Eyebrow pill */}
                        <motion.span
                            initial={{ opacity: 0, y: 12, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, ease: EASE_OUT_QUART }}
                            className="inline-flex items-center gap-1.5 bg-berry-50 text-berry-700 rounded-full px-3 py-1 mb-6 self-start"
                        >
                            <EyebrowIcon size={12} strokeWidth={2.5} />
                            <span className="text-xs font-medium uppercase tracking-[0.18em]">
                                {eyebrow}
                            </span>
                        </motion.span>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.9, ease: EASE_OUT_QUART, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-navy-800 leading-[1.05] tracking-tight mb-6"
                        >
                            {title}
                        </motion.h2>

                        {/* Body paragraphs */}
                        <div className="space-y-4 max-w-md">
                            {body.map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{
                                        duration: 0.7,
                                        ease: EASE_OUT_QUART,
                                        delay: 0.2 + i * 0.08,
                                    }}
                                    className="text-base lg:text-lg text-slate-600 leading-relaxed"
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>

                        {/* Let's connect */}
                        {connect && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{
                                    duration: 0.8,
                                    ease: EASE_OUT_QUART,
                                    delay: 0.35,
                                }}
                                className="mt-16 lg:mt-24 pt-10 border-t border-slate-200"
                            >
                                <h3 className="text-xl lg:text-2xl font-bold text-navy-800 mb-3 tracking-tight">
                                    {connect.heading || "Let's connect"}
                                </h3>
                                {connect.body && (
                                    <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-md">
                                        {connect.body}
                                    </p>
                                )}

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {(connect.members || []).map((m, i) => (
                                        <motion.div
                                            key={m.name}
                                            initial={{ opacity: 0, y: 16 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: '-60px' }}
                                            transition={{
                                                duration: 0.6,
                                                ease: EASE_OUT_QUART,
                                                delay: 0.45 + i * 0.1,
                                            }}
                                            className="flex items-start gap-4 group"
                                        >
                                            {m.photo && (
                                                <div className="relative shrink-0">
                                                    <img
                                                        src={m.photo}
                                                        alt={m.name}
                                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-sm transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                                    />
                                                </div>
                                            )}
                                            <div className="min-w-0">
                                                <p className="text-sm font-bold text-navy-800 leading-tight">
                                                    {m.name}
                                                </p>
                                                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                                                    {m.role}
                                                </p>
                                                {m.linkedin && (
                                                    <a
                                                        href={m.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`${m.name} on LinkedIn`}
                                                        className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0a66c2] text-white mt-2 hover:bg-[#084c8d] transition-colors"
                                                    >
                                                        <Linkedin size={12} strokeWidth={2.5} fill="currentColor" />
                                                    </a>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* ── Right column: photo collage ───────────────────── */}
                    <div className="relative">
                        <div className="grid grid-cols-3 gap-3 lg:gap-4">
                            {columns.map((col, colIdx) => (
                                <div
                                    key={colIdx}
                                    className={`flex flex-col gap-3 lg:gap-4 ${columnOffsets[colIdx]}`}
                                >
                                    {col.map((photo) => {
                                        const motionCfg =
                                            PHOTO_MOTION[photo.index % PHOTO_MOTION.length];
                                        const aspect = photo.aspect || 'aspect-[3/4]';
                                        return (
                                            <motion.div
                                                key={photo.src}
                                                initial={{
                                                    opacity: 0,
                                                    y: motionCfg.y,
                                                    x: motionCfg.x,
                                                    rotate: motionCfg.rotate,
                                                    scale: 0.94,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                    x: 0,
                                                    rotate: 0,
                                                    scale: 1,
                                                }}
                                                viewport={{ once: true, margin: '-80px' }}
                                                transition={{
                                                    duration: 1.05,
                                                    ease: EASE_OUT_QUART,
                                                    delay: 0.15 + photo.index * 0.09,
                                                }}
                                                whileHover={{ scale: 1.015, transition: { duration: 0.4, ease: EASE_IN_OUT } }}
                                                className={`relative ${aspect} rounded-2xl overflow-hidden shadow-sm bg-slate-100`}
                                            >
                                                <img
                                                    src={photo.src}
                                                    alt={photo.alt || ''}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersIntro;
