import { Router } from 'express';
import { AdminQueueController } from '../controllers/adminQueue.controller';
import { authenticateJwt } from '../middlewares/auth';

const router = Router();

router.use(authenticateJwt);
router.get('/', AdminQueueController.getAdminQueue);
router.put('/:id/call', AdminQueueController.callTicket);
router.put('/:id/seat', AdminQueueController.seatTicket);
router.put('/:id/cancel', AdminQueueController.cancelTicket);

export default router;
