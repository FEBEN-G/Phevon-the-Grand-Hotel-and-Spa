import React, { useState } from 'react';
import { ReviewService } from '../../services/ReviewService';

interface ReviewFormProps {
  roomId: string;
  onReviewSubmitted: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ roomId, onReviewSubmitted }) => {
  const [bookingId, setBookingId] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
        await ReviewService.createReview({
            bookingId,
            roomId,
            email,
            rating,
            comment
        });
        
        setMessage({ type: 'success', text: 'Review submitted! Please check your email for confirmation.' });
        setBookingId('');
        setEmail('');
        setComment('');
        setRating(5);
        onReviewSubmitted();

    } catch (error: any) {
        console.error('Review submission error:', error);
        const errorMsg = error.response?.data?.error || 'Failed to submit review. Please check your booking details.';
        setMessage({ type: 'error', text: errorMsg });
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 p-8 border border-gray-100 mt-10">
      <h3 className="text-xl font-serif text-secondary mb-6">Leave a Review</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-sans">Booking Reference ID</label>
                <input 
                    type="text" 
                    className="w-full bg-white border border-gray-200 p-3 font-sans text-sm focus:outline-none focus:border-accent"
                    placeholder="e.g. valid-booking-id"
                    value={bookingId}
                    onChange={(e) => setBookingId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-sans">Email Address</label>
                <input 
                    type="email" 
                    className="w-full bg-white border border-gray-200 p-3 font-sans text-sm focus:outline-none focus:border-accent"
                    placeholder="Same as booking"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
        </div>

        <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-sans">Rating</label>
            <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`text-xl focus:outline-none ${star <= rating ? 'text-accent' : 'text-gray-300'}`}
                    >
                        ★
                    </button>
                ))}
            </div>
        </div>

        <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2 font-sans">Comment</label>
            <textarea 
                className="w-full bg-white border border-gray-200 p-3 font-sans text-sm focus:outline-none focus:border-accent h-32"
                placeholder="Share your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
            ></textarea>
        </div>

        {message && (
            <div className={`p-3 text-sm text-center ${message.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                {message.text}
            </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="bg-secondary text-white px-8 py-3 font-serif tracking-widest hover:bg-black transition-colors duration-300 disabled:opacity-50 text-sm w-full md:w-auto"
        >
          {loading ? 'SUBMITTING...' : 'SUBMIT REVIEW'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
