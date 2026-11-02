import prisma from '../prisma';
import { OrderStatus } from '../types/order';
import { AppError } from '../utils/appError';
import { notifyOrderUpdated } from '../socket';

const ALLOWED_STATUSES: OrderStatus[] = ['PENDING_PAYMENT', 'COOKING', 'COMPLETED', 'CANCELLED'];

export class OrderStateService {
  static async confirmCashPayment(id: number) {
    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) throw new AppError('找不到此訂單', 404, 404);
    if (existing.paymentStatus === 'PAID') {
      throw new AppError('此訂單已完成付款，無法重複確認', 2005, 400);
    }

    const order = await prisma.order.update({
      where: { id },
      data: {
        paymentStatus: 'PAID',
        paidAt: new Date(),
        status: 'COOKING',
      },
      include: { table: true, items: true },
    });

    notifyOrderUpdated(order);
    return order;
  }

  static async updateOrderStatus(id: number, status: OrderStatus) {
    if (!ALLOWED_STATUSES.includes(status)) {
      throw new AppError(`無效的訂單狀態: ${status}`, 400, 400);
    }

    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) throw new AppError('找不到此訂單', 404, 404);

    const order = await prisma.order.update({
      where: { id },
      data: { status },
      include: { table: true, items: true },
    });

    notifyOrderUpdated(order);
    return order;
  }
}
