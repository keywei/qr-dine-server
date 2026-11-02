import { Router } from 'express';
import { PaymentController } from '../controllers/payment.controller';

const router = Router();

router.post('/mock-pay', PaymentController.mockPay);

export default router;
