import { Request, Response } from 'express';
import prisma from '../prisma';
import { notifyOrderUpdated } from '../socket';

export const mockPay = async (req: Request, res: Response) => {
  try {
    const { orderNo, paymentChannel } = req.body;
    if (!orderNo) {
      return res.status(400).json({ success: false, message: '請提供訂單編號' });
    }

    const order = await prisma.order.findUnique({
      where: { orderNo },
      include: { table: true, items: true },
    });

    if (!order) {
      return res.status(404).json({ success: false, message: '找不到此訂單' });
    }

    if (order.paymentStatus === 'PAID') {
      return res.status(400).json({ success: false, message: '此訂單已完成付款' });
    }

    // Process mock payment: update paymentStatus to PAID and status to COOKING
    const updatedOrder = await prisma.order.update({
      where: { id: order.id },
      data: {
        paymentStatus: 'PAID',
        paymentMethod: paymentChannel || 'ONLINE',
        paidAt: new Date(),
        status: 'COOKING',
      },
      include: { table: true, items: true },
    });

    // Notify kitchen/admin via WebSocket
    notifyOrderUpdated(updatedOrder);

    return res.json({
      success: true,
      message: `模擬付款成功 (${paymentChannel || '線上支付'})，訂單已送往廚房製作`,
      data: updatedOrder,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

