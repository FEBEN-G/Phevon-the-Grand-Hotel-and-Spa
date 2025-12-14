import { Router } from 'express';
import { subscribeNewsletter, sendContactMessage } from '../controllers/email.controller';

const router = Router();

router.post('/newsletter', subscribeNewsletter);
router.post('/contact', sendContactMessage);

export default router;
