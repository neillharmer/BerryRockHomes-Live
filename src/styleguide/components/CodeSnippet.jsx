'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeSnippet = ({ code, label }) => {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard?.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <div className="relative rounded-xl bg-slate-900 text-slate-100 overflow-hidden">
            {label && (
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700/50 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    <span>{label}</span>
                </div>
            )}
            <button
                type="button"
                onClick={copy}
                className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-700 rounded-md px-2 py-1 transition"
            >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? 'Copied' : 'Copy'}
            </button>
            <pre className="overflow-x-auto px-4 py-4 text-[12px] leading-relaxed font-mono whitespace-pre">
                {code}
            </pre>
        </div>
    );
};

export default CodeSnippet;
