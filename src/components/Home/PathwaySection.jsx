'use client';

import { useState, useRef, useEffect } from 'react';
import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
    useInView,
    useMotionValue,
    useMotionValueEvent,
    useReducedMotion,
    animate,
    cubicBezier,
} from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Six personas — named, with narrative copy written about each of them.
// Photos live in /public/images/pathway_<name>.jpg.
// ─────────────────────────────────────────────────────────────────────────────
const personas = [
    {
        id: 1,
        name: 'Maya',
        question: 'What\'s my path to owning a home?',
        title: 'A different path forward.',
        body: 'As a freelancer, Maya\'s income didn\'t fit the standard mortgage checklist. She didn\'t know there was another way — until she found one built for people like her.',
        photo: '/images/maya-photo.png',
    },
    {
        id: 2,
        name: 'James',
        question: 'Can I really qualify in minutes?',
        title: 'Pre-qualified in minutes.',
        body: 'James\'s agent pointed him to Berry Rock Homes. He pre-qualified online in under five minutes: no hard credit pull, no stack of paperwork.',
        photo: '/images/james_photo.png',
    },
    {
        id: 3,
        name: 'Rosa',
        question: 'Can I pick any home I want?',
        title: 'Found the one.',
        body: 'Rosa toured the open market and picked the home she wanted: her neighborhood, her school district. Not our inventory. Her choice.',
        photo: '/images/rosa_photo.png',
    },
    {
        id: 4,
        name: 'Devon',
        question: 'Are the terms really this simple?',
        title: 'Applied for the home.',
        body: 'Devon found the home he wanted on the open market. His realtor and Berry Rock Homes worked together to help him apply for it — clear terms, a locked purchase price, no surprises waiting at closing.',
        photo: '/images/devon_photo.png',
    },
    {
        id: 5,
        name: 'Priya',
        question: 'Is my credit really climbing every month?',
        title: (
            <>
                Moved in.
                <br />
                Building credit.
            </>
        ),
        body: 'Priya put down her 7% option consideration, picked up her keys, and started building credit every month. Every on-time payment is reported to all three bureaus.',
        photo: '/images/priya_photo.png',
    },
    {
        id: 6,
        name: 'Aaron',
        question: 'When can I get a traditional mortgage?',
        title: 'Now he owns it.',
        body: 'Over time, Aaron\'s credit rebuilt enough to qualify for a traditional mortgage. He bought the house he\'d already been living in, at the price locked in on day one.',
        photo: '/images/aaron_photo.png',
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// Arc layout — six points evenly distributed along a 180° arc opening
// downward. All portraits share one base size; an active portrait scales up.
// ─────────────────────────────────────────────────────────────────────────────
const PORTRAIT_SIZE = 144;       // base diameter in px
const ACTIVE_SCALE = 1.14;       // grows when selected

// Each portrait carries a glass question pill positioned tangent to the side
// of the photo's circle. `pillSide` picks which edge it extends from:
//   'right' → pill's left edge tucks into the photo's right edge, extends right
//   'left'  → pill's right edge tucks into the photo's left edge, extends left
// Side is chosen per-persona so pills never cross the face and never overlap
// the center editorial copy.
// `top` values are tuned so the top row's portraits (Rosa/Devon) stay fully
// inside the stage rather than overflowing above it — a 144px portrait centered
// at top:8% pokes ~11px past the stage top, which tucks under the fixed Navbar on
// shorter viewports. Keeping the top row at ~13% guarantees clearance below the
// nav across all desktop heights while preserving the arc's downward sweep.
const arcPos = [
    { left: 5,  top: 72, enterFrom: 'left',  pillSide: 'right' }, // Maya: pill right (below center copy y-range)
    { left: 14, top: 35, enterFrom: 'left',  pillSide: 'right' }, // James: pill right (above headline y-range)
    { left: 36, top: 13, enterFrom: 'left',  pillSide: 'left'  }, // Rosa: pill left (outward, above center copy)
    { left: 64, top: 13, enterFrom: 'right', pillSide: 'right' }, // Devon: pill right (outward, above center copy)
    { left: 86, top: 35, enterFrom: 'right', pillSide: 'left'  }, // Priya: pill left (above headline y-range)
    { left: 95, top: 72, enterFrom: 'right', pillSide: 'left'  }, // Aaron: pill left (below center copy y-range)
];

// Pin-scroll → active-persona mapping. The first 4% is a "default" buffer so
// the introductory headline shows briefly before Maya activates; the remaining
// 96% is split into six equal segments, one per persona.
const PRE_BUFFER = 0.04;
const SEGMENT_WIDTH = (1 - PRE_BUFFER) / 6;
const segmentMid = (i) => PRE_BUFFER + (i + 0.5) * SEGMENT_WIDTH;

// Entry-stagger timings (one-time animation when the section first enters view)
const ENTRY_STAGGER = 0.12;     // delay between each persona
const ENTRY_DURATION = 0.7;

// Sticky stage sits this far below the top of the viewport, clearing the fixed
// Navbar (≈68px scrolled) with a comfortable buffer so the pinned content never
// rides up under the menu or back behind the hero. Also subtracted from the
// stage height (calc(100vh - NAV_OFFSET_PX)) so the stage fits the gap exactly.
const NAV_OFFSET_PX = 96;

const DEFAULT_CONTENT = {
    eyebrow: 'The Pathway Program',
    title: (
        <>
            Six people.
            <br />
            One path home.
        </>
    ),
    body: 'Maya, James, Rosa, Devon, Priya and Aaron all started where most of our customers start: outside the traditional mortgage box. Choose any of them to follow that step on the path.',
};

const EASE_IN_OUT = cubicBezier(0.65, 0, 0.35, 1);
const EASE_OUT = cubicBezier(0.22, 1, 0.36, 1);

const PathwaySection = () => {
    const sectionRef = useRef(null);
    const stageRef = useRef(null);
    const [activeId, setActiveId] = useState(null);

    // A click sets activeId directly (the click is the source of truth). While
    // that selection is "locked in" we ignore the scroll-derived mapping below,
    // so an in-flight smooth-scroll — or a second quick click — can't overwrite
    // it. The lock releases the moment the user scrolls for real (wheel / touch /
    // keyboard); programmatic smooth-scroll doesn't emit those events, so we can
    // tell "clicked" apart from "user scrolled." Without this, two quick clicks
    // race the spring's change-event stream and leave the wrong persona active
    // even though the page lands on the right spot (clicking Aaron, seeing Priya).
    const clickLockRef = useRef(false);

    // Reduce Motion turns the programmatic smooth-scrolls below into instant
    // jumps. A CSS `scroll-behavior: auto` cannot do this — it is ignored when
    // scrollTo() passes `behavior` explicitly in its options.
    const prefersReducedMotion = useReducedMotion();
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    // ENTRY: fires once the moment the section is ~5% in view. Drives the
    // staggered left-to-right reveal of all six personas (independent of scroll).
    const hasEntered = useInView(sectionRef, { amount: 0.05, once: true });

    // VISIBILITY: tracks ongoing visibility for the "reset on exit" behavior.
    const isSectionInView = useInView(sectionRef, { amount: 0.05 });

    // SCROLL: progress 0 = section pin engages, 1 = section pin releases.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    // Spring-smooth so progress changes are buttery, not stepped.
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 95,
        damping: 30,
        mass: 0.35,
        restDelta: 0.001,
    });

    // Map smoothed scroll progress → active persona index. A small buffer
    // at the start (PRE_BUFFER) keeps the default headline visible until the
    // user actually starts stepping through.
    useMotionValueEvent(smoothProgress, 'change', (latest) => {
        if (!isSectionInView) return;
        // A click owns the selection until the user scrolls for real.
        if (clickLockRef.current) return;
        if (latest < PRE_BUFFER) {
            setActiveId((prev) => (prev !== null ? null : prev));
            return;
        }
        const idx = Math.min(5, Math.floor((latest - PRE_BUFFER) / SEGMENT_WIDTH));
        const newId = personas[idx].id;
        setActiveId((prev) => (prev !== newId ? newId : prev));
    });

    // Reset to default whenever the section fully leaves the viewport.
    useEffect(() => {
        if (!isSectionInView) setActiveId(null);
    }, [isSectionInView]);

    // Release the click-lock as soon as the user scrolls under their own power.
    // A programmatic smooth-scroll (from a click) fires 'scroll' but never
    // 'wheel' / 'touchmove' / 'keydown', so these listeners fire only on real
    // user intent and hand control back to the scroll-driven mapping cleanly.
    useEffect(() => {
        const release = () => { clickLockRef.current = false; };
        window.addEventListener('wheel', release, { passive: true });
        window.addEventListener('touchmove', release, { passive: true });
        window.addEventListener('keydown', release);
        return () => {
            window.removeEventListener('wheel', release);
            window.removeEventListener('touchmove', release);
            window.removeEventListener('keydown', release);
        };
    }, []);

    // Click on a persona → set it active immediately, then smooth-scroll to its
    // segment so scroll position stays in sync for when the user takes over.
    // Clicking the already-active persona resets to the pre-buffer default.
    const scrollToStep = (idx) => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionTopAbs = window.scrollY + rect.top;
        const pinDistance = section.offsetHeight - window.innerHeight;
        const isActiveClick = personas[idx].id === activeId;
        const progress = isActiveClick ? PRE_BUFFER / 2 : segmentMid(idx);
        const target = sectionTopAbs + progress * pinDistance;

        clickLockRef.current = true;
        setActiveId(isActiveClick ? null : personas[idx].id);
        window.scrollTo({ top: target, behavior: scrollBehavior });
    };

    // Keyboard focus → select that persona directly, without scrolling.
    //
    // This is the keyboard half of the documented "click Aaron, see Priya"
    // bug. Tabbing to a portrait makes the browser scroll it into view; that
    // Tab keypress also releases clickLockRef (by design — a keydown is meant
    // to signal genuine user input), and the scroll listener then re-derives
    // activeId from the new offset. The focused portrait and the story in the
    // centre panel could disagree. Re-taking the lock on focus keeps them
    // together, and deliberately does not scroll: moving the page under
    // someone who is only tabbing through would be worse than the desync.
    const focusStep = (idx) => {
        clickLockRef.current = true;
        setActiveId(personas[idx].id);
    };

    // Click on empty stage area → reset to default by scrolling into the
    // pre-buffer band (where no persona is active).
    const scrollToDefault = () => {
        const section = sectionRef.current;
        if (!section || activeId === null) return;
        const rect = section.getBoundingClientRect();
        const sectionTopAbs = window.scrollY + rect.top;
        const pinDistance = section.offsetHeight - window.innerHeight;
        const target = sectionTopAbs + (PRE_BUFFER / 2) * pinDistance;

        clickLockRef.current = true;
        setActiveId(null);
        window.scrollTo({ top: target, behavior: scrollBehavior });
    };

    const active = personas.find((p) => p.id === activeId) ?? null;
    const activeIndex = personas.findIndex((p) => p.id === activeId);

    return (
        <>
            {/* ─── Desktop: scroll-pinned editorial arc ─── */}
            <section
                ref={sectionRef}
                className="hidden lg:block relative bg-gradient-to-br from-sand-50 via-berry-50 to-berry-100 pt-48 pb-24"
                style={{ height: '260vh' }}
                aria-label="The Pathway Program — six people, one path from renter to owner"
            >
                <div
                    className="sticky overflow-hidden flex items-center"
                    style={{
                        top: `${NAV_OFFSET_PX}px`,
                        height: `calc(100vh - ${NAV_OFFSET_PX}px)`,
                    }}
                >
                    <div
                        ref={stageRef}
                        className="relative w-full max-w-6xl mx-auto px-6 h-full max-h-[760px]"
                    >
                        {/* Click-away backdrop — only interactive when a persona
                            is active, so it never blocks scrolling/clicks otherwise. */}
                        <button
                            type="button"
                            onClick={scrollToDefault}
                            aria-label="Clear selected persona"
                            aria-hidden="true"
                            tabIndex={-1}
                            className={`absolute inset-0 z-0 cursor-default ${
                                activeId === null ? 'pointer-events-none' : ''
                            }`}
                        />

                        {/* Center editorial text + CTA */}
                        <CenterPanel active={active} />

                        {/* Arc portraits */}
                        {personas.map((persona, i) => (
                            <ArcPortrait
                                key={persona.id}
                                persona={persona}
                                index={i}
                                pos={arcPos[i]}
                                hasEntered={hasEntered}
                                activeId={activeId}
                                onSelect={scrollToStep}
                                onFocusStep={focusStep}
                            />
                        ))}

                        {/* Bottom-center step indicator */}
                        <ScrollProgress activeIndex={activeIndex} />
                    </div>
                </div>
            </section>

            {/* ─── Mobile: vertical timeline ─── */}
            <MobilePathway />
        </>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// CenterPanel — editorial text block in the middle of the arc. Switches
// content based on which persona is active; the AnimatePresence handles a
// soft cross-fade with a tiny y-translation for an editorial reveal.
// ─────────────────────────────────────────────────────────────────────────────
const CenterPanel = ({ active }) => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[420px] z-20">
        {/* Canonical eyebrow — constant across default + active states */}
        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-6">
            The Pathway Program
        </p>

        <AnimatePresence mode="wait">
            <motion.div
                key={active?.id ?? 'default'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: EASE_OUT }}
            >
                {/* Headline — extreme weight + tight leading for editorial feel */}
                <h2 className="text-[2.9rem] xl:text-[3.25rem] font-bold text-navy-800 leading-[0.98] tracking-[-0.022em] mb-7">
                    {active ? active.title : (
                        <>
                            Six people.
                            <br />
                            One path home.
                        </>
                    )}
                </h2>

                {/* Body — narrow column, generous leading */}
                <p className="text-[15px] text-slate-600 leading-[1.65] mb-9 max-w-[34ch] mx-auto">
                    {active ? active.body : 'Maya, James, Rosa, Devon, Priya and Aaron all started where most of our customers start: outside the traditional mortgage box. Choose any of them to follow that step on the path.'}
                </p>
            </motion.div>
        </AnimatePresence>

        <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm shadow-sm group"
        >
            See If You Qualify
            <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
            />
        </Link>
    </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// ArcPortrait — one persona placed on the arc. Two motion layers:
//   • Outer: ONE-TIME entry stagger (slides in from the outside, opacity 0→1).
//     Driven by the hasEntered boolean + the persona's index — NOT by scroll.
//   • Inner: ongoing focus state (scale up + lift when this persona is the
//     currently-active step; scale down + dim when another is active).
// ─────────────────────────────────────────────────────────────────────────────
// Float animation: smooth sine wave for the active persona's question pill.
// We drive a motion value via requestAnimationFrame using Math.sin so the
// velocity is continuous at every point — no keyframe stops, no bezier
// approximation, no perceptible "tick" at the apexes. Amplitude is large
// enough that motion near the apex is still above sub-pixel territory.
const FLOAT_PERIOD = 3.6;     // seconds per full cycle
const FLOAT_AMPLITUDE = 9;    // pixels of vertical travel (±)

const ArcPortrait = ({ persona, index, pos, hasEntered, activeId, onSelect, onFocusStep }) => {
    const isActive = activeId === persona.id;
    const otherActive = activeId !== null && !isActive;

    const xFrom = pos.enterFrom === 'left' ? -130 : 130;

    // Sine-wave float for the pill when this persona is active. When inactive,
    // smoothly settle back to 0 over 0.4s.
    //
    // This loop is hand-rolled rather than a Framer variant, so MotionConfig
    // cannot reach it — it has to check the preference itself. It also runs
    // unbounded for as long as a persona stays selected, and selection is
    // driven by scroll position rather than a deliberate click, which is
    // exactly what WCAG 2.2.2 (Pause, Stop, Hide — Level A) is about. Under
    // Reduce Motion the pill simply sits still; nothing else changes.
    const prefersReducedMotion = useReducedMotion();
    const floatY = useMotionValue(0);
    useEffect(() => {
        if (prefersReducedMotion) {
            floatY.set(0);
            return;
        }
        if (!isActive) {
            const controls = animate(floatY, 0, { duration: 0.4, ease: 'easeOut' });
            return () => controls.stop();
        }
        let raf;
        const start = performance.now();
        const tick = (now) => {
            const t = (now - start) / 1000;
            floatY.set(Math.sin((t / FLOAT_PERIOD) * 2 * Math.PI) * -FLOAT_AMPLITUDE);
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [isActive, floatY, prefersReducedMotion]);

    return (
        <div
            data-pathway-step
            style={{
                position: 'absolute',
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                transform: 'translate(-50%, -50%)',
            }}
            className="z-10"
        >
            <motion.div
                initial={{ opacity: 0, x: xFrom, scale: 0.9 }}
                animate={hasEntered ? { opacity: 1, x: 0, scale: 1 } : undefined}
                transition={{
                    delay: index * ENTRY_STAGGER,
                    duration: ENTRY_DURATION,
                    ease: EASE_OUT,
                }}
            >
                <motion.button
                    type="button"
                    onClick={() => onSelect(index)}
                    onFocus={() => onFocusStep(index)}
                    animate={{
                        opacity: otherActive ? 0.45 : 1,
                        scale: isActive ? ACTIVE_SCALE : otherActive ? 0.96 : 1,
                        y: isActive ? -6 : 0,
                    }}
                    whileHover={{ scale: isActive ? ACTIVE_SCALE : 1.04, y: isActive ? -6 : -2 }}
                    transition={{ duration: 0.4, ease: EASE_OUT }}
                    className="group flex flex-col items-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-berry-600 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-50 rounded-full"
                    aria-label={`${persona.name} — ${persona.question}`}
                    aria-pressed={isActive}
                >
                    {/* Photo + glass question pill (tangent to side of circle) */}
                    <div
                        className="relative"
                        style={{ width: PORTRAIT_SIZE, height: PORTRAIT_SIZE }}
                    >
                        {/* Photo — full color throughout. Active state is
                            signalled by scale + soft coral-tinted lift shadow. */}
                        <motion.div
                            animate={{
                                boxShadow: isActive
                                    ? '0 24px 48px -14px rgba(232, 85, 61, 0.35), 0 6px 18px -6px rgba(15, 23, 42, 0.18)'
                                    : '0 10px 26px -12px rgba(15, 23, 42, 0.22)',
                            }}
                            transition={{ duration: 0.45, ease: EASE_OUT }}
                            className="absolute inset-0 rounded-full overflow-hidden bg-slate-100"
                        >
                            <img
                                src={persona.photo}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                draggable={false}
                                loading="lazy"
                            />
                        </motion.div>

                        {/* Glass question pill — sits tangent to the side of
                            the portrait, overlapping the edge by ~16px. Outer
                            div uses flex to vertically center the inner pill
                            without a transform, so the pill's animated y is
                            the only transform on that element (smooth GPU
                            compositing, no fighting parent transforms). */}
                        <div
                            className="absolute z-20 flex items-center"
                            style={{
                                top: 0,
                                bottom: 0,
                                [pos.pillSide === 'right' ? 'left' : 'right']:
                                    PORTRAIT_SIZE - 16,
                                width: 172,
                            }}
                        >
                            <motion.div
                                style={{ y: floatY, willChange: 'transform' }}
                                animate={{ opacity: otherActive ? 0.5 : 1 }}
                                transition={{ opacity: { duration: 0.4, ease: EASE_OUT } }}
                                className="w-full px-4 py-2.5 rounded-full bg-white/45 backdrop-blur-md border border-white/55 shadow-[0_8px_28px_-14px_rgba(15,23,42,0.22)] text-center"
                            >
                                <p
                                    className={`text-[12px] leading-[1.3] font-semibold tracking-[-0.005em] transition-colors ${
                                        isActive ? 'text-navy-900' : 'text-navy-800/85'
                                    }`}
                                >
                                    {persona.question}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Caption — name kicker only */}
                    <div className="mt-4 text-center w-[180px]">
                        <p
                            className={`text-[12px] tracking-[0.22em] uppercase font-semibold transition-colors ${
                                isActive ? 'text-berry-700' : 'text-navy-800/85'
                            }`}
                        >
                            {persona.name}
                        </p>
                    </div>
                </motion.button>
            </motion.div>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// ScrollProgress — six discrete dots showing which persona is currently the
// active step. The current step's dot widens into a pill in the coral accent;
// the others remain tiny and muted.
// ─────────────────────────────────────────────────────────────────────────────
const ScrollProgress = ({ activeIndex }) => (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
        {personas.map((_, i) => {
            const isCurrent = activeIndex === i;
            return (
                <motion.span
                    key={i}
                    animate={{
                        width: isCurrent ? 26 : 6,
                        backgroundColor: isCurrent ? '#E8553D' : '#002e5d33',
                    }}
                    transition={{ duration: 0.4, ease: EASE_OUT }}
                    className="block h-[3px] rounded-full"
                />
            );
        })}
    </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// MobilePathway — vertical timeline. Uses the same persona content, named.
// ─────────────────────────────────────────────────────────────────────────────
const MobilePathway = () => (
    <section className="lg:hidden py-24 px-6 bg-gradient-to-br from-sand-50 via-berry-50 to-berry-100">
        <div className="max-w-lg mx-auto">
            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-6 text-center">
                The Pathway Program
            </p>

            <h2 className="text-4xl font-bold text-navy-800 leading-[0.98] tracking-[-0.02em] mb-5 text-center">
                Six people.<br />One path home.
            </h2>
            <p className="text-[15px] text-slate-600 leading-[1.65] mb-12 text-center max-w-[34ch] mx-auto">
                One path from renting to owning. Follow it through the eyes of six people who walked it.
            </p>

            <ol className="space-y-6 mb-12">
                {personas.map((persona) => (
                    <motion.li
                        key={persona.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.55, ease: EASE_OUT }}
                        className="flex items-start gap-5"
                    >
                        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-sm">
                            <img
                                src={persona.photo}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="pt-1 min-w-0">
                            <p className="text-[10px] font-semibold text-berry-700 uppercase tracking-[0.22em] mb-1">
                                {persona.name}
                            </p>
                            <p className="text-lg font-bold text-navy-800 leading-tight mb-1.5 tracking-[-0.01em]">
                                {persona.title}
                            </p>
                            <p className="text-base text-slate-700 leading-relaxed">
                                {persona.body}
                            </p>
                        </div>
                    </motion.li>
                ))}
            </ol>

            <div className="flex justify-center">
                <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-sm shadow-sm group"
                >
                    See If You Qualify
                    <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                    />
                </Link>
            </div>
        </div>
    </section>
);

export default PathwaySection;
