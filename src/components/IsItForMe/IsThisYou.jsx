'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Briefcase, KeyRound, TrendingUp, Luggage } from 'lucide-react';

const personas = [
    {
        Icon: Briefcase,
        tabLabel: 'Self-employed & 1099',
        name: 'You work for yourself.',
        lenderSees: 'Irregular paychecks and no W-2 to point to.',
        berrySees: 'Real contracts and steady cash flow — $92,500 last year across consulting, contract, and freelance work.',
        reassurance: 'Your income is real. It just doesn’t fit neatly on a W-2. We review your actual cash flow, contracts, and revenue — not a checklist built for someone else.',
        image: '/images/isitforme/self_employed.png',
        alt: 'Self-employed professional at work',
    },
    {
        Icon: KeyRound,
        tabLabel: 'Current renters',
        name: 'You’ve paid rent on time for years.',
        lenderSees: 'No mortgage history on file.',
        berrySees: '36 months of on-time housing payments — a track record that counts.',
        reassurance: 'That track record means something. The Pathway Program lets you keep building toward a locked-in purchase price on a home you actually choose.',
        image: '/images/isitforme/current_renters.png',
        alt: 'Current renter in their home',
    },
    {
        Icon: TrendingUp,
        tabLabel: 'Credit rebuilders',
        name: 'Your score doesn’t tell your full story.',
        lenderSees: 'A single number from your past.',
        berrySees: 'A story behind every credit number. We look beyond credit to provide opportunities.',
        reassurance: 'We rely on income and assets rather than a credit score, which allows more flexibility in approval and gives you time to rebuild your score.',
        image: '/images/isitforme/credit_rebuilders.png',
        alt: 'Person on a path to rebuilding credit and homeownership',
    },
    {
        Icon: Luggage,
        tabLabel: 'Recent job changers',
        name: 'You changed jobs, not your work ethic.',
        lenderSees: 'Not enough employment history.',
        berrySees: 'A signed offer and a clear path — $87,000 a year as a Senior Project Manager.',
        reassurance: 'Traditional lenders have stringent employment requirements. We consider your offer letter, salary history, where you’re headed, and other forms of verification, so all of your income counts.',
        image: '/images/isitforme/recent_job_changers.png',
        alt: 'Recent career changer ready to become a homeowner',
    },
];

export default function IsThisYou() {
    const [active, setActive] = useState(0);
    const p = personas[active];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-sand-50 via-sand-50 to-berry-50/60 py-16 lg:py-[64px]">
            {/* Soft decorative wash — matches the "good company" band on the About page */}
            <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-berry-100/50 blur-3xl" />

            <div className="relative mx-auto px-6 lg:px-[64px] max-w-[1120px]">

                {/* ── Header ── */}
                <div className="text-center mb-[34px] max-w-2xl mx-auto">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">Who It&rsquo;s For</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-800 leading-tight">
                        A different way to look at your readiness.
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed mt-4">
                        These are some of the most common reasons people come to Berry Rock Homes — not a checklist you need to match exactly. Find the situation that sounds like yours, and see how we look at it differently than a traditional lender.
                    </p>
                </div>

                {/* Not ARIA tabs. These are plain buttons that swap a panel:
                    each one is individually tab-reachable and activates on
                    Enter/Space, which is exactly what a button does. The markup
                    used to claim role="tablist"/role="tab", which promises the
                    ARIA tabs keyboard model — arrow keys to move between tabs,
                    Home/End, and only the selected tab in the tab sequence —
                    none of which was implemented. Declaring the honest role is
                    better than announcing a model the widget does not honour.
                    role="group" keeps the useful grouping announcement. */}
                {/* ── Selector row — underline style (aligned with Realtor Resources) ── */}
                <div
                    className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-6 sm:gap-8 border-b border-[#E6DCCB] mb-8 overflow-x-auto md:overflow-x-visible -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                    role="group"
                    aria-label="Buyer situations"
                >
                    {personas.map(({ Icon, tabLabel }, i) => {
                        const isActive = i === active;
                        return (
                            <button
                                key={tabLabel}
                                type="button"
                                id={`persona-btn-${i}`}
                                aria-pressed={isActive}
                                aria-controls="persona-panel"
                                onClick={() => setActive(i)}
                                className={`relative -mb-px pb-4 inline-flex items-center gap-2 text-sm sm:text-base font-bold whitespace-nowrap flex-none transition-colors ${
                                    isActive ? 'text-berry-700' : 'text-slate-600 hover:text-navy-800'
                                }`}
                            >
                                <Icon
                                    size={17}
                                    strokeWidth={1.8}
                                    className={isActive ? 'text-berry-600' : 'text-slate-500'}
                                    aria-hidden="true"
                                />
                                {tabLabel}
                                {isActive && (
                                    <motion.span
                                        layoutId="personaTabUnderline"
                                        className="absolute left-0 right-0 -bottom-px h-[2.5px] bg-berry-600 rounded-full"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* ── Panel card ── */}
                <div
                    id="persona-panel"
                    role="region"
                    aria-labelledby={`persona-btn-${active}`}
                    className="bg-white border border-[#ECE4D7] rounded-[24px] overflow-hidden"
                    style={{ boxShadow: '0 18px 44px rgba(27,39,64,0.07)' }}
                >
                    <div key={active} className="grid md:grid-cols-[0.85fr_1fr] gap-0 md:gap-[44px] items-center">

                        {/* Media — left on desktop, top on mobile */}
                        <div className="p-[26px] md:pr-0 md:py-[26px] md:pl-[26px]">
                            <div className="relative rounded-[18px] overflow-hidden h-[260px] md:h-[400px]">
                                <Image
                                    src={p.image}
                                    alt={p.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 480px"
                                    priority={active === 0}
                                />
                                {/* Persona chip overlay */}
                                <div className="absolute top-4 left-4 inline-flex items-center gap-[7px] rounded-full px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.04em] text-navy-800 z-10"
                                    style={{ background: 'rgba(255,255,255,0.78)' }}
                                >
                                    <p.Icon size={14} strokeWidth={1.6} className="text-berry-700 shrink-0" aria-hidden="true" />
                                    {p.tabLabel}
                                </div>
                            </div>
                        </div>

                        {/* Content — right on desktop, below on mobile */}
                        <div className="px-6 pb-6 pt-0 md:pt-[30px] md:pr-[40px] md:pb-[30px] md:pl-[6px]">

                            {/* Persona name */}
                            <h3 className="text-[22px] md:text-[28px] font-bold leading-[1.2] text-navy-800 mb-[22px]">
                                {p.name}
                            </h3>

                            {/* Lens-flip block */}
                            <div className="bg-sand-50 border border-[#ECE4D7] rounded-2xl p-[22px] flex flex-col gap-[18px] mb-[22px]">

                                {/* Lender row */}
                                <div className="flex gap-[14px] items-start">
                                    <span
                                        className="flex-none w-[26px] h-[26px] rounded-full inline-flex items-center justify-center mt-0.5 text-slate-600"
                                        style={{ background: '#EFEAE1' }}
                                        aria-hidden="true"
                                    >
                                        <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-600 mb-1">
                                            What a lender sees
                                        </p>
                                        <p className="text-[15px] leading-relaxed text-slate-600">{p.lenderSees}</p>
                                    </div>
                                </div>

                                <div className="h-px bg-[#E6DCCB]" />

                                {/* Berry Rock row */}
                                <div className="flex gap-[14px] items-start">
                                    <span
                                        className="flex-none w-[26px] h-[26px] rounded-full bg-berry-700 text-white inline-flex items-center justify-center mt-0.5"
                                        aria-hidden="true"
                                    >
                                        <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </span>
                                    <div>
                                        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-berry-700 mb-1">
                                            What Berry Rock sees
                                        </p>
                                        <p className="text-[16.5px] leading-relaxed text-navy-800 font-medium">{p.berrySees}</p>
                                    </div>
                                </div>

                            </div>

                            {/* Reassurance paragraph */}
                            <p className="text-[15.5px] leading-[1.65] text-slate-600 max-w-[52ch]">
                                {p.reassurance}
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
