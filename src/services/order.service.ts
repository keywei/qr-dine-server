import prisma from '../prisma';
import { CreateOrderDTO, OrderFilterQuery } from '../types/order';
import { AppError } from '../utils/appError';
import { notifyNewOrder } from '../socket';

const generateOrderNo = () => {
  const d = new Date();
  const dateStr = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  return `ORD-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`;
};

export class OrderService {
  static async createOrder(dto: CreateOrderDTO) {
    if (!dto.items?.length) throw new AppError('購物車餐點明細為空，無法送出訂單', 2003, 400);

    let tableId: number | null = null;
    if (dto.diningType === 'DINE_IN') {
      if (!dto.tableCode) throw new AppError('內用點餐請提供桌號代碼', 2002, 400);
      const table = await prisma.diningTable.findUnique({ where: { code: dto.tableCode } });
      if (!table) throw new AppError(`桌號不存在: ${dto.tableCode}`, 2002, 404);
      tableId = table.id;
    } else if (!dto.customerPhone?.trim()) {
      throw new AppError('外帶顧客請務必提供聯絡電話', 2006, 400);
    }

    let totalAmount = 0;
    const itemsData = dto.items.map((it) => {
      const price = Number(it.price);
      const quantity = Number(it.quantity || 1);
      totalAmount += price * quantity;
      return {
        menuItemId: it.menuItemId ? Number(it.menuItemId) : null,
        name: it.name,
        price,
        quantity,
        optionsText: it.optionsText || (it.options ? it.options.join(', ') : null),
      };
    });

    const order = await prisma.order.create({
      data: {
        orderNo: generateOrderNo(),
        diningType: dto.diningType,
        tableId,
        customerNote: dto.customerNote || null,
        customerPhone: dto.customerPhone || null,
        paymentMethod: dto.paymentMethod || 'CASH',
        paymentStatus: 'UNPAID',
        status: 'PENDING_PAYMENT',
        totalAmount,
        items: { create: itemsData },
      },
      include: { table: true, items: true },
    });

    notifyNewOrder(order);
    return order;
  }

  static async getOrders(query: OrderFilterQuery) {
    const where: any = {};
    if (query.status && query.status !== 'ALL') where.status = query.status;
    if (query.diningType && query.diningType !== 'ALL') where.diningType = query.diningType;
    if (query.search) {
      where.OR = [
        { orderNo: { contains: query.search } },
        { customerPhone: { contains: query.search } },
        { table: { code: { contains: query.search } } },
      ];
    }

    return prisma.order.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: query.limit ? Number(query.limit) : 100,
      include: { table: true, items: true },
    });
  }

  static async getOrderByNo(orderNo: string) {
    const order = await prisma.order.findUnique({
      where: { orderNo },
      include: { table: true, items: true },
    });
    if (!order) throw new AppError('找不到此訂單', 404, 404);
    return order;
  }
}
