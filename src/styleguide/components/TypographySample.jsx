'use client';

const TypographySample = ({ label, classes, sample, tag: Tag = 'p', specs }) => {
    return (
        <div className="border border-slate-200 rounded-xl p-5 lg:p-6 bg-white">
            <div className="flex flex-wrap items-baseline gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {label}
                </span>
                {specs && <span className="text-xs text-slate-400 font-mono">{specs}</span>}
            </div>
            <Tag className={classes}>{sample}</Tag>
            <p className="mt-4 text-[11px] font-mono text-slate-500 break-all">{classes}</p>
        </div>
    );
};

export default TypographySample;
