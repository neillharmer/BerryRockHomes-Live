import ResourcesPage from '@/views/Resources';

export const metadata = {
    title: 'Resources',
    description: 'Helpful resources, guides, and tools for your homeownership journey with Berry Rock Homes.',
    alternates: { canonical: '/resources' },
    openGraph: {
        title: 'Resources | Berry Rock Homes',
        description: 'Guides, calculators, and educational tools for future homeowners.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function Resources() {
    return <ResourcesPage />;
}
