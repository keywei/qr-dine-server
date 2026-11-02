import prisma from '../prisma';
import { CreateOrderDTO, OrderFilterQuery } from '../types/order';
import { AppError } from '../utils/appError';
import { notifyNewOrder } from '../socket';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

const generateOrderNo = () => {
  const d = new Date();
  const dateStr = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  return `ORD-${dateStr}-${Math.floor(1000 + Math.random() * 9000)}`;
};

export class OrderService {
  static async createOrder(dto: CreateOrderDTO) {
    if (!dto.items?.length) {
      throw new AppError(MESSAGES.ORDER.CART_EMPTY, ResponseCode.ORDER_CART_EMPTY, HttpStatus.BAD_REQUEST);
    }

    let tableId: number | null = null;
    if (dto.diningType === 'DINE_IN') {
      if (!dto.tableCode) {
        throw new AppError(MESSAGES.ORDER.DINE_IN_TABLE_REQUIRED, ResponseCode.TABLE_NOT_FOUND, HttpStatus.BAD_REQUEST);
      }
      const table = await prisma.diningTable.findUnique({ where: { code: dto.tableCode } });
      if (!table) {
        throw new AppError(MESSAGES.ORDER.TABLE_NOT_FOUND(dto.tableCode), ResponseCode.TABLE_NOT_FOUND, HttpStatus.NOT_FOUND);
      }
      tableId = table.id;
    } else if (!dto.customerPhone?.trim()) {
      throw new AppError(MESSAGES.ORDER.TAKEOUT_PHONE_REQUIRED, ResponseCode.ORDER_TAKEOUT_PHONE_REQUIRED, HttpStatus.BAD_REQUEST);
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
    if (!order) throw new AppError(MESSAGES.ORDER.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);
    return order;
  }
}
