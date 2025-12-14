import { Request, Response } from 'express';
import prisma from '../database/prismaClient';
import { v4 as uuidv4 } from 'uuid';
import { PaymentService } from '../services/PaymentService';
import { EmailService } from '../services/EmailService';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { roomId, userId, checkIn, checkOut, totalPrice } = req.body;

    if (!roomId || !checkIn || !checkOut || !totalPrice) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Find or create user (for demo purposes, we'll create a dummy user if userId is not found)
    let user = userId ? await prisma.user.findUnique({ where: { id: userId } }) : null;
    
    if (!user) {
      // Create a dummy user for demo
      user = await prisma.user.create({
        data: {
          email: `guest-${Date.now()}@phevonhotel.com`,
          name: 'Guest User',
          password: 'dummy'
        }
      });
    }

    // Get room details for email
    const room = await prisma.room.findUnique({ where: { id: roomId } });
    if (!room) {
      res.status(404).json({ error: 'Room not found' });
      return;
    }

    // Create booking with PENDING status
    const booking = await prisma.booking.create({
      data: {
        userId: user.id,
        roomId,
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        totalPrice,
        status: 'PENDING'
      }
    });

    // Generate unique transaction reference
    const tx_ref = `tx-${uuidv4()}`;

    // Create payment record with PENDING status
    const payment = await prisma.payment.create({
      data: {
        bookingId: booking.id,
        amount: totalPrice,
        status: 'PENDING',
        transactionId: tx_ref
      }
    });

    // Send email notification
    try {
      await EmailService.sendBookingNotification({
        bookingId: booking.id,
        roomName: room.name,
        checkIn: new Date(checkIn).toLocaleDateString(),
        checkOut: new Date(checkOut).toLocaleDateString(),
        totalPrice,
        guestEmail: user.email,
        guestName: user.name
      });
    } catch (emailError) {
      console.error('Failed to send booking email:', emailError);
      // Continue even if email fails
    }

    // Initialize payment with Chapa
    try {
      const chapaResponse = await PaymentService.initializePayment({
        amount: totalPrice,
        currency: 'ETB',
        email: user.email,
        first_name: user.name.split(' ')[0] || 'Guest',
        last_name: user.name.split(' ')[1] || 'User',
        tx_ref: tx_ref,
        callback_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/payment/success?tx_ref=${tx_ref}`,
        return_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/payment/success?tx_ref=${tx_ref}`,
        customization: {
          title: 'Phevon Hotel Booking',
          description: `Booking for ${room.name}`
        }
      });

      res.status(201).json({
        booking,
        payment,
        checkout_url: chapaResponse.data.checkout_url,
        message: 'Booking created. Please check your email for confirmation.'
      });
    } catch (paymentError) {
      console.error('Payment initialization error:', paymentError);
      res.status(500).json({ error: 'Failed to initialize payment' });
    }

  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};
