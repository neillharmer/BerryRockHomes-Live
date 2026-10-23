import ContactPage from '@/views/Contact';

export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Berry Rock Homes. Our team is ready to answer your questions about the Pathway Program.',
    alternates: { canonical: '/contact' },
    openGraph: {
        title: 'Contact Us | Berry Rock Homes',
        description: 'Reach out to our team for questions about lease-to-purchase homeownership.',
        images: ['/images/meta-image.jpg'],
    },
};

export default function Contact() {
    return <ContactPage />;
}
