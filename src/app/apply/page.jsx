import ApplyPage from '@/views/Apply';

export const metadata = {
    title: 'Start Your Journey | Apply Now',
    description: 'Pre-qualify in 5 minutes with no hard credit pull. Start your pathway to homeownership with Berry Rock Homes today.',
    alternates: { canonical: '/apply' },
    openGraph: {
        title: 'Apply Now | Berry Rock Homes',
        description: 'Pre-qualify in minutes. No hard credit pull. Start your journey to homeownership.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function Apply() {
    return <ApplyPage />;
}
