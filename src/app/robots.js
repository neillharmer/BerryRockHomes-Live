export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/styleguide'],
            },
        ],
        sitemap: 'https://www.berryrockhomes.com/sitemap.xml',
    };
}
