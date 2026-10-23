'use client';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PageHeader from './PageHeader';

/**
 * Reusable template for simple text-based legal / policy pages
 * (Terms of Service, Privacy Policy, Fair Housing, etc.).
 *
 * Props:
 *   eyebrow     – small uppercase label above the title
 *   title       – page H1
 *   subtitle    – hero subtitle
 *   lastUpdated – e.g. "June 30, 2026" (rendered under the hero)
 *   intro       – optional lead paragraph(s); string or string[]
 *   sections     – array of { heading, content } where `content` is an
 *                  array whose items are either:
 *                    • a string            → paragraph
 *                    • { list: string[] }  → bullet list
 *                    • { subheading: str } → minor heading inside a section
 */
const LegalPage = ({ eyebrow = 'Legal', title, subtitle, lastUpdated, intro, sections = [] }) => {
    const introParagraphs = Array.isArray(intro) ? intro : intro ? [intro] : [];

    const renderBlock = (block, i) => {
        if (typeof block === 'string') {
            return (
                <p key={i} className="text-slate-600 leading-relaxed mb-4">
                    {block}
                </p>
            );
        }
        if (block.subheading) {
            return (
                <h3 key={i} className="text-lg font-semibold text-navy-800 mt-6 mb-3">
                    {block.subheading}
                </h3>
            );
        }
        if (block.list) {
            return (
                <ul key={i} className="list-disc pl-5 space-y-2 mb-4 text-slate-600 leading-relaxed marker:text-berry-700">
                    {block.list.map((item, j) => (
                        <li key={j}>{item}</li>
                    ))}
                </ul>
            );
        }
        return null;
    };

    return (
        <>
            <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} compact />

            <div className="bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                    {lastUpdated && (
                        <p className="text-sm text-slate-600 uppercase tracking-wider mb-10">
                            Last updated: {lastUpdated}
                        </p>
                    )}

                    {introParagraphs.map((para, i) => (
                        <p key={i} className="text-lg text-slate-700 leading-relaxed mb-6">
                            {para}
                        </p>
                    ))}

                    <div className="space-y-12 mt-4">
                        {sections.map((section, i) => (
                            <motion.section
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.4 }}
                            >
                                {section.heading && (
                                    <h2 className="text-2xl font-bold text-navy-800 mb-4 tracking-tight">
                                        {section.heading}
                                    </h2>
                                )}
                                {section.content.map(renderBlock)}
                            </motion.section>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LegalPage;
