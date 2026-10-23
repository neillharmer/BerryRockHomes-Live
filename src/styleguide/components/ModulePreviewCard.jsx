'use client';

import { useState } from 'react';
import ComponentPreview from './ComponentPreview';
import CodeSnippet from './CodeSnippet';

const statusStyles = {
    canonical: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'needs-standardization': 'bg-amber-50 text-amber-700 border-amber-200',
    deprecated: 'bg-rose-50 text-rose-700 border-rose-200',
};

const tabs = ['Preview', 'Usage', 'Code'];

const ModulePreviewCard = ({ module }) => {
    const [tab, setTab] = useState('Preview');
    const Component = module.component;

    const codeExample =
        module.codeExample ||
        `import ${module.componentName || module.name.replace(/\s+/g, '')} from '${module.importPath}';\n\n` +
            `<${module.componentName || module.name.replace(/\s+/g, '')} ${
                module.sampleProps && Object.keys(module.sampleProps).length
                    ? Object.entries(module.sampleProps)
                          .map(([k, v]) =>
                              typeof v === 'string'
                                  ? `${k}="${v}"`
                                  : `${k}={${JSON.stringify(v)}}`
                          )
                          .join(' ')
                    : ''
            } />`;

    return (
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex flex-wrap items-start gap-3">
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-navy-800 truncate">{module.name}</h3>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            {module.category}
                        </span>
                        {module.status && (
                            <span
                                className={`text-[10px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 rounded-full border ${
                                    statusStyles[module.status] || statusStyles.canonical
                                }`}
                            >
                                {module.status === 'needs-standardization' ? 'Review' : module.status}
                            </span>
                        )}
                    </div>
                    {module.description && (
                        <p className="text-xs text-slate-500 leading-relaxed">{module.description}</p>
                    )}
                </div>
                <div className="flex gap-1 shrink-0">
                    {tabs.map((t) => (
                        <button
                            key={t}
                            type="button"
                            onClick={() => setTab(t)}
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-md transition ${
                                tab === t
                                    ? 'bg-navy-800 text-white'
                                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-4 lg:p-5">
                {tab === 'Preview' && (
                    <ComponentPreview
                        background={module.previewBackground || 'neutral'}
                        padding={module.previewPadded !== false}
                        maxHeight={module.previewMaxHeight}
                    >
                        {module.render ? (
                            module.render()
                        ) : Component ? (
                            <Component {...(module.sampleProps || {})} />
                        ) : (
                            <p className="text-sm text-slate-500 italic">
                                No live preview available. See documentation.
                            </p>
                        )}
                    </ComponentPreview>
                )}

                {tab === 'Usage' && (
                    <div className="text-sm text-slate-700 space-y-3 leading-relaxed">
                        {module.usage && <p>{module.usage}</p>}
                        {module.variants && module.variants.length > 0 && (
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-1">
                                    Variants
                                </p>
                                <ul className="list-disc list-inside text-slate-600">
                                    {module.variants.map((v) => (
                                        <li key={v}>{v}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {module.notes && (
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 mb-1">
                                    Notes
                                </p>
                                <p className="text-slate-600">{module.notes}</p>
                            </div>
                        )}
                    </div>
                )}

                {tab === 'Code' && (
                    <div className="space-y-3">
                        <p className="text-[11px] font-mono text-slate-500">{module.importPath}</p>
                        <CodeSnippet code={codeExample} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModulePreviewCard;
