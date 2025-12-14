import React from 'react';
import Layout from '../components/layout/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Our Story</h1>
            <p className="text-xl font-light tracking-wider">Where Luxury Meets Tradition</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-serif text-secondary mb-6 text-center">Welcome to Phevon</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            Nestled in the heart of Addis Ababa, Phevon The Grand Hotel & Spa stands as a beacon of luxury and Ethiopian hospitality. Since our establishment, we have been dedicated to providing an unparalleled experience that seamlessly blends modern elegance with rich cultural heritage.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our commitment to excellence is reflected in every detail—from our meticulously designed suites to our world-class dining experiences and rejuvenating spa treatments. We believe that true luxury is found in the perfect harmony of comfort, service, and authentic connection.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-secondary text-center mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every aspect of our service, ensuring each guest receives an exceptional experience.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">Hospitality</h3>
              <p className="text-gray-600">Rooted in Ethiopian tradition, our warm hospitality makes every guest feel like family.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">Sustainability</h3>
              <p className="text-gray-600">We are committed to environmental responsibility and supporting our local community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-secondary text-center mb-6">Our Leadership</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Led by a team of hospitality veterans with decades of combined experience in luxury service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-serif text-secondary mb-1">Abebe Tadesse</h3>
              <p className="text-accent text-sm mb-2">General Manager</p>
              <p className="text-gray-600 text-sm">25+ years in luxury hospitality</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-serif text-secondary mb-1">Sarah Johnson</h3>
              <p className="text-accent text-sm mb-2">Director of Operations</p>
              <p className="text-gray-600 text-sm">International hotel management expert</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-serif text-secondary mb-1">Chef Marcus Bekele</h3>
              <p className="text-accent text-sm mb-2">Executive Chef</p>
              <p className="text-gray-600 text-sm">Award-winning culinary artist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-secondary mb-12">Awards & Recognition</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-accent text-4xl font-serif mb-2">★★★★★</div>
              <p className="text-gray-600 text-sm">Five Star Hotel</p>
            </div>
            <div>
              <div className="text-accent text-4xl font-serif mb-2">2024</div>
              <p className="text-gray-600 text-sm">Best Luxury Hotel</p>
            </div>
            <div>
              <div className="text-accent text-4xl font-serif mb-2">#1</div>
              <p className="text-gray-600 text-sm">TripAdvisor Addis Ababa</p>
            </div>
            <div>
              <div className="text-accent text-4xl font-serif mb-2">ISO</div>
              <p className="text-gray-600 text-sm">Quality Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-6">Experience Phevon</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover why guests from around the world choose Phevon for their stay in Addis Ababa.
          </p>
          <a href="/rooms" className="inline-block bg-accent text-white px-8 py-3 font-serif hover:bg-yellow-600 transition-colors">
            Book Your Stay
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
