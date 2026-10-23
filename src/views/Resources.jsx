'use client';

import { BookOpen, TrendingUp, Key, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PageHeader from '../components/Shared/PageHeader';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Resources = () => {
    const categories = [
        { name: "Buying Guide", count: 12 },
        { name: "Credit Tips", count: 8 },
        { name: "Market Trends", count: 5 },
        { name: "Program Basics", count: 15 }
    ];

    const articles = [
        {
            title: "5 Steps to Prepare Your Credit for a Mortgage",
            category: "Credit Tips",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Learn the most effective strategies to boost your credit score during your lease period."
        },
        {
            title: "Understanding Option Consideration",
            category: "Program Basics",
            readTime: "3 min read",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Everything you need to know about the upfront fee that secures your exclusive right to purchase."
        },
        {
            title: "How to Choose the Right Home for the Pathway Program",
            category: "Buying Guide",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Tips on what to look for when selecting a home from the open market for us to purchase."
        },
        {
            title: "The Differences Between Renting and Leasing to Own",
            category: "Program Basics",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Why the Pathway Program offers far more security and financial upside than a standard rental."
        },
        {
            title: "Is Now a Good Time to Lock in a Purchase Price?",
            category: "Market Trends",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "An analysis of current housing market trends and the benefits of locking in your future price today."
        },
        {
            title: "The Ultimate Move-In Checklist",
            category: "Buying Guide",
            readTime: "3 min read",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            excerpt: "Get organized before you move into your new Pathway Home with this comprehensive guide."
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-50 pb-24">
            <PageHeader
                title="Learning Center"
                subtitle="Guides, articles, and tips to help you navigate your journey from renter to homeowner."
                bgImage="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />

            <div className="container mx-auto px-4 max-w-6xl mt-24">

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content: Masonry-style Grid */}
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold text-slate-800 mb-8">Latest Articles</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {articles.map((article, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-panel overflow-hidden group flex flex-col cursor-pointer"
                                >
                                    <div className="h-56 overflow-hidden relative">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full shadow-sm text-berry-700">
                                            {article.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-xs text-slate-600 font-semibold uppercase tracking-wider mb-2">{article.readTime}</p>
                                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-berry-700 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-700 mb-6 text-base leading-relaxed flex-grow">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center text-berry-700 font-semibold text-sm group-hover:gap-2 transition-all">
                                            Read Article <ArrowRight size={16} className="ml-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <button className="btn btn-secondary px-8 py-3">Load More Articles</button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/4">

                        {/* Categories Widget */}
                        <div className="glass-panel p-6 mb-8">
                            <h3 className="font-bold text-slate-800 mb-4 pb-4 border-b border-slate-100">Categories</h3>
                            <ul className="space-y-3">
                                {categories.map((cat, idx) => (
                                    <li key={idx} className="flex justify-between items-center text-slate-600 hover:text-berry-700 cursor-pointer transition-colors">
                                        <span>{cat.name}</span>
                                        <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">{cat.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Widget */}
                        <div className="bg-gradient-to-br from-berry-600 to-berry-800 rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <Key size={32} className="mx-auto mb-4 text-berry-200" />
                            <h3 className="font-bold text-lg mb-2 relative z-10">Stop Renting Today</h3>
                            <p className="text-berry-100 text-base leading-relaxed mb-6 relative z-10">
                                Found the answers you were looking for? Start your application now.
                            </p>
                            <Link href="/apply" className="block w-full bg-white text-berry-700 font-bold py-3 rounded-xl shadow-md hover:bg-neutral-50 transition-colors relative z-10">
                                Apply Now
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Resources;
