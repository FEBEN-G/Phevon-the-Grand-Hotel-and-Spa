import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import RoomCard from '../components/rooms/RoomCard';
import { RoomService, type Room } from '../services/RoomService';

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await RoomService.getRooms();
        setRooms(data);
      } catch (error) {
        console.error('Failed to fetch rooms', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <Layout>
      <div className="bg-secondary py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 pt-10">Accommodations</h1>
        <p className="text-gray-400 font-sans tracking-widest text-sm uppercase">Sanctuary of Peace</p>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;
