'use client';

import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const DEFAULT_TESTIMONIALS = [
    {
        name: "Elena V.",
        title: "Purchased in Indianapolis, IN",
        quote: "We thought we were years away from owning a home. The Pathway Program gave us the keys today and the time we needed to secure our mortgage. We moved in within a month, worked on our credit for a year, and just officially bought the house.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        videoUrl: "#"
    },
    {
        name: "Marcus T.",
        title: "Purchased in Kansas City, MO",
        quote: "I had a great income as an independent contractor but hadn't saved enough to qualify for a traditional mortgage. Berry Rock Homes allowed me to lock in the home price before the market went crazy.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        videoUrl: "#"
    },
    {
        name: "The Johnson Family",
        title: "Purchased in Oklahoma City, OK",
        quote: "We were tired of moving every year when our landlord raised the rent. Berry Rock Homes let us pick a house in the exact school district we wanted. The rent credits helped cover our closing costs when we finally purchased.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        videoUrl: "#"
    }
];

const TestimonialCarousel = ({ testimonials = DEFAULT_TESTIMONIALS }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        let newIndex = currentIndex + newDirection;
        if (newIndex < 0) {
            newIndex = testimonials.length - 1;
        } else if (newIndex >= testimonials.length) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
    };

    const currentTestimonial = testimonials[currentIndex];

    if (!testimonials || testimonials.length === 0) return null;

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row min-h-[500px] relative">

                {/* Left Media Panel */}
                <div className="w-full md:w-5/12 relative min-h-[400px] md:min-h-full overflow-hidden bg-slate-50 flex-shrink-0 group cursor-pointer">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={currentIndex + "-img"}
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </AnimatePresence>

                    {/* Gradient overlay to make the overlay button pop */}
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none z-10"></div>

                    {/* AirBnb Style Play Pill */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-transform duration-300 group-hover:scale-105">
                        <div className="bg-white/95 backdrop-blur shadow-xl border border-slate-100/50 rounded-full px-5 py-3 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                                <Play size={14} className="ml-1" />
                            </div>
                            <span className="font-bold text-sm text-slate-800 whitespace-nowrap pr-2 tracking-wide">Hear Testimonial</span>
                        </div>
                    </div>
                </div>

                {/* Right Content Panel */}
                <div className="w-full md:w-7/12 p-8 md:p-14 lg:p-20 flex flex-col relative bg-white">
                    {/* Elegant subtle quote mark */}
                    <div className="absolute top-10 left-10 md:top-16 md:left-16 pointer-events-none">
                        <Quote size={80} className="text-slate-50 opacity-80" />
                    </div>

                    {/* Text Area */}
                    <div className="flex-grow flex items-center relative min-h-[220px] mt-8 z-10">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex + "-text"}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute inset-0 w-full flex flex-col justify-center cursor-grab active:cursor-grabbing"
                            >
                                <p className="text-2xl md:text-3xl text-slate-800 leading-snug font-medium mb-10 tracking-tight">
                                    "{currentTestimonial.quote}"
                                </p>

                                <div className="w-12 h-1 bg-berry-600 rounded-full mb-6"></div>

                                <div>
                                    <h4 className="text-slate-900 font-bold text-lg">{currentTestimonial.name}</h4>
                                    <p className="text-slate-500 font-medium text-sm mt-1">{currentTestimonial.title}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Bottom Controls */}
                    <div className="mt-12 flex items-center justify-between z-10">
                        {/* Dots */}
                        <div className="flex gap-2.5 items-center">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > currentIndex ? 1 : -1);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-slate-800 w-2.5 h-2.5' : 'bg-slate-200 hover:bg-slate-300 w-2 h-2'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => paginate(-1)}
                                className="w-12 h-12 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-800 hover:text-slate-900 hover:shadow-md bg-white transition-all shadow-sm"
                                aria-label="Previous testimonial"
                            >
                                <ArrowLeft size={18} />
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                className="w-12 h-12 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:border-slate-800 hover:text-slate-900 hover:shadow-md bg-white transition-all shadow-sm"
                                aria-label="Next testimonial"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
