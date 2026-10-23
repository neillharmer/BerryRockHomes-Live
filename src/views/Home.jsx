'use client';

import Hero from '../components/Home/Hero';
import PathwaySection from '../components/Home/PathwaySection';
import CalculatorSection from '../components/Home/CalculatorSection';
import HomeTestimonials from '../components/Home/HomeTestimonials';
import FeaturedMarkets from '../components/Home/FeaturedMarkets';
import QualifyCTA from '../components/Home/QualifyCTA';

const Home = () => {
    return (
        <div>
            <Hero />
            <PathwaySection />
            <CalculatorSection />
            <HomeTestimonials />
            <FeaturedMarkets />
            <QualifyCTA />
        </div>
    );
};

export default Home;
