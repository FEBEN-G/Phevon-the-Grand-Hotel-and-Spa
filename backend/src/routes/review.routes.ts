import { Router } from 'express';
import { createReview, getReviewsByRoom } from '../controllers/review.controller';

const router = Router();

router.post('/', createReview);
router.get('/:roomId', getReviewsByRoom);

export default router;
