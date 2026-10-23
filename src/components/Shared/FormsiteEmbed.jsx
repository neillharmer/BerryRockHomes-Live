'use client';

import { useEffect, useRef, useState } from 'react';

/*
 * Generic Formsite form embed.
 *
 * Renders a hosted Formsite form (fs9.formsite.com) exactly the way Formsite's
 * published embed snippet does, so every connection — submission endpoint, PII
 * handling, conditional logic, validation — stays entirely on Formsite's
 * servers. We never touch that pipeline; we only reproduce the embed inside
 * our own branded page.
 *
 * embedManager.js drops an auto-resizing iframe immediately before an anchor
 * element (<a id="formAnchor{embedId}">) and listens for "id:height:scroll"
 * postMessages from the form to keep the iframe sized to its content (no inner
 * scrollbar).
 *
 * Props:
 *   embedId     — the form's numeric embed id (the digits after the last "&"
 *                 in Formsite's published embed key).
 *   eParam      — the EParam token from the same key.
 *   prePopulate — optional map of Formsite field refs (e.g. { id30: 'Jane' })
 *                 passed straight through to EmbedManager.embed().
 *   title       — accessible name for the injected iframe. Required for WCAG
 *                 4.1.2: EmbedManager defaults the frame title to "", which
 *                 screen readers announce as an unlabeled frame.
 *
 * Used for the Apply form (via components/Apply/FormsiteEmbed.jsx, which adds
 * realtor-referral prefill resolution) and the Realtor Quick Connect form
 * (embed 1373593870, ported verbatim from the legacy Wix site's embed at
 * www-berryrockhomes-com.filesusr.com/html/f34389_18827f227c31aa545475df22a8b949eb.html).
 */

// Load embedManager.js once, resolve when window.EmbedManager is available.
// The script is the same file regardless of the embed-id cache-buster, so any
// already-loaded copy satisfies every form on the site. Exported so callers
// that delay mounting (e.g. the Apply wrapper waiting on referral data) can
// warm the script load in the meantime.
export const ensureEmbedManager = (embedId) =>
    ensureScript(`https://fs9.formsite.com/include/form/embedManager.js?${embedId}`);

const ensureScript = (scriptSrc) =>
    new Promise((resolve, reject) => {
        if (typeof window === 'undefined') return;
        if (window.EmbedManager) return resolve();

        const existing = document.querySelector('script[data-formsite-embed-manager]');
        if (existing) {
            if (existing.dataset.loaded === 'true') return resolve();
            existing.addEventListener('load', () => resolve());
            existing.addEventListener('error', reject);
            return;
        }

        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;
        script.dataset.formsiteEmbedManager = 'true';
        script.addEventListener('load', () => {
            script.dataset.loaded = 'true';
            resolve();
        });
        script.addEventListener('error', reject);
        document.body.appendChild(script);
    });

const FormsiteEmbed = ({ embedId, eParam, prePopulate, title }) => {
    const embeddedRef = useRef(false);
    // Formsite's script can be blocked by a network policy, an extension or a
    // script blocker. This used to be swallowed silently, leaving an empty
    // region forever on the site's primary conversion path.
    const [failed, setFailed] = useState(false);

    const scriptSrc = `https://fs9.formsite.com/include/form/embedManager.js?${embedId}`;
    const embedKey = `https://fs9.formsite.com/res/showFormEmbed?EParam=${eParam}&${embedId}`;
    const frameId = `frame-one${embedId}`; // embedManager.js names the iframe this

    useEffect(() => {
        let cancelled = false;

        ensureScript(scriptSrc)
            .then(() => {
                if (cancelled || embeddedRef.current || !window.EmbedManager) return;
                embeddedRef.current = true;
                window.EmbedManager.embed({
                    key: embedKey,
                    width: '100%',
                    mobileResponsive: true,
                    // `title` is a documented EmbedManager param — it assigns the
                    // iframe's title at creation (embedManager.js reads params.title
                    // and sets frame.title). Without it the frame defaults to "",
                    // which a screen reader announces as an unlabeled frame.
                    // Purely advisory: the resize protocol resolves the frame by id,
                    // so naming it cannot affect submission, prefill or auto-sizing.
                    ...(title ? { title } : {}),
                    ...(prePopulate ? { prePopulate } : {}),
                });
            })
            .catch(() => {
                if (!cancelled) setFailed(true);
            });

        return () => {
            cancelled = true;
            // Remove the injected iframe so a client-side remount starts clean.
            const frame = document.getElementById(frameId);
            if (frame && frame.parentNode) frame.parentNode.removeChild(frame);
            embeddedRef.current = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [embedId, eParam]);

    return (
        <div className="formsite-embed">
            {failed && (
                <p role="alert" className="rounded-xl border border-sand-200 bg-sand-50 p-5 text-sm leading-relaxed text-slate-700">
                    This form could not load &mdash; a script blocker or network
                    policy may be preventing it. You can{' '}
                    <a
                        href={embedKey}
                        className="font-semibold text-berry-700 underline underline-offset-2 hover:text-berry-800"
                    >
                        open the form directly
                    </a>{' '}
                    or call us at{' '}
                    <a
                        href="tel:4057083457"
                        className="font-semibold text-berry-700 underline underline-offset-2 hover:text-berry-800"
                    >
                        (405) 708-3457
                    </a>
                    .
                </p>
            )}
            {/* embedManager.js inserts the form iframe immediately before this anchor. */}
            <a name={`form${embedId}`} id={`formAnchor${embedId}`} aria-hidden="true" />
        </div>
    );
};

export default FormsiteEmbed;
