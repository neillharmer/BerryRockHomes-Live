/**
 * Reusable JSON-LD structured data component.
 * Server component — renders a <script type="application/ld+json"> tag.
 *
 * Usage:
 *   <JsonLd data={{ "@type": "Organization", ... }} />
 */
export default function JsonLd({ data }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
