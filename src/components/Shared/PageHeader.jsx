'use client';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, eyebrow, bgImage = null, imagePattern = true, compact = false, variant = 'dark' }) => {
    if (variant === 'light') {
        return (
            <div className={`bg-neutral-50 ${compact ? 'pt-[160px] pb-12' : 'pt-[200px] lg:pt-[240px] pb-16'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-3xl">
                        {eyebrow && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                            >
                                {eyebrow}
                            </motion.p>
                        )}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-berry-600 mb-5 tracking-tight leading-tight"
                        >
                            {title}
                        </motion.h1>
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-slate-600 leading-relaxed max-w-2xl"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative ${compact ? 'pt-28 lg:pt-36 pb-12 min-h-[28vh]' : 'pt-44 lg:pt-56 pb-24 min-h-[40vh]'} border-b border-[#001a3a] flex flex-col justify-center bg-navy-800 overflow-hidden`}>

            {/* Background Image & Overlay */}
            {bgImage && (
                <>
                    <img
                        src={bgImage}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-center z-0"
                    />
                    <div className="absolute inset-0 bg-black/20 z-10"></div>
                </>
            )}

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20 pointer-events-none">
                {imagePattern && !bgImage && (
                    <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }}
                    ></div>
                )}
                <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-berry-500/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-5xl text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em] mb-4"
                    >
                        {eyebrow || title}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
                    >
                        {title}
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-navy-100 font-light max-w-3xl leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>

        </div>
    );
};

export default PageHeader;
