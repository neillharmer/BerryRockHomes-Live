import HomePage from '@/views/Home';
import JsonLd from '@/components/Shared/JsonLd';
import { pathwayServiceSchema } from '@/data/schema';

export const metadata = {
    title: 'Berry Rock Homes | A Faster, Simpler Path to Homeownership',
    description: 'Stop renting. Start owning. Berry Rock Homes helps families achieve homeownership through our transparent lease-to-purchase Pathway Program. Move in today, even without perfect credit.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Berry Rock Homes | A Faster, Simpler Path to Homeownership',
        description: 'Lock in your purchase price. Build credit. Own your home. Our 6-step Pathway Program makes homeownership possible today.',
        images: ['/images/meta-image.jpg'],
        type: 'website',
    },
};

export default function Home() {
    return (
        <>
            <JsonLd data={pathwayServiceSchema} />
            <HomePage />
        </>
    );
}
