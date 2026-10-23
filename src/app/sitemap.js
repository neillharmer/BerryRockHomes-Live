import { articles } from '@/data/articles';
import { pressReleases } from '@/data/pressReleases';

const BASE_URL = 'https://www.berryrockhomes.com';

export default function sitemap() {
    const lastModified = new Date();

    // All static pages with SEO priority
    const staticPages = [
        { path: '/', priority: 1.0, changeFrequency: 'weekly' },
        { path: '/apply', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/how-it-works', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/is-it-for-me', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/your-money-at-work', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/compare-us', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
        { path: '/realtor-referral-partner', priority: 0.7, changeFrequency: 'monthly' },
        { path: '/realtor-quick-connect', priority: 0.6, changeFrequency: 'monthly' },
        { path: '/agent-resources', priority: 0.6, changeFrequency: 'monthly' },
        { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
        { path: '/news', priority: 0.6, changeFrequency: 'weekly' },
        { path: '/articles', priority: 0.7, changeFrequency: 'weekly' },
        { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
        // Legal pages (/terms, /privacy, /fair-housing) are intentionally excluded:
        // they carry a noindex robots tag and should not be advertised to crawlers.
    ];

    // Dynamic market pages (kansas-city-ks merged into kansas-city-mo)
    const marketSlugs = [
        'indianapolis-in',
        'kansas-city-mo',
        'oklahoma-city-ok',
        'st-louis-mo',
        'tulsa-ok',
    ];

    const staticEntries = staticPages.map(({ path, priority, changeFrequency }) => ({
        url: `${BASE_URL}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }));

    const marketEntries = marketSlugs.map((slug) => ({
        url: `${BASE_URL}/markets/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Dynamic article subpages (sourced from data/articles.js)
    const articleEntries = articles.map((article) => ({
        url: `${BASE_URL}/articles/${article.slug}`,
        lastModified: new Date(article.dateISO),
        changeFrequency: 'yearly',
        priority: 0.6,
    }));

    // Dynamic press release subpages (sourced from data/pressReleases.js)
    const pressReleaseEntries = pressReleases.map((release) => ({
        url: `${BASE_URL}/news/press/${release.slug}`,
        lastModified: new Date(release.dateISO),
        changeFrequency: 'yearly',
        priority: 0.6,
    }));

    return [...staticEntries, ...marketEntries, ...articleEntries, ...pressReleaseEntries];
}
