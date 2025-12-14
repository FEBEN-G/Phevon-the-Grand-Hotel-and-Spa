import { Router } from 'express';
import { verifyPayment } from '../controllers/payment.controller';

const router = Router();

router.get('/verify/:tx_ref', verifyPayment);

export default router;
