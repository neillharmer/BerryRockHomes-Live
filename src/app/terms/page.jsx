import Terms from '@/views/Terms';

export const metadata = {
    title: 'Terms of Service',
    description: 'The terms governing your use of the Berry Rock Homes website and services.',
    alternates: { canonical: '/terms' },
    robots: { index: false, follow: true },
};

export default function TermsPage() {
    return <Terms />;
}
