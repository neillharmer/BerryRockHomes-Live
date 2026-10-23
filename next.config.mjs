/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // Internal legacy route renames (pre-launch)
            {
                source: '/why-us',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/by-the-numbers',
                destination: '/your-money-at-work',
                permanent: true,
            },
            {
                source: '/for-agents',
                destination: '/realtor-referral-partner',
                permanent: true,
            },
            {
                // /pathway was redundant with /how-it-works; consolidated into it.
                source: '/pathway',
                destination: '/how-it-works',
                permanent: true,
            },

            // Legacy Wix URLs (old berryrockhomes.com) -> new site. See REDIRECTS.md.
            {
                source: '/application',
                destination: '/apply',
                permanent: true,
            },
            {
                source: '/who-we-are',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/the-process',
                destination: '/how-it-works',
                permanent: true,
            },
            {
                source: '/the-paperwork',
                destination: '/how-it-works',
                permanent: true,
            },
            {
                source: '/program',
                destination: '/how-it-works',
                permanent: true,
            },
            {
                source: '/video',
                destination: '/how-it-works',
                permanent: true,
            },
            {
                source: '/realtors',
                destination: '/realtor-referral-partner',
                permanent: true,
            },
            {
                source: '/clientlanding',
                destination: '/',
                permanent: true,
            },
            {
                source: '/remarketing-kc-landing-page',
                destination: '/',
                permanent: true,
            },
            // Wix editor duplicate ("copy-of-*") pages that were indexed
            {
                source: '/copy-of-new-realtor-landing-page',
                destination: '/realtor-referral-partner',
                permanent: true,
            },
            {
                source: '/copy-of-the-paperwork',
                destination: '/how-it-works',
                permanent: true,
            },
            {
                source: '/copy-of-video',
                destination: '/how-it-works',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
