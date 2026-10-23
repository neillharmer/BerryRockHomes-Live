'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, BadgeDollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

// Three short labels, no supporting sentence: they are the answer to "how is it
// risk-free," so they carry more weight read bare than explained.
const defaultBenefits = [
    { icon: ShieldCheck, title: 'Soft credit check only' },
    { icon: Sparkles, title: 'No commitment required' },
    { icon: BadgeDollarSign, title: 'Zero application fee' },
];

const defaultPhotos = [
    { src: '/images/man-coffee.png', alt: 'Homeowner pouring coffee in his kitchen' },
    { src: '/images/man-grilling.png', alt: 'Homeowner grilling on his back patio' },
    { src: '/images/woman-gardening.png', alt: 'Homeowner watering plants on her front porch' },
    { src: '/images/woman-decorating.png', alt: 'Homeowner decorating her home' },
];

const defaultHeading = (
    <>
        A risk-free<br className="hidden sm:block" /> application.
    </>
);

const QualifyCTA = ({
    showFaqLink = false,
    eyebrow = 'Get Started',
    heading = defaultHeading,
    benefits = defaultBenefits,
    photos = defaultPhotos,
    ctaHref = '/apply',
    ctaLabel = 'See If You Qualify',
    breakoutSrc = '/images/man-grilling-cutout.png',
    bg = 'bg-sand-50',
    // Optional: make the house-shape photo's subject break above the roofline.
    // { src: cutout (transparent bg), imgClass: shared positioning for body + cutout }
    houseBreakout = null,
}) => (
    <section className={`pt-24 pb-24 lg:pb-48 ${bg}`}>
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Photo collage — bento with house silhouette */}
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="hidden lg:grid grid-cols-[1.2fr_1fr] grid-rows-[16rem_14rem] gap-4"
                >
                    {/* Top-left: rounded house silhouette */}
                    {houseBreakout ? (
                        /* Subject's head/shoulders break above the roofline */
                        <div className="relative">
                            {/* Body, masked to the house silhouette */}
                            <div
                                className="absolute inset-0 overflow-hidden bg-slate-200"
                                style={{
                                    WebkitMaskImage:
                                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 220' preserveAspectRatio='none'><path fill='black' d='M94 4 Q100 0 106 4 L194 78 Q200 82 200 90 L200 206 Q200 220 186 220 L14 220 Q0 220 0 206 L0 90 Q0 82 6 78 Z'/></svg>\")",
                                    maskImage:
                                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 220' preserveAspectRatio='none'><path fill='black' d='M94 4 Q100 0 106 4 L194 78 Q200 82 200 90 L200 206 Q200 220 186 220 L14 220 Q0 220 0 206 L0 90 Q0 82 6 78 Z'/></svg>\")",
                                    WebkitMaskSize: '100% 100%',
                                    maskSize: '100% 100%',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskRepeat: 'no-repeat',
                                }}
                            >
                                <img src={photos[0].src} alt={photos[0].alt} className={houseBreakout.imgClass} />
                            </div>
                            {/* Cutout — free to overflow the top, clipped to the cell on the sides + bottom.
                                Bottom corners rounded to match the house mask so no sharp sliver pokes out. */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    clipPath: 'inset(-100% 0px 0px 0px round 0px 0px 1.5rem 1.5rem)',
                                    WebkitClipPath: 'inset(-100% 0px 0px 0px round 0px 0px 1.5rem 1.5rem)',
                                }}
                            >
                                <img src={houseBreakout.src} alt="" aria-hidden="true" className={houseBreakout.imgClass} />
                            </div>
                        </div>
                    ) : (
                        <div
                            className="overflow-hidden bg-slate-200"
                            style={{
                                WebkitMaskImage:
                                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 220' preserveAspectRatio='none'><path fill='black' d='M94 4 Q100 0 106 4 L194 78 Q200 82 200 90 L200 206 Q200 220 186 220 L14 220 Q0 220 0 206 L0 90 Q0 82 6 78 Z'/></svg>\")",
                                maskImage:
                                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 220' preserveAspectRatio='none'><path fill='black' d='M94 4 Q100 0 106 4 L194 78 Q200 82 200 90 L200 206 Q200 220 186 220 L14 220 Q0 220 0 206 L0 90 Q0 82 6 78 Z'/></svg>\")",
                                WebkitMaskSize: '100% 100%',
                                maskSize: '100% 100%',
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                            }}
                        >
                            <img
                                src={photos[0].src}
                                alt={photos[0].alt}
                                className="block w-full h-full object-cover object-[center_25%]"
                            />
                        </div>
                    )}

                    {/* Top-right: tall vertical (shifted down for stagger) */}
                    {breakoutSrc && photos[1].src === '/images/man-grilling.png' ? (
                        /* Grilling photo — man + grill enlarged, head & shoulders break above the frame */
                        <div className="relative translate-y-24">
                            {/* Body, clipped to the rounded frame */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-200">
                                <img
                                    src={photos[1].src}
                                    alt={photos[1].alt}
                                    className="absolute left-[-20%] top-[-42%] w-[200%] max-w-none"
                                />
                            </div>
                            {/* Cutout — free to overflow the top, but clipped to the frame on the sides + bottom */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    clipPath: 'inset(-100% 0px 0px 0px round 0px 0px 1rem 1rem)',
                                    WebkitClipPath: 'inset(-100% 0px 0px 0px round 0px 0px 1rem 1rem)',
                                }}
                            >
                                <img
                                    src={breakoutSrc}
                                    alt=""
                                    aria-hidden="true"
                                    className="absolute left-[-20%] top-[-42%] w-[200%] max-w-none"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-2xl overflow-hidden translate-y-24">
                            <img
                                src={photos[1].src}
                                alt={photos[1].alt}
                                className="block w-full h-full object-cover object-center"
                            />
                        </div>
                    )}

                    {/* Bottom-left: wide landscape */}
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src={photos[2].src}
                            alt={photos[2].alt}
                            className="block w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Bottom-right: small square (shifted down for stagger) */}
                    <div className="rounded-2xl overflow-hidden translate-y-24">
                        <img
                            src={photos[3].src}
                            alt={photos[3].alt}
                            className="block w-full h-full object-cover object-center"
                        />
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-10">
                        {heading}
                    </h2>

                    <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
                        {benefits.map((b) => {
                            const Icon = b.icon;
                            return (
                                <div key={b.title} className="flex items-center gap-3 sm:block">
                                    <div className="inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white sm:mb-3">
                                        <Icon size={16} strokeWidth={2.25} />
                                    </div>
                                    <p className="font-bold text-slate-900 text-base leading-snug">{b.title}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <Link
                            href={ctaHref}
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-full transition-colors text-sm group"
                        >
                            {ctaLabel}
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        {showFaqLink && (
                            <Link
                                href="/faq"
                                className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 font-medium text-sm border border-slate-300 hover:border-slate-400 px-8 py-4 rounded-full transition-colors"
                            >
                                Read the FAQ
                            </Link>
                        )}
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
);

export default QualifyCTA;
