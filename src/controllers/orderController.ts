import { Request, Response } from 'express';
import prisma from '../prisma';
import { notifyNewOrder, notifyOrderUpdated } from '../socket';

// Helper to generate sequential or timestamp order number
const generateOrderNo = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const random = Math.floor(1000 + Math.random() * 9000);
  return `ORD-${year}${month}${day}-${random}`;
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { diningType, tableCode, customerNote, customerPhone, paymentMethod, items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ success: false, message: '訂單品項不可為空' });
    }

    let tableId: number | null = null;
    if (diningType === 'DINE_IN') {
      if (!tableCode) {
        return res.status(400).json({ success: false, message: '內用點餐請提供桌號代碼' });
      }
      const table = await prisma.diningTable.findUnique({ where: { code: tableCode } });
      if (!table) {
        return res.status(400).json({ success: false, message: `找不到桌號: ${tableCode}` });
      }
      tableId = table.id;
    }

    // Calculate total amount
    let calculatedTotal = 0;
    const orderItemsData = items.map((it: any) => {
      const itemPrice = Number(it.price);
      const qty = Number(it.quantity || 1);
      calculatedTotal += itemPrice * qty;

      return {
        menuItemId: it.menuItemId ? Number(it.menuItemId) : null,
        name: it.name,
        price: itemPrice,
        quantity: qty,
        optionsText: it.optionsText || (Array.isArray(it.options) ? it.options.join(', ') : null),
      };
    });

    const orderNo = generateOrderNo();

    const order = await prisma.order.create({
      data: {
        orderNo,
        diningType: diningType || 'DINE_IN',
        tableId,
        customerNote: customerNote || null,
        customerPhone: customerPhone || null,
        paymentMethod: paymentMethod || 'CASH',
        paymentStatus: 'UNPAID',
        status: 'PENDING_PAYMENT',
        totalAmount: calculatedTotal,
        items: {
          create: orderItemsData,
        },
      },
      include: {
        table: true,
        items: true,
      },
    });

    // Notify admin & kitchen of incoming order
    notifyNewOrder(order);

    return res.status(201).json({
      success: true,
      message: '訂單已建立',
      data: order,
    });
  } catch (error: any) {
    console.error('Create order error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const { status, diningType, search, limit } = req.query;

    const where: any = {};
    if (status && status !== 'ALL') {
      where.status = String(status);
    }
    if (diningType && diningType !== 'ALL') {
      where.diningType = String(diningType);
    }
    if (search) {
      where.OR = [
        { orderNo: { contains: String(search) } },
        { customerPhone: { contains: String(search) } },
        { table: { code: { contains: String(search) } } },
      ];
    }

    const orders = await prisma.order.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit ? Number(limit) : 100,
      include: {
        table: true,
        items: true,
      },
    });

    return res.json({ success: true, data: orders });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getOrderByNo = async (req: Request, res: Response) => {
  try {
    const orderNo = String(req.params.orderNo);
    const order = await prisma.order.findUnique({
      where: { orderNo },
      include: {
        table: true,
        items: true,
      },
    });

    if (!order) {
      return res.status(404).json({ success: false, message: '找不到此訂單' });
    }

    return res.json({ success: true, data: order });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Cashier clicks "確認收款"
export const confirmCashPayment = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const existing = await prisma.order.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ success: false, message: '找不到此訂單' });
    }

    const order = await prisma.order.update({
      where: { id },
      data: {
        paymentStatus: 'PAID',
        paidAt: new Date(),
        status: 'COOKING', // Directly enters kitchen cooking state
      },
      include: {
        table: true,
        items: true,
      },
    });

    notifyOrderUpdated(order);

    return res.json({ success: true, message: '已確認收款，訂單轉入製作中', data: order });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Kitchen clicks "完成出餐" or admin updates status
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;

    const allowed = ['PENDING_PAYMENT', 'COOKING', 'COMPLETED', 'CANCELLED'];
    if (!allowed.includes(status)) {
      return res.status(400).json({ success: false, message: '無效的訂單狀態' });
    }

    const order = await prisma.order.update({
      where: { id },
      data: { status },
      include: {
        table: true,
        items: true,
      },
    });

    notifyOrderUpdated(order);

    return res.json({ success: true, message: `訂單狀態已更新為: ${status}`, data: order });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
