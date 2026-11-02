import { Request, Response } from 'express';
import { createTicket as createTicketService, getTicketDetail } from '../services/queue.service';
import { cancelTicket as cancelTicketService } from '../services/queueState.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { MESSAGES } from '../constants/messages';

export const createTicket = asyncHandler(async (req: Request, res: Response) => {
  const ticket = await createTicketService(req.body);
  const msg = (ticket as { isExisting?: boolean }).isExisting ? MESSAGES.QUEUE.EXISTING : MESSAGES.QUEUE.CREATED;
  successResponse(res, ticket, msg);
});

export const getTicket = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ticket = await getTicketDetail(id);
  successResponse(res, ticket);
});

export const cancelTicket = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ticket = await cancelTicketService(id);
  successResponse(res, ticket, MESSAGES.QUEUE.CANCELLED);
});

export const QueueController = {
  createTicket,
  getTicket,
  cancelTicket,
};
