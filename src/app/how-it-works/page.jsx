import HowItWorksPage from '@/views/HowItWorks';
import JsonLd from '@/components/Shared/JsonLd';
import { howItWorksSchema, buildBreadcrumb } from '@/data/schema';

export const metadata = {
    title: 'Pathway Program: How It Works',
    description: 'Learn how our lease-to-purchase Pathway Program helps you move into your dream home today, even without perfect credit or a traditional mortgage.',
    alternates: { canonical: '/how-it-works' },
    openGraph: {
        title: 'Pathway Program: How It Works | Berry Rock Homes',
        description: 'Move in today. Build credit. Purchase when ready. Our transparent 6-step Pathway Program makes homeownership accessible.',
        images: ['/images/meta-image.jpg'],
    },
};

const breadcrumb = buildBreadcrumb([
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
]);

export default function HowItWorks() {
    return (
        <>
            <JsonLd data={howItWorksSchema} />
            <JsonLd data={breadcrumb} />
            <HowItWorksPage />
        </>
    );
}
