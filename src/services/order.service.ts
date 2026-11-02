import { Prisma } from '@prisma/client';
import prisma from '../prisma';
import { CreateOrderDTO, OrderFilterQuery } from '../types/order';
import { AppError } from '../utils/appError';
import { notifyNewOrder } from '../socket';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

const generateOrderNo = () =>
  `ORD-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

const getTableId = async (diningType: string, tableCode?: string, phone?: string | null) => {
  if (diningType !== 'DINE_IN') {
    if (!phone?.trim()) {
      throw new AppError(MESSAGES.ORDER.TAKEOUT_PHONE_REQUIRED, ResponseCode.ORDER_TAKEOUT_PHONE_REQUIRED, HttpStatus.BAD_REQUEST);
    }
    return null;
  }
  if (!tableCode) throw new AppError(MESSAGES.ORDER.DINE_IN_TABLE_REQUIRED, ResponseCode.TABLE_NOT_FOUND, HttpStatus.BAD_REQUEST);
  const table = await prisma.diningTable.findUnique({ where: { code: tableCode } });
  if (!table) throw new AppError(MESSAGES.ORDER.TABLE_NOT_FOUND(tableCode), ResponseCode.TABLE_NOT_FOUND, HttpStatus.NOT_FOUND);
  return table.id;
};

export const createOrder = async (dto: CreateOrderDTO) => {
  if (!dto.items?.length) throw new AppError(MESSAGES.ORDER.CART_EMPTY, ResponseCode.ORDER_CART_EMPTY, HttpStatus.BAD_REQUEST);
  const tableId = await getTableId(dto.diningType, dto.tableCode, dto.customerPhone);
  let totalAmount = 0;
  const items = dto.items.map((it) => {
    const price = Number(it.price), quantity = Number(it.quantity || 1);
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
      taxId: dto.taxId || null,
      invoiceCarrier: dto.invoiceCarrier || null,
      paymentMethod: dto.paymentMethod || 'CASH',
      paymentStatus: 'UNPAID',
      status: 'PENDING_PAYMENT',
      totalAmount,
      items: { create: items },
    },
    include: { table: true, items: true },
  });
  notifyNewOrder(order);
  return order;
};

export const getOrders = async (query: OrderFilterQuery) => {
  const where: Prisma.OrderWhereInput = {};
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
};

export const getOrderByNo = async (orderNo: string) => {
  const order = await prisma.order.findUnique({ where: { orderNo }, include: { table: true, items: true } });
  if (!order) throw new AppError(MESSAGES.ORDER.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);
  return order;
};

export const OrderService = { createOrder, getOrders, getOrderByNo };
