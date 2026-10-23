'use client';

import { motion } from 'framer-motion';
import InteractiveCalculator from '@/components/Calculator/InteractiveCalculator';

/*
 * Homepage calculator section. Sits after the Pathway explainer and before the
 * (dark) testimonials, letting visitors personalize the program numbers right
 * after they learn how it works. Uses the default side-by-side calculator.
 */
const CalculatorSection = () => (
    <section className="bg-white py-20 lg:py-24 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mb-10 lg:mb-12"
            >
                <p className="text-xs font-bold text-navy-600 uppercase tracking-[0.2em] mb-3">
                    Interactive Calculator
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-navy-800 tracking-tight">
                    Run the numbers on your home.
                </h2>
                <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed">
                    Enter a home price and see your Option Consideration, estimated monthly
                    payment, and Rental Credits update in real time.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <InteractiveCalculator />
            </motion.div>
        </div>
    </section>
);

export default CalculatorSection;
