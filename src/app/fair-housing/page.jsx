import FairHousing from '@/views/FairHousing';

export const metadata = {
    title: 'Fair Housing',
    description: 'Berry Rock Homes is committed to equal housing opportunity and full compliance with fair housing laws.',
    alternates: { canonical: '/fair-housing' },
    robots: { index: false, follow: true },
};

export default function FairHousingPage() {
    return <FairHousing />;
}
