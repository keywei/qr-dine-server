import { Request, Response } from 'express';
import { getAdminQueue as getAdminQueueService } from '../services/queue.service';
import {
  callTicket as callTicketService,
  seatTicket as seatTicketService,
  cancelTicket as cancelTicketService,
} from '../services/queueState.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { MESSAGES } from '../constants/messages';

export const getAdminQueue = asyncHandler(async (_req: Request, res: Response) => {
  const data = await getAdminQueueService();
  successResponse(res, data);
});

export const getAdminQueueStats = asyncHandler(async (_req: Request, res: Response) => {
  const data = await getAdminQueueService();
  successResponse(res, data.stats);
});

export const callTicket = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ticket = await callTicketService(id);
  successResponse(res, ticket, MESSAGES.QUEUE.CALLED);
});

export const seatTicket = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ticket = await seatTicketService(id);
  successResponse(res, ticket, MESSAGES.QUEUE.SEATED);
});

export const cancelTicket = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ticket = await cancelTicketService(id);
  successResponse(res, ticket, MESSAGES.QUEUE.CANCELLED);
});

export const AdminQueueController = {
  getAdminQueue,
  getAdminQueueStats,
  callTicket,
  seatTicket,
  cancelTicket,
};
