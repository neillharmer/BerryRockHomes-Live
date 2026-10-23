import FAQPage from '@/views/FAQ';
import JsonLd from '@/components/Shared/JsonLd';

export const metadata = {
    title: 'Pathway Program: FAQ',
    description: 'Get answers to common questions about the Berry Rock Homes Pathway Program: financing, qualifications, timelines, and more.',
    alternates: { canonical: '/faq' },
    openGraph: {
        title: 'Pathway Program: FAQ | Berry Rock Homes',
        description: 'Everything you need to know about our lease-to-purchase program, transparently answered.',
        images: ['/images/meta-image.jpg'],
    },
};

const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What exactly is a lease-to-purchase program?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A lease-to-purchase program allows you to lease a home with a Guaranteed Right to Purchase it at a later date for a pre-agreed price. A portion of your payments may sometimes be credited toward your future purchase price, and you use the lease period to prepare for a traditional mortgage.',
            },
        },
        {
            '@type': 'Question',
            name: 'Am I obligated to buy the home?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'While our program is designed for people who intend to buy, life happens. If you decide not to purchase the home at the end of your lease term, you can walk away, though you may forfeit your initial option fee depending on the terms of your contract.',
            },
        },
        {
            '@type': 'Question',
            name: 'Who owns the home while I am leasing it?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Berry Rock Homes (or an affiliated investment partner) purchases and owns the home initially. You are the tenant with a Guaranteed Right to Purchase it from us when you are ready.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are there hidden fees or surprise costs?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. We pride ourselves on complete transparency. All numbers (your monthly lease payment, your future purchase price, and any earnest money requirements) are clearly outlined in your agreement before you sign anything.',
            },
        },
        {
            '@type': 'Question',
            name: 'What if my credit score is very low?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We work with a variety of financial histories. We look at the whole picture, not just a score. If you show a history of stable income and a commitment to rebuilding your credit, we may be able to build a pathway for you. We also partner with credit repair specialists if you need extra guidance.',
            },
        },
        {
            '@type': 'Question',
            name: "What is the 'Option Consideration'?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'This is an Option Consideration (7% of the purchase price) that secures your Guaranteed Right to Purchase the home at the locked-in price, and is non-refundable if you choose not to buy. When you eventually purchase the home, this amount is fully credited toward the purchase price at closing.',
            },
        },
    ],
};

export default function FAQ() {
    return (
        <>
            <JsonLd data={faqStructuredData} />
            <FAQPage />
        </>
    );
}
