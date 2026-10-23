'use client';

import { useEffect, useState } from 'react';
import SharedFormsiteEmbed, { ensureEmbedManager } from '@/components/Shared/FormsiteEmbed';

/*
 * Formsite Pathway Program application embed.
 *
 * This renders the *exact* same hosted Formsite form the legacy site used,
 * so every connection (submission endpoint, PII handling, conditional logic,
 * validation) stays entirely on Formsite's servers. We never touch that
 * pipeline. We only reproduce the published embed, verbatim, inside our own
 * branded page.
 *
 * Source of truth: the live legacy embed pulled from
 *   https://www-berryrockhomes-com.filesusr.com/html/f34389_5a0af538b676da9abdf40d8f16d07225.html
 * which runs Formsite's embedManager.js and calls EmbedManager.embed({ key, ... }).
 *
 * The generic embed mechanics live in components/Shared/FormsiteEmbed.jsx.
 * This wrapper adds the Apply form's realtor-referral prefill: it resolves
 * referral data (URL query params, or a postMessage fallback with a 2s
 * timeout, identical to the legacy embed's behavior) and only then mounts the
 * embed with the resolved prePopulate map.
 */

const EMBED_ID = '1073476988';
const EPARAM = 'jFMIig1ZP573EAw4oLB7VpM8lxtcOFEc';

// Realtor Quick Connect prefill: maps referral data -> Formsite field refs.
// Identical mapping to the legacy embed's prePopulate block. Any missing value
// becomes an empty string, exactly as the original did.
const buildPrePopulate = (data = {}) => ({
    id30: data.firstName || '', // Realtor First Name
    id31: data.lastName || '', // Realtor Last Name
    id59: data.hasRealtor || '', // "Are you using a realtor?" (Yes/No)
    id53: data.brokerage || '', // Realtor Company Name
    id37: data.phone || '', // Realtor Phone Number
    id38: data.email || '', // Realtor Email Address
    id134: data.realtorId || '', // hidden realtor id
});

// Referral fields we accept off the URL query string (e.g. a realtor's personal
// application link: /apply?firstName=Jane&lastName=Doe&hasRealtor=Yes&...).
// Property names match the data keys the legacy postMessage integration used.
const PREFILL_KEYS = ['firstName', 'lastName', 'hasRealtor', 'brokerage', 'phone', 'email', 'realtorId'];

const readPrefillFromQuery = () => {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    const out = {};
    for (const key of PREFILL_KEYS) {
        const val = params.get(key);
        if (val) out[key] = val;
    }
    return out;
};

const hasAnyValue = (obj) => Object.values(obj).some((v) => v !== '' && v != null);

const FormsiteEmbed = () => {
    // null = still resolving referral data; object = ready to embed.
    const [prePopulate, setPrePopulate] = useState(null);

    useEffect(() => {
        // Warm the embedManager.js load while we wait on referral data.
        ensureEmbedManager(EMBED_ID).catch(() => {});

        // If a realtor referral link carried prefill data, use it right away.
        const queryPrefill = readPrefillFromQuery();
        if (hasAnyValue(queryPrefill)) {
            setPrePopulate(buildPrePopulate(queryPrefill));
            return;
        }

        // Otherwise reproduce the legacy behavior: give an external
        // postMessage a moment to deliver prefill, then load plain.
        // First writer wins: once the embed has mounted with resolved data, a
        // late postMessage must not swap it out from under the iframe.
        const resolveOnce = (data) => setPrePopulate((prev) => prev ?? buildPrePopulate(data));
        const onMessage = (event) => {
            if (event.data && event.data.firstName !== undefined) {
                resolveOnce(event.data);
            }
        };
        window.addEventListener('message', onMessage);
        const timer = setTimeout(() => resolveOnce({}), 2000);
        return () => {
            window.removeEventListener('message', onMessage);
            clearTimeout(timer);
        };
    }, []);

    // Referral data can take up to the 2s postMessage timeout to resolve. This
    // used to render an empty div for that whole window, so a screen-reader
    // user got silence and a sighted user got blank space on the site's primary
    // conversion path (WCAG 4.1.3). Say what is happening instead.
    if (!prePopulate) {
        return (
            <div className="formsite-embed">
                <p role="status" className="py-8 text-center text-sm text-slate-600">
                    Loading the application form&hellip;
                </p>
            </div>
        );
    }

    return (
        <SharedFormsiteEmbed
            embedId={EMBED_ID}
            eParam={EPARAM}
            prePopulate={prePopulate}
            title="Pathway Program application form"
        />
    );
};

export default FormsiteEmbed;
