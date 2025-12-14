import { Request, Response } from 'express';
import prisma from '../database/prismaClient';
import { PaymentService } from '../services/PaymentService';

export const verifyPayment = async (req: Request, res: Response) => {
    try {
        const { tx_ref } = req.params;

        if (!tx_ref) {
            res.status(400).json({ error: 'Transaction reference is required' });
            return;
        }

        // Verify with Chapa
        // Note: For test mode, simple verification might be needed or just trust the ref if Chapa calls back
        // But best practice is to call verify endpoint
        
        let status = 'FAILED';
        try {
            const chapaResponse = await PaymentService.verifyPayment(tx_ref);
            if (chapaResponse.status === 'success') {
                status = 'SUCCESS';
            }
        } catch (e) {
            console.warn('Chapa verification failed or network error', e);
            // In dev environment with fake keys, this might fail. 
            // We might want to simulate success if local dev and specific test key?
            // For now, let's assume if we are here, we check the DB.
        }

        // Search for payment by transactionId (which is tx_ref)
        const payment = await prisma.payment.findFirst({
            where: { transactionId: tx_ref }
        });

        if (!payment) {
            res.status(404).json({ error: 'Payment record not found' });
            return;
        }

        if (payment.status === 'SUCCESS') {
             res.json({ status: 'SUCCESS', message: 'Payment already verified' });
             return;
        }

        // Update Payment and Booking
        // IMPORTANT: In PROD, rely strictly on Chapa 'success' status. 
        // For DEV without valid keys, you might manually set it or ensure keys are valid test keys.
        
        if (status === 'SUCCESS') {
            await prisma.$transaction([
                prisma.payment.update({
                    where: { id: payment.id },
                    data: { status: 'SUCCESS' }
                }),
                prisma.booking.update({
                    where: { id: payment.bookingId },
                    data: { status: 'CONFIRMED' }
                })
            ]);
        } else {
             await prisma.payment.update({
                where: { id: payment.id },
                data: { status: 'FAILED' }
            });
        }

        res.json({ status, message: `Payment ${status}` });

    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({ error: 'Failed to verify payment' });
    }
};
