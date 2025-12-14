import React, { useState } from 'react';
import { differenceInDays } from 'date-fns';
import type { Room } from '../../services/RoomService';
import api from '../../services/api';

interface BookingFormProps {
  room: Room;
}

const BookingForm: React.FC<BookingFormProps> = ({ room }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const calculateTotal = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const nights = differenceInDays(end, start);
      if (nights > 0) {
        return nights * room.pricePerNight;
      }
    }
    return 0;
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const total = calculateTotal();
    
    // Simple User ID for now (In real app, get from Auth Context)
    const userId = "temp-user-id"; 

    if (total <= 0) {
        setMessage({ type: 'error', text: 'Invalid Dates' });
        setLoading(false);
        return;
    }

    try {
        // In a real app we'd likely create the user first or ensure auth
        // For this demo phase, we assume the backend might need auth or we mock it.
        // Actually, let's just send the request. The backend 'createBooking' needs to exist.
        
        await api.post('/bookings', {
            roomId: room.id,
            userId: userId, // The backend needs to handle this or we generate a guest user
            checkIn: new Date(checkIn).toISOString(),
            checkOut: new Date(checkOut).toISOString(),
            totalPrice: total
        });
        
        setMessage({ type: 'success', text: 'Booking request sent successfully!' });
    } catch (error) {
        console.error("Booking error:", error);
        setMessage({ type: 'error', text: 'Failed to book room. Please try again.' });
    } finally {
        setLoading(false);
    }
  };

  const total = calculateTotal();

  return (
    <div className="bg-white p-8 shadow-2xl border border-gray-100">
      <div className="mb-6 border-b border-gray-100 pb-6">
        <span className="text-gray-500 font-sans text-sm">Starting from</span>
        <div className="flex items-baseline mt-1">
          <span className="text-3xl font-serif text-accent font-bold">${room.pricePerNight}</span>
          <span className="text-gray-400 ml-2 font-sans text-sm">/ Night</span>
        </div>
      </div>

      <form onSubmit={handleBooking}>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-sans">Check-In</label>
            <input 
              type="date" 
              className="w-full bg-gray-50 border border-gray-200 p-3 font-sans text-sm focus:outline-none focus:border-accent transition-colors"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-sans">Check-Out</label>
            <input 
              type="date" 
              className="w-full bg-gray-50 border border-gray-200 p-3 font-sans text-sm focus:outline-none focus:border-accent transition-colors"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>
          <div>
             <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-sans">Guests</label>
             <select 
                className="w-full bg-gray-50 border border-gray-200 p-3 font-sans text-sm focus:outline-none focus:border-accent"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
             >
                {[...Array(room.capacity)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                ))}
             </select>
          </div>
        </div>

        {total > 0 && (
            <div className="mb-6 p-4 bg-gray-50 rounded-sm flex justify-between items-center">
                <span className="font-serif text-secondary">Total Price</span>
                <span className="font-serif text-accent text-xl font-bold">${total}</span>
            </div>
        )}

        {message && (
            <div className={`mb-4 p-3 text-sm text-center ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {message.text}
            </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-secondary text-white py-4 font-serif tracking-widest hover:bg-black transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? 'PROCESSING...' : 'BOOK NOW'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
