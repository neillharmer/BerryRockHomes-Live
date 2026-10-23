'use client';

const Toc = ({ sections }) => {
    return (
        <nav aria-label="On this page" className="hidden lg:block sticky top-24 self-start text-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-3">
                On this page
            </p>
            <ul className="space-y-1.5 border-l border-slate-200">
                {sections.map(({ id, label }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            className="block pl-4 -ml-px border-l border-transparent hover:border-navy-800 text-slate-600 hover:text-navy-800 transition"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Toc;
