import AgentResourcesPage from '@/views/AgentResources';

export const metadata = {
    title: 'Agent Resources',
    description: 'Resources and FAQ for real estate agents partnering with Berry Rock Homes on lease-to-purchase transactions.',
    alternates: { canonical: '/agent-resources' },
    openGraph: {
        title: 'Agent Resources | Berry Rock Homes',
        description: 'Everything agents need to know about partnering with Berry Rock Homes.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function AgentResources() {
    return <AgentResourcesPage />;
}
