'use client';

const ComponentPreview = ({ children, padding = true, background = 'neutral', maxHeight }) => {
    const bg =
        background === 'navy'
            ? 'bg-navy-800'
            : background === 'white'
            ? 'bg-white'
            : 'bg-neutral-50';

    return (
        <div
            className={`relative rounded-2xl border border-slate-200 ${bg} overflow-hidden`}
            style={maxHeight ? { maxHeight } : undefined}
        >
            <div className={padding ? 'p-6 lg:p-8' : ''}>{children}</div>
        </div>
    );
};

export default ComponentPreview;
