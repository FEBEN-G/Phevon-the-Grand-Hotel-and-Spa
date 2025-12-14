import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { RoomService, type Room } from '../services/RoomService';
import BookingForm from '../components/booking/BookingForm';
import ReviewList from '../components/reviews/ReviewList';
import ReviewForm from '../components/reviews/ReviewForm';

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshReviews, setRefreshReviews] = useState(0);

  useEffect(() => {
    const fetchRoom = async () => {
      if (id) {
        try {
          const data = await RoomService.getRoomById(id);
          setRoom(data);
        } catch (error) {
          console.error('Failed to fetch room', error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchRoom();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
        </div>
      </Layout>
    );
  }

  if (!room) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-2xl font-serif mb-4">Room not found</h2>
          <Link to="/rooms" className="text-accent hover:underline">Back to Rooms</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Image */}
      <div className="h-[60vh] relative">
        <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">{room.name}</h1>
          <p className="text-xl font-light tracking-wider">{room.type} SUITE</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Details Column */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-serif text-secondary mb-6">Overview</h2>
            <p className="text-gray-600 leading-relaxed font-sans mb-10 text-lg">
              {room.description}
            </p>

            <h3 className="text-2xl font-serif text-secondary mb-6">Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-600 font-sans">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  {amenity}
                </div>
              ))}
            </div>

            <div className="mt-10">
                <h3 className="text-2xl font-serif text-secondary mb-6">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {room.images.map((img, idx) => (
                        <img key={idx} src={img} alt={`Room view ${idx + 1}`} className="w-full h-64 object-cover rounded-sm shadow-sm" />
                    ))}
                </div>
            </div>

            <div className="mt-16 border-t border-gray-100 pt-10">
                <h3 className="text-2xl font-serif text-secondary mb-10">Guest Reviews</h3>
                <ReviewList roomId={room.id} refreshTrigger={refreshReviews} />
                <ReviewForm roomId={room.id} onReviewSubmitted={() => setRefreshReviews(prev => prev + 1)} />
            </div>
          </div>

          {/* Booking Column */}
          <div className="lg:w-1/3 relative">
            <div className="sticky top-32">
              <BookingForm room={room} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoomDetails;
