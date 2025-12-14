import React, { useEffect, useState } from 'react';
import { ReviewService, type Review } from '../../services/ReviewService';
import { format } from 'date-fns';

interface ReviewListProps {
  roomId: string;
  refreshTrigger: number;
}

const ReviewList: React.FC<ReviewListProps> = ({ roomId, refreshTrigger }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await ReviewService.getReviews(roomId);
        setReviews(data);
      } catch (error) {
        console.error('Failed to fetch reviews', error);
      }
    };
    fetchReviews();
  }, [roomId, refreshTrigger]);

  if (reviews.length === 0) {
      return (
          <div className="text-gray-400 font-sans italic">No reviews yet. Be the first to share your experience!</div>
      );
  }

  return (
    <div className="space-y-8">
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-serif text-lg text-secondary capitalize">{review.user.name}</h4>
            <div className="flex text-accent text-sm">
                {[...Array(5)].map((_, i) => (
                    <span key={i}>
                        {i < review.rating ? '★' : '☆'}
                    </span>
                ))}
            </div>
          </div>
          <span className="text-xs text-gray-400 font-sans block mb-3">
            {format(new Date(review.createdAt), 'MMMM d, yyyy')}
          </span>
          <p className="text-gray-600 font-sans leading-relaxed text-sm">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
