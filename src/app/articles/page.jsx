import ArticlesPage from '@/views/Articles';

export const metadata = {
    title: 'Articles & Success Stories',
    description: 'Educational articles on homeownership, credit, and the lease-to-purchase pathway from Berry Rock Homes.',
    alternates: { canonical: '/articles' },
    openGraph: {
        title: 'Articles & Success Stories | Berry Rock Homes',
        description: 'Educational resources and real family success stories from the Berry Rock Homes Pathway Program.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function Articles() {
    return <ArticlesPage />;
}
