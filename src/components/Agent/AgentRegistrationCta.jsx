'use client';

import { ArrowRight } from 'lucide-react';
import FormsiteEmbed from '@/components/Shared/FormsiteEmbed';

/*
 * "Ready to become a Realtor Partner?" registration CTA — the dark navy
 * section at the very bottom of both the Realtor Partner Program page
 * (views/ForAgents.jsx) and the Agent Resources page
 * (views/AgentResources.jsx).
 *
 * The form is the same hosted Formsite form the legacy Wix site embeds on its
 * /realtors page (BerryRockHomes/5nocezfqjf), so registrations keep flowing
 * into the existing Formsite pipeline with no new backend. Ported verbatim
 * from the legacy embed at
 * www-berryrockhomes-com.filesusr.com/html/f34389_c391a554d818f46edd6bd0b038376e2c.html.
 * (The legacy embed also accepts a postMessage prefill of a referring realtor
 * name — field ref "2" — used by Wix market landing pages; the public
 * /realtors page loads it empty, which is what we reproduce here.)
 *
 * The embed sits in a white card because the Formsite form's own styling is
 * navy text on a transparent background — illegible directly on navy-900.
 */

const PARTNER_EMBED_ID = '944023638';
const PARTNER_EPARAM = 'jFMIig1ZP573EAw4oLB7VhmVQFdYZpNZ';

const AgentRegistrationCta = () => {
    return (
        <section id="agent-network" className="bg-navy-900 relative overflow-hidden scroll-mt-28">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-berry-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

                    {/* Left: headline + realtor image */}
                    <div className="relative flex flex-col pt-16 md:pt-20">
                        <div>
                            <p className="text-xs font-bold text-berry-300 uppercase tracking-[0.2em] mb-4">Join us</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">Ready to become<br />a Realtor Referral Partner?</h3>
                            <p className="text-navy-200 text-lg leading-relaxed max-w-md">
                                Register anytime — there&apos;s no need to wait for your first client. When you register, you get your own <span className="font-semibold text-berry-300">referral link</span> to share with clients to use when they apply on Berry Rock, plus access to our marketing toolkit and a direct line to our team.
                            </p>
                        </div>
                        <img
                            src="/images/realtor-pose-cutout.png"
                            alt="Berry Rock Homes partner agents"
                            className="hidden lg:block mt-auto w-full max-w-sm mx-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]"
                        />
                    </div>

                    {/* Right: registration form (hosted on Formsite) */}
                    <div className="flex flex-col justify-center py-16 md:py-20">
                        <div className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-glow">
                            <FormsiteEmbed
                                embedId={PARTNER_EMBED_ID}
                                eParam={PARTNER_EPARAM}
                                title="Realtor Partner registration form"
                            />
                        </div>

                        {/* Alternative CTA — not ready to register */}
                        <p className="text-navy-300 text-sm leading-relaxed text-center mt-5">
                            Not ready to register?{' '}
                            <a
                                href="https://bookings.cloud.microsoft/book/BerryRockHomes1@NETORG734010.onmicrosoft.com/?ismsaljsauthenabled=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-semibold text-berry-300 hover:text-berry-200 underline underline-offset-2 transition-colors"
                            >
                                Schedule a 30-minute consultation
                                <ArrowRight size={13} />
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AgentRegistrationCta;
