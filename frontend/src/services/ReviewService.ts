import api from './api';

export interface Review {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  user: {
      name: string;
  }
}

export const ReviewService = {
  getReviews: async (roomId: string): Promise<Review[]> => {
    const response = await api.get(`/reviews/${roomId}`);
    return response.data;
  },

  createReview: async (data: {
      bookingId: string;
      roomId: string;
      email: string;
      rating: number;
      comment: string;
  }) => {
      const response = await api.post('/reviews', data);
      return response.data;
  }
};
