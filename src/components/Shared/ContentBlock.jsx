'use client';

const columnClasses = {
    fixed: {
        1: 'grid grid-cols-1',
        2: 'grid grid-cols-1 md:grid-cols-2',
        3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    },
    flex: {
        1: 'grid grid-cols-1',
        2: 'grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]',
        3: 'grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]',
        4: 'grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))]',
    },
};

const bgClasses = {
    white: 'bg-white text-slate-800',
    neutral: 'bg-neutral-50 text-slate-800',
    navy: 'bg-navy-800 text-white',
};

const paddingClasses = {
    md: 'py-12 lg:py-16',
    lg: 'py-16 lg:py-24',
    xl: 'py-20 lg:py-28',
};

const ContentBlock = ({
    columns = 1,
    layout = 'fixed',
    eyebrow,
    title,
    subtitle,
    align = 'left',
    background = 'white',
    paddingY = 'lg',
    gap = 'gap-6 lg:gap-8',
    items,
    children,
}) => {
    const isNavy = background === 'navy';
    const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
    const headerMaxW = align === 'center' ? 'max-w-3xl' : 'max-w-3xl';

    return (
        <section className={`${bgClasses[background]} ${paddingClasses[paddingY]}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(eyebrow || title || subtitle) && (
                    <div className={`${headerMaxW} ${alignClass} mb-10 lg:mb-14`}>
                        {eyebrow && (
                            <p
                                className={`text-xs font-medium uppercase tracking-[0.2em] mb-4 ${
                                    isNavy ? 'text-white/60' : 'text-slate-500'
                                }`}
                            >
                                {eyebrow}
                            </p>
                        )}
                        {title && (
                            <h2
                                className={`text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-[1.15] tracking-tight ${
                                    isNavy ? 'text-white' : 'text-navy-800'
                                }`}
                            >
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p
                                className={`mt-4 text-base lg:text-lg leading-relaxed ${
                                    isNavy ? 'text-white/80' : 'text-slate-600'
                                }`}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {columns === 1 && !items && !children ? null : (
                    <div className={`${columnClasses[layout][columns]} ${gap}`}>
                        {items
                            ? items.map((item, i) => (
                                  <div key={i} className="min-w-0">
                                      {item}
                                  </div>
                              ))
                            : children}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ContentBlock;
