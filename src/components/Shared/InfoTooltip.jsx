'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { HelpCircle } from 'lucide-react';

/*
 * Accessible info tooltip.
 *
 * Replaces the pattern the calculator shipped with: a `cursor-help` <div>
 * revealed by `group-hover` alone, with the panel left in the DOM at
 * `invisible`. Because `visibility: hidden` also removes content from the
 * accessibility tree, keyboard users, touch users and screen-reader users all
 * got nothing — and the text in question defines the two terms the whole
 * Pathway offer rests on.
 *
 * WCAG 1.4.13 asks for three things from content shown on hover or focus, and
 * each maps to a specific decision here:
 *
 *   hoverable   — the pointer must be able to move onto the panel without
 *                 dismissing it, so the mouse handlers sit on the wrapper
 *                 rather than the trigger. (The similar tooltip in
 *                 ByTheNumbers puts onMouseLeave on the button, so moving
 *                 toward the panel closes it.)
 *   dismissable — Escape closes it without moving focus.
 *   persistent  — it stays until Escape, blur, or the pointer leaves.
 *
 * The trigger is a real <button>, so it is tab-reachable and tappable, and
 * `aria-describedby` ties the panel to it so the text is announced rather
 * than merely present. Focus opens it, which is what makes the description
 * available to a screen reader in the first place.
 */
const InfoTooltip = ({ label, children, tone = 'slate' }) => {
    const [open, setOpen] = useState(false);
    const panelId = useId();
    const wrapRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open]);

    // Close only once focus has left both the trigger and the panel, so
    // tabbing into a link inside the panel would not dismiss it.
    const handleBlurCapture = (e) => {
        if (!wrapRef.current?.contains(e.relatedTarget)) setOpen(false);
    };

    const iconTone =
        tone === 'green'
            ? 'text-green-700 hover:text-green-800'
            : 'text-slate-600 hover:text-navy-600';

    return (
        <span
            ref={wrapRef}
            className="relative inline-flex"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onBlurCapture={handleBlurCapture}
        >
            <button
                type="button"
                aria-label={label}
                aria-describedby={open ? panelId : undefined}
                onClick={() => setOpen((v) => !v)}
                onFocus={() => setOpen(true)}
                className={`rounded-full transition-colors ${iconTone}`}
            >
                <HelpCircle size={15} aria-hidden="true" />
            </button>

            {open && (
                <span
                    id={panelId}
                    role="tooltip"
                    className="absolute left-1/2 bottom-[160%] z-50 w-64 -translate-x-1/2 rounded-xl bg-navy-800 p-4 text-left text-xs font-normal normal-case leading-relaxed tracking-normal text-white shadow-lg"
                >
                    {children}
                </span>
            )}
        </span>
    );
};

export default InfoTooltip;
