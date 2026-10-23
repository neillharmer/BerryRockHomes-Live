import ForAgentsPage from '@/views/ForAgents';

export const metadata = {
    title: 'Realtor Referral Partner',
    description: 'Partner with Berry Rock Homes to help your clients achieve homeownership — full commissions and a reliable, seamless closing process.',
    alternates: { canonical: '/realtor-referral-partner' },
    openGraph: {
        title: 'Realtor Referral Partner | Berry Rock Homes',
        description: 'Close more deals. Help more families. Full industry-standard commissions paid at closing.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function RealtorReferralPartner() {
    return <ForAgentsPage />;
}
