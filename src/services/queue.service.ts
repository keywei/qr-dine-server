import prisma from '../prisma';
import { CreateQueueTicketDTO } from '../types/queue';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';
import { notifyQueueUpdated } from '../socket';
import { getTodayRange } from '../utils/dateRange';

export const createTicket = async (dto: CreateQueueTicketDTO) => {
  const phone = dto.customerPhone?.trim();
  if (!phone || !/^09\d{8}$/.test(phone)) {
    throw new AppError(MESSAGES.QUEUE.INVALID_PHONE, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
  const size = dto.partySize !== undefined ? Number(dto.partySize) : 2;
  if (isNaN(size) || size < 1 || size > 20) {
    throw new AppError(MESSAGES.QUEUE.INVALID_PARTY_SIZE, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }

  const { start, end } = getTodayRange();
  const existing = await prisma.queueTicket.findFirst({
    where: { customerPhone: phone, createdAt: { gte: start, lte: end }, status: { in: ['WAITING', 'CALLING'] } },
  });
  if (existing) return { ...existing, isExisting: true };

  const lastTicket = await prisma.queueTicket.findFirst({
    where: { createdAt: { gte: start, lte: end } },
    orderBy: { ticketNo: 'desc' },
  });
  const ticketNo = (lastTicket?.ticketNo || 0) + 1;
  const ticket = await prisma.queueTicket.create({
    data: { ticketNo, customerPhone: phone, partySize: size, status: 'WAITING' },
  });
  notifyQueueUpdated();
  return ticket;
};

export const getTicketDetail = async (id: number) => {
  const ticket = await prisma.queueTicket.findUnique({ where: { id } });
  if (!ticket) throw new AppError(MESSAGES.QUEUE.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);

  const { start, end } = getTodayRange();
  const currentCalling = await prisma.queueTicket.findFirst({
    where: { createdAt: { gte: start, lte: end }, status: 'CALLING' },
    orderBy: { calledAt: 'desc' },
  });

  const waitingCount = ticket.status === 'WAITING'
    ? await prisma.queueTicket.count({
        where: { createdAt: { gte: start, lte: end }, status: 'WAITING', ticketNo: { lt: ticket.ticketNo } },
      })
    : 0;

  return { ...ticket, currentCallingNo: currentCalling?.ticketNo || null, waitingCount, maxCallCount: 3 };
};

export const getAdminQueue = async () => {
  const { start, end } = getTodayRange();
  const tickets = await prisma.queueTicket.findMany({
    where: { createdAt: { gte: start, lte: end } },
    orderBy: { ticketNo: 'asc' },
  });

  const waitingCount = tickets.filter((t) => t.status === 'WAITING').length;
  const callingCount = tickets.filter((t) => t.status === 'CALLING').length;
  const seatedCount = tickets.filter((t) => t.status === 'SEATED').length;
  const callingTickets = tickets.filter((t) => t.status === 'CALLING' && t.calledAt);
  callingTickets.sort((a, b) => (b.calledAt?.getTime() || 0) - (a.calledAt?.getTime() || 0));
  const currentCallingNo = callingTickets.length > 0 ? callingTickets[0].ticketNo : null;

  return { tickets, stats: { waitingCount, callingCount, seatedCount, currentCallingNo } };
};

export const QueueService = { createTicket, getTicketDetail, getAdminQueue };
