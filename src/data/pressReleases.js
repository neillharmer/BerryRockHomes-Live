// Single source of truth for Berry Rock Homes official press releases.
//
// Consumed by:
//   - views/PressRelease.jsx            (individual press release subpage template)
//   - app/news/press/[slug]/page.jsx    (generateStaticParams + generateMetadata)
//   - views/News.jsx                    (Press Releases stream links to these by slug)
//   - app/sitemap.js                    (per-release sitemap entries, if wired in)
//
// To add a release: append an object here. Order = newest first.
//
// Body content reuses the typed-block model from data/articles.js:
//   { type: 'paragraph',  text }
//   { type: 'heading',    text }
//   { type: 'quote',      text, attribution }
//   { type: 'list',       items: [] }
//
// House style: no em dashes anywhere in copy.

export const pressReleases = [
    {
        slug: 'flatiron-groundbreaking',
        title: 'Berry Rock Breaks Ground on Landmark OKC Flatiron District Project',
        subtitle:
            'New Berry Rock Building at the corner of 5th & Walnut in Oklahoma City anchors downtown and the Innovation District.',
        dateline: 'OKLAHOMA CITY, Sept. 24, 2025',
        date: 'September 24, 2025',
        dateISO: '2025-09-24',
        excerpt:
            'Berry Rock has officially broken ground on its new four-story headquarters in Oklahoma City’s historic Flatiron District, a signature building designed by architect Rand Elliott at the gateway to downtown.',
        // Optional: link to the version distributed over the newswire.
        wireUrl:
            'https://www.prnewswire.com/news-releases/berry-rock-breaks-ground-on-landmark-okc-flatiron-district-project-302566357.html',
        contact: {
            name: 'Anthony Triana',
            email: 'atriana@saxum.com',
            phone: '405-818-0791',
        },
        content: [
            {
                type: 'paragraph',
                lead: true,
                text: 'Berry Rock, a company that empowers aspiring homeowners to live the American Dream, has officially broken ground on its new home in Oklahoma City’s Flatiron District, bringing bold architecture to an underdeveloped historic district that is the gateway to downtown, and a modern anchor point between the city’s center and the burgeoning Innovation District.',
            },
            {
                type: 'paragraph',
                text: 'Investment in the four-story building is being made by Berry Rock co-founders Cameron Rock and Nick Berry, along with developer Andy Burnett. It is designed by Oklahoma architect Rand Elliott, with the aim of becoming a signature destination in the urban core. It will serve as the permanent home for Berry Rock Homes, Berry Rock Insurance, the company’s mortgage division, as well as Prism Bank, while also offering an additional 30,000 square feet of commercial space across two floors available for lease, with 100 on-site parking spaces to support employees, tenants and visitors.',
            },
            {
                type: 'quote',
                text: 'This corner of the city has long deserved thoughtful investment. We approached this with care, and have spent years looking for ways to respect the district’s history while shaping something built to last. The Berry Rock building reflects our belief in design that serves both place and purpose.',
                attribution: 'Cameron Rock, Co-Founder, Berry Rock',
            },
            {
                type: 'paragraph',
                text: 'Positioned at the northern entry to downtown, the Berry Rock building will further transform the Flatiron District while serving as a visible marker of the area’s ongoing transformation.',
            },
            {
                type: 'quote',
                text: 'The Berry Rock Building offered a unique opportunity to create architecture that is both bold and deeply connected to the Flatiron District’s history. Its triangular form suits the site while projecting a contemporary, forward-looking presence. Our vision was to design a building that not only serves Berry Rock’s growing operations but also strengthens the surrounding urban fabric, enhancing walkability, providing inviting public space, and creating a landmark that signals the district’s evolution and its linkages to the broader city. This project shows how thoughtful design can shape both community experience and civic identity.',
                attribution: 'Rand Elliott, Architect',
            },
            {
                type: 'paragraph',
                text: 'Elliott’s work has shaped some of the city’s most recognized landmarks, including the Oklahoma Contemporary Arts Center, Chesapeake Boathouse, and the nearby Heartland Headquarters. Known for creating architecture that is both visually striking and thoughtfully integrated into its surroundings, Elliott’s design for the Berry Rock Building reflects the company’s commitment to innovation while honoring the Flatiron District’s historic character.',
            },
            {
                type: 'paragraph',
                text: 'The Berry Rock Building will include street-level improvements that enhance walkability and green space, further advancing the city’s vision for a connected and welcoming downtown corridor. Lingo Construction is leading the build, with construction expected to take 18 months. Leasing opportunities will be announced in the coming months.',
            },
            {
                type: 'quote',
                text: 'We’ve been looking forward to this day for a long time. It’s exciting to break ground on a project that adds energy to this part of the city, and at the same time gives us the space and resources to serve the community and support our mission of making homeownership more accessible and attainable.',
                attribution: 'Nick Berry, Co-Founder, Berry Rock',
            },
            { type: 'heading', text: 'About Berry Rock' },
            {
                type: 'paragraph',
                text: 'Berry Rock is a leading Oklahoma-based real estate and financial services company, dedicated to helping Oklahomans achieve the American dream of homeownership. Founded by Nick Berry and Cameron Rock, the company combines residential development, mortgage services, and insurance solutions under one roof. For more information, visit www.berryrockhomes.com.',
            },
        ],
    },
];

// Lookup helpers
export const getPressReleaseBySlug = (slug) => pressReleases.find((r) => r.slug === slug);

export const pressReleaseSlugs = pressReleases.map((r) => r.slug);
