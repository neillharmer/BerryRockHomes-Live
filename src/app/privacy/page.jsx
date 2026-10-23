import Privacy from '@/views/Privacy';

export const metadata = {
    title: 'Privacy Policy',
    description: 'How Berry Rock Homes collects, uses, and protects your personal information.',
    alternates: { canonical: '/privacy' },
    robots: { index: false, follow: true },
};

export default function PrivacyPage() {
    return <Privacy />;
}
