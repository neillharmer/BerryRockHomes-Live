'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Width-based clamp, capped by viewport height so 5 lines + top padding +
// bottom CTA all fit within 100svh on any browser.
const HEADLINE_FONT_SIZE = 'min(clamp(2.5rem, 11vw, 13rem), 17vh)';
const HEADLINE_PT = '6vh';

/* Translucent glassmorphism cards. They float over the headline; the type
 * reads through because each card is ~65% photo opacity over a frosted
 * backdrop-blur surface. */
/* Two kinds of floats:
 *  - kind: 'photo' → full-color real photo, mostly in open space
 *  - kind: 'glass' → translucent tinted card with backdrop-blur, sits
 *    over the headline to produce the see-through glassmorphism effect.
 */
/* Photo sizes use vh so they scale with viewport height alongside the
 * headline (which is also vh-capped). Float positions are % of container,
 * which scales naturally. */
const floats = [
    // big photo, top-right open space
    {
        kind: 'photo',
        src: '/images/sarah_david_home.png',
        alt: 'A Berry Rock home',
        x: 60, y: -2, w: '32vh', h: '32vh',
        rotate: -5,
        parallax: 28,
        z: 30,
    },
    // smaller photo, lower-right
    {
        kind: 'photo',
        src: '/images/marcus_story_home.png',
        alt: 'Front porch of a Berry Rock home',
        x: 78, y: 70, w: '23vh', h: '19vh',
        rotate: 5,
        parallax: 30,
        z: 28,
    },
    // GLASS card — far LEFT, just a sliver nips into the start of the lines
    {
        kind: 'glass',
        src: '/images/woman-decorating.png',
        alt: 'A homeowner decorating her new home',
        tint: 'rgba(248, 150, 136, 0.10)',
        x: -17, y: 30, w: '25vh', h: '30vh',
        rotate: -7,
        parallax: 42,
        z: 35,
        label: 'YOUR FUTURE HOME',
    },
    // GLASS card — center-right, over Start / owning it.
    {
        kind: 'glass',
        src: '/images/man-grilling.png',
        alt: 'A homeowner grilling in his backyard',
        tint: 'rgba(90, 141, 182, 0.10)',
        x: 52, y: 55, w: '28vh', h: '32vh',
        rotate: 5,
        parallax: 50,
        z: 32,
        label: '2024 · KEYS IN HAND',
    },
];

const HeroTypeDriven = () => {
    const stageRef = useRef(null);
    const containerRef = useRef(null);
    const headlineRef = useRef(null);
    const [layout, setLayout] = useState(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
    const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const onMove = (e) => {
            const r = stage.getBoundingClientRect();
            const nx = (e.clientX - r.left) / r.width - 0.5;
            const ny = (e.clientY - r.top) / r.height - 0.5;
            mx.set(nx);
            my.set(ny);
        };
        const onLeave = () => { mx.set(0); my.set(0); };

        stage.addEventListener('mousemove', onMove);
        stage.addEventListener('mouseleave', onLeave);
        return () => {
            stage.removeEventListener('mousemove', onMove);
            stage.removeEventListener('mouseleave', onLeave);
        };
    }, [mx, my]);

    /* Measure the container + headline so each glass card can render a
     * blurred clone of the headline aligned to the original's screen
     * position. Updates on resize. */
    useEffect(() => {
        const measure = () => {
            const c = containerRef.current;
            const h = headlineRef.current;
            if (!c || !h) return;
            const cR = c.getBoundingClientRect();
            const hR = h.getBoundingClientRect();
            setLayout({
                cw: cR.width,
                ch: cR.height,
                hl: hR.left - cR.left,
                ht: hR.top - cR.top,
                hw: hR.width,
                hh: hR.height,
            });
        };
        measure();
        window.addEventListener('resize', measure);
        const ro = new ResizeObserver(measure);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => {
            window.removeEventListener('resize', measure);
            ro.disconnect();
        };
    }, []);

    return (
        <section
            ref={stageRef}
            className="relative bg-neutral-50 overflow-hidden pt-[68px]"
            style={{ minHeight: '100svh' }}
        >
            <div
                ref={containerRef}
                className="relative max-w-[1600px] mx-auto px-6 lg:px-10"
                style={{ minHeight: 'calc(100svh - 68px)' }}
            >

                {/* ---------- LEFT-ALIGNED TYPE ---------- */}
                <div className="relative z-10 pointer-events-none select-none flex flex-col items-start text-left" style={{ paddingTop: HEADLINE_PT }}>
                    <h1
                        ref={headlineRef}
                        className="font-semibold uppercase tracking-[-0.025em] leading-[0.88] text-navy-900"
                        style={{ fontSize: HEADLINE_FONT_SIZE }}
                    >
                        <span className="block">Stop</span>
                        <span className="block">renting</span>
                        <span className="block">your future.</span>
                        <span className="block">Start</span>
                        <span className="block text-navy-900/90">owning it.</span>
                    </h1>
                </div>

                {/* ---------- FLOATING IMAGES & GLASS CARDS ---------- */}
                {floats.map((f, i) =>
                    f.kind === 'glass' ? (
                        <GlassPiece key={i} cfg={f} sx={sx} sy={sy} index={i} layout={layout} />
                    ) : (
                        <PhotoPiece key={i} cfg={f} sx={sx} sy={sy} index={i} />
                    )
                )}

                {/* ---------- BOTTOM TAGLINE + CTA ---------- */}
                <div className="absolute inset-x-0 bottom-0 z-30">
                    <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-8 lg:pb-10">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

                            <motion.p
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="max-w-2xl text-xl lg:text-3xl font-medium text-slate-800 leading-snug tracking-tight"
                            >
                                <span className="font-bold text-navy-900">1,100+ families</span> have already traded their lease for a deed.{' '}
                                <span className="text-slate-600">Yours could be next.</span>
                            </motion.p>

                            {/* CTA — pill */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <Link
                                    href="/apply"
                                    className="inline-flex items-center gap-3 bg-berry-700 hover:bg-berry-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-[0_18px_40px_-12px_rgba(232,85,61,0.6)] hover:shadow-[0_22px_50px_-12px_rgba(232,85,61,0.75)] hover:-translate-y-0.5 group whitespace-nowrap"
                                >
                                    <span className="text-base lg:text-lg">See If You Qualify</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

/* ---------- Full-color photo with rotation, bobbing, parallax ---------- */
const PhotoPiece = ({ cfg, sx, sy, index }) => {
    const tx = useTransform(sx, (v) => v * cfg.parallax);
    const ty = useTransform(sy, (v) => v * cfg.parallax);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
            }}
            transition={{
                opacity: { delay: 0.15 + index * 0.08, duration: 0.6 },
                scale: { delay: 0.15 + index * 0.08, duration: 0.6 },
                y: {
                    delay: 1 + index * 0.3,
                    duration: 5 + index * 0.7,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                },
            }}
            style={{
                position: 'absolute',
                left: `${cfg.x}%`,
                top: `${cfg.y}%`,
                width: cfg.w,
                height: cfg.h,
                zIndex: cfg.z,
                x: tx,
                y: ty,
                rotate: cfg.rotate,
            }}
            className="will-change-transform"
        >
            <div className="relative w-full h-full rounded-[28px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,32,80,0.45)] ring-1 ring-white/50">
                <img
                    src={cfg.src}
                    alt={cfg.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"
                />
            </div>
        </motion.div>
    );
};

/* ---------- Glass card: a blurred clone of the headline, masked to the
 * card's bounds, sits beneath a translucent photo. As the card moves
 * with parallax, the clone counter-translates to stay aligned with the
 * real headline on the page. */
const GlassPiece = ({ cfg, sx, sy, index, layout }) => {
    /* Parallax: motion values that move the card via top/left (no transform
     * on the outer element so it doesn't create a stacking context). */
    const left = useTransform(sx, (v) => `calc(${cfg.x}% + ${v * cfg.parallax}px)`);
    const top  = useTransform(sy, (v) => `calc(${cfg.y}% + ${v * cfg.parallax}px)`);

    /* Counter-translation for the blurred clone so it stays visually fixed
     * to the real headline's screen position even as the card drifts. */
    const cloneX = useTransform(sx, (v) => -v * cfg.parallax);
    const cloneY = useTransform(sy, (v) => -v * cfg.parallax);

    // Where the clone's top-left needs to sit (inside the card) so that
    // its content overlaps the same screen location as the real headline.
    const cardBaseLeftPx = layout ? layout.cw * cfg.x / 100 : 0;
    const cardBaseTopPx  = layout ? layout.ch * cfg.y / 100 : 0;
    const cloneLeftPx = layout ? layout.hl - cardBaseLeftPx : 0;
    const cloneTopPx  = layout ? layout.ht - cardBaseTopPx  : 0;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.08, duration: 0.7 }}
            style={{
                position: 'absolute',
                left,
                top,
                width: cfg.w,
                height: cfg.h,
                zIndex: cfg.z,
            }}
        >
            <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-white/40 shadow-[0_25px_70px_-20px_rgba(0,32,80,0.35)] bg-neutral-50">
                {/* Blurred clone of the headline. Clipped to the card by
                 * the parent's overflow:hidden; aligned to the real
                 * headline's screen position via cloneLeft/Top, and
                 * counter-translated against parallax so it stays put. */}
                {layout && (
                    <motion.div
                        aria-hidden
                        style={{
                            position: 'absolute',
                            left: cloneLeftPx,
                            top: cloneTopPx,
                            width: layout.hw,
                            x: cloneX,
                            y: cloneY,
                            pointerEvents: 'none',
                            filter: 'blur(24px)',
                            willChange: 'transform',
                        }}
                    >
                        <h1
                            className="font-semibold uppercase tracking-[-0.025em] leading-[0.88] text-navy-900"
                            style={{ fontSize: HEADLINE_FONT_SIZE }}
                        >
                            <span className="block">Stop renting</span>
                            <span className="block">your future.</span>
                            <span className="block text-navy-900/90">Start owning it.</span>
                        </h1>
                    </motion.div>
                )}

                {/* Photo on top — partial opacity reveals the blurred clone
                 * (i.e. the headline) underneath, only where it overlaps. */}
                <img
                    src={cfg.src}
                    alt={cfg.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        opacity: 0.7,
                        filter: 'saturate(155%) contrast(110%)',
                    }}
                    draggable={false}
                />
                {/* glass sheen at top */}
                <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/35 to-transparent pointer-events-none"
                />
                {/* inset highlight ring */}
                <div
                    aria-hidden
                    className="absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/40 pointer-events-none"
                />
            </div>
        </motion.div>
    );
};

export default HeroTypeDriven;
