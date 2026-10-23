'use client';

import { useEffect, useState } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import { useConsent } from '@/lib/consent';

// Loads Google Tag Manager ONLY on the live berryrockhomes.com domain, and
// ONLY after the visitor has granted consent via the cookie banner.
//
// The production Vercel build is served at both the real domain and the
// dev alias (https://2026-berry-rock-homes.vercel.app), and localhost during
// `npm run dev`. All three share the same build/env, so the only reliable way
// to keep the container from firing on the dev/preview hosts is a runtime
// hostname check on the client. The consent gate is layered on top so no tag
// (GA4, Meta, ad pixels, etc.) configured inside the container fires before
// the visitor accepts — see @/lib/consent.
const LIVE_HOSTS = new Set(['berryrockhomes.com', 'www.berryrockhomes.com']);

export default function GtmLoader({ gtmId }) {
    const [liveHost, setLiveHost] = useState(false);
    const consent = useConsent();

    useEffect(() => {
        if (LIVE_HOSTS.has(window.location.hostname)) {
            setLiveHost(true);
        }
    }, []);

    return liveHost && consent === 'granted' ? <GoogleTagManager gtmId={gtmId} /> : null;
}
