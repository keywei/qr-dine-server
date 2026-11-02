import prisma from '../prisma';

export class StatsService {
  static async getStatsSummary() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [todayPaidOrders, pendingPaymentCount, cookingCount, completedTodayCount, orderItems] =
      await Promise.all([
        prisma.order.findMany({
          where: { createdAt: { gte: today }, paymentStatus: 'PAID' },
          select: { totalAmount: true },
        }),
        prisma.order.count({ where: { status: 'PENDING_PAYMENT' } }),
        prisma.order.count({ where: { status: 'COOKING' } }),
        prisma.order.count({ where: { status: 'COMPLETED', createdAt: { gte: today } } }),
        prisma.orderItem.groupBy({
          by: ['name'],
          _sum: { quantity: true },
          orderBy: { _sum: { quantity: 'desc' } },
          take: 5,
        }),
      ]);

    const todayRevenue = todayPaidOrders.reduce((sum, o) => sum + o.totalAmount, 0);
    const topDishes = orderItems.map((item) => ({
      name: item.name,
      totalQuantity: item._sum.quantity || 0,
    }));

    return {
      todayRevenue,
      todayOrderCount: todayPaidOrders.length,
      pendingPaymentCount,
      cookingCount,
      completedTodayCount,
      topDishes,
    };
  }
}
