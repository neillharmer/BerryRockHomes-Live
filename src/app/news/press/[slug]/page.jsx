import { notFound } from 'next/navigation';
import PressReleaseView from '@/views/PressRelease';
import JsonLd from '@/components/Shared/JsonLd';
import { pressReleases, getPressReleaseBySlug } from '@/data/pressReleases';
import { buildNewsArticleSchema, buildBreadcrumb } from '@/data/schema';

// Pre-render every press release at build time.
export function generateStaticParams() {
    return pressReleases.map((release) => ({ slug: release.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const release = getPressReleaseBySlug(slug);

    if (!release) {
        return { title: 'Press Release Not Found | Berry Rock Homes' };
    }

    return {
        title: release.title,
        description: release.excerpt,
        alternates: { canonical: `/news/press/${release.slug}` },
        openGraph: {
            title: `${release.title} | Berry Rock Homes`,
            description: release.excerpt,
            type: 'article',
            publishedTime: release.dateISO,
            images: ['/images/meta-image.jpg'],
        },
    };
}

export default async function PressReleasePage({ params }) {
    const { slug } = await params;
    const release = getPressReleaseBySlug(slug);

    if (!release) {
        notFound();
    }

    const breadcrumb = buildBreadcrumb([
        { name: 'Home', path: '/' },
        { name: 'News & Media', path: '/news' },
        { name: release.title, path: `/news/press/${release.slug}` },
    ]);

    return (
        <>
            <JsonLd data={buildNewsArticleSchema(release)} />
            <JsonLd data={breadcrumb} />
            <PressReleaseView slug={slug} />
        </>
    );
}
