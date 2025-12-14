import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      {/* Placeholder for other sections */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-secondary mb-6">Redefining Luxury</h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed font-sans">
            Immerse yourself in a world of refined elegance. From our stunning architecture to our world-class amenities, every detail at Phevon is curated to provide an unforgettable stay.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
