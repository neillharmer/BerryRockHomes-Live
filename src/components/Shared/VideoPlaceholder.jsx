'use client';

import { PlayCircle } from 'lucide-react';

const VideoPlaceholder = ({
    title,
    description,
    coverImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
}) => {
    return (
        <section className="bg-neutral-50 pt-20 pb-8 relative z-10 w-full">
            <div className="container mx-auto px-4 max-w-5xl">
                {(title || description) && (
                    <div className="text-center mb-10">
                        {title && <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>}
                        {description && <p className="text-slate-600 text-lg max-w-2xl mx-auto">{description}</p>}
                    </div>
                )}

                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-slate-200 group cursor-pointer group">
                    {/* Video Background Placeholder */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-0 transition-opacity duration-500"
                        style={{ backgroundImage: `url('${coverImage}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-black mix-blend-multiply"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg border border-white/30 group-hover:bg-berry-700 group-hover:border-berry-500 transition-all duration-300 transform group-hover:scale-110">
                            <PlayCircle size={40} className="ml-1" />
                        </div>
                        <span className="mt-4 text-white font-bold tracking-widest uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cam Intro Video</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoPlaceholder;
