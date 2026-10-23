'use client';

import InteractiveCalculator from '../components/Calculator/InteractiveCalculator';
import QualifyCTA from '../components/Home/QualifyCTA';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, PiggyBank, TrendingUp, Info, Home, Calendar, ArrowRight } from 'lucide-react';

// Each card is a figure followed by a plain definition of what the figure means.
// Nick asked for that format on all three, Aug 7 (00:13:07): "the format on all
// three of these widgets — defining what you're saying. Catchy, define it."
const metrics = [
    {
        Icon: DollarSign,
        stat: '7%',
        label: 'Option Consideration',
        // Aug 7 (00:14:11): "fully applied to the option price upon your purchase.
        // I'd say that because technically it is a fee." The earlier "not a fee"
        // line said the opposite of what he told us.
        sub: 'Fully credited toward your option price when you purchase the home from Berry Rock Homes.',
    },
    {
        Icon: PiggyBank,
        stat: '0.1%',
        label: 'Monthly Rental Credit',
        sub: 'Of purchase price back per on-time payment.',
    },
    {
        Icon: TrendingUp,
        stat: '19%',
        // Aug 7 (00:11:58): "just say average equity after purchase," then define
        // it below, because the bare word "equity" is what gets picked apart.
        label: 'Avg. Equity After Purchase',
        sub: 'The average difference between your option price and the home’s value when you buy it back from us.',
    },
];


// Small accessible tooltip: shows on hover, keyboard focus, and tap.
const FinalPayoutTooltip = () => {
    const [open, setOpen] = useState(false);
    return (
        <span className="relative inline-flex">
            <button
                type="button"
                aria-label="What does Final Payout mean?"
                onClick={() => setOpen((v) => !v)}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                className="text-slate-600 hover:text-navy-600 transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600"
            >
                <Info size={13} aria-hidden="true" />
            </button>
            {open && (
                <span
                    role="tooltip"
                    className="absolute right-0 top-full mt-2 z-20 w-60 rounded-lg bg-navy-800 p-3 text-left text-xs font-normal normal-case leading-relaxed tracking-normal text-white shadow-lg"
                >
                    The amount you pay to purchase the home — the adjusted purchase price after your Option Consideration and accrued Monthly Rental Credits are applied.
                </span>
            )}
        </span>
    );
};

const ByTheNumbers = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">

            {/* ── 1. Hero ── */}
            <section className="bg-neutral-50 border-b border-slate-100 pt-[200px] lg:pt-[240px] pb-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                        >
                            Pathway Program<sup className="text-[0.6em] tracking-normal">SM</sup>
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.07 }}
                            className="text-4xl md:text-5xl font-bold text-navy-800 tracking-tight leading-tight mb-5"
                        >
                            Your Money at Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.13 }}
                            className="text-lg leading-relaxed max-w-md mx-auto"
                            style={{ color: '#4b5563' }}
                        >
                            Transparency is our promise. Our goal is to help you get in the best position possible to purchase your home as soon as you&rsquo;re ready. 100% of your Option Consideration is credited toward your home at closing, while your monthly Rental Credits keep lowering your option price.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ── 2. What every dollar does ── */}
            <section className="bg-white py-14">
                <div className="container mx-auto px-6 max-w-7xl">

                    <div className="mb-10">
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">Where Your Money Goes</p>
                        <h2 className="text-3xl font-bold text-navy-800 mb-2">The numbers that shape your pathway.</h2>
                        <p className="text-base max-w-xl" style={{ color: '#4b5563' }}>
                            Here&rsquo;s the shape of it before the full breakdown: what you pay up front and what you get credited each month, all resulting in the opportunity to end up in a financially stronger position.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {metrics.map(({ Icon, stat, label, sub }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="bg-sand-50 rounded-2xl p-7 flex flex-col"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center mb-4">
                                    <Icon size={18} className="text-navy-600" />
                                </div>
                                <p className="text-4xl font-light text-navy-800 tracking-tight mb-2">{stat}</p>
                                <p className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-3">{label}</p>
                                <p className="text-base text-slate-600 leading-relaxed">{sub}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── 3. Calculator — personalize before the deep dive ── */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-10">
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">Interactive Calculator</p>
                        <h2 className="text-3xl font-bold text-navy-800">Run the numbers on your home.</h2>
                        <p className="mt-3 text-base max-w-xl" style={{ color: '#4b5563' }}>
                            Enter a home price and see your Option Consideration, monthly lease payment, and Rental Credits in real time.
                        </p>
                    </div>
                    <InteractiveCalculator />

                    {/* "See full numbers" CTA — anchors to the $100k financial model below. */}
                    <div className="mt-8">
                        <a
                            href="#full-numbers"
                            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-full transition-colors text-sm group"
                        >
                            See full numbers
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ── 4. Full Transparency: $100k Model + Payment Structure + Right to Purchase ── */}
            <section id="full-numbers" className="py-20 bg-neutral-50 scroll-mt-28">
                <div className="container mx-auto px-6 max-w-7xl">

                    <div className="mb-12">
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">See It in Real Numbers</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">The $100,000 Home Model</h2>
                        <p className="text-base leading-relaxed max-w-2xl" style={{ color: '#4b5563' }}>
                            This is one home worked from start to finish, with every figure on the table: what you pay to get in, what you pay each month, what you earn back, and what it would cost to buy at different points. It&rsquo;s a map for how your own numbers would come together — no fine print, no surprises.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        {[
                            { Icon: Home,       label: 'Purchase Price',         value: '$100,000', sub: 'The price Berry Rock Homes purchases the property for.',              accent: false },
                            { Icon: PiggyBank,  label: 'Option Consideration',   value: '$7,000',   sub: '7% of purchase price paid up front. Fully credited back at purchase.',      accent: false },
                            // Aug 7 (00:16:22 and 00:17:53): "take out the includes estimated
                            // taxes and insurance and just say your out the door payment less
                            // any HOA or community fees. Just say that."
                            { Icon: Calendar,   label: 'Monthly Lease Payment',  value: '$1,215',   sub: 'Your out-the-door payment, less any HOA or community fees. Rounded to the nearest $10.', accent: false },
                            { Icon: TrendingUp, label: 'Monthly Rental Credit',  value: '$100',     sub: '0.1% of original purchase price credited back when rent is paid on time.',  accent: true },
                        ].map(({ Icon, label, value, sub, accent }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="bg-sand-50 rounded-2xl p-7 flex flex-col"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center mb-4">
                                    <Icon size={18} className="text-navy-600" />
                                </div>
                                <p className={`text-4xl font-light tracking-tight mb-2 ${accent ? 'text-green-600' : 'text-navy-800'}`}>{value}</p>
                                <p className="text-xs font-bold text-navy-600 uppercase tracking-widest mb-3">{label}</p>
                                <p className="text-base text-slate-600 leading-relaxed">{sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4 space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-navy-800 mb-4">Payment Structure</h3>
                                {/* Aug 7 (00:19:00), Nick's dictated condition: "if underlying
                                    cost of the property increase above 3%, Berry Rock reserves
                                    the right to raise rent accordingly every two years." The
                                    earlier copy promised an automatic minimum 3% rise every two
                                    years, which is a stronger claim than the contract makes. */}
                                <p className="text-slate-600 mb-6">
                                    Your payment is reviewed every 2 years. It stays where it is unless the underlying cost of the property, things like property taxes and insurance, goes up. The schedule below shows what a 3% adjustment would look like.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                <h4 className="font-bold text-navy-800 mb-4 text-xs uppercase tracking-[0.2em] border-b border-gray-200 pb-3">Payment Schedule Example</h4>
                                <ul className="space-y-3 font-medium">
                                    <li className="flex justify-between items-center text-slate-600">
                                        <span>Years 1 &amp; 2</span>
                                        <span className="font-bold text-navy-800">$1,215 <span className="text-xs text-slate-600 font-normal">/mo</span></span>
                                    </li>
                                    <li className="flex justify-between items-center text-slate-600 border-t border-gray-100 pt-3">
                                        <span>Years 3 &amp; 4</span>
                                        <span className="font-bold text-navy-800">$1,250 <span className="text-xs text-slate-600 font-normal">/mo</span></span>
                                    </li>
                                    <li className="flex justify-between items-center text-slate-600 border-t border-gray-100 pt-3">
                                        <span>Years 5 &amp; 6</span>
                                        <span className="font-bold text-navy-800">$1,285 <span className="text-xs text-slate-600 font-normal">/mo</span></span>
                                    </li>
                                    <li className="flex justify-between items-center text-slate-600 border-t border-gray-100 pt-3">
                                        <span>Years 7 &amp; 8</span>
                                        <span className="font-bold text-navy-800">$1,325 <span className="text-xs text-slate-600 font-normal">/mo</span></span>
                                    </li>
                                </ul>
                                {/* Nick asked for this note "underneath the payment schedule." */}
                                <p className="mt-5 pt-4 border-t border-gray-100 text-xs leading-relaxed text-slate-500">
                                    * If the underlying cost of the property increases above 3%, Berry Rock Homes reserves the right to raise rent accordingly every 2 years.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <h3 className="text-2xl font-bold text-navy-800 mb-4">Guaranteed Right to Purchase</h3>
                            <p className="text-slate-600 mb-8 max-w-2xl">
                                Berry Rock Homes extends a Guaranteed Right to Purchase at any time during the lease, as long as you remain in good standing with your lease requirements. The purchase price is the original purchase price plus 2% within 6 months, 4% within a year, 6% between 1 and 2 years, and 8% anytime after 2 years — less your Option Consideration and the monthly rental credits you&rsquo;ve accrued.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { label: 'Within 6 Months',          payout: '$94,400', lines: ['$100,000 Purchase Price + 2%', '$102,000', 'Minus $7,000 Option Consideration', '-$7,000', 'Minus 6-Month Rental Credit ($100 x 6)', '-$600'] },
                                    { label: 'Between 6 Months and 1 Year', payout: '$95,800', lines: ['$100,000 Purchase Price + 4%', '$104,000', 'Minus $7,000 Option Consideration', '-$7,000', 'Minus 12-Month Rental Credit ($100 x 12)', '-$1,200'] },
                                    { label: 'Between 1 Year and 2 Years',  payout: '$96,600', lines: ['$100,000 Purchase Price + 6%', '$106,000', 'Minus $7,000 Option Consideration', '-$7,000', 'Minus 24-Month Rental Credit ($100 x 24)', '-$2,400'] },
                                    { label: 'Anytime After 2 Years',       payout: '$97,400', lines: ['$100,000 Purchase Price + 8%', '$108,000', 'Minus $7,000 Option Consideration', '-$7,000', 'Minus 36-Month Rental Credit ($100 x 36)', '-$3,600'] },
                                ].map(({ label, payout, lines }) => (
                                    <div key={label} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                            <h4 className="font-bold text-navy-800 text-lg">{label}</h4>
                                            <div className="bg-neutral-50 border border-gray-200 text-navy-800 font-extrabold px-4 py-2 rounded-xl text-lg">
                                                {payout} <span className="flex items-center justify-end gap-1 text-xs font-medium text-slate-600 uppercase tracking-widest mt-0.5">Final Buyback Price <FinalPayoutTooltip /></span>
                                            </div>
                                        </div>
                                        <div className="text-sm text-slate-600 bg-neutral-50 p-4 rounded-xl border border-gray-100">
                                            {[0, 2, 4].map((j) => (
                                                <div key={j} className={`flex justify-between items-center ${j < 4 ? 'border-b border-gray-100 pb-2 mb-2' : ''}`}>
                                                    <span>{lines[j]}</span>
                                                    <span className={`font-bold ${lines[j + 1].startsWith('-$7') ? 'text-berry-700' : lines[j + 1].startsWith('-') ? 'text-green-700' : 'text-navy-800'}`}>{lines[j + 1]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Get Started CTA ── */}
            <QualifyCTA
                bg="bg-navy-50"
                breakoutSrc={null}
                houseBreakout={{
                    src: '/images/devon_cutout.png',
                    imgClass: 'absolute bottom-0 left-1/2 -translate-x-1/2 h-[132%] w-auto max-w-none',
                }}
                photos={[
                    { src: '/images/devon_photo.png',          alt: 'Future homeowner reviewing his Pathway plan on a laptop at his kitchen island' },
                    { src: '/images/jessica_home.png',         alt: 'Newly renovated craftsman home with a welcoming porch' },
                    { src: '/images/woman_coffee_kitchen.png', alt: 'New homeowner unlocking her front door for the first time' },
                    { src: '/images/sarah_david_home.png',     alt: 'Charming bungalow with a bright red front door' },
                ]}
            />

        </div>
    );
};

export default ByTheNumbers;
