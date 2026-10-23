'use client';

import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { markets } from '../../data/markets';
import InfoTooltip from '@/components/Shared/InfoTooltip';

// `stacked` renders the input + output halves in a single vertical column
// (for narrow contexts like the Apply-page sidebar). Default is the
// side-by-side layout used on the homepage and /your-money-at-work.
//
// `market` (a slug from data/markets.js) pins the calculator to that market's
// payment formula and hides the market picker — used on the market pages.
// Without it, the visitor picks their market from the dropdown.
// Markets with `stateOptions` (Kansas City) also get a state toggle;
// `initialState` (e.g. 'KS') picks which one starts selected.
const InteractiveCalculator = ({ stacked = false, market, initialState }) => {
    const [homePrice, setHomePrice] = useState(250000);
    const [selectedSlug, setSelectedSlug] = useState(markets[0].slug);
    const marketSlug = market || selectedSlug;
    const activeMarket = markets.find((m) => m.slug === marketSlug) || markets[0];
    const [stateKey, setStateKey] = useState(initialState);
    const stateOptions = activeMarket.stateOptions;
    const activeState = stateOptions && (stateOptions.find((o) => o.key === stateKey) || stateOptions[0]);
    const monthlyPaymentFormula = activeState ? activeState.monthlyPayment : activeMarket.monthlyPayment;

    // Program math, aligned with the Pathway Program terms:
    //  • Option Consideration = 7% of the purchase price
    //  • Monthly Lease Payment = the market's formula (see PAYMENT_FORMULAS in data/markets.js)
    //  • Monthly Rental Credit = 0.1% of the original purchase price per on-time payment
    const optionConsideration = Math.round(homePrice * 0.07);   // 7%
    const estimatedMonthlyPayment = Math.round(monthlyPaymentFormula(homePrice));
    const monthlyCredit = Math.round(homePrice * 0.001);        // 0.1%

    const usd = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
    const formattedPrice = usd(homePrice);
    const formattedOption = usd(optionConsideration);
    const formattedPayment = usd(estimatedMonthlyPayment);
    const formattedCredit = usd(monthlyCredit);

    return (
        <div className={`rounded-2xl border border-slate-100 shadow-sm overflow-hidden bg-white flex flex-col ${stacked ? '' : 'lg:flex-row'}`}>

            {/* Input Section */}
            <div className={`bg-white flex flex-col justify-center ${stacked ? 'p-6 sm:p-8' : 'p-8 lg:p-12 lg:w-1/2'}`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-navy-800 mb-2 tracking-tight">Estimate Your Numbers</h3>
                <p className="text-slate-700 mb-10 text-base leading-relaxed">
                    See what your Option Consideration, monthly lease payment, and Rental Credit might look like based on the home you choose.
                </p>

                {!market && (
                    <>
                        <label htmlFor="calc-market" className="block text-xs font-bold tracking-[0.18em] uppercase text-slate-600 mb-3">
                            Your Market
                        </label>
                        <select
                            id="calc-market"
                            value={selectedSlug}
                            onChange={(e) => setSelectedSlug(e.target.value)}
                            className="w-full mb-8 rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-navy-800 focus:outline-none focus:ring-2 focus:ring-berry-500 focus:border-berry-500 cursor-pointer"
                        >
                            {markets.map((m) => (
                                <option key={m.slug} value={m.slug}>{m.name}</option>
                            ))}
                        </select>
                    </>
                )}

                {stateOptions && (
                    <fieldset className="mb-8">
                        <legend className="block text-xs font-bold tracking-[0.18em] uppercase text-slate-600 mb-3">
                            State
                        </legend>
                        <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
                            {stateOptions.map((o) => {
                                const selected = o.key === activeState.key;
                                return (
                                    <label
                                        key={o.key}
                                        className={`cursor-pointer rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors focus-within:ring-2 focus-within:ring-berry-500 ${selected ? 'bg-white text-navy-800 shadow-sm' : 'text-slate-600 hover:text-navy-800'}`}
                                    >
                                        <input
                                            type="radio"
                                            name="calc-state"
                                            value={o.key}
                                            checked={selected}
                                            onChange={() => setStateKey(o.key)}
                                            className="sr-only"
                                        />
                                        {o.label}
                                    </label>
                                );
                            })}
                        </div>
                    </fieldset>
                )}

                <label htmlFor="calc-price" className="block text-xs font-bold tracking-[0.18em] uppercase text-slate-600 mb-5">
                    Desired Home Price
                </label>

                <input
                    id="calc-price"
                    type="range"
                    min="100000"
                    max="600000"
                    step="10000"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    aria-valuetext={formattedPrice}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-berry-600 mb-8"
                />

                <div className="bg-sand-50 p-5 rounded-2xl border border-sand-200 flex items-end justify-between">
                    <span className="text-slate-500 font-medium text-sm">Home Price</span>
                    <span className="text-4xl font-light text-navy-800 tracking-tight tabular-nums">{formattedPrice}</span>
                </div>

                <p className="mt-6 text-xs text-slate-600 leading-relaxed">
                    Calculations are estimated averages and vary based on your market, exact property taxes, insurance, HOA fees, and changing market conditions. This is not a formal quote.
                </p>
            </div>

            {/* Output Section */}
            <div className={`bg-sand-50 border-sand-200 flex flex-col justify-center ${stacked ? 'p-6 sm:p-8 border-t' : 'p-8 lg:p-12 lg:w-1/2 border-t lg:border-t-0 lg:border-l'}`}>

                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-navy-600 mb-8">Estimated Pathway Breakdown</h3>

                {/* Moving the slider silently rewrote all three figures below.
                    The slider announces its own value, but nothing announced the
                    numbers that are the actual point of the tool (WCAG 4.1.3).
                    One polite region carrying the whole summary rather than three
                    separate ones, so a screen reader reads a single coherent
                    sentence per change instead of three interleaved fragments. */}
                <p className="sr-only" aria-live="polite">
                    {`Option Consideration ${formattedOption}. Monthly lease payment ${formattedPayment}. Monthly rental credit ${formattedCredit}.`}
                </p>

                <div className="space-y-6 w-full">

                    {/* Option Consideration */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-600 font-medium">Option Consideration</span>
                            <InfoTooltip label="What is an Option Consideration?">
                                <strong className="block mb-1.5">What is an Option Consideration?</strong>
                                Instead of a bank down payment, you pay a 7% Option Consideration to Berry Rock Homes. It locks in your right to buy the home at a set price, and 100% of it is credited toward the purchase price when you transition to ownership.
                            </InfoTooltip>
                        </div>
                        <motion.span
                            key={`opt-${optionConsideration}`}
                            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                            className="text-3xl font-light tracking-tight text-navy-800 tabular-nums"
                        >
                            {formattedOption}
                        </motion.span>
                    </div>

                    <div className="w-full h-px bg-sand-200" />

                    {/* Monthly Lease Payment */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-600 font-medium">Monthly Lease Payment</span>
                            {/* Aug 7 (00:17:53): "just say your out the door monthly payment
                                less any HOA or community fees." Berry Rock Homes pays the
                                taxes and insurance during the lease; an HOA fee, if the
                                neighborhood has one, is added on top. */}
                            <InfoTooltip label="What is the Monthly Lease Payment?">
                                This is your out-the-door monthly payment, less any HOA or community fees. A portion comes back to you each month as a Rental Credit.
                            </InfoTooltip>
                        </div>
                        <motion.span
                            key={`pay-${estimatedMonthlyPayment}`}
                            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                            className="text-3xl font-light tracking-tight text-navy-800 tabular-nums"
                        >
                            {formattedPayment}
                        </motion.span>
                    </div>

                    <div className="w-full h-px bg-sand-200" />

                    {/* Monthly Rental Credit */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-green-700 font-semibold">Monthly Rental Credit</span>
                            <InfoTooltip label="What is the Monthly Rental Credit?" tone="green">
                                Each on-time payment earns a credit equal to 0.1% of the original purchase price. It accrues over time and lowers what you owe when you buy the home.
                            </InfoTooltip>
                        </div>
                        <motion.span
                            key={`credit-${monthlyCredit}`}
                            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                            className="text-lg font-bold text-green-700 bg-green-50 px-4 py-1.5 rounded-lg border border-green-100 tabular-nums"
                        >
                            +{formattedCredit}
                        </motion.span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InteractiveCalculator;
