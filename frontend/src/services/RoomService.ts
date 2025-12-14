import api from './api';

export interface Room {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  capacity: number;
  type: string;
  amenities: string[];
  images: string[];
  isAvailable: boolean;
}

export const RoomService = {
  getRooms: async (): Promise<Room[]> => {
    const response = await api.get('/rooms');
    return response.data;
  },

  getRoomById: async (id: string): Promise<Room> => {
    const response = await api.get(`/rooms/${id}`);
    return response.data;
  },
};
