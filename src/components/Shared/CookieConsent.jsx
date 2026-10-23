'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getConsent, setConsent, onOpenConsentBanner } from '@/lib/consent';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Only prompt when the visitor hasn't yet made a choice. Analytics
        // (GA4 + GTM) stay off until they click Accept — see @/lib/consent.
        if (getConsent() === null) {
            setVisible(true);
        }
        // Allow the footer "Cookie Settings" control to re-open the banner so
        // a visitor can change (or withdraw) a previous choice.
        return onOpenConsentBanner(() => setVisible(true));
    }, []);

    const decide = (value) => {
        setConsent(value);
        setVisible(false);
    };

    if (!visible) return null;

    // `region`, not `dialog`. This is a persistent banner: it does not trap
    // focus, does not receive focus when it appears, and does not block the
    // page behind it. Announcing it as a dialog promised modal behaviour it
    // never had. aria-live stays, since being announced on appearance is the
    // part that was actually useful.
    return (
        <div
            role="region"
            aria-live="polite"
            aria-label="Cookie consent"
            className="fixed bottom-0 inset-x-0 z-[100] p-4 sm:p-6"
        >
            <div className="mx-auto max-w-5xl bg-navy-800 text-white rounded-2xl shadow-2xl border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="text-sm leading-relaxed text-slate-300 flex-grow">
                    We use cookies and similar tracking technologies to analyze site
                    traffic and understand where our visitors come from. Choose whether to
                    allow these analytics cookies — we won&apos;t set them unless you
                    accept. Read our{' '}
                    <Link
                        href="/privacy"
                        className="text-sky-400 hover:text-white font-medium underline underline-offset-2 transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
                <div className="flex items-center gap-3 shrink-0">
                    <button
                        type="button"
                        onClick={() => decide('denied')}
                        className="text-slate-300 hover:text-white font-semibold text-sm px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 transition-colors whitespace-nowrap"
                    >
                        Decline
                    </button>
                    <button
                        type="button"
                        onClick={() => decide('granted')}
                        className="bg-berry-700 hover:bg-berry-800 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors whitespace-nowrap"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
