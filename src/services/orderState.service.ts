import prisma from '../prisma';
import { OrderStatus } from '../types/order';
import { AppError } from '../utils/appError';
import { notifyOrderUpdated } from '../socket';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

const ALLOWED_STATUSES: OrderStatus[] = ['PENDING_PAYMENT', 'COOKING', 'COMPLETED', 'CANCELLED'];

export const confirmCashPayment = async (id: number) => {
  const existing = await prisma.order.findUnique({ where: { id } });
  if (!existing) throw new AppError(MESSAGES.ORDER.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);
  if (existing.paymentStatus === 'PAID') {
    throw new AppError(MESSAGES.ORDER.ALREADY_PAID, ResponseCode.ORDER_ALREADY_PAID, HttpStatus.BAD_REQUEST);
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
};

export const updateOrderStatus = async (id: number, status: OrderStatus) => {
  if (!ALLOWED_STATUSES.includes(status)) {
    throw new AppError(MESSAGES.ORDER.INVALID_STATUS(status), ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }

  const existing = await prisma.order.findUnique({ where: { id } });
  if (!existing) throw new AppError(MESSAGES.ORDER.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);

  const order = await prisma.order.update({
    where: { id },
    data: { status },
    include: { table: true, items: true },
  });

  notifyOrderUpdated(order);
  return order;
};

export const OrderStateService = {
  confirmCashPayment,
  updateOrderStatus,
};
