import ByTheNumbersPage from '@/views/ByTheNumbers';

export const metadata = {
    title: 'Pathway Program: Your Money at Work',
    description: 'See the real data behind our Pathway Program: success rates, average timelines, and thousands of families helped.',
    alternates: { canonical: '/your-money-at-work' },
    openGraph: {
        title: 'Pathway Program: Your Money at Work | Berry Rock Homes',
        description: 'Data-driven results from Berry Rock Homes\' lease-to-purchase Pathway Program.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function YourMoneyAtWork() {
    return <ByTheNumbersPage />;
}
