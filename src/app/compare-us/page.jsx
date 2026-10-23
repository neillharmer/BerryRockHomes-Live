import CompareUsPage from '@/views/CompareUs';

export const metadata = {
    title: 'Pathway Program: How We Compare',
    description: 'See how the Berry Rock Homes Pathway Program compares to traditional renting. Total transparency so you can make the best decision for your future.',
    alternates: { canonical: '/compare-us' },
    openGraph: {
        title: 'Pathway Program: How We Compare | Berry Rock Homes',
        description: 'A side-by-side comparison of the Pathway Program versus traditional renting.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function CompareUs() {
    return <CompareUsPage />;
}
