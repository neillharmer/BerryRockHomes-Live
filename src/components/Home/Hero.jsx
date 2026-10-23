'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// 2-column infinite vertical marquee. Each column has 4 unique tiles
// (doubled for the seamless 0 → -50% loop) so the track is always
// taller than the viewport — no empty space, no popping.
// direction alternates per column; durations are long for a calm drift.
const collageColumns = [
    {
        direction: 'up',
        duration: 95,
        tiles: [
            { src: '/images/home_hero.png',         alt: 'A Berry Rock Homes property',                  h: 320 },
            { src: '/images/woman-gardening.png',   alt: 'Homeowner watering plants on her front porch', h: 240 },
            { src: '/images/sarah_david_home.png',  alt: "Sarah & David's home",                         h: 280 },
            { src: '/images/man-coffee.png',        alt: 'Homeowner pouring coffee in his kitchen',      h: 260 },
        ],
    },
    {
        direction: 'down',
        duration: 110,
        tiles: [
            { src: '/images/marcus_story_home.png', alt: "Marcus's home",                                h: 300 },
            { src: '/images/woman-decorating.png',  alt: 'Homeowner decorating her home',                h: 260 },
            { src: '/images/jessica_home.png',      alt: "Jessica's home",                               h: 280 },
            { src: '/images/man-grilling.png',      alt: 'Homeowner grilling on his back patio',         h: 240 },
        ],
    },
];

const Hero = () => {
    return (
        <section className="relative bg-neutral-50 overflow-hidden pt-[68px]" style={{ height: '100svh' }}>
            <div className="container mx-auto px-6 max-w-7xl h-full">
                <div className="grid lg:grid-cols-2 lg:grid-rows-1 gap-8 lg:gap-12 h-full min-h-0">

                    {/* Left column */}
                    <div className="flex flex-col justify-center py-10 lg:py-14">

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.02 }}
                            className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                        >
                            Welcome to Berry Rock Homes
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.07 }}
                            className="text-5xl lg:text-6xl xl:text-[4rem] font-bold text-slate-900 leading-[1.05] tracking-tight mb-5"
                        >
                            Stop renting<br />
                            your future<br />
                            <span className="text-berry-600">and start owning it.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12 }}
                            className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-md"
                        >
                            <span className="font-semibold text-slate-900">We've helped thousands of families on their path to homeownership with the Pathway Program.</span> Berry Rock Homes creates homeowners responsibly and helps families move from renting to readiness, from uncertainty to stability, and from monthly payments to lasting ownership.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.26 }}
                            className="flex flex-row items-center gap-4"
                        >
                            <Link
                                href="/apply"
                                className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                            >
                                See If You Qualify
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/how-it-works"
                                className="text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors"
                            >
                                How it works →
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right column: 2-col infinite vertical marquee, alternating directions.
                        No vertical padding — tiles run flush to the top and bottom of the
                        section so the marquee is naturally clipped at both edges. */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="hidden lg:flex items-stretch min-h-0 overflow-hidden"
                    >
                        <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full h-full min-h-0">
                            {collageColumns.map((col, colIndex) => (
                                <MarqueeColumn key={colIndex} col={col} />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Fade photos into the PathwaySection sand background below */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#faf7f2] pointer-events-none z-10" />
        </section>
    );
};

/* Infinite vertical marquee column. The tiles are rendered twice and
 * the track scrolls by 50% of its own height, so the second copy slides
 * into the position the first copy started in — seamless loop. */
const MarqueeColumn = ({ col }) => {
    const tilesDoubled = [...col.tiles, ...col.tiles];
    const yFrom = col.direction === 'up' ? '0%' : '-50%';
    const yTo   = col.direction === 'up' ? '-50%' : '0%';

    return (
        <div className="relative h-full overflow-hidden">
            <motion.div
                className="flex flex-col gap-3"
                animate={{ y: [yFrom, yTo] }}
                transition={{
                    duration: col.duration,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {tilesDoubled.map((tile, i) => (
                    <div
                        key={`${tile.src}-${i}`}
                        className="rounded-2xl overflow-hidden shrink-0"
                        style={{ height: `${tile.h}px` }}
                    >
                        <img
                            src={tile.src}
                            alt={tile.alt}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Hero;
