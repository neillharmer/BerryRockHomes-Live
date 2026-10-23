import NewsPage from '@/views/News';

export const metadata = {
    title: 'News & Media',
    description: 'Latest news coverage, press releases, and media resources from Berry Rock Homes, the lease-to-purchase pathway program.',
    alternates: { canonical: '/news' },
    openGraph: {
        title: 'News & Media | Berry Rock Homes',
        description: 'Latest news and press coverage from Berry Rock Homes.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function News() {
    return <NewsPage />;
}
