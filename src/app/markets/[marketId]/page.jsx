import MarketPage from '@/views/Market';
import JsonLd from '@/components/Shared/JsonLd';
import { markets, getMarketBySlug } from '@/data/markets';
import { buildMarketServiceSchema, buildBreadcrumb } from '@/data/schema';

// Pre-render the canonical market pages at build time.
export function generateStaticParams() {
    return markets.map((market) => ({ marketId: market.slug }));
}

export async function generateMetadata({ params }) {
    const { marketId } = await params;
    const market = getMarketBySlug(marketId);

    if (!market) {
        return { title: 'Market Not Found | Berry Rock Homes' };
    }

    const title = `${market.shortName} Lease-to-Own Homes`;

    return {
        title,
        description: market.metaDescription,
        alternates: { canonical: `/markets/${market.slug}` },
        openGraph: {
            title: `${title} | Berry Rock Homes`,
            description: market.metaDescription,
            images: [market.img || '/images/meta-image.jpg'],
            type: 'website',
        },
    };
}

export default async function Market({ params }) {
    const { marketId } = await params;
    const market = getMarketBySlug(marketId);

    const breadcrumb = market
        ? buildBreadcrumb([
              { name: 'Home', path: '/' },
              { name: market.shortName, path: `/markets/${market.slug}` },
          ])
        : null;

    return (
        <>
            {market && <JsonLd data={buildMarketServiceSchema(market)} />}
            {breadcrumb && <JsonLd data={breadcrumb} />}
            <MarketPage params={{ marketId }} />
        </>
    );
}
