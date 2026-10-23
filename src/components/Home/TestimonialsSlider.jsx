'use client';

import { useRef } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const TestimonialsSlider = () => {
    const scrollContainerRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            context: "Sarah and David were self-employed, and traditional mortgage lenders didn't have a path for their income. Through our Pathway program, they locked in their purchase price and bought their home two years later.",
            quote: "Berry Rock Homes gave us a real shot at the home we wanted. We worked our plan, and just officially bought our house.",
            author: "Sarah & David M.",
            date: "October 12, 2023",
            location: "Indianapolis, IN"
        },
        {
            id: 2,
            context: "Michael is a skilled contractor who struggled to prove income to traditional lenders despite a successful business.",
            quote: "The Pathway Program saw the whole picture, not just an algorithm's output.",
            author: "Michael T.",
            date: "January 05, 2024",
            location: "Kansas City, MO"
        },
        {
            id: 3,
            context: "Jessica needed a predictable path to homeownership while she repaired her credit after an unexpected medical emergency.",
            quote: "No surprise fees, no shifting goalposts. I knew exactly what my rent would be and what the house would cost when I was ready.",
            author: "Jessica R.",
            date: "August 22, 2023",
            location: "St. Louis, MO"
        },
        {
            id: 4,
            context: "Marcus and Elena relocated for work. They wanted to plant roots but needed time to save toward homeownership without throwing away money on rent.",
            quote: "Choosing Berry Rock Homes allowed us to lock in our purchase price while we continued saving on our own terms.",
            author: "Marcus & Elena G.",
            date: "March 15, 2024",
            location: "Columbus, OH"
        }
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative border-t border-slate-100">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-berry-100/50 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Header Content */}
                    <div className="lg:w-1/3 flex flex-col justify-center">
                        <span className="text-sm font-bold tracking-widest text-slate-600 uppercase mb-4">
                            CLIENT STORIES
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight tracking-tight">
                            Don't take our word for it, see what our clients say
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We're honored by the feedback, and it fuels our commitment to delivering an exceptional pathway to homeownership. Read the reviews to hear firsthand how Berry Rock Homes is making a positive impact on families' lives. Your trust is our greatest achievement.
                        </p>

                        {/* Navigation Buttons (Desktop) */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors bg-white shadow-sm"
                                aria-label="Previous Testimonial"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors bg-white shadow-sm"
                                aria-label="Next Testimonial"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Scrolling Cards */}
                    <div className="lg:w-2/3 relative">

                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar pl-4 md:pl-0"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {testimonials.map((testimonial, idx) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="min-w-[320px] md:min-w-[400px] max-w-[400px] bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] snap-start flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex gap-1 mb-4 text-green-500">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-slate-700 text-base leading-relaxed mb-4 italic">
                                            {testimonial.context}
                                        </p>
                                        <p className="text-slate-800 font-medium leading-relaxed mb-6">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <p className="font-bold text-slate-900">{testimonial.author}</p>
                                        <p className="text-sm text-slate-500 mt-1">{testimonial.date} &middot; {testimonial.location}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Navigation Buttons (Mobile) */}
                        <div className="flex lg:hidden items-center justify-center gap-4 mt-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors bg-white shadow-sm"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors bg-white shadow-sm"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Additional Trust Indicators & CTA below */}
                <div className="mt-16 pt-10 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-slate-50 flex items-center justify-center text-xs font-bold text-slate-600">SM</div>
                            <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-slate-50 flex items-center justify-center text-xs font-bold text-slate-700">MT</div>
                            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-slate-50 flex items-center justify-center text-xs font-bold text-slate-600">JR</div>
                            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-50 flex items-center justify-center text-xs font-bold text-white">+5k</div>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">Excellent Client Satisfaction</p>
                            <p className="text-xs text-slate-500">Based on hundreds of successful placements.</p>
                        </div>
                    </div>
                    <Link href="/articles" className="text-berry-700 font-semibold hover:text-berry-800 flex items-center gap-2 group transition-colors">
                        Read more success stories
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default TestimonialsSlider;
