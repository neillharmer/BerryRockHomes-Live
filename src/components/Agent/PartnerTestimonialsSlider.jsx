'use client';

import { useRef } from 'react';
import { ChevronRight, ChevronLeft, Play } from 'lucide-react';

const PartnerTestimonialsSlider = () => {
    const scrollContainerRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            videoThumbnail: "/images/partner_1.jpg",
            authorAvatar: "/images/partner_1.jpg",
            authorName: "Emily Manekshaw",
            authorTitle: "COO, Prime Inc."
        },
        {
            id: 2,
            videoThumbnail: "/images/partner_4.jpg",
            authorAvatar: "/images/partner_4.jpg",
            authorName: "Sarah Jenkins",
            authorTitle: "Realtor, Keller Williams"
        },
        {
            id: 3,
            videoThumbnail: "/images/partner_2.jpg",
            authorAvatar: "/images/partner_2.jpg",
            authorName: "David Chen",
            authorTitle: "Broker, Compass Realty"
        },
        {
            id: 4,
            videoThumbnail: "/images/partner_3.jpg",
            authorAvatar: "/images/partner_3.jpg",
            authorName: "Heath Badger",
            authorTitle: "CEO, Insidious Inc."
        },
        {
            id: 5,
            videoThumbnail: "/images/partner_5.jpg",
            authorAvatar: "/images/partner_5.jpg",
            authorName: "Jason Ramirez",
            authorTitle: "Agent, RE/MAX Professionals"
        }
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="container mx-auto px-4 max-w-6xl mb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-100 pb-6">
                    <div>
                        <span className="text-sm font-bold tracking-widest text-berry-700 uppercase mb-3 block">
                            WHAT REALTORS SAY
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight">
                            Hear what our partners are saying
                        </h2>
                    </div>

                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                            aria-label="Previous Testimonial"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                            aria-label="Next Testimonial"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Slider Container - bleeds to the right edge */}
            <div className="ml-auto pl-4 md:pl-[calc(50vw-35rem)]">
                {/* 35rem roughly half of max-w-6xl to align with left edge of container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 pr-8 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="snap-start shrink-0 flex flex-col gap-4 group">

                            {/* Vertical Video Thumbnail */}
                            <div className="relative w-[280px] sm:w-[320px] aspect-[9/14] rounded-2xl overflow-hidden cursor-pointer shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 bg-slate-100">

                                {/* Background Image styling for portrait video */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${testimonial.videoThumbnail})` }}
                                ></div>

                                {/* Overlay Gradient for better play button visibility */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                                {/* Play Button Container */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-all border border-white/20 shadow-lg">
                                        <Play className="text-white w-6 h-6 ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mt-2 px-2">
                                <div
                                    className="w-12 h-12 rounded-full bg-slate-200 shrink-0 bg-cover bg-center border border-slate-100 shadow-sm"
                                    style={{ backgroundImage: `url(${testimonial.authorAvatar})` }}
                                ></div>
                                <div>
                                    <div className="font-bold text-slate-800 text-sm md:text-base leading-tight mb-1">{testimonial.authorName}</div>
                                    <div className="text-slate-500 text-xs md:text-sm">{testimonial.authorTitle}</div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden justify-center gap-4 mt-8">
                <button
                    onClick={() => scroll('left')}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

        </section>
    );
};

export default PartnerTestimonialsSlider;
