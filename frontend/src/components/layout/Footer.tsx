import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setMessage('');

    try {
      await api.post('/email/newsletter', { email });
      setMessage('Successfully subscribed!');
      setEmail('');
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold tracking-widest text-accent">PHEVON</h2>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Experience the pinnacle of luxury and comfort. Whether you are here for business or leisure, Phevon offers an unforgettable stay.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/rooms" className="text-gray-400 hover:text-accent transition-colors text-sm">Rooms & Suites</Link></li>
              <li><Link to="/dining" className="text-gray-400 hover:text-accent transition-colors text-sm">Dining</Link></li>
              <li><Link to="/spa" className="text-gray-400 hover:text-accent transition-colors text-sm">Spa & Wellness</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-accent transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400 font-sans">
              <li>Kazanchis</li>
              <li>Addis Ababa, Ethiopia</li>
              <li className="pt-2">+251 937 318 894</li>
              <li>+251 964 288 068</li>
              <li className="pt-2">phevondigitalsolutions@gmail.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif tracking-wider mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border border-gray-600 px-4 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                required
                disabled={loading}
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-white text-secondary px-4 py-2 text-sm font-serif tracking-wider hover:bg-accent hover:text-white transition-colors disabled:opacity-50"
              >
                {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
              </button>
              {message && (
                <p className={`text-xs ${message.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-xs font-sans">
          &copy; {new Date().getFullYear()} Phevon The Grand Hotel & Spa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
