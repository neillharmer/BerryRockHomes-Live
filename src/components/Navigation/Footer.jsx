'use client';

import Link from 'next/link';
import { openConsentBanner } from '@/lib/consent';

const Footer = () => {
    return (
        <footer className="bg-navy-800 pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Grid: Logo/Tagline Left + Nav Columns Right */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12 pb-12 border-b border-white/10">

                    {/* Left: Logo & Tagline */}
                    <div className="flex-shrink-0 lg:w-72">
                        <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
                            <img
                                src="/images/BRH_LOGO_WT.png"
                                alt="Berry Rock Homes"
                                className="h-16 md:h-20 w-auto"
                            />
                        </Link>
                        <p className="text-white text-2xl md:text-3xl font-bold leading-snug mb-4">
                            Start owning your future.
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Structured lease-to-purchase pathways giving responsible renters the opportunity to achieve their dream of home ownership.
                        </p>
                    </div>

                    {/* Right: Navigation Columns */}
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

                        <div>
                            <h2 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Pathway Program</h2>
                            <ul className="space-y-3">
                                <li><Link href="/apply" className="text-berry-400 hover:text-sky-400 font-medium transition-colors text-sm flex items-center gap-2">Apply &rarr;</Link></li>
                                <li><Link href="/how-it-works" className="text-slate-300 hover:text-white transition-colors text-sm">How It Works</Link></li>
                                <li><Link href="/your-money-at-work" className="text-slate-300 hover:text-white transition-colors text-sm">Your Money at Work</Link></li>
                                <li><Link href="/faq" className="text-slate-300 hover:text-white transition-colors text-sm">FAQ</Link></li>
                                <li><Link href="/compare-us" className="text-slate-300 hover:text-white transition-colors text-sm">Compare Berry Rock</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Markets</h2>
                            <ul className="space-y-3">
                                <li><Link href="/markets/indianapolis-in" className="text-slate-300 hover:text-white transition-colors text-sm">Indianapolis, IN</Link></li>
                                <li><Link href="/markets/kansas-city-mo" className="text-slate-300 hover:text-white transition-colors text-sm">Kansas City, MO/KS</Link></li>
                                <li><Link href="/markets/oklahoma-city-ok" className="text-slate-300 hover:text-white transition-colors text-sm">Oklahoma City, OK</Link></li>
                                <li><Link href="/markets/st-louis-mo" className="text-slate-300 hover:text-white transition-colors text-sm">St. Louis, MO</Link></li>
                                <li><Link href="/markets/tulsa-ok" className="text-slate-300 hover:text-white transition-colors text-sm">Tulsa, OK</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Realtors</h2>
                            <ul className="space-y-3">
                                <li><Link href="/realtor-quick-connect" className="text-berry-400 hover:text-sky-400 font-medium transition-colors text-sm flex items-center gap-2">Quick Connect &rarr;</Link></li>
                                <li><Link href="/realtor-referral-partner" className="text-slate-300 hover:text-white transition-colors text-sm">Referral Partner</Link></li>
                                <li><Link href="/agent-resources" className="text-slate-300 hover:text-white transition-colors text-sm">Agent Resources</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Company</h2>
                            <ul className="space-y-3">
                                <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">About</Link></li>
                                <li><Link href="/news" className="text-slate-300 hover:text-white transition-colors text-sm">News</Link></li>
                                <li><Link href="/articles" className="text-slate-300 hover:text-white transition-colors text-sm">Articles</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest">Contact</h2>
                            <ul className="space-y-3">
                                <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                            </ul>

                            <h2 className="font-semibold text-white mt-10 mb-4 text-xs uppercase tracking-widest">Follow Us</h2>
                            <ul className="space-y-3">
                                <li><a href="https://www.facebook.com/profile.php?id=61591451732610" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm">Facebook</a></li>
                                <li><a href="https://www.instagram.com/berryrockhomes/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/company/berryrockhomes/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm">LinkedIn</a></li>
                                <li><a href="https://www.youtube.com/@BerryRockHomes" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm">YouTube</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    <p className="text-slate-300 text-sm text-center lg:text-left">
                        &copy; {new Date().getFullYear()} Berry Rock Homes. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <Link href="/terms" className="text-slate-300 hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/fair-housing" className="text-slate-300 hover:text-white transition-colors">Fair Housing</Link>
                        <button
                            type="button"
                            onClick={openConsentBanner}
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            Cookie Settings
                        </button>
                    </div>

                    <div className="flex items-center">
                        <img
                            src="/images/equal-housing-logowhite-500.png"
                            alt="Equal Housing Opportunity"
                            className="h-8 w-auto"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
