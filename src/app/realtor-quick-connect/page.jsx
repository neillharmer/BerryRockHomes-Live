import RealtorQuickConnectPage from '@/views/RealtorQuickConnect';

export const metadata = {
    title: 'Realtor Quick Connect',
    description: 'Realtors: refer a client to Berry Rock Homes in under a minute. Share their details and our team will guide them onto the Pathway Program while you stay the agent of record.',
    alternates: { canonical: '/realtor-quick-connect' },
    openGraph: {
        title: 'Realtor Quick Connect | Berry Rock Homes',
        description: 'Send us your client’s details and we’ll reach out to guide them onto the Pathway Program.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function RealtorQuickConnect() {
    return <RealtorQuickConnectPage />;
}
