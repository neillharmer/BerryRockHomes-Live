'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const TokenSwatch = ({ name, hex, className, textColor = 'dark' }) => {
    const [copied, setCopied] = useState(false);

    const copy = (value) => {
        navigator.clipboard?.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
    };

    const labelColor = textColor === 'light' ? 'text-white/90' : 'text-slate-900';
    const subColor = textColor === 'light' ? 'text-white/60' : 'text-slate-500';

    return (
        <button
            type="button"
            onClick={() => copy(hex)}
            className="group relative rounded-xl overflow-hidden border border-slate-200 text-left transition hover:shadow-md"
            style={{ backgroundColor: hex }}
        >
            <div className="h-20" />
            <div className="bg-white px-3 py-2 flex items-center justify-between gap-2">
                <div className="min-w-0">
                    <p className={`text-xs font-semibold truncate ${labelColor}`}>{name}</p>
                    <p className={`text-[10px] font-mono ${subColor}`}>{className || hex}</p>
                </div>
                <span className="text-slate-400 group-hover:text-slate-700 shrink-0">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                </span>
            </div>
        </button>
    );
};

export default TokenSwatch;
