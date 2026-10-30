import { Request, Response } from 'express';
import prisma from '../prisma';

export const getStatsSummary = async (req: Request, res: Response) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Today's paid orders
    const todayPaidOrders = await prisma.order.findMany({
      where: {
        createdAt: { gte: today },
        paymentStatus: 'PAID',
      },
    });

    const todayRevenue = todayPaidOrders.reduce((acc, order) => acc + order.totalAmount, 0);
    const todayOrderCount = todayPaidOrders.length;

    // Count by current status
    const pendingPaymentCount = await prisma.order.count({
      where: { status: 'PENDING_PAYMENT' },
    });

    const cookingCount = await prisma.order.count({
      where: { status: 'COOKING' },
    });

    const completedTodayCount = await prisma.order.count({
      where: {
        status: 'COMPLETED',
        createdAt: { gte: today },
      },
    });

    // Top selling items
    const orderItems = await prisma.orderItem.groupBy({
      by: ['name'],
      _sum: { quantity: true },
      orderBy: {
        _sum: {
          quantity: 'desc',
        },
      },
      take: 5,
    });

    const topDishes = orderItems.map((item) => ({
      name: item.name,
      totalQuantity: item._sum.quantity || 0,
    }));

    return res.json({
      success: true,
      data: {
        todayRevenue,
        todayOrderCount,
        pendingPaymentCount,
        cookingCount,
        completedTodayCount,
        topDishes,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

