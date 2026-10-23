// Single source of truth for Berry Rock Homes educational articles.
//
// Consumed by:
//   - views/Articles.jsx          (landing grid + featured card)
//   - views/Article.jsx           (individual article subpage template)
//   - app/articles/[slug]/page.jsx (generateStaticParams + generateMetadata)
//   - app/sitemap.js              (per-article sitemap entries)
//   - views/News.jsx mirrors the top entries as teasers (keep in sync if reordered)
//
// To add an article: append an object here. Order = newest first (this drives the
// "Featured Article" slot on the landing, which uses articles[0]).
//
// Body content is an array of typed blocks rendered by views/Article.jsx:
//   { type: 'paragraph',   text }
//   { type: 'heading',     text }                 -> h2 section heading
//   { type: 'subheading',  text }                 -> h3 sub-heading
//   { type: 'list',        items: [] }            -> bulleted list
//   { type: 'orderedList', items: [] }            -> numbered list
//   { type: 'callout',     title, text }          -> highlighted aside
//   { type: 'quote',       text, attribution }    -> pull quote
//
// House style: no em dashes anywhere in copy.

export const articles = [
    {
        slug: 'what-is-lease-to-purchase',
        type: 'educational',
        category: 'Homeownership',
        title: 'What Is a Lease-to-Purchase Program and How Does It Work?',
        excerpt:
            'Learn how structured lease-to-purchase pathways help renters become homeowners.',
        date: 'February 28, 2026',
        dateISO: '2026-02-28',
        readTime: '6 min read',
        author: { name: 'Berry Rock Homes Team', role: 'Homeownership Education' },
        content: [
            {
                type: 'paragraph',
                text: 'Plenty of responsible renters have steady income and a real plan but do not yet fit the standard requirements a traditional bank uses. A lease-to-purchase program is built for exactly that gap. It gives you the keys to a home you choose today while you finish getting mortgage-ready on a clear timeline.',
            },
            { type: 'heading', text: 'The short version' },
            {
                type: 'paragraph',
                text: 'In a structured lease-to-purchase pathway, a company purchases the home you want through a reliable closing. You move in and lease the home, with the right to buy it at a price agreed up front. While you live there, you build the credit, savings, and documentation a lender will eventually ask for. When you are ready, you exercise your option and buy the home from the program.',
            },
            {
                type: 'callout',
                title: 'The key difference from renting',
                text: 'Ordinary renting builds your landlord\'s wealth. A lease-to-purchase pathway is designed from day one to end with you owning the home. Your purchase price is locked in, and a portion of what you pay goes toward that goal.',
            },
            { type: 'heading', text: 'How the process works, step by step' },
            {
                type: 'orderedList',
                items: [
                    'You start with a consultation and a soft credit check, and you receive an automated pre-qualification. This tells you the price range of homes the program can purchase for you.',
                    'You shop for a home with your own real estate agent, just like any buyer. You are not limited to a fixed inventory of leftover houses.',
                    'The program verifies your income and assets to confirm your approved amount.',
                    'The program buys the home you chose through a reliable closing, which is often more competitive than a financed offer in a busy market.',
                    'You move in and lease the home, with your future purchase price set at the start.',
                    'You spend the lease period building credit, saving for your down payment, and strengthening your file.',
                    'When you are mortgage-ready, you exercise your option and buy the home, with eligible credits applied toward your costs.',
                ],
            },
            { type: 'heading', text: 'Who it is designed for' },
            {
                type: 'paragraph',
                text: 'Lease-to-purchase pathways tend to fit people whose finances are healthy but do not match a lender\'s standard checklist yet. There is a story behind every credit number, and a good program looks at the whole picture. Common examples:',
            },
            {
                type: 'list',
                items: [
                    'Self-employed and gig workers whose income is strong but hard to document on a tax return.',
                    'Buyers who had a one-time credit event, such as medical debt or a past divorce.',
                    'Newer residents or recent graduates who have not built a long credit history.',
                ],
            },
            { type: 'heading', text: 'What makes a program trustworthy' },
            {
                type: 'paragraph',
                text: 'Not every rent-to-own arrangement is created equal. Before you commit, make sure the program puts your purchase price in writing, explains how your payments are credited, and reports your on-time payments to the credit bureaus. That transparency is what separates a genuine pathway to ownership from a lease dressed up to look like one.',
            },
            {
                type: 'quote',
                text: 'A good lease-to-purchase program should give you a real head start toward owning.',
                attribution: 'Berry Rock Homes',
            },
            { type: 'heading', text: 'The takeaway' },
            {
                type: 'paragraph',
                text: 'The lease-purchase pathway is a structured bridge between renting and owning, built for people who are ready to be homeowners but need a little time and support to satisfy a lender. If that sounds like you, the next step is simple: find out what you qualify for and start owning your future.',
            },
        ],
    },
    {
        slug: 'understanding-your-option-consideration',
        type: 'educational',
        category: 'Financial Literacy',
        title: 'Understanding Your Option Consideration',
        excerpt:
            "A breakdown of how the upfront option consideration works in a pathway program, how it's credited toward your purchase, and what it means for buying your home.",
        date: 'February 14, 2026',
        dateISO: '2026-02-14',
        readTime: '5 min read',
        author: { name: 'Berry Rock Homes Team', role: 'Financial Literacy' },
        content: [
            {
                type: 'paragraph',
                text: 'When you join a lease-to-purchase program, one of the first terms you will hear is the option consideration. It sounds technical, but the idea is simple. This guide explains what it is, how it\'s credited, and why it works in your favor.',
            },
            { type: 'heading', text: 'What the option consideration actually is' },
            {
                type: 'paragraph',
                text: 'The option consideration is an upfront amount you pay to secure your exclusive right to purchase the home at the agreed price. It is the fee that reserves the deal for you and no one else. It gives you the option, the legal right to buy the home, while you lease it.',
            },
            {
                type: 'callout',
                title: 'The option is yours to use',
                text: 'Paying the option consideration gives you the right to buy your home at the locked-in price. You decide whether to use it. If your circumstances change, you keep your flexibility.',
            },
            { type: 'heading', text: "How it's credited" },
            {
                type: 'paragraph',
                text: 'In a well-structured pathway, your option consideration is credited toward your purchase when you buy the home. The money you put down at the start reduces what you bring to closing.',
            },
            {
                type: 'list',
                items: [
                    'It secures your locked-in purchase price for the length of your lease term.',
                    'It is credited toward your purchase, not kept as a service charge.',
                    'It shows the program you are a serious buyer, which is part of why the program can move quickly with a reliable closing.',
                ],
            },
            { type: 'heading', text: 'How it compares to a traditional down payment' },
            {
                type: 'paragraph',
                text: 'A traditional mortgage usually requires a sizable down payment before you can get the keys. In a pathway program, your option consideration is typically smaller, and you move in while you keep saving toward the full amount. You live in the home you are working to buy.',
            },
            { type: 'heading', text: 'Questions worth asking before you pay' },
            {
                type: 'orderedList',
                items: [
                    'Is my option consideration credited toward my purchase price, and is that in writing?',
                    'What happens to it if I decide not to buy?',
                    'Is my purchase price locked for the full term, so this money protects a fixed number?',
                    'Are there any other upfront costs I should plan for?',
                ],
            },
            {
                type: 'quote',
                text: "A fair program keeps your price locked and puts you in the best position to buy when you're ready.",
                attribution: 'Berry Rock Homes',
            },
            { type: 'heading', text: 'What this means for you' },
            {
                type: 'paragraph',
                text: 'Your option consideration is money put to work. It holds your price, shows you are a committed buyer, and comes back as credit toward the home you are working to own. Understanding that is the first step to feeling confident about the path ahead.',
            },
        ],
    },
    {
        slug: 'build-credit-while-living-in-your-future-home',
        type: 'educational',
        category: 'Credit Building',
        title: '5 Steps to Improve Your Credit Score While Living in Your Future Home',
        excerpt:
            "Practical tips for building credit during your pathway period so you're mortgage-ready when it's time to purchase your home.",
        date: 'January 30, 2026',
        dateISO: '2026-01-30',
        readTime: '4 min read',
        author: { name: 'Berry Rock Homes Team', role: 'Credit Building' },
        content: [
            {
                type: 'paragraph',
                text: 'One of the biggest advantages of a lease-to-purchase pathway is time. The months you spend living in your future home are also months you can use to strengthen your credit, so you walk into a lender\'s office ready to qualify. Here are five steps that make the biggest difference.',
            },
            { type: 'heading', text: '1. Pay every bill on time' },
            {
                type: 'paragraph',
                text: 'Payment history is the single largest factor in your credit score. In a quality pathway program, your on-time lease payments are reported to the credit bureaus, so paying on schedule builds your file. Set up autopay or calendar reminders so a missed due date never undoes your progress.',
            },
            { type: 'heading', text: '2. Lower your credit utilization' },
            {
                type: 'paragraph',
                text: 'Credit utilization is the share of your available credit that you are using. Lenders like to see it below 30 percent, and under 10 percent is better still. Paying down balances, or making a mid-cycle payment before your statement closes, can lift your score faster than almost anything else.',
            },
            {
                type: 'callout',
                title: 'A quick win',
                text: 'Ask your card issuer for a credit limit increase without raising your spending. A higher limit with the same balance lowers your utilization ratio right away. Most issuers do a soft pull for this, so it usually won\'t affect your score.',
            },
            { type: 'heading', text: '3. Keep old accounts open' },
            {
                type: 'paragraph',
                text: 'The length of your credit history matters. Closing an old card can shorten your average account age and cut your available credit at the same time. Unless a card has an annual fee you cannot justify, keep it open and use it lightly to keep it active.',
            },
            { type: 'heading', text: '4. Be deliberate about new credit' },
            {
                type: 'paragraph',
                text: 'Every new application creates a hard inquiry, which can lower your score for a short time. During your pathway period, apply for new credit only when it genuinely helps, and avoid opening several accounts at once in the months before you plan to qualify for a mortgage.',
            },
            { type: 'heading', text: '5. Check your reports and dispute errors' },
            {
                type: 'paragraph',
                text: 'Credit report errors are more common than most people expect, and a single mistake can hold your score back. You can pull all three bureau reports for free at AnnualCreditReport.com. Review them carefully and dispute anything inaccurate. Correcting an error costs nothing and can produce a meaningful jump.',
            },
            { type: 'heading', text: 'Make the time count' },
            {
                type: 'paragraph',
                text: 'You do not have to wait until you own a home to build the credit that gets you there. Treat your pathway period as a runway. Small, consistent habits add up, and by the time you are ready to exercise your purchase option, your score can be ready too.',
            },
        ],
    },
    {
        slug: 'why-the-midwest-is-best-for-first-home',
        type: 'educational',
        category: 'Market Insights',
        title: 'Why the Midwest Is One of the Best Places to Buy Your First Home',
        excerpt:
            'Explore the affordability, community strength, and economic growth making Midwest cities like Indianapolis, Kansas City, and Tulsa strong options for first-time buyers.',
        date: 'January 15, 2026',
        dateISO: '2026-01-15',
        readTime: '7 min read',
        author: { name: 'Berry Rock Homes Team', role: 'Market Insights' },
        content: [
            {
                type: 'paragraph',
                text: 'For first-time buyers priced out of the coasts, the Midwest has become one of the most rewarding places in the country to put down roots. Strong job markets, real affordability, and tight-knit communities make cities like Indianapolis, Kansas City, Oklahoma City, St. Louis, and Tulsa stand out. Here is why so many first-time buyers are looking inward.',
            },
            { type: 'heading', text: 'Affordability that still exists' },
            {
                type: 'paragraph',
                text: 'The clearest advantage is price. Median home values in many coastal metros have pushed homeownership out of reach for ordinary families, while much of the Midwest stays within range of a normal income. Lower prices mean smaller down payments, smaller monthly payments, and a faster path from renting to owning.',
            },
            {
                type: 'callout',
                title: 'Why the math works',
                text: 'When the median home costs a fraction of a coastal equivalent, the gap between what you pay in rent and what you would pay to own narrows sharply. For a lot of families, that gap is what moves owning from someday to soon.',
            },
            { type: 'heading', text: 'Economies with real momentum' },
            {
                type: 'paragraph',
                text: 'Affordability alone is not enough. You want a market with jobs and staying power, and the Midwest has both. Each of these metros is anchored by diverse, expanding industries:',
            },
            {
                type: 'list',
                items: [
                    'Indianapolis: healthcare, logistics, and a fast-growing tech sector.',
                    'Kansas City: technology, logistics, and major employers spanning two states.',
                    'Oklahoma City: energy, aerospace, and healthcare, with a low cost of living.',
                    'St. Louis: bioscience, financial services, and advanced manufacturing.',
                    'Tulsa: energy, aerospace, and a growing community of remote workers.',
                ],
            },
            { type: 'heading', text: 'Community you can feel' },
            {
                type: 'paragraph',
                text: 'Numbers tell part of the story. The Midwest also offers something harder to put on a spreadsheet: real neighborhoods. Shorter commutes, established schools, and communities where people stay for generations make these cities especially appealing for families thinking about more than a transaction. For a lot of buyers, that sense of place matters as much as the price.',
            },
            { type: 'heading', text: 'Room to grow into your home' },
            {
                type: 'paragraph',
                text: 'Because your dollar stretches further, first-time buyers in the Midwest often start with more space than they could afford elsewhere. An extra bedroom, a yard, or a finished basement is often part of a standard starter home here rather than a splurge. For growing families, that head start matters.',
            },
            {
                type: 'quote',
                text: 'In much of the Midwest, a first home is a realistic next step for people who felt priced out everywhere else.',
                attribution: 'Berry Rock Homes',
            },
            { type: 'heading', text: 'The case for the Midwest' },
            {
                type: 'paragraph',
                text: 'If coastal prices have made homeownership feel out of reach, the Midwest deserves a serious look. Affordable homes, healthy economies, and strong communities create rare conditions for first-time buyers. Pair that with a structured pathway to ownership, and the goal starts to look a lot like a plan.',
            },
        ],
    },
    {
        slug: 'renting-vs-owning-cost-comparison',
        type: 'educational',
        category: 'Homeownership',
        title: 'Renting vs. Owning: The Real Cost Comparison You Need to See',
        excerpt:
            'A side-by-side look at the true financial impact of renting versus building wealth through a lease-to-purchase pathway.',
        date: 'December 20, 2025',
        dateISO: '2025-12-20',
        readTime: '5 min read',
        author: { name: 'Berry Rock Homes Team', role: 'Homeownership Education' },
        content: [
            {
                type: 'paragraph',
                text: '"Renting is just throwing money away" is a phrase you have probably heard, and like most simple sayings, it is partly true and partly incomplete. The real comparison is about where your money goes over time and what you have to show for it. Here is an honest look at both sides.',
            },
            { type: 'heading', text: 'What renting really costs' },
            {
                type: 'paragraph',
                text: 'Rent buys you a place to live and the flexibility to move, and those are real benefits. But every payment builds your landlord\'s wealth, not yours. When your lease ends, you walk away with no ownership stake, and your rent tends to rise year after year with the market.',
            },
            {
                type: 'list',
                items: [
                    'Predictable monthly cost in the short term, with rising rents over the long term.',
                    'No ownership stake and no protection from future increases.',
                    'Flexibility to relocate, which has genuine value if your life is in flux.',
                ],
            },
            { type: 'heading', text: 'What owning really costs' },
            {
                type: 'paragraph',
                text: 'Owning comes with costs that renting hides: property taxes, insurance, maintenance, and repairs. It also builds something renting cannot. Each mortgage payment builds ownership in the home, a fixed-rate loan keeps your core payment stable for decades, and over time your home can gain value.',
            },
            {
                type: 'callout',
                title: 'The wealth difference',
                text: 'Homeowners typically hold far more net worth than renters. According to the Federal Reserve\'s Survey of Consumer Finances, that gap is large, and much of it comes from one simple mechanism: every month, part of an owner\'s payment goes back into an asset they keep.',
            },
            { type: 'heading', text: 'The cost of waiting' },
            {
                type: 'paragraph',
                text: 'There is a cost that rarely makes it onto a spreadsheet: staying on the sidelines. While you wait to qualify the traditional way, home prices and rents often keep climbing, and the benefit of increased home value you could have captured goes unrealized. Time in the market matters, and owners are the ones who benefit from it.',
            },
            { type: 'heading', text: 'Where a pathway program fits in' },
            {
                type: 'paragraph',
                text: 'A lease-to-purchase pathway is designed to close the gap between renting and owning for people who are not quite mortgage-ready. You move into the home you intend to buy, your purchase price is locked, and a portion of what you pay can go toward that purchase. It is a way to stop the clock on rising prices while you finish getting ready to own.',
            },
            {
                type: 'quote',
                text: 'Every year you wait to buy has a price, and it usually shows up in higher home costs later.',
                attribution: 'Berry Rock Homes',
            },
            { type: 'heading', text: 'Putting it together' },
            {
                type: 'paragraph',
                text: 'Renting is not always the wrong choice, and owning is not always within reach overnight. But compare them honestly and ownership builds something renting cannot. If a traditional mortgage is not an option yet, a structured pathway can help you start building it sooner than you think.',
            },
        ],
    },
];

// Canonical category tag colors. Single source of truth for every place an article
// category pill is rendered (landing grid, featured card, article subpage, related
// articles). Uses ONLY on-brand style-guide colors — navy, sky, sage, khaki, and
// coral. No rainbow / electric accents. Pattern: bg-{c}-50 text-{c}-700 border-{c}-200.
export const categoryColors = {
    Homeownership: 'bg-navy-50 text-navy-800 border-navy-200',
    'Financial Literacy': 'bg-sage-50 text-sage-700 border-sage-200',
    'Credit Building': 'bg-khaki-50 text-khaki-700 border-khaki-200',
    'Market Insights': 'bg-sky-50 text-sky-700 border-sky-200',
    'Success Story': 'bg-berry-50 text-berry-700 border-berry-200',
};

// Resolves a category to its tag classes, falling back to a neutral gray pill for
// any category not explicitly mapped above.
export const getCategoryTagClass = (category) =>
    categoryColors[category] || 'bg-slate-50 text-slate-700 border-slate-200';

// Lookup helpers
export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);

export const getRelatedArticles = (slug, limit = 3) => {
    const current = getArticleBySlug(slug);
    if (!current) return articles.slice(0, limit);
    // Prefer same-category articles, then fill with the most recent others.
    const sameCategory = articles.filter((a) => a.slug !== slug && a.category === current.category);
    const others = articles.filter((a) => a.slug !== slug && a.category !== current.category);
    return [...sameCategory, ...others].slice(0, limit);
};

export const articleSlugs = articles.map((a) => a.slug);
