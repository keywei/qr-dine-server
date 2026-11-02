import { Router } from 'express';
import { OrderController } from '../controllers/order.controller';
import { authenticateJwt } from '../middlewares/auth';

const router = Router();

router.post('/', OrderController.createOrder);
router.get('/track/:orderNo', OrderController.getOrderByNo);
router.get('/', authenticateJwt, OrderController.getOrders);
router.put('/:id/confirm-payment', authenticateJwt, OrderController.confirmCashPayment);
router.put('/:id/status', authenticateJwt, OrderController.updateOrderStatus);

export default router;
