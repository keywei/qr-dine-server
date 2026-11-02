import { Request, Response } from 'express';
import { PaymentService } from '../services/payment.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { MESSAGES } from '../constants/messages';

export class PaymentController {
  static mockPay = asyncHandler(async (req: Request, res: Response) => {
    const { orderNo, paymentChannel } = req.body;
    const order = await PaymentService.mockPay(orderNo, paymentChannel);
    successResponse(res, order, MESSAGES.PAYMENT.MOCK_SUCCESS(order.paymentMethod));
  });
}
