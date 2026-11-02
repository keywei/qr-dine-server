import prisma from '../prisma';
import { AppError } from '../utils/appError';
import { notifyOrderUpdated } from '../socket';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

export class PaymentService {
  static async mockPay(orderNo: string, paymentChannel = 'ONLINE') {
    if (!orderNo) {
      throw new AppError(MESSAGES.PAYMENT.ORDER_NO_REQUIRED, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
    }

    const order = await prisma.order.findUnique({
      where: { orderNo },
      include: { table: true, items: true },
    });

    if (!order) throw new AppError(MESSAGES.ORDER.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);
    if (order.paymentStatus === 'PAID') {
      throw new AppError(MESSAGES.PAYMENT.ALREADY_PAID, ResponseCode.ORDER_ALREADY_PAID, HttpStatus.BAD_REQUEST);
    }

    const updated = await prisma.order.update({
      where: { id: order.id },
      data: {
        paymentStatus: 'PAID',
        paymentMethod: paymentChannel,
        paidAt: new Date(),
        status: 'COOKING',
      },
      include: { table: true, items: true },
    });

    notifyOrderUpdated(updated);
    return updated;
  }
}
