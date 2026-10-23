import { notFound } from 'next/navigation';
import ArticleView from '@/views/Article';
import JsonLd from '@/components/Shared/JsonLd';
import { articles, getArticleBySlug } from '@/data/articles';
import { buildArticleSchema, buildBreadcrumb } from '@/data/schema';

// Pre-render every article at build time.
export function generateStaticParams() {
    return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return { title: 'Article Not Found | Berry Rock Homes' };
    }

    return {
        title: article.title,
        description: article.excerpt,
        alternates: { canonical: `/articles/${article.slug}` },
        openGraph: {
            title: `${article.title} | Berry Rock Homes`,
            description: article.excerpt,
            type: 'article',
            publishedTime: article.dateISO,
            images: ['/images/meta-image.jpg'],
        },
    };
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const breadcrumb = buildBreadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Articles', path: '/articles' },
        { name: article.title, path: `/articles/${article.slug}` },
    ]);

    return (
        <>
            <JsonLd data={buildArticleSchema(article)} />
            <JsonLd data={breadcrumb} />
            <ArticleView slug={slug} />
        </>
    );
}
