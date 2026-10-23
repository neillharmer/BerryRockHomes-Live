import WhyUsPage from '@/views/WhyUs';

export const metadata = {
    title: 'Why Choose Us | Lease-to-Own Done Right',
    description: 'Discover why thousands of families choose Berry Rock Homes: locked-in prices, no hidden fees, a transparent process, and real ownership.',
    alternates: { canonical: '/about' },
    openGraph: {
        title: 'Why Choose Us | Lease-to-Own Done Right | Berry Rock Homes',
        description: 'Locked-in prices, no hidden fees, and a stable pathway to homeownership.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function WhyUs() {
    return <WhyUsPage />;
}
