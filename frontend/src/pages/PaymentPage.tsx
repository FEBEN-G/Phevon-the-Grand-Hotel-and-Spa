import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';

interface BookingData {
  roomId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  nights: number;
}

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = location.state as BookingData;
    if (!data) {
      navigate('/rooms');
      return;
    }
    setBookingData(data);
  }, [location, navigate]);

  const handlePayment = async () => {
    if (!selectedMethod || !bookingData) return;

    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      navigate('/payment/success', {
        state: {
          bookingData,
          paymentMethod: selectedMethod,
          status: 'success'
        }
      });
    }, 1500);
  };

  if (!bookingData) {
    return null;
  }

  const paymentMethods = [
    {
      id: 'chapa',
      name: 'Chapa',
      description: 'Pay with Chapa - Mobile Money, Bank Transfer',
      icon: '💳'
    },
    {
      id: 'telebirr',
      name: 'Telebirr',
      description: 'Pay with Telebirr Mobile Wallet',
      icon: '📱'
    },
    {
      id: 'cbe',
      name: 'CBE Birr',
      description: 'Commercial Bank of Ethiopia',
      icon: '🏦'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'Direct bank transfer',
      icon: '🏛️'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-serif text-secondary mb-8 text-center">Complete Your Payment</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Booking Summary */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 shadow-lg sticky top-6">
                <h2 className="text-xl font-serif text-secondary mb-4">Booking Summary</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Room:</span>
                    <p className="font-serif text-secondary">{bookingData.roomName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Check-in:</span>
                    <p className="font-sans">{new Date(bookingData.checkIn).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Check-out:</span>
                    <p className="font-sans">{new Date(bookingData.checkOut).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Nights:</span>
                    <p className="font-sans">{bookingData.nights}</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-gray-500">Total Amount:</span>
                    <p className="text-2xl font-serif text-accent font-bold">${bookingData.totalPrice}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 shadow-lg">
                <h2 className="text-2xl font-serif text-secondary mb-6">Select Payment Method</h2>

                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`border-2 p-4 rounded-lg cursor-pointer transition-all ${
                        selectedMethod === method.id
                          ? 'border-accent bg-accent/5'
                          : 'border-gray-200 hover:border-accent/50'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="text-3xl mr-4">{method.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-serif text-lg text-secondary">{method.name}</h3>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                        <div className="ml-4">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedMethod === method.id
                                ? 'border-accent bg-accent'
                                : 'border-gray-300'
                            }`}
                          >
                            {selectedMethod === method.id && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={() => navigate(-1)}
                    className="flex-1 bg-gray-200 text-secondary py-4 font-serif tracking-widest hover:bg-gray-300 transition-colors"
                  >
                    BACK
                  </button>
                  <button
                    onClick={handlePayment}
                    disabled={!selectedMethod || loading}
                    className="flex-1 bg-secondary text-white py-4 font-serif tracking-widest hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'PROCESSING...' : 'PROCEED TO PAYMENT'}
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
