'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ─── Data ──────────────────────────────────────────────────────────────────

const categories = [
    {
        id: 'the-basics',
        label: 'The Basics',
        items: [
            {
                q: 'What is the Pathway Program℠?',
                a: "The Pathway Program℠ is Berry Rock Homes' lease-to-purchase program: a structured path from renting to owning for people who aren't yet approved for a traditional mortgage. You find the home you want on the open market, Berry Rock Homes purchases it through a reliable closing on your behalf, and you move in as a tenant with a locked-in purchase price from day one. Your monthly lease payments are reported to all three credit bureaus while Monthly Rental Credits accumulate toward closing. When you're mortgage-ready (typically around 14 months), you exercise your option and purchase the home.",
            },
            {
                q: 'What exactly is a lease-to-purchase program?',
                a: "A lease-to-purchase program lets you move into the home you want to buy before you qualify for a traditional mortgage. Berry Rock Homes purchases the home on your behalf, leases it to you at a market rate, and grants you the exclusive Right to Purchase it at a locked-in price. You use the lease period to build credit, save, or establish employment history. When you're ready, you exercise your option and buy the home, with your Rental Credits applied at closing.",
            },
            {
                q: 'Who owns the home while I am leasing it?',
                a: "Berry Rock Homes (or an affiliated investment entity) holds title to the property during your lease period. You are the tenant of record with an exclusive, Guaranteed Right to Purchase it. No one else can buy the home out from under you. Your right to purchase is legally protected from day one.",
            },
            {
                q: 'What paperwork will I sign?',
                a: "Your agreement is built on two documents, and you review both before you move in. The first is a residential lease, which sets your monthly lease payment and covers the term, maintenance responsibilities, and day-to-day terms of living in the home. The second is your Right to Purchase agreement, which grants you the exclusive, guaranteed option to buy the home at your locked-in price. Together, the lease covers where you live today and the Right to Purchase protects your path to owning it.",
            },
            {
                q: 'What is the Right to Purchase?',
                a: "The Right to Purchase (also called your purchase option) is the agreement that gives you the exclusive, guaranteed right to buy the home at a price locked in on the day we go under contract. It is secured by your 7% Option Consideration and held in your name from day one, so no one else can purchase the home while you're leasing it. It is a right, not an obligation: you choose whether to exercise it, and when you do, your Option Consideration and accrued Monthly Rental Credits are applied at closing.",
            },
            {
                q: 'How do the lease and the Right to Purchase work together?',
                a: "The lease governs your time in the home as a tenant: your monthly payment, the term, and your responsibilities while living there. The Right to Purchase runs alongside it and protects your ability to buy that same home at the locked-in price. While you lease, every on-time payment is reported to all three credit bureaus and earns a Monthly Rental Credit. When you're mortgage-ready, you exercise the Right to Purchase, your credits and Option Consideration apply at closing, and you take title to the home.",
            },
            {
                q: 'Am I obligated to buy the home?',
                a: "No. Our program is designed for people who intend to buy, but we understand life changes. If at the end of your lease term you decide not to purchase, you can walk away. You would forfeit your Option Consideration fee, but you are not legally obligated to close on a mortgage. That said, we do everything we can to set you up to succeed. Most of our clients do purchase.",
            },
            {
                q: 'What markets does Berry Rock Homes operate in?',
                a: "We currently work in Indianapolis, IN; Kansas City, MO/KS; Oklahoma City, OK; St. Louis, MO; and Tulsa, OK. We are actively evaluating additional Midwest and Mid-South markets. If your city isn't listed, contact us. We may have something in the pipeline.",
            },
            {
                q: 'Is this a loan or "hard money"?',
                a: "No. We do not provide loans, and we are not hard money. We are a gap program that bridges where you are now and the point when you can qualify for a mortgage. We buy the home in our name, lease it to you, and give you the guaranteed right to purchase it when you become mortgage eligible. We also report your good payment history to all three credit bureaus to help you qualify for a mortgage sooner.",
            },
            {
                q: 'How is this different from a traditional rent-to-own company?',
                a: "Most rent-to-own arrangements offer only a limited inventory of homes the company already owns. You pick from their catalog. Berry Rock Homes works differently: you choose any qualifying home on the open market with your own agent, we buy it through a reliable closing, and lease it back to you with a purchase option. Your neighborhood, your school district, your layout, not ours. Every number is disclosed up front with no hidden fees.",
            },
        ],
    },
    {
        id: 'qualification',
        label: 'Qualification & Credit',
        items: [
            {
                q: 'What are the basic qualification requirements?',
                a: "We look at four things: (1) Stable household income of $50,000+ per year. W-2, self-employed, and 1099 income are all accepted with proper documentation; (2) A minimum credit score of around 550; (3) Current on all housing payments for the past 6 months with no severe recent evictions; and (4) At least 7% of the purchase price available for your Option Consideration at time of contract.",
            },
            {
                q: 'What if my credit score is very low?',
                a: "A 550 is our general floor, but we evaluate the full picture. If your score is lower but you have strong income, stable rental history, and a recent improving trend, we may still be able to build a pathway. We also partner with credit counseling resources to help applicants who need a few months of preparation before they qualify.",
            },
            {
                q: "I'm self-employed. Can I still qualify?",
                a: "Yes, and this is one of the most common reasons people come to us. Traditional lenders require 2 years of self-employment history on your taxes, which often understates actual income. We review your business revenue, bank statements, client contracts, and payment history to build a more complete picture. Many self-employed clients who didn't fit the traditional banking checklist have been accepted through our program.",
            },
            {
                q: 'I have a prior bankruptcy. Can I still qualify?',
                a: "Not necessarily. We require that any active, open, non-discharged bankruptcies be at least 12–24 months old. A discharged bankruptcy, especially with a positive track record since, may still be workable. Every situation is reviewed individually.",
            },
            {
                q: 'Will applying affect my credit score?',
                a: "Our initial review uses a soft credit pull, which does not affect your score. A hard pull is only conducted later in the process with your explicit consent, and only when you are ready to proceed.",
            },
        ],
    },
    {
        id: 'financials',
        label: 'Financials & Costs',
        items: [
            {
                q: 'How much do I pay up front?',
                a: "You pay a 7% Option Consideration (7% of the purchase price) within 3 days of going under contract. On a $200,000 home, that's $14,000. 100% of it is credited toward your purchase price at closing. It is fully refunded if your offer is not accepted, and refunded minus any hard costs already incurred if the contract falls through. It is non-refundable if you choose not to buy.",
            },
            {
                q: 'What is the Option Consideration?',
                a: "The Option Consideration is 7% of the purchase price paid up front to secure your Guaranteed Right to Purchase the home at the locked-in price. It is not a down payment, and it is non-refundable if you choose not to buy. Every dollar is credited toward the purchase price at closing when you exercise your right to purchase.",
            },
            {
                q: 'Do I get credit for the Option Consideration?',
                a: "Yes. Your 7% Option Consideration is credited to you once you obtain your mortgage and purchase the home back from Berry Rock Homes, where it counts as earnest money under your Guaranteed Right to Purchase. We collect it within 3 days of placing a contract on the home you select. If it is not funded within those 3 days, the contract is automatically canceled and you become ineligible to go through our program with another home. Because of this policy, please be sure to have all funds for your 7% Option Consideration available at the time we place an offer on your home.",
            },
            {
                q: 'What does the monthly payment include?',
                a: "Your monthly payment is your out-the-door rent payment. The only other possible charge is an HOA fee, and only if the neighborhood you choose requires one. In that case, the HOA fee is added to your monthly payment. There are no other monthly obligations. Berry Rock Homes is simple and transparent: you pay only the quoted monthly rent payment and nothing more until you buy the home from us. Note that monthly payments increase 3% every two years.",
            },
            {
                q: 'Is any of my money going toward my purchase price?',
                a: "Yes. Each month, 0.1% of the original purchase price is credited toward reducing the amount you owe. On a $100,000 home, that is a $100 monthly credit ($100,000 x 0.001 = $100). These Monthly Rental Credits add up over your lease and are applied when you purchase the home.",
            },
            {
                q: 'What upfront fees do I have to pay?',
                a: "Berry Rock Homes does not charge any fees or application charges other than the 7% Option Consideration. We simply require 7% of the home price for your Option Consideration, and then you pay the quoted monthly payments. We also negotiate for the seller to pay closing costs. No surprise charges.",
            },
            {
                q: 'How is my monthly payment determined?',
                a: "You lease the home for a monthly payment, and you have the option to buy once you qualify for a mortgage. The payment increases 3% every two years. Each on-time payment earns a Monthly Rental Credit equal to 0.1% of the original purchase price. On a $200,000 home, that's $200 per month building toward your closing.",
            },
            {
                q: 'What happens to my money if I leave?',
                a: "Your Option Consideration is non-refundable if you choose not to purchase. Your accrued Monthly Rental Credits apply only at closing, so they do not pay out if you walk away. However, nothing you paid in rent is lost differently than it would be in a standard rental. Your on-time payment history reported to the credit bureaus stays with you permanently.",
            },
            {
                q: 'Is the purchase price locked in at the start?',
                a: "Yes. Your future purchase price is agreed upon and locked in on the day we go under contract, before you move in. Whether the market goes up or down during your lease period, your price does not change. This is one of the most valuable features of the program, especially in appreciating markets.",
            },
            {
                q: 'Do I have to pay closing costs?',
                a: "No. We ask the seller to pay all closing costs, so the only thing you pay before the acquisition is your 7% Option Consideration. If the seller refuses to cover the closing costs, you can either make up the difference yourself or choose another home.",
            },
            {
                q: 'Are there hidden fees or surprise costs?',
                a: "None. Before you sign anything, every number is disclosed: your monthly lease payment, your locked-in purchase price, your Option Consideration amount, and what happens to your Rental Credits. No origination fees, no processing fees, no surprises. $0 lost to fees. That's the promise.",
            },
            {
                q: 'Who is responsible for repairs and maintenance?',
                a: "During the lease period, you are responsible for routine maintenance as a standard tenant, just as you would be in any rental. For major structural or systems issues, responsibility is outlined in your lease agreement and follows standard landlord-tenant norms for your state. When you purchase the home, all maintenance becomes your responsibility as the owner.",
            },
        ],
    },
    {
        id: 'the-process',
        label: 'The Process',
        items: [
            {
                q: 'How quickly can I find out if I qualify?',
                a: "Most applicants receive a preliminary decision within 24–48 hours of submitting a complete application. We move quickly because we know that in a competitive market, timing matters. Once you qualify, you can begin shopping for homes immediately.",
            },
            {
                q: 'Do I have to choose from your inventory?',
                a: "No. You choose any home you want on the open market with your own agent, not our inventory. We purchase it through a reliable closing on your behalf as long as it appraises at the purchase price, is insurable, and falls within your estimated eligible price range. Your agent, your neighborhood, your home.",
            },
            {
                q: 'Is Berry Rock Homes a home listings service?',
                a: "No. Berry Rock Homes is not a listings service, and we do not sell you a home out of an inventory. You and your agent choose any qualifying home for sale on the open market within the Indianapolis coverage area. The home must appraise at the purchase price, be insurable, and fall within your estimated eligible amount. Some restrictions apply. Once you find the right home, we purchase it through a reliable closing on your behalf and lease it back to you with your locked-in purchase option.",
            },
            {
                q: 'What is a coverage area?',
                a: "A coverage area is the geographic region around each of our markets where Berry Rock Homes is able to purchase a home for you. You and your agent choose any qualifying home for sale on the open market within your market's coverage area, such as the Indianapolis coverage area. If a home sits outside the coverage area, we are not able to purchase it, even if it would otherwise qualify. When you apply, we confirm the exact boundaries for your market so you know where to shop.",
            },
            {
                q: 'What kinds of homes are not covered?',
                a: "A few property types fall outside the program. We do not purchase mobile or manufactured homes. Beyond that, every home must appraise at the purchase price, be insurable, and fall within your estimated eligible amount, so a property that cannot be appraised at the contract price, cannot be insured, or sits outside your coverage area or eligible range is not covered. Some additional restrictions apply, and we confirm the specifics with you before you start shopping.",
            },
            {
                q: 'Do you buy mobile or manufactured homes?',
                a: "No. Berry Rock Homes does not purchase mobile or manufactured homes through the Pathway Program. We focus on qualifying homes for sale on the open market that can appraise at the purchase price, be insured, and fall within your estimated eligible amount. Some restrictions apply.",
            },
            {
                q: 'What will my buyback price be?',
                a: "Your purchase price is locked in on the day we go under contract. When you exercise your option, a time-based markup is added to that price, then your Option Consideration and accrued Monthly Rental Credits are subtracted. The markups by timing: +2% within 6 months, +4% between 6 months and 1 year, +6% between 1–2 years, +8% after 2 years. On a $200,000 home purchased at the 1-year mark: $200,000 + 4% ($208,000), minus $14,000 Option Consideration, minus 12 Rental Credits. A concrete number you'll know from day one.",
            },
            {
                q: 'How does the offer and closing process work?',
                a: "Once you identify a home, we review it quickly. If it meets our criteria, we submit an offer. Reliable closings happen faster and are more competitive than financed offers, giving you an edge over other buyers in the same market. Our typical close time from accepted offer to keys is around 30 days.",
            },
            {
                q: 'What happens at the end of my lease term?',
                a: "As your lease term approaches, we begin the mortgage readiness review process with you. If you're ready, we facilitate your purchase: your option is exercised, your Rental Credits are applied at closing, and you take title to the home. If you need more time, we discuss options. If you choose not to purchase, you vacate the property at the end of the lease term.",
            },
            {
                q: 'How long until I own?',
                a: "Our participants reach ownership in about 14 months on average. The actual timeline depends on how long it may take you to become mortgage-ready. Most people are in the program between 12 and 24 months. We set a realistic target with you from day one, not an arbitrary deadline.",
            },
        ],
    },
    {
        id: 'after-move-in',
        label: 'After You Move In',
        items: [
            {
                q: 'Do my on-time payments get reported to the credit bureaus?',
                a: "Yes. Every on-time lease payment is reported to all three major credit bureaus: Equifax, Experian, and TransUnion. This means each payment builds your credit history, often resulting in meaningful score improvements over the course of your lease. Most participants see real improvement within 12 months.",
            },
            {
                q: 'Will I have support throughout the lease period?',
                a: "Absolutely. You have a dedicated account manager throughout the program. We also connect you with credit counseling resources, mortgage readiness guidance, and trusted lending partners who understand the Pathway Program structure. You're not on your own.",
            },
            {
                q: "Can I make improvements to the home while I'm leasing it?",
                a: "Minor cosmetic improvements (painting, landscaping, fixtures) are generally permitted with advance notice. Structural changes or significant renovations require written approval from Berry Rock Homes. Since you plan to own the home, we want to support you in making it yours. We just need to be aligned before you start.",
            },
            {
                q: 'Are pets allowed?',
                a: "Yes. Pets are welcome with verification of a renters insurance policy that covers pet-related incidents. One exception applies: due to our insurance requirements, pit bulls are not allowed. Any other terms, such as a pet deposit, are spelled out in your lease agreement, just as they would be in a standard residential lease. If you have pets, let us know early so everything is documented up front and there are no surprises.",
            },
            {
                q: 'What if something happens to me financially during the lease period?',
                a: "Life happens, and we understand that. If you run into financial hardship, we want to hear from you early, before payments fall behind. We work with participants to find solutions where we can. The goal is always to get you to ownership, and that means being a partner, not just a landlord.",
            },
        ],
    },
];

// ─── FAQItem Component ──────────────────────────────────────────────────────

const FAQItem = ({ id, question, answer, initiallyOpen }) => {
    const [isOpen, setIsOpen] = useState(!!initiallyOpen);

    useEffect(() => {
        if (initiallyOpen) setIsOpen(true);
    }, [initiallyOpen]);

    return (
        <div id={id} className="border border-gray-200 rounded-xl overflow-hidden scroll-mt-28">
            {/* aria-expanded is the only thing that tells a screen reader whether
                this answer is open — the rotating plus icon is purely visual, and
                aria-hidden below keeps it from being announced as text. */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`${id}-answer`}
                className="w-full flex items-start justify-between gap-4 p-5 bg-white hover:bg-neutral-50 transition-colors text-left"
            >
                <span className="font-semibold text-navy-800 leading-snug flex-1">
                    {question}
                </span>
                <div
                    aria-hidden="true"
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-navy-800 text-white flex items-center justify-center transition-transform ${isOpen ? 'rotate-45' : ''}`}
                >
                    <Plus size={14} />
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="overflow-hidden"
                        id={`${id}-answer`}
                        role="region"
                        aria-label={question}
                    >
                        <p className="border-t border-gray-100 bg-neutral-50 p-5 text-base leading-relaxed" style={{ color: '#334155' }}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ─── Main FAQ View ──────────────────────────────────────────────────────────

const FAQ = () => {
    const pathname = usePathname();
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const sectionRefs = useRef({});
    const mobilePillRefs = useRef({});

    const generateId = (str) =>
        str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    // Handle hash on mount
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setTimeout(() => {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        }
    }, [pathname]);

    // Intersection observer: update active category as user scrolls
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveCategory(entry.target.dataset.categoryId);
                    }
                });
            },
            { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
        );

        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Scroll active pill into view on mobile when activeCategory changes
    useEffect(() => {
        const pill = mobilePillRefs.current[activeCategory];
        if (pill) {
            pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, [activeCategory]);

    // Scroll to category section
    const scrollToCategory = (id) => {
        setActiveCategory(id);
        const el = sectionRefs.current[id];
        if (el) {
            const offset = 100;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white">

            {/* ── Header ── clean white, no dark background */}
            <div className="pt-[200px] lg:pt-[240px] pb-14 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3"
                    >
                        Pathway Program<sup className="text-[0.6em] tracking-normal">SM</sup>
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4"
                    >
                        FAQs
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="text-slate-500 text-lg leading-relaxed max-w-xl"
                    >
                        Everything you need to know about the Pathway Program, answered plainly, without the fine print runaround.
                    </motion.p>
                </div>
            </div>

            {/* ── Mobile: horizontal pill nav ── */}
            <div className="lg:hidden sticky top-16 z-20 bg-white border-b border-slate-100 px-6 py-3 overflow-x-auto flex gap-2 scrollbar-none">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        ref={(el) => { mobilePillRefs.current[cat.id] = el; }}
                        onClick={() => scrollToCategory(cat.id)}
                        className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm transition-colors flex-shrink-0 ${
                            activeCategory === cat.id
                                ? 'bg-slate-900 text-white font-medium'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* ── Body: questions left, sticky nav right ── */}
            <div className="container mx-auto px-6 max-w-7xl py-14">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                    {/* Accordion sections — left / wider column */}
                    <div className="flex-1 min-w-0 space-y-12">
                        {categories.map((cat) => (
                            <section
                                key={cat.id}
                                ref={(el) => { sectionRefs.current[cat.id] = el; }}
                                data-category-id={cat.id}
                                className="scroll-mt-28"
                            >
                                {/* Section label */}
                                <h2 className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-5">
                                    {cat.label}
                                </h2>

                                {/* Accordion items */}
                                <div className="space-y-3">
                                    {cat.items.map((item, idx) => {
                                        const faqId = generateId(item.q);
                                        return (
                                            <FAQItem
                                                key={idx}
                                                id={faqId}
                                                question={item.q}
                                                answer={item.a}
                                                initiallyOpen={
                                                    typeof window !== 'undefined' &&
                                                    window.location.hash.replace('#', '') === faqId
                                                }
                                            />
                                        );
                                    })}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Sticky category nav — right / narrower column */}
                    <aside className="hidden lg:block w-48 shrink-0">
                        <div className="sticky top-28">
                            <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-5">
                                Categories
                            </p>
                            <nav aria-label="FAQ categories" className="flex flex-col gap-1">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => scrollToCategory(cat.id)}
                                        className={`text-left text-sm py-1 transition-colors ${
                                            activeCategory === cat.id
                                                ? 'text-berry-700 font-semibold'
                                                : 'text-slate-500 hover:text-slate-900'
                                        }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                </div>
            </div>

            {/* Closing band — real families anchored to the bottom of the module */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="container mx-auto px-6 max-w-7xl mt-16 lg:mt-24"
            >
                <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-sand-50 via-sand-50 to-berry-50/60 ring-1 ring-slate-900/5">
                    {/* Soft decorative wash */}
                    <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full bg-berry-100/50 blur-3xl" />

                    <div className="relative grid lg:grid-cols-[0.85fr_1.15fr] items-end gap-8 lg:gap-4">
                        {/* Left: closing message */}
                        <div className="px-8 pt-12 pb-10 lg:px-12 lg:pt-16 lg:pb-20">
                            <p className="text-xs font-bold text-berry-700 uppercase tracking-[0.22em] mb-4">You're in good company</p>
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-5">
                                Families like yours are<br />
                                <span className="text-berry-600">already on the path.</span>
                            </h3>
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-md">
                                Every story starts with one decision. Join the thousands who chose a clearer way home.
                            </p>
                            <Link
                                href="/apply"
                                className="inline-flex items-center gap-2 bg-berry-700 hover:bg-berry-800 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                            >
                                See If You Qualify
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>

                        {/* Right: people cutout anchored to the bottom edge */}
                        <div className="relative flex items-end justify-center lg:justify-end self-stretch">
                            <img
                                src="/images/family1.png"
                                alt="A diverse group of Berry Rock Homes families"
                                className="block w-full max-w-none h-auto object-contain object-bottom select-none pointer-events-none"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default FAQ;
