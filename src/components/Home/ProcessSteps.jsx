'use client';

import { Search, Home, BadgeCheck, Key, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const MockupSearch = () => (
    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl w-full max-w-sm overflow-hidden text-sm border border-white/40 mx-auto">
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-center justify-between">
            <span className="font-bold text-slate-800">Your specific budget:</span>
            <span className="bg-navy-100 text-navy-800 font-bold px-3 py-1 rounded-full text-xs">Up to $350k</span>
        </div>
        <div className="p-6 sm:p-8 bg-slate-50 space-y-4 relative">
            <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm">
                <div className="w-14 h-14 bg-slate-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&w=200&q=80)' }}></div>
                <div>
                    <div className="font-bold text-slate-800 mb-1 text-base">124 Maple Street</div>
                    <div className="text-slate-500 text-xs">4 Bed • 3 Bath • Turnkey</div>
                </div>
            </div>
            <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border-2 border-berry-400 relative">
                <div className="absolute -top-3 -right-3 bg-berry-500 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 shadow-md">PERFECT FIX</div>
                <div className="w-14 h-14 bg-slate-200 rounded-lg flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&w=200&q=80)' }}></div>
                <div>
                    <div className="font-bold text-slate-800 mb-1 text-base">899 Oakwood Dr</div>
                    <div className="text-slate-500 text-xs">3 Bed • 2 Bath • Top Schools</div>
                </div>
            </div>
        </div>
    </div>
);

const MockupMoveIn = () => (
    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl w-full max-w-sm overflow-hidden text-sm border border-white/40 mx-auto">
        <div className="p-5 sm:p-6 flex flex-col items-center border-b border-slate-100 relative overflow-hidden">
            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-6 text-navy-600">
                <Home size={32} />
            </div>
            <div className="font-bold text-slate-800 text-xl mb-2">Keys Handed Over</div>
            <div className="text-slate-500 text-center">Welcome to your new home.</div>
        </div>
        <div className="p-6 sm:p-8 bg-slate-50 text-sm text-slate-600 space-y-4">
            <div className="flex justify-between items-center">
                <span>Monthly Lease</span>
                <span className="font-bold text-slate-800">Locked In</span>
            </div>
            <div className="flex justify-between items-center">
                <span>Future Purchase Price</span>
                <span className="font-bold text-slate-800">Locked In</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                <span>Option Consideration</span>
                <span className="text-navy-600 font-bold text-xs flex items-center gap-1"><CheckCircle2 size={12} /> Travels with you</span>
            </div>
        </div>
    </div>
);

const MockupCredit = () => (
    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl w-full max-w-sm overflow-hidden text-sm border border-white/40 p-5 sm:p-6 flex flex-col items-center mx-auto">
        <div className="relative w-24 h-24 mb-5 mt-1">
            {/* SVG Donut Chart Mockup */}
            <svg viewBox="0 0 36 36" className="w-full h-full drop-shadow-md">
                <path
                    className="text-slate-100"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="text-navy-500"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-slate-800">680</span>
                <span className="text-[10px] text-navy-600 font-bold uppercase tracking-wider mt-1">+45 pts</span>
            </div>
        </div>
        <div className="w-full space-y-4">
            <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-navy-100 text-navy-600 flex items-center justify-center shrink-0"><CheckCircle2 size={12} /></div>
                <div className="font-medium text-slate-700">On-time payment reported</div>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-navy-100 text-navy-600 flex items-center justify-center shrink-0"><CheckCircle2 size={12} /></div>
                <div className="font-medium text-slate-700">Credit utilization decreased</div>
            </div>
        </div>
    </div>
);

const MockupOwnership = () => (
    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl w-full max-w-sm overflow-hidden text-sm border border-white/40 mx-auto">
        <div className="p-5 sm:p-6 bg-slate-900 border-b border-navy-800 text-center relative overflow-hidden">
            {/* sparkles */}
            <div className="absolute top-6 right-8 text-slate-400 opacity-80"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" /></svg></div>
            <div className="absolute bottom-8 left-8 text-slate-400 opacity-60"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" /></svg></div>

            <div className="w-16 h-16 bg-gradient-to-tr from-navy-700 to-navy-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-white">
                <Key size={28} />
            </div>
            <div className="font-bold text-white text-2xl sm:text-3xl mb-2">It's Officially Yours.</div>
            <div className="text-navy-200 text-sm">Closing documents signed & recorded</div>
        </div>
        <div className="p-6 sm:p-8 bg-white space-y-4">
            <div className="bg-slate-50 p-5 rounded-xl flex justify-between items-center border border-slate-100">
                <div>
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider font-bold">Purchase Credits</div>
                    <div className="text-navy-700 font-bold text-xl">+$18,500</div>
                </div>
                <div className="text-right">
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider font-bold">Credit Applied</div>
                    <div className="text-slate-800 font-bold text-xl">$24,000</div>
                </div>
            </div>
            <div className="pt-2">
                <Link href="/apply" className="block w-full py-3.5 bg-berry-700 hover:bg-[#8b1a1a] text-white font-bold rounded-full text-center shadow-md transition-colors text-base">Get Started</Link>
            </div>
        </div>
    </div>
);

const MockupApply = () => (
    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl w-full max-w-sm overflow-hidden text-sm border border-white/40 mx-auto">
        <div className="p-5 sm:p-6 flex flex-col items-center border-b border-slate-100 relative overflow-hidden">
            <div className="w-16 h-16 bg-berry-50 rounded-full flex items-center justify-center mb-6 text-berry-700">
                <BadgeCheck size={32} />
            </div>
            <div className="font-bold text-slate-800 text-2xl mb-2">Eligibility Confirmed</div>
            <div className="text-slate-500 text-base">You're ready to shop.</div>
        </div>
        <div className="p-6 sm:p-8 bg-slate-50 text-sm text-slate-600 space-y-4">
            <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-navy-100 text-navy-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                </div>
                <div>
                    <div className="font-bold text-slate-800 text-base mb-0.5">Soft Credit Check</div>
                    <div className="text-slate-500">No impact to your score</div>
                </div>
            </div>
            <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-navy-100 text-navy-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                </div>
                <div>
                    <div className="font-bold text-slate-800 text-base mb-0.5">Income Verified</div>
                    <div className="text-slate-500">Max budget calculated</div>
                </div>
            </div>
        </div>
    </div>
);

const pillars = [
    {
        icon: (
            <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        ),
        title: 'Option Consideration',
        desc: 'Secures your locked-in purchase price & is fully credited at closing.',
    },
    {
        icon: (
            <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        ),
        title: 'Monthly Payments',
        desc: 'Includes rent + a dedicated Rent Credit applied toward your purchase.',
    },
    {
        icon: (
            <svg className="w-4 h-4 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        ),
        title: 'Financial Head Start',
        desc: 'Option Consideration + Rent Credits = a powerful head start when you buy.',
    },
];

const TimelineGraphic = () => (
    <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="bg-navy-800 py-16 px-6 md:px-12 relative overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#38bdf8]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-berry-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Your Money at Work</h3>
                    <p className="text-white/50 text-base">See how your initial investment and monthly payments build your pathway to ownership.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {pillars.map(({ icon, title, desc }, i) => (
                        <div key={i} className="glass-card-dark rounded-2xl px-5 py-5 flex flex-col gap-3">
                            <div className="bg-white/15 w-9 h-9 rounded-full flex items-center justify-center shrink-0">
                                {icon}
                            </div>
                            <p className="text-white font-bold text-sm leading-tight">{title}</p>
                            <p className="text-white/65 text-base leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const stepsData = [
    {
        num: "1",
        title: "Apply & Pre-Qualify",
        desc: "Apply online or over the phone. We only run a \"soft\" credit check (no impact to your score), quickly verify your income, and email you and your realtor your estimated eligibility amount.",
        gradient: "from-navy-800 to-navy-950",
        lineColorStart: "#002e5d",
        lineColorEnd: "#1e3f5e",
        mockup: <MockupApply />
    },
    {
        num: "2",
        title: "Choose Your Home",
        desc: "Find your dream home with your realtor. We will purchase the home you pick as long as it appraises, is insurable, and you have at least 7% of the purchase price for your Option Consideration.",
        gradient: "from-navy-700 via-navy-800 to-navy-900",
        lineColorStart: "#1e3f5e",
        lineColorEnd: "#002050",
        mockup: <MockupSearch />
    },
    {
        num: "3",
        title: "Secure the Home",
        desc: "Provide your 7% Option Consideration within 3 days of contract (refunded if the offer isn't accepted). We submit a strong offer, complete inspections, and move toward a reliable closing so you can move in within about 30 days!",
        gradient: "from-berry-700 via-navy-800 to-navy-900",
        lineColorStart: "#40342c",
        lineColorEnd: "#002050",
        mockup: <MockupMoveIn />
    },
    {
        num: "4",
        title: "Build Your Credit & Prepare for Ownership",
        desc: "While living in your new home, your Option Consideration and monthly Rent Credits are actively set aside for your eventual purchase. We also report your on-time rent payments to all three credit bureaus to help boost your score.",
        gradient: "from-navy-900 via-navy-800 to-navy-950",
        lineColorStart: "#002050",
        lineColorEnd: "#001030",
        mockup: <MockupCredit />
    },
    {
        num: "5",
        title: "Transition to Ownership",
        desc: "When you're mortgage-ready (typically within 12 to 36 months), you officially purchase the home from us, applying your accumulated Rental Credits and Option Consideration to your purchase.",
        gradient: "from-navy-800 via-navy-900 to-navy-950",
        mockup: <MockupOwnership />,
        isLast: true
    }
];

const ProcessSteps = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* We will map over the steps and alternate left/right */}
            <div className="relative space-y-16 md:space-y-24">


                {stepsData.map((step, idx) => {
                    // Actually idx 0 = left text, right panel.
                    // Let's do: Image/Panel on Right for even idx, Left for odd idx.
                    const isImageLeft = idx % 2 !== 0;

                    return (
                        <div key={idx} className={`relative z-10 flex flex-col ${isImageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24`}>

                            {/* Curved SVG Line connecting the visual panels */}
                            {!step.isLast && (
                                <div className="hidden md:block absolute -z-10 pointer-events-none" style={{
                                    top: '50%',
                                    left: '25%', // Center of left panel
                                    width: '50%', // Span from center of left to center of right
                                    height: 'calc(100% + 12rem)', // Matches space-y-48
                                }}>
                                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path
                                            d={isImageLeft
                                                ? "M 0 0 C 0 80, 100 20, 100 100" // Left to Right
                                                : "M 100 0 C 100 80, 0 20, 0 100"  // Right to Left
                                            }
                                            vectorEffect="non-scaling-stroke"
                                            fill="transparent"
                                            stroke={`url(#lineGrad-${idx})`}
                                            strokeWidth="3"
                                        />
                                        <defs>
                                            <linearGradient id={`lineGrad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor={step.lineColorStart} />
                                                <stop offset="100%" stopColor={step.lineColorEnd} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            )}

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className="md:w-1/2 flex flex-col md:items-start text-left"
                            >
                                <div className="flex flex-col items-start mb-6 w-full max-w-md">
                                    <div className="w-9 h-9 rounded-full bg-navy-800 text-white flex items-center justify-center font-bold text-base mb-6 shadow-sm">
                                        {step.num}
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 text-base leading-relaxed max-w-md">
                                        {step.desc}
                                    </p>
                                </div>
                                {step.isLast && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="mt-6"
                                    >
                                        <Link href="/apply" className="inline-flex items-center justify-center bg-berry-700 hover:bg-[#8b1a1a] text-white font-bold py-3.5 px-9 rounded-full transition-colors shadow-lg hover:shadow-xl group">
                                            Apply Today <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Gradient Panel & Mockup */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                                className="md:w-1/2 w-full relative"
                            >


                                <div className={`min-h-[240px] md:min-h-[290px] rounded-[2rem] w-full bg-gradient-to-br ${step.gradient} p-5 md:p-7 flex items-center justify-center shadow-xl relative overflow-hidden`}>
                                    {/* Soft overlay gradients for depth */}
                                    <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

                                    {/* Mockup Container */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="relative z-10 w-full flex justify-center transform scale-90 sm:scale-100 origin-center"
                                    >
                                        {step.mockup}
                                    </motion.div>

                                </div>
                            </motion.div>

                        </div>
                    );
                })}
            </div>
            <TimelineGraphic />
        </div>
    );
};

export default ProcessSteps;
