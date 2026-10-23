'use client';

import { MotionConfig } from 'framer-motion';

/*
 * Site-wide reduced-motion support for Framer Motion.
 *
 * `reducedMotion="user"` means "respect the visitor's OS setting" — not
 * "always reduce". Anyone who has not enabled Reduce Motion in macOS,
 * Windows, iOS or Android sees the site exactly as before; the setting has to
 * be switched on deliberately for anything here to change.
 *
 * For those who have, Framer skips transform and layout animations but keeps
 * opacity, which is the right split: fades are not a vestibular trigger, so
 * content still eases in rather than snapping. The result is a calmer version
 * of the same design, not a stripped one.
 *
 * This exists as a client component because MotionConfig needs a context
 * provider and app/layout.jsx is a server component. Wrapping once here
 * covers every `motion.*` element on the site — 47 files and the ~107
 * whileInView scroll reveals among them — without touching any of them.
 *
 * Two things this does NOT cover, handled separately:
 *   - plain CSS transitions, which the prefers-reduced-motion block in
 *     globals.css takes care of;
 *   - animation driven by hand rather than by Framer variants, like the
 *     requestAnimationFrame float loop in Home/PathwaySection.jsx, which
 *     checks useReducedMotion() itself.
 */
export default function MotionPreferences({ children }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
