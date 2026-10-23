import IsItForMePage from '@/views/IsItForMe';

export const metadata = {
    title: 'Pathway Program: Is It For Me?',
    description: 'Find out if the Berry Rock Homes Pathway Program is right for you: renters, self-employed, relocators, and families welcome.',
    alternates: { canonical: '/is-it-for-me' },
    openGraph: {
        title: 'Pathway Program: Is It For Me? | Berry Rock Homes',
        description: 'See if you qualify for our lease-to-purchase pathway to homeownership.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function IsItForMe() {
    return <IsItForMePage />;
}
