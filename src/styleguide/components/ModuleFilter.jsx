'use client';

import { Search } from 'lucide-react';

const ModuleFilter = ({ categories, activeCategory, onCategoryChange, query, onQueryChange }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                    const active = cat === activeCategory;
                    return (
                        <button
                            key={cat}
                            type="button"
                            onClick={() => onCategoryChange(cat)}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
                                active
                                    ? 'bg-navy-800 text-white border-navy-800'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                            }`}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>
            <div className="relative lg:ml-auto lg:w-64">
                <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                    type="search"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    placeholder="Filter modules…"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-full border border-slate-200 bg-white focus:outline-none focus:border-navy-800"
                />
            </div>
        </div>
    );
};

export default ModuleFilter;
