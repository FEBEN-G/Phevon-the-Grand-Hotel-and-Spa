import { Request, Response } from 'express';
import prisma from '../database/prismaClient';

export const getAllRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await prisma.room.findMany({
      where: {
        isAvailable: true // Optional: Filter by availability
      }
    });
    // Parse JSON strings back to objects for response
    const formattedRooms = rooms.map(room => ({
      ...room,
      amenities: JSON.parse(room.amenities),
      images: JSON.parse(room.images)
    }));
    res.json(formattedRooms);
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
};

export const getRoomById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const room = await prisma.room.findUnique({
      where: { id }
    });

    if (!room) {
      res.status(404).json({ error: 'Room not found' });
      return;
    }

    const formattedRoom = {
      ...room,
      amenities: JSON.parse(room.amenities),
      images: JSON.parse(room.images)
    };

    res.json(formattedRoom);
  } catch (error) {
    console.error('Error fetching room:', error);
    res.status(500).json({ error: 'Failed to fetch room' });
  }
};
