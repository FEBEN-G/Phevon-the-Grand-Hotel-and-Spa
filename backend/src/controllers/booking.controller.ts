import { Request, Response } from 'express';
import prisma from '../database/prismaClient';
import { PaymentService } from '../services/PaymentService';
import { v4 as uuidv4 } from 'uuid';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { userId, roomId, checkIn, checkOut, totalPrice } = req.body;

    if (!userId || !roomId || !checkIn || !checkOut || !totalPrice) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    
    if (start >= end) {
        res.status(400).json({ error: 'Check-out date must be after check-in date' });
        return;
    }

    // Get or Create User
    let user = await prisma.user.findFirst({ where: { id: userId } });
    if (!user) {
         user = await prisma.user.create({
            data: {
                id: userId.length > 10 ? userId : undefined, // Usage of ID if it looks like uuid or let prisma gen
                email: `guest_${Date.now()}@example.com`,
                name: 'Guest User',
                password: 'temp_password',
            }
        });
    }

    // Generate Transaction Reference
    const tx_ref = `tx-phevon-${uuidv4()}`;

    // Create Booking (PENDING)
    const booking = await prisma.booking.create({
      data: {
        userId: user.id,
        roomId,
        checkIn: start,
        checkOut: end,
        totalPrice,
        status: 'PENDING' 
      }
    });

    // Create Payment Record (PENDING)
    await prisma.payment.create({
        data: {
            bookingId: booking.id,
            amount: totalPrice,
            provider: 'CHAPA',
            status: 'PENDING',
            transactionId: tx_ref
        }
    });

    // Initialize Chapa Payment
    const paymentResponse = await PaymentService.initializePayment({
        amount: totalPrice,
        currency: 'ETB',
        email: user.email,
        first_name: user.name.split(' ')[0],
        last_name: user.name.split(' ')[1] || 'Guest',
        tx_ref: tx_ref,
        return_url: `http://localhost:5173/payment/success?tx_ref=${tx_ref}`,
        customization: {
            title: 'Phevon Hotel Booking',
            description: `Payment for booking #${booking.id}`
        }
    });

    if (paymentResponse.status !== 'success') {
        throw new Error('Chapa payment initialization returned non-success');
    }

    res.status(201).json({
        booking,
        checkout_url: paymentResponse.data.checkout_url
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};
