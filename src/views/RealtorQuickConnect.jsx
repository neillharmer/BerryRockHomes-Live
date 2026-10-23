'use client';

import { ShieldCheck, Clock, Handshake } from 'lucide-react';
import Link from 'next/link';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import FormsiteEmbed from '@/components/Shared/FormsiteEmbed';

// The same hosted Formsite form the legacy Wix site used for Realtor Quick
// Connect (BerryRockHomes/form7), so submissions keep flowing into the
// existing Formsite pipeline with no new backend.
const QUICK_CONNECT_EMBED_ID = '1373593870';
const QUICK_CONNECT_EPARAM = 'jFMIig1ZP573EAw4oLB7VrUJubCHM1KR';

const RealtorQuickConnect = () => {
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
                        Realtor Quick Connect
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.07 }}
                        className="text-4xl lg:text-5xl xl:text-[3.4rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-5"
                    >
                        Refer a client in<br />
                        <span className="text-berry-600">under a minute.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.13 }}
                        className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-md"
                    >
                        Send us your client&rsquo;s details and our team will reach out to guide them onto the Pathway Program. You stay the agent of record.
                    </motion.p>
                </div>
            </section>

            {/* ── Connect Grid ── */}
            <section className="bg-neutral-50 py-16 lg:py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* How it works / reassurance */}
                        <div className="lg:w-2/5 order-2 lg:order-1 space-y-5">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8"
                            >
                                <h2 className="text-lg font-bold text-navy-800 mb-6">What happens next</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center shrink-0">
                                            <Clock size={20} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1">We reach out fast</h3>
                                            <p className="text-slate-600 leading-relaxed">Our team contacts your client, usually within one business day, to introduce the program.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center shrink-0">
                                            <Handshake size={20} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1">You stay the agent</h3>
                                            <p className="text-slate-600 leading-relaxed">You remain the agent of record and earn your commission when your client buys their home.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-sand-50 text-navy-600 flex items-center justify-center shrink-0">
                                            <ShieldCheck size={20} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800 mb-1">Handled with care</h3>
                                            <p className="text-slate-600 leading-relaxed">Your client&rsquo;s information is kept private and used only to help them onto the Pathway.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.08 }}
                                className="text-sm text-slate-600 px-1"
                            >
                                New to Berry Rock?{' '}
                                <Link href="/realtor-referral-partner" className="font-semibold text-berry-700 hover:text-berry-800 transition-colors">
                                    Learn about the Partner Program
                                </Link>
                                .
                            </motion.p>
                        </div>

                        {/* Quick Connect Form */}
                        <div className="lg:w-3/5 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 md:p-10"
                            >
                                <h2 className="text-2xl font-bold text-navy-800 mb-1.5">Connect us with your client</h2>
                                <p className="text-slate-700 text-base leading-relaxed mb-7">Share your details and your client&rsquo;s, and we&rsquo;ll take it from there.</p>

                                <FormsiteEmbed
                                    embedId={QUICK_CONNECT_EMBED_ID}
                                    eParam={QUICK_CONNECT_EPARAM}
                                    title="Realtor Quick Connect form"
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default RealtorQuickConnect;
