'use client';

import { useState } from 'react';

// Click-to-play YouTube embed.
//
// Two reasons this shows a local poster image and only mounts the iframe on
// click, rather than rendering an iframe straight away:
//
// 1. Consent. This site holds analytics behind a hard gate (`src/lib/consent.js`
//    — GTM, and GA4 inside it, load only after an explicit Accept). A standard
//    youtube.com/embed iframe sets tracking cookies as soon as the page loads,
//    which would walk straight past that gate. We use youtube-nocookie.com and
//    mount nothing until the visitor asks to watch.
//
// 2. Weight. A YouTube iframe pulls roughly a megabyte of JavaScript. Several on
//    one page would be the heaviest thing on the site, paid for by every
//    visitor whether or not they press play.
//
// The poster, overlay, and coral play button reproduce the markup the fake
// players on this site already shipped, so wiring a video into one of those
// slots is a behaviour change, not a visual one.

// Button and icon sizes matching the two treatments already on the site:
// `lg` is the large feature block, `md` the testimonial cards.
const SIZES = {
    lg: { button: 'w-20 h-20', icon: 'w-8 h-8' },
    md: { button: 'w-16 h-16', icon: 'w-7 h-7' },
};

const YouTubeEmbed = ({
    videoId,
    title,
    thumbnail,
    thumbnailAlt,
    size = 'md',
    className = '',
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const { button, icon } = SIZES[size] ?? SIZES.md;

    return (
        <div className={`w-full aspect-video overflow-hidden relative bg-black ${className}`}>
            {isPlaying ? (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={title}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                />
            ) : (
                // A real button, not a div with `cursor-pointer`: the play control
                // has to be reachable by keyboard and announce what it does.
                <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label={`Play video: ${title}`}
                    className="group absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-berry-500 focus-visible:ring-offset-0"
                >
                    <img
                        src={thumbnail}
                        alt={thumbnailAlt ?? ''}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`${button} bg-berry-600 rounded-full flex items-center justify-center group-hover:bg-berry-700 transition-colors shadow-lg`}>
                            <svg className={`${icon} text-white ml-1`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </button>
            )}
        </div>
    );
};

export default YouTubeEmbed;
