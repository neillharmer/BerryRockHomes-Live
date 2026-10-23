'use client';

const StyleGuideSection = ({ id, eyebrow, title, description, children }) => {
    return (
        <section id={id} className="scroll-mt-24 py-16 border-t border-slate-200 first:border-t-0">
            <div className="mb-10">
                {eyebrow && (
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-[0.2em] mb-3">
                        {eyebrow}
                    </p>
                )}
                {title && (
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-800 tracking-tight leading-[1.15]">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="mt-3 max-w-2xl text-base text-slate-600 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
            {children}
        </section>
    );
};

export default StyleGuideSection;
