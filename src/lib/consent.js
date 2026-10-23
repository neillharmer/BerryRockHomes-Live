'use client';

import { useEffect, useState } from 'react';

// Single source of truth for the cookie/analytics consent gate.
//
// Google Tag Manager (GtmLoader) holds off loading until consent is explicitly
// 'granted'; GA4 lives inside that container, so it is gated too. Consent is
// stored in localStorage under STORAGE_KEY and broadcast in-tab via a
// CustomEvent so the loader reacts to an Accept click without a page reload
// (the native `storage` event only fires in *other* tabs, so we need both).

export const STORAGE_KEY = 'brh-cookie-consent';
const CONSENT_EVENT = 'brh-consent-change';
const OPEN_EVENT = 'brh-consent-open';

// Returns 'granted' | 'denied' | null (undecided — banner not yet actioned).
export function getConsent() {
    try {
        const value = localStorage.getItem(STORAGE_KEY);
        if (value === 'granted' || value === 'denied') return value;
        // Back-compat: the pre-gate banner stored 'accepted' as a plain
        // dismissal ("by continuing you consent"). Treat that as granted so
        // returning visitors aren't re-prompted.
        if (value === 'accepted') return 'granted';
        return null;
    } catch {
        // localStorage unavailable (e.g. private mode) — treat as undecided.
        return null;
    }
}

export function setConsent(value) {
    try {
        localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // ignore write failures — the in-tab event below still drives the UI
    }
    try {
        window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
    } catch {
        // no-op on the server / non-DOM environments
    }
}

// Re-open the consent banner so the visitor can change a previous choice.
// Wired to a "Cookie Settings" control in the footer.
export function openConsentBanner() {
    try {
        window.dispatchEvent(new CustomEvent(OPEN_EVENT));
    } catch {
        // no-op on the server / non-DOM environments
    }
}

// Subscribe to open-banner requests; returns an unsubscribe fn.
export function onOpenConsentBanner(handler) {
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
}

// React hook: current consent, kept in sync with same-tab Accept/Decline
// clicks and cross-tab changes. Starts null on both server and first client
// render (avoids hydration mismatch), then resolves in an effect.
export function useConsent() {
    const [consent, setConsentState] = useState(null);

    useEffect(() => {
        setConsentState(getConsent());

        const onCustom = (event) => setConsentState(event.detail ?? getConsent());
        const onStorage = (event) => {
            if (event.key === STORAGE_KEY) setConsentState(getConsent());
        };

        window.addEventListener(CONSENT_EVENT, onCustom);
        window.addEventListener('storage', onStorage);
        return () => {
            window.removeEventListener(CONSENT_EVENT, onCustom);
            window.removeEventListener('storage', onStorage);
        };
    }, []);

    return consent;
}
