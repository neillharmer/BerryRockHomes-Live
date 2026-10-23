// Single source of truth for Berry Rock Homes markets.
//
// Consumed by:
//   - components/Home/FeaturedMarkets.jsx  (uses name, shortName, slug, mapX, mapY)
//   - views/AgentResources.jsx             (uses name, slug, mapEmbed, guideHref, guideSize)
//   - components/Calculator/InteractiveCalculator.jsx (uses name, slug, monthlyPayment, stateOptions)
//
// mapX / mapY are coordinates on the homepage US coverage map (viewBox 0 0 960 600,
// Albers USA projection — see data/usCoverageMap.js). Regenerate both together if the
// map changes. To add or edit a market, change it here once. Deep per-market detail
// (neighborhoods, stats, hero copy) still lives in views/Market.jsx keyed by slug.

// Estimated monthly lease payment for a home price, per market. Formulas supplied
// by Berry Rock Homes (Oct 6, 2026), transcribed term-for-term — `p` is the home
// price (`id0` in the source formulas). Kansas City has separate KS and MO formulas, exposed
// on the KC market as `stateOptions` so the calculator can offer a state toggle.
export const PAYMENT_FORMULAS = {
    indianapolis: (p) => (p*.00075)+(p*.0226/12)+(p/20000*33)+(p*.8*.00905)+160+((90000-p)/10000)*13,
    kansasCityKS: (p) => (p*.00075)+(p*.0186/12)+(p/20000*33)+(p*.8*.00885)+160+((90000-p)/10000)*13.5,
    kansasCityMO: (p) => (p*.00075)+(p*.0238/12)+(p/20000*33)+(p*.8*0.00875)+160+((90000-p)/10000)*13.5,
    stLouis: (p) => (p*.00075)+(p*.0182/12)+(p/20000*33)+(p*.8*.00915)+160+((90000-p)/10000)*13.5,
    oklahoma: (p) => (p*.0008)+(p*.0159/12)+(p/20000*33)+(p*.8*.008910)+160+((90000-p)/10000)*9.5, // OKC and Tulsa
};

export const markets = [
    {
        name: 'Indianapolis, IN',
        shortName: 'Indianapolis',
        state: 'Indiana',
        slug: 'indianapolis-in',
        monthlyPayment: PAYMENT_FORMULAS.indianapolis,
        metaDescription:
            'Lease-to-own your Indianapolis home with the Berry Rock Homes Pathway Program. Lock in your purchase price, build credit, and buy when ready. Serving Carmel, Fishers, and greater Indy.',
        img: '/images/indianapolis_market.png',
        mapX: 686.3,
        mapY: 264,
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=19XY5qrm0iBa-2VZB-ishFyLDRcwoybI',
        guideHref: '/agent%20resources/Indy%20Realtor%20Offer%20Guide.pdf',
        guideSize: 'PDF (263 KB)',
    },
    {
        name: 'Kansas City, MO/KS',
        shortName: 'Kansas City',
        state: 'Missouri & Kansas',
        slug: 'kansas-city-mo',
        monthlyPayment: PAYMENT_FORMULAS.kansasCityMO,
        stateOptions: [
            { key: 'MO', label: 'Missouri', monthlyPayment: PAYMENT_FORMULAS.kansasCityMO },
            { key: 'KS', label: 'Kansas', monthlyPayment: PAYMENT_FORMULAS.kansasCityKS },
        ],
        metaDescription:
            'Lease-to-own in Kansas City with the Berry Rock Homes Pathway Program. Lock in your purchase price, build credit, and buy when ready. Serving Overland Park, Lee\'s Summit, and the full KC metro.',
        img: '/images/kansas_city_market.png',
        mapX: 549.2,
        mapY: 286.7,
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=1HIeamVJTkvsj_Cj1B5z-qKQPCJCA1CA',
        guideHref: '/agent%20resources/KC%20Realtor%20Offer%20Guide.pdf',
        guideSize: 'PDF (267 KB)',
    },
    {
        name: 'Oklahoma City, OK',
        shortName: 'Oklahoma City',
        state: 'Oklahoma',
        slug: 'oklahoma-city-ok',
        monthlyPayment: PAYMENT_FORMULAS.oklahoma,
        metaDescription:
            'Lease-to-own your Oklahoma City home through the Berry Rock Homes Pathway Program. Lock in your purchase price and build credit. Serving Edmond, Norman, Moore, and Midtown OKC.',
        img: '/images/oklahoma_city_market.png',
        mapX: 499.4,
        mapY: 365.4,
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=1sGOx44XbNYtfmms09TkgaVj7kVRge44',
        guideHref: '/agent%20resources/OKC%20Realtor%20Offer%20Guide.pdf',
        guideSize: 'PDF (250 KB)',
    },
    {
        name: 'St. Louis, MO',
        shortName: 'St. Louis',
        state: 'Missouri',
        slug: 'st-louis-mo',
        monthlyPayment: PAYMENT_FORMULAS.stLouis,
        metaDescription:
            'Lease-to-own in St. Louis with the Berry Rock Homes Pathway Program. Lock in your purchase price and build credit. Serving Kirkwood, Chesterfield, Florissant, and St. Charles.',
        img: '/images/st_louis_market.png',
        mapX: 622,
        mapY: 294.2,
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=13tYlaOO_596eMc_scE25ruTuJaotlOM',
        guideHref: '/agent%20resources/STL%20Realtor%20Offer%20Guide.pdf',
        guideSize: 'PDF (275 KB)',
    },
    {
        name: 'Tulsa, OK',
        shortName: 'Tulsa',
        state: 'Oklahoma',
        slug: 'tulsa-ok',
        monthlyPayment: PAYMENT_FORMULAS.oklahoma,
        metaDescription:
            'Lease-to-own your Tulsa home with the Berry Rock Homes Pathway Program. Lock in your purchase price and build credit. Serving Broken Arrow, Owasso, Jenks, and Bixby.',
        img: '/images/tulsa_market.png',
        mapX: 525.8,
        mapY: 350.7,
        mapEmbed: 'https://www.google.com/maps/d/embed?mid=1vEpxYNs1K2iPUW9xrFje1XGWu6llW2U',
        guideHref: '/agent%20resources/Tulsa%20Realtor%20Offer%20Guide.pdf',
        guideSize: 'PDF (247 KB)',
    },
];

// Alias slugs that should resolve to a canonical market (Kansas City spans two
// states; views/Market.jsx accepts these variants, so metadata must too).
const SLUG_ALIASES = {
    'kansas-city-ks': 'kansas-city-mo',
    'kansas-city': 'kansas-city-mo',
};

export function getMarketBySlug(slug) {
    const canonical = SLUG_ALIASES[slug] || slug;
    return markets.find((market) => market.slug === canonical) || null;
}

export default markets;
