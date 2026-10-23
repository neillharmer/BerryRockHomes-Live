'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Next.js template component — runs on every route navigation.
 * Replaces the old ScrollToTop component from React Router.
 */
export default function Template({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
}
