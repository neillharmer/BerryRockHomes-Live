import { Outfit, Newsreader } from 'next/font/google';
import GtmLoader from '@/components/Shared/GtmLoader';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Navigation/Footer';
import JsonLd from '@/components/Shared/JsonLd';
import CookieConsent from '@/components/Shared/CookieConsent';
import MotionPreferences from '@/components/Shared/MotionPreferences';
import './globals.css';

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-outfit',
});

const newsreader = Newsreader({
    subsets: ['latin'],
    weight: ['300', '400'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-newsreader',
});

export const metadata = {
    metadataBase: new URL('https://www.berryrockhomes.com'),
    title: {
        default: 'Berry Rock Homes | Lease-to-Own Your Dream Home',
        template: '%s | Berry Rock Homes',
    },
    description: 'Stop renting. Start owning. Berry Rock Homes helps families achieve homeownership through our transparent lease-to-purchase Pathway Program. Move in today, even without perfect credit.',
    openGraph: {
        title: 'Berry Rock Homes | Lease-to-Own Your Dream Home',
        description: 'Stop renting. Start owning. Move in today with our Pathway Program.',
        images: [
            {
                url: '/images/meta-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Berry Rock Homes. Stop renting your future. Start owning it.',
            },
        ],
        type: 'website',
        siteName: 'Berry Rock Homes',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Berry Rock Homes | Lease-to-Own Your Dream Home',
        description: 'Stop renting. Start owning. Move in today with our Pathway Program.',
        images: ['/images/meta-image.jpg'],
    },
    alternates: {
        canonical: '/',
    },
};

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Berry Rock Homes',
    url: 'https://www.berryrockhomes.com',
    logo: 'https://www.berryrockhomes.com/images/BRH_LOGO_BK.png',
    description: 'Berry Rock Homes provides structured lease-to-purchase pathways to homeownership, giving responsible renters the opportunity to achieve their dreams.',
    sameAs: [
        'https://www.facebook.com/berryrockhomes/',
        'https://www.youtube.com/@BerryRockHomes',
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: 'https://www.berryrockhomes.com/contact',
    },
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Berry Rock Homes',
    url: 'https://www.berryrockhomes.com',
};

// Google Tag Manager container. GtmLoader only injects it on the live
// berryrockhomes.com domain — never on the Vercel dev alias or localhost.
// GA4 (G-BY5Q067WRC) is configured as tags INSIDE this container, not loaded
// separately in code — so there is intentionally no GaLoader here. Adding a
// code-based GA4 loader again would double-count pageviews against the tags
// already firing in the container.
const GTM_ID = 'GTM-P652B7QF';

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} ${newsreader.variable}`}>
            <GtmLoader gtmId={GTM_ID} />
            <body className={`${outfit.className} min-h-screen flex flex-col text-slate-800`}>
                <JsonLd data={organizationSchema} />
                <JsonLd data={websiteSchema} />
                {/* Must stay the first focusable element in the body — see the
                    .skip-link block in globals.css for why and how it shows. */}
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                {/* Honours the visitor's OS "Reduce Motion" setting across every
                    Framer animation on the site. No effect unless they enabled it. */}
                <MotionPreferences>
                    <Navbar />
                    {/* tabIndex={-1} makes <main> a programmatic focus target so the
                        skip link actually moves focus (fragment navigation alone is
                        inconsistent across browsers); it stays out of the tab order.
                        scroll-mt clears the fixed navbar when the jump scrolls. */}
                    <main id="main-content" tabIndex={-1} className="flex-grow scroll-mt-28">
                        {children}
                    </main>
                    <Footer />
                    <CookieConsent />
                </MotionPreferences>
            </body>
        </html>
    );
}
