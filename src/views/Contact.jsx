'use client';

import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight, Clock, Home, Handshake } from 'lucide-react';
import Link from 'next/link';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Headquarters address — kept in one place so the cards, the map embed, and
// the "Get directions" link all stay in sync.
const HQ_ADDRESS_LINE_1 = '6915 North Classen Boulevard';
const HQ_ADDRESS_LINE_2 = 'Oklahoma City, Oklahoma 73116';
const HQ_QUERY = encodeURIComponent(`${HQ_ADDRESS_LINE_1}, ${HQ_ADDRESS_LINE_2}`);
// No-API-key Google Maps embed (same approach the market pages use).
const HQ_MAP_EMBED = `https://maps.google.com/maps?q=${HQ_QUERY}&z=15&output=embed`;
const HQ_DIRECTIONS = `https://www.google.com/maps/search/?api=1&query=${HQ_QUERY}`;

const Contact = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <section className="bg-neutral-50 border-b border-slate-100 pt-[200px] lg:pt-[240px] pb-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-4"
                    >
                        Get In Touch
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.07 }}
                        className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5"
                    >
                        We&rsquo;d love to<br />
                        <span className="text-berry-600">hear from you.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.13 }}
                        className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-md"
                    >
                        Whether you&rsquo;re an aspiring homeowner, a realtor, or a partner, our team is ready to help.
                    </motion.p>
                </div>
            </section>

            {/* ── Next Steps ── */}
            <section className="bg-white py-16 lg:py-20 border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight mb-2"
                    >
                        Know what you&rsquo;re looking for?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.06 }}
                        className="text-slate-600 max-w-lg mb-8"
                    >
                        Skip the wait and head straight to the right place.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/apply"
                                className="group block h-full bg-neutral-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:shadow-md transition-all p-8"
                            >
                                <div className="w-11 h-11 rounded-full bg-berry-50 text-berry-700 flex items-center justify-center mb-5">
                                    <Home size={22} aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-bold text-navy-800 mb-1.5">Start your Pathway</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    Begin your application and we&rsquo;ll guide you through every step.
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-berry-700">
                                    Apply now
                                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.06 }}
                        >
                            {/* Aug 10 (00:36:16): Nick asked where "partner with us"
                                lands, then: "have that, when you click that first one
                                from contact, have it take you there directly" — meaning
                                the registration form, not the top of the page. */}
                            <Link
                                href="/realtor-referral-partner#agent-network"
                                className="group block h-full bg-neutral-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:shadow-md transition-all p-8"
                            >
                                <div className="w-11 h-11 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center mb-5">
                                    <Handshake size={22} aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-bold text-navy-800 mb-1.5">Partner with us</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    Realtors: refer clients into the Pathway program and grow your business with Berry Rock Homes.
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-berry-700">
                                    Start referring today
                                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Contact Details + Map ── */}
            <section className="bg-neutral-50 py-16 lg:py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                        {/* Contact Details */}
                        <div className="flex flex-col gap-5">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 flex-grow"
                            >
                                <h2 className="text-lg font-bold text-navy-800 mb-6">Contact Information</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center shrink-0">
                                            <Phone size={20} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1">Call Us</h3>
                                            <a href="tel:+14057083457" className="text-slate-600 hover:text-berry-700 transition-colors">(405) 708-3457</a>
                                            <p className="text-sm text-slate-600 mt-1 flex items-center gap-1.5">
                                                <Clock size={13} aria-hidden="true" />
                                                Mon&ndash;Fri, 8:30am &ndash; 5:30pm CST
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center shrink-0">
                                            <Mail size={20} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1">Email Support</h3>
                                            <a href="mailto:home@berryrockhomes.com" className="text-slate-600 hover:text-berry-700 transition-colors break-words">home@berryrockhomes.com</a>
                                            <p className="text-sm text-slate-600 mt-1">We aim to reply within 48 hours.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center shrink-0">
                                            <MapPin size={20} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1">Headquarters</h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {HQ_ADDRESS_LINE_1}<br />
                                                {HQ_ADDRESS_LINE_2}
                                            </p>
                                            <a
                                                href={HQ_DIRECTIONS}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-berry-700 hover:text-berry-800 transition-colors"
                                            >
                                                Get directions
                                                <ArrowUpRight size={14} aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Press & Media */}
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.08 }}
                                className="text-sm text-slate-600 px-1"
                            >
                                Press &amp; media inquiries?{' '}
                                <Link href="/news" className="font-semibold text-berry-700 hover:text-berry-800 transition-colors">
                                    Visit our newsroom
                                </Link>
                                .
                            </motion.p>
                        </div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-100 min-h-[360px] lg:min-h-full"
                        >
                            <iframe
                                src={HQ_MAP_EMBED}
                                title="Berry Rock Homes headquarters map"
                                className="w-full h-full min-h-[360px] border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
