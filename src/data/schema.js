// Shared JSON-LD structured data builders for Berry Rock Homes.
//
// Rendered on the page via <JsonLd data={...} /> (components/Shared/JsonLd.jsx),
// which serializes the object into a <script type="application/ld+json"> tag.
//
// Sitewide Organization + WebSite schema live in app/layout.jsx. The helpers
// here cover page-level schema: Article, NewsArticle, HowTo, Service, and
// BreadcrumbList. Keep the org/publisher shape in sync with layout.jsx.
//
// House style: no em dashes anywhere in copy.

export const SITE_URL = 'https://www.berryrockhomes.com';
const LOGO_URL = `${SITE_URL}/images/BRH_LOGO_BK.png`;

// Reusable Organization reference used as publisher/author/provider.
export const organization = {
    '@type': 'Organization',
    name: 'Berry Rock Homes',
    url: SITE_URL,
    logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
    },
};

/**
 * BreadcrumbList from an ordered array of { name, path } segments.
 * Home is not assumed; include it as the first item where you want it.
 */
export function buildBreadcrumb(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
        })),
    };
}

/** BlogPosting schema for an educational article (data/articles.js). */
export function buildArticleSchema(article) {
    const url = `${SITE_URL}/articles/${article.slug}`;
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        headline: article.title,
        description: article.excerpt,
        datePublished: article.dateISO,
        dateModified: article.dateISO,
        articleSection: article.category,
        author: {
            '@type': 'Organization',
            name: article.author?.name || 'Berry Rock Homes',
            url: SITE_URL,
        },
        publisher: organization,
        image: LOGO_URL,
        inLanguage: 'en-US',
    };
}

/** NewsArticle schema for an official press release (data/pressReleases.js). */
export function buildNewsArticleSchema(release) {
    const url = `${SITE_URL}/news/press/${release.slug}`;
    return {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        headline: release.title,
        description: release.excerpt,
        datePublished: release.dateISO,
        dateModified: release.dateISO,
        author: organization,
        publisher: organization,
        image: LOGO_URL,
        inLanguage: 'en-US',
    };
}

/** Service schema for a single market page (data/markets.js entry). */
export function buildMarketServiceSchema(market) {
    const url = `${SITE_URL}/markets/${market.slug}`;
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Lease-to-purchase homeownership program',
        name: `Berry Rock Homes Pathway Program in ${market.shortName || market.name}`,
        description: market.metaDescription,
        url,
        provider: organization,
        areaServed: {
            '@type': 'City',
            name: market.name,
            address: {
                '@type': 'PostalAddress',
                addressLocality: market.shortName || market.name,
                addressRegion: market.state,
                addressCountry: 'US',
            },
        },
        audience: {
            '@type': 'Audience',
            audienceType: 'Aspiring homeowners and renters',
        },
    };
}

// Service schema for the lease-to-purchase product itself, used on the
// home page.
export const pathwayServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Lease-to-purchase homeownership program',
    name: 'Berry Rock Homes Pathway Program',
    description:
        'A transparent lease-to-purchase pathway to homeownership. Berry Rock Homes buys the home you choose through a reliable closing, you move in and lease it with your purchase price locked in, and you buy it when you are mortgage-ready.',
    url: `${SITE_URL}/how-it-works`,
    provider: organization,
    areaServed: [
        { '@type': 'City', name: 'Indianapolis, IN' },
        { '@type': 'City', name: 'Kansas City, MO' },
        { '@type': 'City', name: 'Oklahoma City, OK' },
        { '@type': 'City', name: 'St. Louis, MO' },
        { '@type': 'City', name: 'Tulsa, OK' },
    ],
    audience: {
        '@type': 'Audience',
        audienceType: 'Aspiring homeowners and renters',
    },
};

// HowTo schema for the six-step Pathway Program. This must mirror the `steps`
// array in views/HowItWorks.jsx: if a step is added, merged, renamed, or retoned
// there, update it here too, or the structured data Google reads will contradict
// the visible page. It drifted exactly that way once already.
export const howItWorksSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How the Berry Rock Homes Pathway Program Works',
    description:
        'The lease-to-purchase Pathway Program helps renters become homeowners in six steps, from applying and verifying through choosing a home and buying it on your own timeline.',
    step: [
        {
            '@type': 'HowToStep',
            position: 1,
            name: 'The starting point',
            text: 'Your credit, income history, or savings may not fit the traditional mortgage box yet. That does not mean you are not ready to own. Apply online or by phone with zero application fee and a soft credit check only, and you will immediately receive an estimated pre-qualification based on your stated application.',
            url: `${SITE_URL}/how-it-works#starting-point`,
        },
        {
            '@type': 'HowToStep',
            position: 2,
            name: 'Consultation and verification',
            text: 'We reach out within 48 hours of receiving your application for a consultation, so you understand exactly how the program works. After that you upload income and asset verification, and once you are approved you become offer-ready.',
            url: `${SITE_URL}/how-it-works#consultation-verification`,
        },
        {
            '@type': 'HowToStep',
            position: 3,
            name: 'Choose your home',
            text: 'Work with your own realtor and choose your home on the open market, not our inventory, as long as it appraises at the purchase price, is insurable, and is within your offer-ready amount.',
            url: `${SITE_URL}/how-it-works#choose-home`,
        },
        {
            '@type': 'HowToStep',
            position: 4,
            name: 'Secure it with a deposit',
            text: 'A 7% Option Consideration and your lease-option paperwork are due within 3 days of going under contract. It is fully credited toward the purchase price at closing, fully refunded if your offer is not accepted, and refunded minus any hard costs already incurred if the contract falls through.',
            url: `${SITE_URL}/how-it-works#lock-it-in`,
        },
        {
            '@type': 'HowToStep',
            position: 5,
            name: 'We handle the purchase for you',
            text: 'Berry Rock Homes submits a clean, competitive offer on your behalf, working alongside your realtor and with no financing contingency attached. Appraisal and inspection are ordered, with a typical close of about 30 days.',
            url: `${SITE_URL}/how-it-works#we-buy-it`,
        },
        {
            '@type': 'HowToStep',
            position: 6,
            name: 'Move in and buy on your timeline',
            text: 'You get the keys on closing day. Every on-time payment is reported to all three credit bureaus and your rent credits accumulate toward your purchase. You control the timeline, and you buy the home when you are ready.',
            url: `${SITE_URL}/how-it-works#move-in`,
        },
    ],
};
