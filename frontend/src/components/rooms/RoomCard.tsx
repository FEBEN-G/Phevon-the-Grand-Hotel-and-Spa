import React from 'react';
import { Link } from 'react-router-dom';
import type { Room } from '../../services/RoomService';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden h-64">
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 font-serif text-secondary text-sm tracking-wider">
          ${room.pricePerNight} / Night
        </div>
      </div>
      <div className="p-8 border-x border-b border-gray-100">
        <h3 className="text-xl font-serif text-secondary mb-3">{room.name}</h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 font-sans">{room.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-uppercase tracking-widest text-gray-400 font-sans">
            {room.capacity} GUESTS
          </span>
          <Link 
            to={`/rooms/${room.id}`}
            className="text-accent hover:text-accent-dark font-serif text-sm tracking-wider border-b border-transparent hover:border-accent-dark transition-all pb-1"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
