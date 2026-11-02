import prisma from '../prisma';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';
import { notifyQueueUpdated, notifyQueueCalled } from '../socket';

export const cancelTicket = async (id: number) => {
  const ticket = await prisma.queueTicket.findUnique({ where: { id } });
  if (!ticket) throw new AppError(MESSAGES.QUEUE.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);

  const updated = await prisma.queueTicket.update({
    where: { id },
    data: { status: 'CANCELLED' },
  });
  notifyQueueUpdated();
  return updated;
};

export const callTicket = async (id: number) => {
  const ticket = await prisma.queueTicket.findUnique({ where: { id } });
  if (!ticket) throw new AppError(MESSAGES.QUEUE.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);

  // 規則：若 callCount >= 3 直接 EXPIRED；若 < 3 則累加並改為 CALLING
  const isExpired = ticket.callCount >= 3;
  const status = isExpired ? 'EXPIRED' : 'CALLING';

  const updated = await prisma.queueTicket.update({
    where: { id },
    data: {
      callCount: isExpired ? ticket.callCount : ticket.callCount + 1,
      status,
      calledAt: isExpired ? ticket.calledAt : new Date(),
    },
  });

  notifyQueueUpdated();
  notifyQueueCalled(updated);
  return updated;
};

export const seatTicket = async (id: number) => {
  const ticket = await prisma.queueTicket.findUnique({ where: { id } });
  if (!ticket) throw new AppError(MESSAGES.QUEUE.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);

  const updated = await prisma.queueTicket.update({
    where: { id },
    data: { status: 'SEATED', seatedAt: new Date() },
  });
  notifyQueueUpdated();
  return updated;
};

export const QueueStateService = {
  cancelTicket,
  callTicket,
  seatTicket,
};
