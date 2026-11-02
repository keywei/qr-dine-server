import { Request, Response } from 'express';
import { PaymentService } from '../services/payment.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';

export class PaymentController {
  static mockPay = asyncHandler(async (req: Request, res: Response) => {
    const { orderNo, paymentChannel } = req.body;
    const order = await PaymentService.mockPay(orderNo, paymentChannel);
    successResponse(res, order, `模擬付款成功 (${order.paymentMethod})，訂單已送往廚房製作`);
  });
}
