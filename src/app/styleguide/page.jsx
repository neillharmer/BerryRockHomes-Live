'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';

import StyleGuideSection from '@/styleguide/components/StyleGuideSection';
import TokenSwatch from '@/styleguide/components/TokenSwatch';
import TypographySample from '@/styleguide/components/TypographySample';
import ModulePreviewCard from '@/styleguide/components/ModulePreviewCard';
import ModuleFilter from '@/styleguide/components/ModuleFilter';
import CodeSnippet from '@/styleguide/components/CodeSnippet';
import UsageNote from '@/styleguide/components/UsageNote';
import Toc from '@/styleguide/components/Toc';

import {
    colorScales,
    semanticColors,
    typographyScale,
    calloutCards,
    shadows,
    radii,
    spacingScale,
    breakpoints,
    motionConventions,
    glassmorphism,
} from '@/styleguide/tokens';
import { moduleRegistry, categories } from '@/styleguide/moduleRegistry';

const sections = [
    { id: 'tokens', label: 'Design Tokens' },
    { id: 'typography', label: 'Typography' },
    { id: 'buttons', label: 'Buttons & CTAs' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'forms', label: 'Form Elements' },
    { id: 'content', label: 'Editorial Blocks' },
    { id: 'modules', label: 'Page Modules' },
    { id: 'usage', label: 'Usage Guidelines' },
    { id: 'inconsistencies', label: 'Inconsistency Report' },
];

const StyleGuidePage = () => {
    const [category, setCategory] = useState('All');
    const [query, setQuery] = useState('');

    const filteredModules = useMemo(() => {
        const q = query.trim().toLowerCase();
        return moduleRegistry.filter((m) => {
            if (category !== 'All' && m.category !== category) return false;
            if (!q) return true;
            return (
                m.name.toLowerCase().includes(q) ||
                m.id.toLowerCase().includes(q) ||
                (m.description || '').toLowerCase().includes(q)
            );
        });
    }, [category, query]);

    const flagged = moduleRegistry.filter((m) => m.status === 'needs-standardization');

    return (
        <main className="bg-neutral-50 min-h-screen pt-[200px] lg:pt-[240px] pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-16">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-3">
                        Internal · Not indexed
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-navy-800 tracking-tight leading-[1.1]">
                        Berry Rock Homes — System &amp; Module Reference
                    </h1>
                    <p className="mt-4 max-w-2xl text-base lg:text-lg text-slate-600 leading-relaxed">
                        Single source of truth for the tokens, typography, and reusable modules that
                        make up the Berry Rock Homes site. Use this page to find the right block
                        before building a new section.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                        <span className="px-2 py-1 rounded-md bg-white border border-slate-200">
                            {moduleRegistry.length} modules
                        </span>
                        <span className="px-2 py-1 rounded-md bg-white border border-slate-200">
                            {flagged.length} flagged
                        </span>
                        <span className="px-2 py-1 rounded-md bg-white border border-slate-200">
                            tailwind.config.js · BRH-Style-Guide.html
                        </span>
                    </div>
                </header>

                <div className="grid lg:grid-cols-[180px_1fr] gap-10">
                    <Toc sections={sections} />

                    <div className="min-w-0">
                        {/* ─────────── Design Tokens ─────────── */}
                        <StyleGuideSection
                            id="tokens"
                            eyebrow="01"
                            title="Design Tokens"
                            description="Color scales, semantic mappings, shadows, radii, spacing, breakpoints, and motion conventions. Source: tailwind.config.js + BRH-Style-Guide.html."
                        >
                            {/* Color scales */}
                            <div className="space-y-8 mb-10">
                                {colorScales.map((scale) => (
                                    <div key={scale.prefix}>
                                        <div className="mb-3">
                                            <h3 className="text-lg font-semibold text-navy-800">
                                                {scale.name}
                                            </h3>
                                            <p className="text-sm text-slate-500">{scale.role}</p>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                                            {scale.shades.map((s) => (
                                                <TokenSwatch
                                                    key={s.step}
                                                    name={`${scale.prefix}-${s.step}${
                                                        s.label ? ` · ${s.label}` : ''
                                                    }`}
                                                    hex={s.hex}
                                                    className={`${scale.prefix}-${s.step}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Semantic mapping */}
                            <div className="mb-10">
                                <h3 className="text-lg font-semibold text-navy-800 mb-3">
                                    Semantic roles
                                </h3>
                                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                                    <table className="w-full text-sm">
                                        <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-[0.14em] text-slate-500">
                                            <tr>
                                                <th className="px-4 py-2 font-semibold">Role</th>
                                                <th className="px-4 py-2 font-semibold">Token</th>
                                                <th className="px-4 py-2 font-semibold">Hex</th>
                                                <th className="px-4 py-2 font-semibold">Swatch</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {semanticColors.map((row) => (
                                                <tr key={row.role}>
                                                    <td className="px-4 py-2 text-slate-700">{row.role}</td>
                                                    <td className="px-4 py-2 font-mono text-[12px] text-slate-600">
                                                        {row.token}
                                                    </td>
                                                    <td className="px-4 py-2 font-mono text-[12px] text-slate-500">
                                                        {row.hex}
                                                    </td>
                                                    <td className="px-4 py-2">
                                                        <span
                                                            className="inline-block w-6 h-6 rounded border border-slate-200"
                                                            style={{ backgroundColor: row.hex }}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Callout card patterns */}
                            <div className="mb-10">
                                <h3 className="text-lg font-semibold text-navy-800 mb-1">
                                    Callout card patterns
                                </h3>
                                <p className="text-sm text-slate-500 mb-4 max-w-2xl">
                                    Three canonical treatments, each available in two layouts: icon above the copy, or icon to the left. The rules: the card always lifts off its background, the icon sits in a circular chip (<code className="font-mono text-[12px]">rounded-full</code>, never a rounded square), the title is an enlarged all-caps subheader (<code className="font-mono text-[12px]">text-3xl font-light</code> — 30px / weight 300), and the supporting detail is body copy. Do not mix patterns within the same section.
                                </p>
                                {[
                                    { layout: 'top', label: 'Icon above copy' },
                                    { layout: 'left', label: 'Icon left of copy' },
                                ].map(({ layout, label }) => (
                                    <div key={layout} className="mb-6">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">{label}</p>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {calloutCards.map((card) => {
                                                const wrapperBg =
                                                    card.background === 'dark'
                                                        ? 'bg-gradient-to-br from-navy-800 to-navy-950'
                                                        : card.background === 'sand'
                                                        ? 'bg-sand-100'
                                                        : 'bg-neutral-50';
                                                const isDark = card.background === 'dark';
                                                return (
                                                    <div
                                                        key={`${layout}-${card.name}`}
                                                        className="rounded-2xl border border-slate-200 overflow-hidden"
                                                    >
                                                        <div className={`${wrapperBg} p-8 flex items-center justify-center min-h-[180px]`}>
                                                            <div className={`${card.classes} p-6 w-full max-w-[240px] flex ${layout === 'top' ? 'flex-col items-start gap-3' : 'flex-row items-start gap-4'}`}>
                                                                <div className={`w-12 h-12 ${card.iconBackground} flex items-center justify-center shrink-0`}>
                                                                    <span className={`text-xl font-bold ${card.iconColor}`}>★</span>
                                                                </div>
                                                                <div>
                                                                    <p className={`text-lg font-semibold leading-snug mb-1 ${isDark ? 'text-white' : 'text-navy-800'}`}>
                                                                        Card title
                                                                    </p>
                                                                    <p className={`text-base leading-relaxed ${isDark ? 'text-white/60' : 'text-slate-700'}`}>
                                                                        Supporting detail goes here.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bg-white px-4 py-3">
                                                            <p className="text-sm font-bold text-navy-800">{card.name}</p>
                                                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">{card.role}</p>
                                                            <p className="text-[11px] text-slate-400 mt-2 font-mono break-words">{card.classes}</p>
                                                            <p className="text-[11px] text-amber-600 mt-1 leading-relaxed">{card.notes}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Glassmorphism */}
                            <div className="mb-10">
                                <h3 className="text-lg font-semibold text-navy-800 mb-1">
                                    Glassmorphism
                                </h3>
                                <p className="text-sm text-slate-500 mb-4 max-w-2xl">
                                    Two glass variants for two contexts: <code className="font-mono text-[12px]">.glass-panel</code>{' '}
                                    for light backgrounds (subtle depth, warm white), and the dark-glass family
                                    (<code className="font-mono text-[12px]">.glass-card-dark</code>,{' '}
                                    <code className="font-mono text-[12px]">.glass-pill-dark</code>) for cards
                                    floating on photos, navy gradients, or hero overlays. The dark variant is
                                    the canonical pattern shown in the Success Stories callout.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {glassmorphism.map((g) => {
                                        const isDark = g.background === 'dark';
                                        const wrapperBg = isDark
                                            ? 'bg-gradient-to-br from-navy-800 to-navy-950'
                                            : 'bg-gradient-to-br from-neutral-100 to-neutral-200';
                                        const isPill = g.name.includes('pill');
                                        const sample = isPill ? (
                                            <span className="glass-pill-dark text-white text-xs font-bold uppercase tracking-widest px-4 py-2">
                                                Sample pill
                                            </span>
                                        ) : g.name === '.glass-panel' ? (
                                            <div className="glass-panel p-6 w-full max-w-xs">
                                                <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-2">
                                                    Light glass
                                                </p>
                                                <p className="text-sm text-slate-700 leading-relaxed">
                                                    Sits comfortably on light backgrounds with subtle backdrop blur.
                                                </p>
                                            </div>
                                        ) : g.name === '.glass-card-dark-interactive' ? (
                                            <div className="glass-card-dark-interactive p-5 w-full max-w-xs cursor-pointer">
                                                <p className="text-white font-light text-3xl mb-1">42%</p>
                                                <p className="text-white/70 text-xs">Hover me</p>
                                            </div>
                                        ) : (
                                            <div className="glass-card-dark p-5 w-full max-w-xs">
                                                <p className="text-white font-light text-3xl mb-1">$300M+</p>
                                                <p className="text-white/70 text-xs">Funded and closed</p>
                                            </div>
                                        );

                                        return (
                                            <div
                                                key={g.name}
                                                className="rounded-2xl border border-slate-200 overflow-hidden"
                                            >
                                                <div
                                                    className={`${wrapperBg} p-8 flex items-center justify-center min-h-[180px]`}
                                                >
                                                    {sample}
                                                </div>
                                                <div className="bg-white px-4 py-3">
                                                    <p className="text-sm font-bold text-navy-800 font-mono">
                                                        {g.name}
                                                    </p>
                                                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                                        {g.role}
                                                    </p>
                                                    <p className="text-[11px] text-slate-400 mt-2 font-mono break-words">
                                                        {g.classes}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-4 grid lg:grid-cols-2 gap-3">
                                    <UsageNote variant="do" label="When to use glass">
                                        Use on top of photography, gradients, or color-rich backgrounds where a
                                        solid card would feel heavy. The blur creates depth without breaking the
                                        background composition.
                                    </UsageNote>
                                    <UsageNote variant="dont" label="When NOT to use glass">
                                        Don&apos;t place glass on a flat white or pale background — the blur has
                                        nothing to operate on and the result reads as a low-contrast solid card.
                                        Use <code className="font-mono text-[12px]">bg-white</code> with a border instead.
                                    </UsageNote>
                                </div>
                            </div>

                            {/* Shadows */}
                            <div className="mb-10">
                                <h3 className="text-lg font-semibold text-navy-800 mb-3">Shadows</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {shadows.map((s) => (
                                        <div
                                            key={s.name}
                                            className={`bg-white rounded-xl p-5 ${s.class}`}
                                        >
                                            <p className="text-xs font-semibold text-navy-800">
                                                {s.name}
                                            </p>
                                            <p className="text-[11px] text-slate-500 mt-1 font-mono break-words">
                                                {s.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Radii */}
                            <div className="mb-10">
                                <h3 className="text-lg font-semibold text-navy-800 mb-3">
                                    Border radius
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                                    {radii.map((r) => (
                                        <div
                                            key={r.name}
                                            className={`bg-white border border-slate-200 p-4 ${r.name}`}
                                        >
                                            <p className="text-xs font-semibold text-navy-800">
                                                {r.name}
                                            </p>
                                            <p className="text-[11px] text-slate-500 font-mono">
                                                {r.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <UsageNote variant="note" label="Icons inside a shape are always circles">
                                        Any icon or number that sits inside its own background shape — feature
                                        bullets, stat chips, step badges, list markers — uses{' '}
                                        <code className="font-mono text-[12px]">rounded-full</code>, never a
                                        rounded square. The chip is a fixed square box
                                        (<code className="font-mono text-[12px]">w-10 h-10</code>,{' '}
                                        <code className="font-mono text-[12px]">w-12 h-12</code>, etc.) centered with{' '}
                                        <code className="font-mono text-[12px]">flex items-center justify-center</code>{' '}
                                        and rendered as a circle. The larger <code className="font-mono text-[12px]">rounded-xl</code>/
                                        <code className="font-mono text-[12px]">rounded-2xl</code> radii are for cards,
                                        panels, and image tiles only — not for icon/number containers.
                                    </UsageNote>
                                </div>
                            </div>

                            {/* Spacing */}
                            <div className="mb-10">
                                <h3 className="text-lg font-semibold text-navy-800 mb-3">Spacing</h3>
                                <div className="space-y-1 bg-white border border-slate-200 rounded-xl p-5">
                                    {spacingScale.map((s) => (
                                        <div key={s.token} className="flex items-center gap-4">
                                            <span className="w-16 text-[11px] font-mono text-slate-500">
                                                {s.token}
                                            </span>
                                            <span
                                                className="h-3 bg-berry-600 rounded"
                                                style={{ width: `${s.px}px` }}
                                            />
                                            <span className="text-[11px] text-slate-400 font-mono">
                                                {s.px}px
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Breakpoints */}
                            <div className="mb-10">
                                <h3 className="text-lg font-semibold text-navy-800 mb-3">
                                    Breakpoints
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                    {breakpoints.map((bp) => (
                                        <div
                                            key={bp.name}
                                            className="bg-white border border-slate-200 rounded-xl p-4"
                                        >
                                            <p className="text-xs font-semibold text-navy-800">
                                                {bp.name}
                                            </p>
                                            <p className="text-sm font-mono text-slate-600">
                                                {bp.min}
                                            </p>
                                            <p className="text-[11px] text-slate-500 mt-1">
                                                {bp.usage}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Motion */}
                            <div>
                                <h3 className="text-lg font-semibold text-navy-800 mb-3">Motion</h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {motionConventions.map((m) => (
                                        <div
                                            key={m.name}
                                            className="bg-white border border-slate-200 rounded-xl p-4"
                                        >
                                            <p className="text-xs font-semibold text-navy-800">
                                                {m.name}
                                            </p>
                                            <p className="text-sm text-slate-700 mt-1">{m.value}</p>
                                            <p className="text-[11px] text-slate-500 mt-1">{m.usage}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StyleGuideSection>

                        {/* ─────────── Typography ─────────── */}
                        <StyleGuideSection
                            id="typography"
                            eyebrow="02"
                            title="Typography"
                            description="Outfit, loaded via next/font. Use these named styles instead of inventing new combinations."
                        >
                            <div className="grid lg:grid-cols-2 gap-4">
                                {typographyScale.map((t) => (
                                    <TypographySample
                                        key={t.label}
                                        label={t.label}
                                        classes={t.classes}
                                        sample={t.sample}
                                        tag={t.tag}
                                        specs={t.specs}
                                    />
                                ))}
                            </div>
                        </StyleGuideSection>

                        {/* ─────────── Buttons ─────────── */}
                        <StyleGuideSection
                            id="buttons"
                            eyebrow="03"
                            title="Buttons & CTAs"
                            description="Standard CTAs across the site. Most existing buttons are inline Tailwind on <Link> — see the Inconsistency Report for the planned <Button> component."
                        >
                            <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 mb-4">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 bg-berry-600 hover:bg-berry-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors group text-sm shadow-md"
                                    >
                                        Primary CTA
                                        <ArrowRight
                                            size={14}
                                            className="group-hover:translate-x-0.5 transition-transform"
                                        />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-900 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-md"
                                    >
                                        Secondary CTA
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 bg-transparent border-2 border-berry-600 text-berry-600 hover:bg-berry-600 hover:text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
                                    >
                                        Outline coral
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 bg-transparent border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
                                    >
                                        Outline navy
                                    </Link>
                                    <span className="text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors cursor-pointer">
                                        Text link →
                                    </span>
                                    <button
                                        type="button"
                                        disabled
                                        className="inline-flex items-center gap-2 bg-slate-200 text-slate-400 font-bold px-7 py-3.5 rounded-full text-sm cursor-not-allowed"
                                    >
                                        Disabled
                                    </button>
                                </div>

                                <div className="bg-navy-800 rounded-xl p-6 flex flex-wrap items-center gap-3">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 bg-white text-navy-800 hover:bg-neutral-100 font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-md"
                                    >
                                        White on navy
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 bg-berry-600 hover:bg-berry-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-md"
                                    >
                                        Coral on navy
                                    </Link>
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
                                    >
                                        Outline on navy
                                    </Link>
                                </div>
                            </div>

                            {/* Split CTA pattern */}
                            <div className="mt-8 mb-2">
                                <h3 className="text-lg font-semibold text-navy-800 mb-1">Split section CTA (canonical page-bottom pattern)</h3>
                                <p className="text-sm text-slate-500 mb-4">Two white cards side-by-side on a slate-50 ground. Use at the bottom of FAQ, how-it-works, and similar pages where you want both a "contact" and a "qualify" exit. Never use the navy-800 dark card for this pattern.</p>
                                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col">
                                            <MessageCircle size={24} className="text-berry-600 mb-4" />
                                            <h3 className="text-base font-bold text-slate-900 mb-2">Still have questions?</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">Our team is standing by. Send us a message and we&apos;ll get back to you within one business day.</p>
                                            <Link href="#" className="inline-flex items-center gap-2 bg-berry-600 hover:bg-berry-700 text-white font-bold px-5 py-2.5 rounded-full transition-colors group w-fit text-sm">
                                                Contact Us <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col">
                                            <Phone size={24} className="text-berry-600 mb-4" />
                                            <h3 className="text-base font-bold text-slate-900 mb-2">Ready to get started?</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">Skip the research and see if you qualify. Takes about 5 minutes and won&apos;t affect your credit score.</p>
                                            <Link href="#" className="inline-flex items-center gap-2 bg-berry-600 hover:bg-berry-700 text-white font-bold px-5 py-2.5 rounded-full transition-colors group w-fit text-sm">
                                                See If You Qualify <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <UsageNote variant="flag" label="Secondary CTA on sand/warm backgrounds">
                                Never use a ghost/outline button (border-slate-200, transparent bg) on sand-50, sand-100, or any warm cream background — the border is nearly invisible and the button reads as broken. On sand backgrounds, the secondary CTA must use <code className="font-mono text-[12px]">bg-slate-900 text-white</code> (dark pill). The ghost outline is only appropriate on white or neutral-50 page backgrounds. Also: no coral left-border (border-l border-berry-*) on any text callout — this is an AI-generated pattern that conflicts with our visual voice. Quotes use font weight and leading only.
                            </UsageNote>

                            <UsageNote variant="note" label=".btn helpers exist in globals.css">
                                There are <code className="font-mono text-[12px]">.btn</code>,{' '}
                                <code className="font-mono text-[12px]">.btn-dark</code>,{' '}
                                <code className="font-mono text-[12px]">.btn-light</code>, and{' '}
                                <code className="font-mono text-[12px]">.btn-outline</code> classes
                                that are currently underused. Production code rolls its own pill
                                buttons inline. Standardizing on a <code className="font-mono text-[12px]">&lt;Button&gt;</code>{' '}
                                component is logged in the Inconsistency Report.
                            </UsageNote>
                        </StyleGuideSection>

                        {/* ─────────── Navigation ─────────── */}
                        <StyleGuideSection
                            id="navigation"
                            eyebrow="04"
                            title="Navigation & Header Elements"
                            description="Header (Navbar) and Footer are mounted globally in src/app/layout.jsx; they appear on every page including this one. PageHeader is used at the top of all internal pages."
                        >
                            <div className="grid gap-4">
                                {moduleRegistry
                                    .filter((m) => m.category === 'Layout')
                                    .map((m) => (
                                        <ModulePreviewCard key={m.id} module={m} />
                                    ))}
                            </div>
                        </StyleGuideSection>

                        {/* ─────────── Forms ─────────── */}
                        <StyleGuideSection
                            id="forms"
                            eyebrow="05"
                            title="Form Elements"
                            description="Inputs, textareas, selects, radios, checkboxes. Note: there is no shared form-component library yet — these are the conventions to adopt."
                        >
                            <UsageNote variant="flag">
                                The repo has no shared form components. /apply and /contact will need
                                them. The samples below are the proposed canonical style; build them
                                into a <code className="font-mono text-[12px]">Form/*</code> module
                                in a follow-up phase.
                            </UsageNote>

                            <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 mt-4 space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Jane Doe"
                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">As it appears on your ID.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                                        Email <span className="text-rose-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="invalid-email"
                                        className="w-full px-4 py-2.5 rounded-lg border border-rose-300 text-sm text-slate-800 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                                    />
                                    <p className="text-xs text-rose-600 mt-1">Enter a valid email address.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                                        Market
                                    </label>
                                    <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800">
                                        <option>Indianapolis, IN</option>
                                        <option>Kansas City, MO</option>
                                        <option>Oklahoma City, OK</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">
                                        Tell us about your goals
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="A few sentences is plenty."
                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-navy-800 focus:ring-1 focus:ring-navy-800"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                                        <input
                                            type="checkbox"
                                            className="accent-berry-600 w-4 h-4"
                                        />
                                        I agree to be contacted about the program
                                    </label>
                                    <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                                        <input
                                            type="radio"
                                            name="contact"
                                            className="accent-berry-600 w-4 h-4"
                                        />
                                        Email me
                                    </label>
                                    <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                                        <input
                                            type="radio"
                                            name="contact"
                                            className="accent-berry-600 w-4 h-4"
                                        />
                                        Call me
                                    </label>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 bg-berry-600 hover:bg-berry-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm shadow-md"
                                    >
                                        Submit application
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </StyleGuideSection>

                        {/* ─────────── Editorial Content Blocks ─────────── */}
                        <StyleGuideSection
                            id="content"
                            eyebrow="06"
                            title="Editorial Content Blocks"
                            description="The typed blocks that build the body of article and press release subpages, rendered by the ContentBlock switch in src/views/Article.jsx and src/views/PressRelease.jsx. Each is driven by a block object in the article/release data, not a standalone component."
                        >
                            {/* Block quote */}
                            <div className="mb-10">
                                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                    <h3 className="text-lg font-semibold text-navy-800">Block quote</h3>
                                    <span className="text-[11px] font-mono text-slate-500">
                                        Article.jsx · type: &apos;quote&apos;
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 mb-4 max-w-2xl">
                                    Inline quotation inside long-form articles. Restrained left rule (slate, never
                                    coral), italic, larger than body. Use for a sourced line lifted from the article
                                    flow.
                                </p>
                                <div className="rounded-2xl border border-slate-200 bg-white px-6 lg:px-8 mb-4">
                                    <blockquote className="my-16 border-l-4 border-slate-200 pl-6">
                                        <p className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed italic">
                                            &ldquo;Owning a home felt impossible until someone finally showed us a
                                            path we could actually walk.&rdquo;
                                        </p>
                                        <footer className="mt-3 text-sm font-semibold text-slate-500">
                                            Sarah M., Indianapolis homeowner
                                        </footer>
                                    </blockquote>
                                </div>
                                <CodeSnippet
                                    label="src/views/Article.jsx — case 'quote'"
                                    code={`<blockquote className="my-16 border-l-4 border-slate-200 pl-6">
  <p className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed italic">
    &ldquo;{block.text}&rdquo;
  </p>
  {block.attribution && (
    <footer className="mt-3 text-sm font-semibold text-slate-500">
      {block.attribution}
    </footer>
  )}
</blockquote>`}
                                />
                            </div>

                            {/* Pull quote */}
                            <div className="mb-10">
                                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                    <h3 className="text-lg font-semibold text-navy-800">Pull quote</h3>
                                    <span className="text-[11px] font-mono text-slate-500">
                                        PressRelease.jsx · type: &apos;quote&apos;
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 mb-4 max-w-2xl">
                                    Spokesperson quote in press releases. Large, highlighted text with a navy-50 marker
                                    band behind the words (<code className="font-mono text-[12px]">box-decoration-clone</code>{' '}
                                    keeps the band wrapping cleanly across lines). Higher visual weight than the article
                                    block quote.
                                </p>
                                <div className="rounded-2xl border border-slate-200 bg-white px-6 lg:px-8 mb-4">
                                    <blockquote className="my-12">
                                        <p className="text-2xl md:text-[1.75rem] font-medium leading-[1.55] tracking-tight">
                                            <span className="box-decoration-clone bg-navy-50 px-3 py-2 text-slate-800">
                                                We built Berry Rock Homes to turn renters into owners on terms that
                                                respect where they are today.
                                            </span>
                                        </p>
                                        <footer className="mt-6 text-sm font-semibold text-slate-500">
                                            Devon R., Founder &amp; CEO, Berry Rock Homes
                                        </footer>
                                    </blockquote>
                                </div>
                                <CodeSnippet
                                    label="src/views/PressRelease.jsx — case 'quote'"
                                    code={`<blockquote className="my-12">
  <p className="text-2xl md:text-[1.75rem] font-medium leading-[1.55] tracking-tight">
    <span className="box-decoration-clone bg-navy-50 px-3 py-2 text-slate-800">
      {block.text}
    </span>
  </p>
  {block.attribution && (
    <footer className="mt-6 text-sm font-semibold text-slate-500">
      {block.attribution}
    </footer>
  )}
</blockquote>`}
                                />
                            </div>

                            {/* Spotlight */}
                            <div className="mb-8">
                                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                    <h3 className="text-lg font-semibold text-navy-800">Spotlight</h3>
                                    <span className="text-[11px] font-mono text-slate-500">
                                        Article.jsx · type: &apos;callout&apos;
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 mb-4 max-w-2xl">
                                    Highlighted aside for a key takeaway. Soft sand card, optional all-caps berry eyebrow,
                                    body copy. Use to lift a takeaway out of the article flow without breaking it.
                                </p>
                                <div className="rounded-2xl border border-slate-200 bg-white px-6 lg:px-8 py-4 mb-4">
                                    <div className="my-8 rounded-2xl bg-sand-50 p-6 md:p-8">
                                        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-berry-700">
                                            Good to know
                                        </p>
                                        <p className="text-lg text-slate-700 leading-relaxed">
                                            Checking what you qualify for takes about five minutes and never affects your
                                            credit score.
                                        </p>
                                    </div>
                                </div>
                                <CodeSnippet
                                    label="src/views/Article.jsx — case 'callout'"
                                    code={`<div className="my-8 rounded-2xl bg-sand-50 p-6 md:p-8">
  {block.title && (
    <p className="mb-2 text-sm font-bold uppercase tracking-widest text-berry-700">
      {block.title}
    </p>
  )}
  <p className="text-lg text-slate-700 leading-relaxed">{block.text}</p>
</div>`}
                                />
                            </div>

                            <UsageNote variant="note" label="Block quote vs. pull quote">
                                Both are driven by a <code className="font-mono text-[12px]">type: &apos;quote&apos;</code>{' '}
                                block — the styling difference is per-template. Articles get the restrained italic
                                left-rule treatment; press releases get the large navy-50 highlighted band for a
                                spokesperson statement. Pick the template, not a flag.
                            </UsageNote>
                        </StyleGuideSection>

                        {/* ─────────── Modules ─────────── */}
                        <StyleGuideSection
                            id="modules"
                            eyebrow="07"
                            title="Page Modules"
                            description="Every reusable section in the codebase. Filter by category or search. Click Code on any card to copy the import + props snippet."
                        >
                            <ModuleFilter
                                categories={categories}
                                activeCategory={category}
                                onCategoryChange={setCategory}
                                query={query}
                                onQueryChange={setQuery}
                            />

                            {filteredModules.length === 0 ? (
                                <p className="text-sm text-slate-500 italic">
                                    No modules match the current filter.
                                </p>
                            ) : (
                                <div className="grid gap-6">
                                    {filteredModules.map((m) => (
                                        <ModulePreviewCard key={m.id} module={m} />
                                    ))}
                                </div>
                            )}
                        </StyleGuideSection>

                        {/* ─────────── Usage ─────────── */}
                        <StyleGuideSection
                            id="usage"
                            eyebrow="08"
                            title="Usage Guidelines"
                            description="How to compose pages so they stay coherent. Pulled from BRH-Style-Guide.html and observed practice."
                        >
                            <div className="grid lg:grid-cols-2 gap-4">
                                <UsageNote variant="do" label="Standard page composition">
                                    Hero → Trust strip → Process / How it works → Proof
                                    (testimonials) → CTA → Featured markets → Footer CTA. Most
                                    landing pages follow this rhythm; deviate only with a reason.
                                </UsageNote>
                                <UsageNote variant="do" label="Pick one Process module per page">
                                    StepsTimeline is the canonical pick. ProcessSteps is reserved for
                                    /how-it-works long-form. The others duplicate intent.
                                </UsageNote>
                                <UsageNote variant="do" label="Color discipline">
                                    Coral = action only. Navy = headings + dark sections. Sky = small
                                    accents. Never use coral for body copy.
                                </UsageNote>
                                <UsageNote variant="dont" label="Don't invent one-off styles">
                                    If you find yourself writing a new card pattern, check the Cards
                                    & Content section first. Adding variants makes the system harder
                                    to keep coherent.
                                </UsageNote>
                                <UsageNote variant="dont" label="Don't stack two heroes">
                                    Only one Hero (home) or PageHeader per page.
                                </UsageNote>
                                <UsageNote variant="note" label="Accessibility quick-check">
                                    Every page should have one h1; sections should follow heading
                                    order without skipping levels. Buttons must have discernible
                                    text. All images need alt copy. Maintain 4.5:1 contrast for body
                                    text.
                                </UsageNote>
                            </div>
                        </StyleGuideSection>

                        {/* ─────────── Inconsistencies ─────────── */}
                        <StyleGuideSection
                            id="inconsistencies"
                            eyebrow="09"
                            title="Inconsistency Report"
                            description="Patterns that need to be standardized. Each entry suggests the canonical pick."
                        >
                            <div className="space-y-4">
                                <UsageNote variant="flag" label="Steps modules — pick one">
                                    Five variants exist: StepsTimeline, ProcessSteps,
                                    ProcessAtAGlance, AtAGlance, HowItWorksPreview. Recommend:
                                    <strong> StepsTimeline</strong> as the homepage canonical, plus{' '}
                                    <strong>ProcessSteps</strong> reserved for the long /how-it-works
                                    explainer. Retire the other three when their pages are rebuilt.
                                </UsageNote>
                                <UsageNote variant="flag" label="No shared <Button> component">
                                    Pill buttons are written inline 30+ times with identical Tailwind
                                    strings. Plan: ship{' '}
                                    <code className="font-mono text-[12px]">
                                        &lt;Button variant=&quot;primary|secondary|outline|text&quot;&gt;
                                    </code>{' '}
                                    that maps onto the existing{' '}
                                    <code className="font-mono text-[12px]">.btn-*</code> classes in
                                    globals.css.
                                </UsageNote>
                                <UsageNote variant="flag" label="No shared form components">
                                    /apply and /contact will benefit from{' '}
                                    <code className="font-mono text-[12px]">&lt;Field&gt;</code>,{' '}
                                    <code className="font-mono text-[12px]">&lt;Input&gt;</code>,{' '}
                                    <code className="font-mono text-[12px]">&lt;Select&gt;</code>,{' '}
                                    <code className="font-mono text-[12px]">&lt;Textarea&gt;</code>{' '}
                                    primitives. See the Form Elements section for the proposed visual
                                    style.
                                </UsageNote>
                                <UsageNote variant="flag" label="Off-palette colors">
                                    A few hex values aren&apos;t in the token system:
                                    <code className="font-mono text-[12px]"> #8b1a1a</code> (deep red
                                    glow accent),
                                    <code className="font-mono text-[12px]"> #001a3a</code>{' '}
                                    (PageHeader border). Decide whether to fold them into the
                                    palette or remove them.{' '}
                                    <strong>Resolved:</strong>{' '}
                                    <code className="font-mono text-[12px]">#F5F1EB</code> is now{' '}
                                    <code className="font-mono text-[12px]">sand-100</code>.
                                </UsageNote>
                                <UsageNote variant="note" label="Token consolidation underway">
                                    The arbitrary-value hex codes
                                    (<code className="font-mono text-[12px]">[#E8553D]</code>,{' '}
                                    <code className="font-mono text-[12px]">[#002e5d]</code>,{' '}
                                    <code className="font-mono text-[12px]">[#c0392b]</code>) are
                                    being swept across the codebase to the named Tailwind tokens
                                    (<code className="font-mono text-[12px]">berry-600</code>,{' '}
                                    <code className="font-mono text-[12px]">navy-800</code>,{' '}
                                    <code className="font-mono text-[12px]">berry-700</code>). Pure
                                    token-equivalence — no visual change expected.
                                </UsageNote>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-navy-800 mb-3">
                                    Flagged modules
                                </h3>
                                <div className="space-y-3">
                                    {flagged.map((m) => (
                                        <div
                                            key={m.id}
                                            className="rounded-xl border border-amber-200 bg-amber-50/60 p-4"
                                        >
                                            <div className="flex flex-wrap items-baseline gap-2">
                                                <span className="text-sm font-bold text-navy-800">
                                                    {m.name}
                                                </span>
                                                <span className="text-[11px] font-mono text-slate-500">
                                                    {m.importPath}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-700 mt-1">
                                                {m.usage || m.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-lg font-semibold text-navy-800 mb-3">
                                    Quick reference — extending the registry
                                </h3>
                                <CodeSnippet
                                    label="src/styleguide/moduleRegistry.js"
                                    code={`{
  id: 'hero-internal',
  name: 'Internal Page Hero',
  componentName: 'InternalHero',
  category: 'Hero',
  description: 'Compact hero for non-homepage routes.',
  importPath: '@/components/Shared/InternalHero',
  component: InternalHero,
  sampleProps: { title: 'About the program' },
  variants: ['Default', 'With photo'],
  usage: 'Top of every internal page.',
  status: 'canonical',
  previewBackground: 'navy',
  previewPadded: false,
}`}
                                />
                            </div>
                        </StyleGuideSection>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StyleGuidePage;
