import { Router } from 'express';
import { QueueController } from '../controllers/queue.controller';

const router = Router();

router.post('/', QueueController.createTicket);
router.get('/:id', QueueController.getTicket);
router.post('/:id/cancel', QueueController.cancelTicket);

export default router;
