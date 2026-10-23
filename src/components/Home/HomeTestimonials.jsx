'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Portraits woven inline through the headline. Each gets a slightly different
// tilt so they feel hand-placed. To use the new homeowner photos, save them to
// /public/images and swap the src values below (sizes/angles stay the same).
const headlineFaces = [
    { src: '/images/person_sq_1.png', rotate: -6 },
    { src: '/images/person_sq_3.png', rotate: 5 },
    { src: '/images/person_sq_6.png', rotate: -4 },
    { src: '/images/person_sq_5.png', rotate: 7 },
];

// Verbatim homeowner testimonials, lightly condensed so every card is the same
// height. A line-clamp is the safety net for anything longer.
const testimonials = [
    {
        id: 'tony',
        quote: 'Thank you Berry Rock Homes! Being a disabled veteran, it’s been very hard to get a home finance loan. But thanks to Berry Rock Homes that dream has come true. They stand by disabled veterans to make homeownership an American heritage dream — and stood by us every step of the way, from finding the home we love to closing in just 30 days.',
        author: 'Tony',
        role: 'Disabled U.S. veteran & homeowner',
    },
    {
        id: 'savannah',
        quote: 'I was very fortunate that a friend of mine was able to put me in touch with Berry Rock Homes. Nick was so kind & easy to work with. It was a great chance for me!',
        author: 'Savannah',
        role: 'Berry Rock homeowner',
    },
    {
        id: 'gary-sharon',
        quote: 'We have bought two homes through Berry Rock and I would recommend it to everyone whose credit is not good enough to purchase on your own. Berry Rock will carry it for you until you’re able to qualify. They are good people and will help any way they can! We are now homeowners again!',
        author: 'Gary & Sharon',
        role: 'Two-time Berry Rock homeowners',
    },
    {
        id: 'tracey',
        quote: 'We were in Berry Rock’s lease-to-own program for 5 years. We had some credit issues and couldn’t qualify to buy our uncle’s home — Berry Rock was a perfect fit and gave us the time we needed. We officially became homeowners today and could NOT have done it without them. David was OUTSTANDING to work with. Thank you for helping us through this whole process!',
        author: 'Tracey',
        role: 'Berry Rock homeowner',
    },
    {
        id: 'angie',
        quote: 'I’m leaving this review after finally buying the home Berry Rock let me pick out. I’m a paralegal, so I had two attorneys review everything from the lease to the purchase contracts. Both said, “if this is too good to be true, these people are truly trying to help you get a good start with your home.” The process went as smoothly as promised. Now I own my home, and every bit of it is mine.',
        author: 'Angie',
        role: 'Paralegal & homeowner',
    },
];

const StarPath = (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

// Solid 5-star row (per-review rating — these are 5-star reviews).
const Stars = ({ className = 'w-4 h-4' }) => (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
            <StarPath key={i} className={`${className} fill-[#FBBC04]`} />
        ))}
    </div>
);

// Portrait thumbnail set inline between words of the big headline. On hover it
// gives a gentle wiggle, then settles back to its hand-placed resting tilt.
const HeadlineFace = ({ face, delay = 0 }) => (
    <motion.span
        initial={{ opacity: 0, scale: 0.4, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1, rotate: face.rotate }}
        whileHover={{
            rotate: [face.rotate, face.rotate + 5, face.rotate - 4, face.rotate + 2, face.rotate],
            y: [0, -3, 1, -2, 0],
            transition: { duration: 0.6, ease: 'easeInOut' },
        }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: 'spring', stiffness: 220, damping: 16, delay }}
        className="inline-block align-middle mx-2 sm:mx-3 cursor-pointer overflow-hidden ring-2 ring-white/25 shadow-2xl bg-white/10"
        style={{ width: '1.05em', height: '1.24em', borderRadius: '0.18em' }}
    >
        <img src={face.src} alt="" className="h-full w-full object-cover" loading="lazy" />
    </motion.span>
);

const TestimonialCard = ({ t }) => (
    <figure
        data-card
        className="flex w-[86%] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
    >
        <Stars />
        <blockquote className="mt-4 line-clamp-[7] flex-1 text-[14.5px] leading-relaxed text-white/85">
            &ldquo;{t.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-5 border-t border-white/10 pt-4">
            <p className="text-sm font-bold text-berry-400">{t.author}</p>
            <p className="mt-0.5 text-xs text-white/45">{t.role}</p>
        </figcaption>
    </figure>
);

const HomeTestimonials = () => {
    const trackRef = useRef(null);

    // Pixel width of one card + gap, measured live so it stays correct across
    // breakpoints without hard-coding per-view counts.
    const cardStep = () => {
        const el = trackRef.current;
        if (!el) return 0;
        const card = el.querySelector('[data-card]');
        return card ? card.offsetWidth + 20 /* gap-5 */ : el.clientWidth;
    };

    // Advance/retreat by one card. Wraps: past the last card jumps to the
    // first, and before the first jumps to the last.
    const paginate = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
        const atStart = el.scrollLeft <= 4;
        if (dir > 0 && atEnd) return el.scrollTo({ left: 0, behavior: 'smooth' });
        if (dir < 0 && atStart) return el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
        el.scrollBy({ left: dir * cardStep(), behavior: 'smooth' });
    };

    const NavButton = ({ dir, label, children }) => (
        <button
            onClick={() => paginate(dir)}
            aria-label={label}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-navy-800/80 text-white backdrop-blur-sm transition-colors hover:bg-navy-700 md:flex"
        >
            {children}
        </button>
    );

    return (
        <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
            {/* Decorative dot grid + warm glow, echoing an editorial hero */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.5]"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    maskImage: 'radial-gradient(ellipse 80% 55% at 50% 25%, black, transparent)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 55% at 50% 25%, black, transparent)',
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-berry-600/20 blur-[120px]"
            />

            <div className="container relative mx-auto px-6 max-w-6xl">
                {/* ── Eyebrow ── */}
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-berry-400"
                >
                    Client Stories
                </motion.p>

                {/* ── Hero headline with inline homeowner portraits ── */}
                <h2 className="mx-auto max-w-4xl text-center font-bold tracking-tight text-white leading-[1.12] text-[2.4rem] sm:text-5xl lg:text-[4.25rem]">
                    Thousands
                    <HeadlineFace face={headlineFaces[0]} delay={0.05} />
                    trust
                    <HeadlineFace face={headlineFaces[1]} delay={0.13} />
                    <span className="whitespace-nowrap">Berry Rock</span>
                    <HeadlineFace face={headlineFaces[2]} delay={0.21} />
                    Homes
                    <HeadlineFace face={headlineFaces[3]} delay={0.29} />
                </h2>

                {/* ── Manual, looping testimonial slider (2–3 visible). Arrows sit
                       outside the cards so they never cover the quote text. ── */}
                <div className="mt-16 flex items-center gap-2 sm:gap-4">
                    <NavButton dir={-1} label="Previous testimonials">
                        <ChevronLeft size={20} />
                    </NavButton>

                    <div
                        ref={trackRef}
                        className="hide-scrollbar flex min-w-0 flex-1 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1"
                    >
                        {testimonials.map((t) => (
                            <TestimonialCard key={t.id} t={t} />
                        ))}
                    </div>

                    <NavButton dir={1} label="Next testimonials">
                        <ChevronRight size={20} />
                    </NavButton>
                </div>

                {/* ── About CTA, centered ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 flex justify-center"
                >
                    <Link
                        href="/about"
                        className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-berry-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-berry-800"
                    >
                        About Berry Rock
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeTestimonials;
