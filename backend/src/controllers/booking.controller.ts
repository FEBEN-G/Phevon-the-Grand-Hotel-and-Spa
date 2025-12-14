import { Request, Response } from 'express';
import prisma from '../database/prismaClient';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { userId, roomId, checkIn, checkOut, totalPrice } = req.body;

    if (!userId || !roomId || !checkIn || !checkOut || !totalPrice) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Basic date validation
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    
    if (start >= end) {
        res.status(400).json({ error: 'Check-out date must be after check-in date' });
        return;
    }

    // In a real app, check for overlapping bookings here
    // For Phase 4, we assume availability

    // Create user if temporary user doesn't exist (mocking auth)
    let user = await prisma.user.findFirst({ where: { id: userId } });
    if (!user) {
        // Create a dummy user if ID provided doesn't exist (or just fail if we had real auth)
        // For this demo: we will actually create a new user if not found or simpler:
        // Client sends a dummy ID "temp-user-id", we check if it exists, if not create it.
        // Actually, UUIDs are expected. Let's make sure we have a user.
        // If the frontend sends "temp-user-id", let's create it if missing, or use a known seed user.
        // Better: let's simple create a guest user if not found
         user = await prisma.user.create({
            data: {
                email: `guest_${Date.now()}@example.com`,
                name: 'Guest User',
                password: 'temp_password', // Insecure, but fine for prototype
            }
        });
    }

    const booking = await prisma.booking.create({
      data: {
        userId: user.id,
        roomId,
        checkIn: start,
        checkOut: end,
        totalPrice,
        status: 'CONFIRMED' // Auto-confirm for now
      }
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};
