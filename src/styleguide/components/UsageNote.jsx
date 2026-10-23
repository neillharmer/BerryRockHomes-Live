'use client';

import { CheckCircle2, XCircle, Info, AlertTriangle } from 'lucide-react';

const variants = {
    do: {
        Icon: CheckCircle2,
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        iconColor: 'text-emerald-600',
        label: 'Do',
        labelColor: 'text-emerald-700',
    },
    dont: {
        Icon: XCircle,
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        iconColor: 'text-rose-600',
        label: "Don't",
        labelColor: 'text-rose-700',
    },
    note: {
        Icon: Info,
        bg: 'bg-sky-50',
        border: 'border-sky-200',
        iconColor: 'text-sky-600',
        label: 'Note',
        labelColor: 'text-sky-700',
    },
    flag: {
        Icon: AlertTriangle,
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        iconColor: 'text-amber-600',
        label: 'Needs standardization',
        labelColor: 'text-amber-700',
    },
};

const UsageNote = ({ variant = 'note', label, children }) => {
    const v = variants[variant] || variants.note;
    const Icon = v.Icon;
    return (
        <div className={`flex items-start gap-3 rounded-xl border ${v.border} ${v.bg} p-4`}>
            <Icon size={18} className={`shrink-0 mt-0.5 ${v.iconColor}`} />
            <div className="min-w-0">
                <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${v.labelColor} mb-1`}>
                    {label || v.label}
                </p>
                <div className="text-base text-slate-700 leading-relaxed">{children}</div>
            </div>
        </div>
    );
};

export default UsageNote;
