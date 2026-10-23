// Content for the simple text/legal pages (Terms, Privacy, Fair Housing).
// Edit the copy here; the LegalPage template handles all presentation.
//
// NOTE: This is starter boilerplate tailored to Berry Rock Homes. It should be
// reviewed and finalized by legal counsel before being relied upon.

const COMPANY = 'Berry Rock Homes';
const CONTACT_EMAIL = 'home@berryrockhomes.com';

export const termsContent = {
    eyebrow: 'Legal',
    title: 'Terms of Service',
    subtitle: `The terms governing your use of the ${COMPANY} website and services.`,
    lastUpdated: 'June 30, 2026 · Version 1.0',
    intro: [
        `Welcome to ${COMPANY}. These Terms of Service ("Terms") govern your access to and use of our website, content, and the services we provide, including information about our lease-to-purchase Pathway Program℠. By accessing or using our website, you agree to be bound by these Terms.`,
        'If you do not agree to these Terms, please do not use our website or services.',
    ],
    sections: [
        {
            heading: '1. Acceptance of Terms',
            content: [
                `By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. ${COMPANY} reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.`,
            ],
        },
        {
            heading: '2. Informational Purposes Only',
            content: [
                'The content on this website is provided for general informational purposes only and does not constitute legal, financial, tax, or real estate advice. Descriptions of the Pathway Program℠, program figures, timelines, and eligibility criteria are illustrative and subject to change.',
                'No information on this website constitutes an offer to lease, sell, or purchase real estate. Any program participation is governed solely by the separate written agreements you sign, which control in the event of any conflict with information presented here.',
            ],
        },
        {
            heading: '3. Eligibility',
            content: [
                'You must be at least 18 years of age and capable of forming a legally binding contract to use our services. By using this website, you represent and warrant that you meet these requirements.',
            ],
        },
        {
            heading: '4. Use of the Website',
            content: [
                'You agree to use the website only for lawful purposes. You agree not to:',
                {
                    list: [
                        'Use the website in any way that violates applicable federal, state, or local law or regulation;',
                        'Attempt to gain unauthorized access to any portion of the website, other accounts, or systems connected to the website;',
                        'Introduce any viruses, malware, or other harmful material;',
                        'Use any automated means to scrape, harvest, or collect data from the website without our written permission;',
                        'Impersonate or attempt to impersonate the Company, an employee, or another user.',
                    ],
                },
            ],
        },
        {
            heading: '5. Intellectual Property',
            content: [
                `All content on this website — including text, graphics, logos, images, and the "Pathway Program℠" name and marks — is the property of ${COMPANY} or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.`,
            ],
        },
        {
            heading: '6. Third-Party Links',
            content: [
                `Our website may contain links to third-party websites or services that are not owned or controlled by ${COMPANY}. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.`,
            ],
        },
        {
            heading: '7. Disclaimer of Warranties',
            content: [
                'The website is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components, or that the information provided is complete, accurate, or current.',
            ],
        },
        {
            heading: '8. Limitation of Liability',
            content: [
                `To the fullest extent permitted by law, ${COMPANY} and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of, or inability to use, the website.`,
            ],
        },
        {
            heading: '9. Governing Law',
            content: [
                'These Terms are governed by and construed in accordance with the laws of the state in which the applicable property or service is located, without regard to its conflict of law provisions.',
            ],
        },
        {
            heading: '10. Contact Us',
            content: [
                `If you have any questions about these Terms, please contact us at ${CONTACT_EMAIL}.`,
            ],
        },
    ],
};

export const privacyContent = {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    subtitle: 'How we collect, use, and protect your personal information.',
    lastUpdated: 'June 30, 2026 · Version 1.0',
    intro: [
        `${COMPANY} ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
    ],
    sections: [
        {
            heading: '1. Information We Collect',
            content: [
                'We may collect the following categories of information:',
                { subheading: 'Information you provide to us' },
                {
                    list: [
                        'Contact details such as your name, email address, phone number, and mailing address;',
                        'Application and financial information you submit to determine eligibility for the Pathway Program℠;',
                        'Communications you send to us, including form submissions and email correspondence.',
                    ],
                },
                { subheading: 'Information collected automatically' },
                {
                    list: [
                        'Device and browser information, IP address, and operating system;',
                        'Usage data such as pages visited, time spent, and referring URLs;',
                        'Cookies and similar tracking technologies.',
                    ],
                },
            ],
        },
        {
            heading: '2. How We Use Your Information',
            content: [
                'We use the information we collect to:',
                {
                    list: [
                        'Respond to your inquiries and process your program application;',
                        'Provide, operate, and improve our website and services;',
                        'Communicate with you about our programs, updates, and relevant offers;',
                        'Comply with legal obligations and enforce our agreements;',
                        'Analyze usage trends and measure the effectiveness of our marketing.',
                    ],
                },
            ],
        },
        {
            heading: '3. How We Share Your Information',
            content: [
                'We do not sell your personal information. We may share your information with:',
                {
                    list: [
                        'Affiliated investment entities and service providers who help us operate the Pathway Program℠;',
                        'Vendors who perform services on our behalf, such as hosting, analytics, and communications;',
                        'Professional advisors, regulators, and authorities where required by law;',
                        'A successor entity in connection with a merger, acquisition, or sale of assets.',
                    ],
                },
            ],
        },
        {
            heading: '4. Cookies and Tracking Technologies',
            content: [
                'We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small files placed on your computer, mobile device, or any other device by a website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until they expire or you delete them).',
                'The types of cookies we use include:',
                {
                    list: [
                        'Necessary / Essential Cookies — required to provide the core features and security of the website.',
                        'Acceptance Cookies — identify whether you have accepted the use of cookies on the website.',
                        'Functionality Cookies — remember choices you make, such as your preferences, to provide a more personalized experience.',
                        'Analytics and Performance Cookies — typically set by third parties to track information about traffic to and use of the website.',
                    ],
                },
                'You can set your browser to refuse some or all cookies or to alert you when cookies are being sent. If you do not accept cookies, some parts of the website may not function properly.',
            ],
        },
        {
            heading: '5. Analytics',
            content: [
                'We use Google Analytics, a web analytics service offered by Google that tracks and reports website traffic, to help us understand how visitors use our website. Google uses the data collected to track and monitor the use of our website, and this data may be shared with other Google services.',
                'You can opt out of having your activity on the website made available to Google Analytics by installing the Google Analytics opt-out browser add-on, available at tools.google.com/dlpage/gaoptout. For more information on Google’s privacy practices, please visit policies.google.com/privacy.',
            ],
        },
        {
            heading: '6. Data Security',
            content: [
                'We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
            ],
        },
        {
            heading: '7. Your Rights and Choices',
            content: [
                'Depending on your jurisdiction, you may have the right to access, correct, or delete your personal information, or to opt out of certain processing. To exercise these rights, please contact us using the details below. You may also unsubscribe from marketing communications at any time using the link in those messages.',
            ],
        },
        {
            heading: '8. California Privacy Rights (CCPA/CPRA)',
            content: [
                'If you are a California resident, the California Consumer Privacy Act, as amended by the California Privacy Rights Act (collectively, the "CCPA"), provides you with specific rights regarding your personal information. This section describes those rights and how to exercise them.',
                { subheading: 'Your rights under the CCPA' },
                {
                    list: [
                        'Right to notice — to be informed which categories of personal information are collected and the purposes for which they are used.',
                        'Right to know and access — to request the categories and specific pieces of personal information we have collected, the sources of that information, the business purpose for collecting it, and the categories of third parties with whom we share it, covering the preceding 12 months.',
                        'Right to delete — to request deletion of personal information we have collected about you, subject to certain exceptions.',
                        'Right to correct — to request correction of inaccurate personal information we maintain about you.',
                        'Right to opt out — to direct us not to sell or share your personal information. We do not sell your personal information.',
                        'Right to non-discrimination — to not be discriminated against for exercising any of your CCPA rights, including through denial of services or different prices or quality of service.',
                    ],
                },
                { subheading: 'Exercising your rights' },
                `To exercise any of these rights, please submit a verifiable request to us at ${CONTACT_EMAIL}. We will disclose and deliver the required information free of charge, and otherwise respond to your verifiable request, within 45 days of receiving it. We may need to verify your identity before fulfilling your request. You may also designate an authorized agent to make a request on your behalf.`,
            ],
        },
        {
            heading: '9. Children’s Privacy',
            content: [
                'Our website and services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.',
            ],
        },
        {
            heading: '10. Changes to This Policy',
            content: [
                'We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. We encourage you to review this policy periodically.',
            ],
        },
        {
            heading: '11. Contact Us',
            content: [
                `If you have questions about this Privacy Policy or our data practices, please contact us at ${CONTACT_EMAIL}.`,
            ],
        },
    ],
};

export const fairHousingContent = {
    eyebrow: 'Equal Housing Opportunity',
    title: 'Equal Housing Opportunity Statement',
    subtitle: `${COMPANY}, LLC is committed to equal housing opportunity for all persons.`,
    lastUpdated: 'June 29, 2026 · Version 1.0',
    intro: [
        `${COMPANY}, LLC ("${COMPANY}") is committed to full compliance with all federal, state, and local fair housing laws and to providing equal housing opportunity to all persons.`,
    ],
    sections: [
        {
            heading: '1. Statement of Policy',
            content: [
                `It is the policy of ${COMPANY} that no person shall be subjected to discrimination in any aspect of the Pathway Program, including application, approval, lease execution, program administration, or property selection, on the basis of race, color, national origin, religion, sex, gender identity, sexual orientation, familial status, disability, or any other characteristic protected by applicable federal, state, or local law.`,
                `${COMPANY} operates as an Equal Housing Opportunity provider. We believe that access to homeownership should be determined solely by a person's financial qualifications and program eligibility, and not by any protected characteristic.`,
            ],
        },
        {
            heading: '2. Applicable Law',
            content: [
                `${COMPANY}' fair housing obligations arise under, and our commitment extends to, the following laws, as each may be amended from time to time:`,
                {
                    list: [
                        'The Fair Housing Act (Title VIII of the Civil Rights Act of 1968, 42 U.S.C. §§ 3601–3619), which prohibits discrimination in the sale, rental, and financing of housing on the basis of race, color, national origin, religion, sex, familial status, and disability;',
                        'The Equal Credit Opportunity Act (15 U.S.C. § 1691 et seq.), which prohibits discrimination in credit transactions on the basis of race, color, religion, national origin, sex, marital status, age, or receipt of income from public assistance programs;',
                        'The Americans with Disabilities Act (42 U.S.C. § 12101 et seq.), as applicable to places of public accommodation;',
                        'Section 504 of the Rehabilitation Act of 1973 (29 U.S.C. § 794), as applicable;',
                        'The Civil Rights Act of 1866 (42 U.S.C. § 1982), which provides that all persons have the same rights to inherit, purchase, lease, sell, hold, and convey real property;',
                        'The fair housing and anti-discrimination statutes of each state in which Berry Rock Homes operates, including but not limited to the Oklahoma Residential Landlord and Tenant Act and analogous statutes in Indiana, Missouri, and Kansas.',
                    ],
                },
            ],
        },
        {
            heading: '3. Protected Characteristics',
            content: [
                `${COMPANY} does not discriminate, and will not tolerate discrimination by any employee, agent, or contractor, on the basis of any of the following characteristics, which are protected under one or more of the laws identified in Section 2:`,
                {
                    list: [
                        'Race;',
                        'Color;',
                        'National origin;',
                        'Religion;',
                        'Sex (including pregnancy, childbirth, and related medical conditions);',
                        'Gender identity or expression;',
                        'Sexual orientation;',
                        'Familial status (including the presence of children under age 18 in the household);',
                        'Disability (physical or mental);',
                        'Marital status;',
                        'Age (where protected by applicable law);',
                        'Source of income (where protected by applicable law);',
                        'Military or veteran status (where protected by applicable law);',
                        'Any other characteristic protected by applicable federal, state, or local law.',
                    ],
                },
            ],
        },
        {
            heading: '4. Prohibited Conduct',
            content: [
                `In connection with the Pathway Program and any related activities, ${COMPANY} will not, on the basis of any protected characteristic:`,
                {
                    list: [
                        'Refuse to accept or process an application;',
                        'Discourage any person from applying or participating in the Program;',
                        'Impose different terms, conditions, or privileges;',
                        'Provide different services or make different representations;',
                        'Steer applicants toward or away from particular neighborhoods, markets, or properties;',
                        'Deny any person access to, or membership or participation in, any real estate service;',
                        'Indicate any preference, limitation, or discrimination through any advertisement, statement, or representation.',
                    ],
                },
            ],
        },
        {
            heading: '5. Reasonable Accommodations and Modifications',
            content: [
                `${COMPANY} will provide reasonable accommodations to persons with disabilities in connection with the application process, program participation, and any written communications or procedures, to the extent required by applicable law. If you require a reasonable accommodation, please contact us using the information in Section 11. We will engage in an interactive process to identify an appropriate accommodation.`,
                'Requests for reasonable modifications to properties leased under the Program to accommodate a disability will be addressed in accordance with applicable state and federal law and the terms of the relevant lease agreement.',
            ],
        },
        {
            heading: '6. Language Access',
            content: [
                `${COMPANY} is committed to providing meaningful access to its programs and services for individuals with limited English proficiency. Where practicable, we will take reasonable steps to provide program information and communications in languages other than English upon request. Please contact us to discuss language access needs.`,
            ],
        },
        {
            heading: '7. Internal Complaint Process',
            content: [
                `Any person who believes that ${COMPANY}, or any employee, agent, or contractor of ${COMPANY}, has engaged in discriminatory conduct in violation of this policy or applicable fair housing law is encouraged to report the concern promptly. Reports may be submitted:`,
                {
                    list: [
                        'In writing to Berry Rock Homes at the address listed in Section 11;',
                        'By telephone at 405-708-3457;',
                        `By email to ${CONTACT_EMAIL}.`,
                    ],
                },
                `${COMPANY} will investigate all reported concerns promptly and in good faith and will take corrective action where a violation is found. Persons who report concerns in good faith will not be subjected to retaliation.`,
            ],
        },
        {
            heading: '8. External Complaint Procedures',
            content: [
                'In addition to our internal process, persons who believe they have been subjected to discrimination in violation of the Fair Housing Act have the right to file a complaint with:',
                {
                    list: [
                        'U.S. Department of Housing and Urban Development (HUD), Office of Fair Housing and Equal Opportunity, 451 7th Street, S.W., Washington, D.C. 20410;',
                        'Phone: 1-800-669-9777 (toll-free) / TTY: 1-800-927-9275;',
                        'Online: www.hud.gov/fairhousing.',
                    ],
                },
                'HUD complaints must generally be filed within one year of the alleged discriminatory act.',
                'Persons may also pursue fair housing complaints through the applicable state civil rights agency or by filing a civil action in federal or state court. Filing a complaint with HUD or a state agency does not prevent you from also filing a private lawsuit.',
            ],
        },
        {
            heading: '9. Employee and Agent Obligations',
            content: [
                `All ${COMPANY} employees, officers, independent contractors, and real estate agents acting on behalf of ${COMPANY} are required to comply fully with this Equal Housing Opportunity Statement and all applicable fair housing laws. Violations of this policy by any such individual may result in disciplinary action, up to and including termination of employment or contract, and may also result in personal legal liability.`,
                `${COMPANY} provides fair housing training to employees and agents involved in program administration and is committed to ongoing education on fair housing obligations.`,
            ],
        },
        {
            heading: '10. Affirmative Marketing',
            content: [
                `${COMPANY} is committed to affirmative fair housing marketing practices designed to ensure that information about the Pathway Program is broadly available to all segments of the communities in which we operate, including those who have historically experienced barriers to homeownership. We actively seek to reach diverse prospective participants through inclusive outreach and advertising.`,
            ],
        },
        {
            heading: '11. Contact Information',
            content: [
                "Questions or concerns regarding Berry Rock Homes' equal housing obligations, this statement, or a specific fair housing concern should be directed to:",
                {
                    list: [
                        'Berry Rock Homes, LLC, Attn: Fair Housing Compliance',
                        '6915 North Classen Boulevard, Oklahoma City, Oklahoma 73116',
                        'Phone: 405-708-3457',
                        `Email: ${CONTACT_EMAIL}`,
                    ],
                },
                `${COMPANY} is an Equal Housing Opportunity provider.`,
            ],
        },
    ],
};
