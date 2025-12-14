import React from 'react';
import Layout from '../components/layout/Layout';

const Spa: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Spa & Wellness</h1>
            <p className="text-xl font-light tracking-wider">Rejuvenate Your Mind, Body & Soul</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-secondary mb-6">The Phevon Spa Experience</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Escape to a sanctuary of tranquility. Our world-class spa offers holistic treatments combining ancient traditions with modern wellness techniques.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-secondary text-center mb-16">Our Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">Massage Therapy</h3>
              <p className="text-gray-600 text-sm">Swedish, Deep Tissue, Hot Stone, and Traditional Ethiopian massages</p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">Sauna & Steam</h3>
              <p className="text-gray-600 text-sm">Finnish sauna, Turkish hammam, and aromatherapy steam rooms</p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">Fitness Center</h3>
              <p className="text-gray-600 text-sm">State-of-the-art equipment, personal trainers, and yoga classes</p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">Beauty Treatments</h3>
              <p className="text-gray-600 text-sm">Facials, body wraps, manicures, pedicures, and hair services</p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">Hydrotherapy</h3>
              <p className="text-gray-600 text-sm">Jacuzzi, plunge pools, and therapeutic water treatments</p>
            </div>

            <div className="bg-white p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">Meditation & Yoga</h3>
              <p className="text-gray-600 text-sm">Daily classes, private sessions, and mindfulness workshops</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Treatments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-secondary text-center mb-16">Signature Treatments</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif text-secondary">Ethiopian Coffee Ritual</h3>
                <span className="text-accent font-serif">$180</span>
              </div>
              <p className="text-gray-600 text-sm">90 minutes | A unique experience combining traditional coffee ceremony with aromatherapy massage</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif text-secondary">Royal Gold Facial</h3>
                <span className="text-accent font-serif">$250</span>
              </div>
              <p className="text-gray-600 text-sm">75 minutes | Luxurious 24k gold-infused facial treatment for radiant, youthful skin</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif text-secondary">Couples Sanctuary</h3>
                <span className="text-accent font-serif">$400</span>
              </div>
              <p className="text-gray-600 text-sm">120 minutes | Private suite experience with synchronized massage and champagne</p>
            </div>

            <div className="pb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-serif text-secondary">Detox & Renewal Package</h3>
                <span className="text-accent font-serif">$350</span>
              </div>
              <p className="text-gray-600 text-sm">150 minutes | Full body scrub, wrap, massage, and facial for complete rejuvenation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-6">Book Your Spa Experience</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Open daily from 8:00 AM to 9:00 PM. Advance booking recommended.
          </p>
          <a href="/contact" className="inline-block bg-accent text-white px-8 py-3 font-serif hover:bg-yellow-600 transition-colors">
            Make a Reservation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Spa;
