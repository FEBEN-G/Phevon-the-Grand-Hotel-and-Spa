import React from 'react';
import Layout from '../components/layout/Layout';

const Dining: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Culinary Excellence</h1>
            <p className="text-xl font-light tracking-wider">A Journey Through Flavors</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-secondary mb-6">Dining at Phevon</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Experience world-class cuisine crafted by our award-winning chefs. From traditional Ethiopian delicacies to international favorites, every dish is a masterpiece.
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-secondary text-center mb-16">Our Restaurants</h2>
          
          <div className="space-y-16">
            {/* Restaurant 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="The Grand Hall" className="w-full h-96 object-cover shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-serif text-secondary mb-4">The Grand Hall</h3>
                <p className="text-gray-600 mb-4">Our signature fine dining restaurant featuring contemporary Ethiopian cuisine with a modern twist.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Open: Dinner 6:00 PM - 11:00 PM</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Dress Code: Smart Casual</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Reservations Recommended</li>
                </ul>
              </div>
            </div>

            {/* Restaurant 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Terrace Bistro" className="w-full h-96 object-cover shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-serif text-secondary mb-4">Terrace Bistro</h3>
                <p className="text-gray-600 mb-4">Casual all-day dining with panoramic city views and international cuisine.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Open: 7:00 AM - 10:00 PM</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Breakfast, Lunch & Dinner</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Outdoor Seating Available</li>
                </ul>
              </div>
            </div>

            {/* Bar */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Golden Lounge" className="w-full h-96 object-cover shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-serif text-secondary mb-4">Golden Lounge & Bar</h3>
                <p className="text-gray-600 mb-4">Sophisticated cocktail bar with live music and an extensive wine collection.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Open: 5:00 PM - 2:00 AM</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Live Jazz Every Friday</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-accent rounded-full mr-3"></span>Premium Spirits & Wines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-6">Reserve Your Table</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience unforgettable dining moments. Contact our concierge to make a reservation.
          </p>
          <a href="/contact" className="inline-block bg-accent text-white px-8 py-3 font-serif hover:bg-yellow-600 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Dining;
