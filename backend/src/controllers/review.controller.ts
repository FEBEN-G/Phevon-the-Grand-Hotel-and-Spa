import { Request, Response } from 'express';
import prisma from '../database/prismaClient';
import { EmailService } from '../services/EmailService';

export const createReview = async (req: Request, res: Response) => {
  try {
    const { bookingId, roomId, email, rating, comment } = req.body;

    if (!bookingId || !roomId || !email || !rating || !comment) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    if (rating < 1 || rating > 5) {
        res.status(400).json({ error: 'Rating must be between 1 and 5' });
        return;
    }

    // Verify Booking
    const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
        include: { user: true, room: true }
    });

    if (!booking) {
        res.status(404).json({ error: 'Booking not found' });
        return;
    }

    // Verify Email matches Booking User
    if (booking.user.email.toLowerCase() !== email.toLowerCase()) {
        res.status(403).json({ error: 'Email does not match booking record' });
        return;
    }

    // Verify Room matches (Optional check, but good for integrity)
    if (booking.roomId !== roomId) {
        res.status(400).json({ error: 'Booking does not belong to this room' });
        return;
    }

    // Verify Booking is confirmed
    if (booking.status !== 'CONFIRMED') {
        res.status(400).json({ error: 'Only confirmed bookings can be reviewed' });
        return;
    }

    // Check if review already exists
    const existingReview = await prisma.review.findFirst({
        where: { bookingId: bookingId }
    });

    if (existingReview) {
        res.status(400).json({ error: 'You have already reviewed this stay' });
        return;
    }

    const review = await prisma.review.create({
        data: {
            bookingId,
            userId: booking.userId,
            rating,
            comment
        }
    });

    // Send email notification
    try {
      await EmailService.sendReviewNotification({
        roomName: booking.room.name,
        guestName: booking.user.name,
        guestEmail: booking.user.email,
        rating,
        comment
      });
    } catch (emailError) {
      console.error('Failed to send review email:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      review,
      message: 'Review submitted successfully. Thank you for your feedback!'
    });

  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Failed to create review' });
  }
};

export const getReviewsByRoom = async (req: Request, res: Response) => {
    try {
        const { roomId } = req.params;
        
        // In the schema, Review is linked to Booking and User. 
        // Although the schema provided initially had `roomId` on Booking, effectively linking Review to Room via Booking.
        // Let's verify the schema relationship in Prisma. 
        // Review -> Booking -> Room.
        // So to get reviews for a room, we filter reviews where review.booking.roomId == roomId.
        
        const reviews = await prisma.review.findMany({
            where: {
                booking: {
                    roomId: roomId
                }
            },
            include: {
                user: {
                    select: { name: true }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};
