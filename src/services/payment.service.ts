import prisma from '../prisma';
import { AppError } from '../utils/appError';
import { notifyOrderUpdated } from '../socket';

export class PaymentService {
  static async mockPay(orderNo: string, paymentChannel = 'ONLINE') {
    if (!orderNo) throw new AppError('請提供訂單編號', 400, 400);

    const order = await prisma.order.findUnique({
      where: { orderNo },
      include: { table: true, items: true },
    });

    if (!order) throw new AppError('找不到此訂單', 404, 404);
    if (order.paymentStatus === 'PAID') {
      throw new AppError('此訂單已完成付款，無法重複付款', 2005, 400);
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
