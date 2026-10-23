'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';

const pathwayChildren = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Is It For Me?', path: '/is-it-for-me' },
    { name: 'Your Money at Work', path: '/your-money-at-work' },
    { name: 'FAQ', path: '/faq' },
];

const realtorChildren = [
    { name: 'Referral Partner', path: '/realtor-referral-partner' },
    { name: 'Agent Resources', path: '/agent-resources' },
    { name: 'Quick Connect', path: '/realtor-quick-connect' },
];

const mainNavLinks = [
    { name: 'Pathway Program', path: '/how-it-works', children: pathwayChildren },
    { name: 'Realtors', path: '/realtor-referral-partner', children: realtorChildren },
    { name: 'About', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
];

const PHONE_DISPLAY = '(405) 708-3457';
const PHONE_HREF = 'tel:4057083457';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState(null);
    const pathname = usePathname();
    const dropdownRef = useRef(null);
    // Keyed by link name so Escape can return focus to the trigger that opened
    // the menu, rather than dumping focus at the top of the document.
    const dropdownTriggerRefs = useRef({});
    const mobileToggleRef = useRef(null);

    const isRealtorPage = pathname.includes('/realtor-referral-partner');

    // A child link is active when the current path matches it exactly.
    const isChildActive = (path) => pathname === path;
    // A top-level link is active when its own path matches, or — for groups —
    // when any of its children match the current path.
    const isLinkActive = (link) =>
        pathname === link.path ||
        (link.children?.some((child) => pathname === child.path) ?? false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setOpenDropdown(null);
        setMobileExpanded(null);
    }, [pathname]);

    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    // Escape closes whatever is open, and focus goes back to the control that
    // opened it. Without this, a keyboard user who opens a menu has no way out
    // but to tab through every item (WCAG 1.4.13 requires hover/focus content
    // to be dismissable without moving the pointer or focus).
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key !== 'Escape') return;

            if (openDropdown) {
                setOpenDropdown(null);
                dropdownTriggerRefs.current[openDropdown]?.focus();
                return;
            }
            if (isOpen) {
                setIsOpen(false);
                setMobileExpanded(null);
                mobileToggleRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [openDropdown, isOpen]);

    // Only the white backdrop morphs on scroll — the nav content stays locked to the
    // hero's container (max-w-7xl, px-6 gutters) and never shifts. At the top it's a
    // full-bleed bar across the page; once scrolled it lifts into a container-width pill.
    const backdropClass = scrolled
        ? 'top-0 bottom-0 -left-6 -right-6 rounded-full border shadow-lg'
        : '-top-3 sm:-top-4 bottom-0 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] rounded-none border-b shadow-sm';

    const navPillBase =
        'flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-200';
    const navPillColor = scrolled
        ? 'text-slate-700 hover:text-berry-700 hover:bg-neutral-100'
        : 'text-slate-800 hover:text-berry-700 hover:bg-white/70 hover:backdrop-blur-sm';
    // Current page/section — berry text on a soft berry wash so it reads as "you are here".
    const navPillActive = 'text-berry-700 bg-berry-50 hover:bg-berry-50 hover:text-berry-700';

    return (
        <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative">
                    {/* Morphing white backdrop — full-bleed bar across the top of the
                        page that lifts into a floating, container-width pill on scroll.
                        Sits behind the content, which never moves horizontally. */}
                    <div
                        aria-hidden="true"
                        className={`absolute z-0 bg-white border-slate-200/70 transition-all duration-700 ease-in-out ${backdropClass}`}
                    />
                    <div className="relative z-10 flex items-center justify-between gap-2 py-3">
                    {/* Logo — full logo over hero, minifies to icon once capsule appears */}
                    <Link
                        href="/"
                        className="flex items-center group flex-shrink-0 overflow-hidden rounded-full px-2 py-1 transition-colors"
                    >
                        <img
                            src="/images/BRH_LOGO_BK.png"
                            alt="Berry Rock Homes"
                            className={`w-auto transition-all duration-700 ease-in-out group-hover:opacity-75 ${
                                scrolled ? 'h-0 opacity-0' : 'h-12 md:h-14 opacity-100'
                            }`}
                        />
                        <img
                            src="/images/BRH_ICON_BK.png"
                            alt=""
                            aria-hidden="true"
                            className={`w-auto transition-all duration-700 ease-in-out group-hover:opacity-75 ${
                                scrolled ? 'h-7 opacity-100' : 'h-0 opacity-0'
                            }`}
                        />
                    </Link>

                    {/* Desktop Nav — each link is a sub-pill */}
                    <nav aria-label="Primary" className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
                        {mainNavLinks.map((link) => {
                            const hasChildren = link.children?.length > 0;
                            const isOpenState = openDropdown === link.name;
                            const isActive = isLinkActive(link);

                            if (hasChildren) {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => setOpenDropdown(link.name)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                    >
                                        <button
                                            type="button"
                                            ref={(el) => { dropdownTriggerRefs.current[link.name] = el; }}
                                            onClick={() => setOpenDropdown(isOpenState ? null : link.name)}
                                            className={`${navPillBase} ${isActive ? navPillActive : navPillColor}`}
                                            aria-current={isActive ? 'page' : undefined}
                                            aria-expanded={isOpenState}
                                            aria-controls={`nav-submenu-${link.name.replace(/\s+/g, '-').toLowerCase()}`}
                                        >
                                            {link.name}
                                            <ChevronDown
                                                size={14}
                                                aria-hidden="true"
                                                className={`transition-transform duration-200 ${isOpenState ? 'rotate-180' : ''}`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {isOpenState && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -6 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -6 }}
                                                    transition={{ duration: 0.15 }}
                                                    className="absolute top-full left-0 pt-3 z-50 min-w-[220px]"
                                                    id={`nav-submenu-${link.name.replace(/\s+/g, '-').toLowerCase()}`}
                                                >
                                                    <div className="bg-white shadow-xl rounded-2xl border border-slate-100 py-1.5 overflow-hidden">
                                                        {link.children.map((child) => {
                                                            const childActive = isChildActive(child.path);
                                                            return (
                                                            <Link
                                                                key={child.name}
                                                                href={child.path}
                                                                aria-current={childActive ? 'page' : undefined}
                                                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                                                    childActive
                                                                        ? 'text-berry-700 bg-berry-50 font-semibold'
                                                                        : 'text-slate-700 hover:text-berry-700 hover:bg-slate-50'
                                                                }`}
                                                            >
                                                                {child.name}
                                                            </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`${navPillBase} ${isActive ? navPillActive : navPillColor}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right cluster */}
                    <div className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
                        <a
                            href={PHONE_HREF}
                            aria-label={`Call ${PHONE_DISPLAY}`}
                            className={`hidden xl:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600 transition-colors hover:text-berry-700 ${scrolled ? 'hover:bg-neutral-100' : 'hover:bg-white/70 hover:backdrop-blur-sm'}`}
                        >
                            <Phone size={14} strokeWidth={2.25} />
                            {PHONE_DISPLAY}
                        </a>

                        <Link
                            href={isRealtorPage ? '/realtor-referral-partner#agent-network' : '/apply'}
                            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors bg-berry-700 text-white hover:bg-berry-800 shadow-sm"
                        >
                            {isRealtorPage ? 'Become a Referral Partner' : 'Apply Now'}
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button — the label says what the control does
                        now ("Open"/"Close"), and aria-expanded carries the state.
                        "Toggle menu" told a screen-reader user neither. */}
                    <button
                        type="button"
                        ref={mobileToggleRef}
                        className={`lg:hidden p-2 rounded-full transition-colors hover:bg-neutral-100 ${scrolled ? 'text-slate-700' : 'text-slate-800'}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                    >
                        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
                    </button>
                    </div>
                </div>

                {/* Mobile Nav Drawer — floats under the capsule */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden mt-2 bg-white rounded-3xl border border-slate-200/70 shadow-xl overflow-hidden"
                            id="mobile-nav"
                        >
                            <div className="px-4 py-5 space-y-1 flex flex-col">
                                {mainNavLinks.map((link) => {
                                    const hasChildren = link.children?.length > 0;
                                    const isExpanded = mobileExpanded === link.name;
                                    const isActive = isLinkActive(link);

                                    if (hasChildren) {
                                        return (
                                            <div key={link.name}>
                                                <button
                                                    type="button"
                                                    aria-current={isActive ? 'page' : undefined}
                                                    aria-expanded={isExpanded}
                                                    aria-controls={`mobile-submenu-${link.name.replace(/\s+/g, '-').toLowerCase()}`}
                                                    className={`w-full flex items-center justify-between text-base font-semibold py-3 border-b border-neutral-100 ${
                                                        isActive ? 'text-berry-700' : 'text-slate-800'
                                                    }`}
                                                    onClick={() => setMobileExpanded(isExpanded ? null : link.name)}
                                                >
                                                    {link.name}
                                                    <ChevronDown
                                                        size={18}
                                                        className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                            id={`mobile-submenu-${link.name.replace(/\s+/g, '-').toLowerCase()}`}
                                                        >
                                                            {link.children.map((child) => {
                                                                const childActive = isChildActive(child.path);
                                                                return (
                                                                <Link
                                                                    key={child.name}
                                                                    href={child.path}
                                                                    aria-current={childActive ? 'page' : undefined}
                                                                    className={`block pl-4 py-2.5 text-sm font-medium border-b border-neutral-50 ${
                                                                        childActive ? 'text-berry-700 font-semibold' : 'text-slate-700'
                                                                    }`}
                                                                >
                                                                    {child.name}
                                                                </Link>
                                                                );
                                                            })}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.path}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={`text-base font-semibold py-3 border-b border-neutral-100 block ${
                                                isActive ? 'text-berry-700' : 'text-slate-800'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}

                                <a
                                    href={PHONE_HREF}
                                    className="flex items-center gap-2 mt-3 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-800"
                                >
                                    <Phone size={14} />
                                    {PHONE_DISPLAY}
                                </a>

                                <Link
                                    href={isRealtorPage ? '/realtor-referral-partner#agent-network' : '/apply'}
                                    className="group mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-berry-700 text-white hover:bg-berry-800 font-semibold transition-colors"
                                >
                                    {isRealtorPage ? 'Become a Referral Partner' : 'Apply Now'}
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
