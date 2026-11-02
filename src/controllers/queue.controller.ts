import { Request, Response } from 'express';
import { createTicket as createTicketService, getTicketDetail, getPublicQueueStatus as getQueueStatusService } from '../services/queue.service';
import { cancelTicket as cancelTicketService } from '../services/queueState.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

export const createTicket = asyncHandler(async (req: Request, res: Response) => {
  const ticket = await createTicketService(req.body);
  const msg = (ticket as { isExisting?: boolean }).isExisting ? MESSAGES.QUEUE.EXISTING : MESSAGES.QUEUE.CREATED;
  successResponse(res, ticket, msg);
});

export const getPublicQueueStatus = asyncHandler(async (_req: Request, res: Response) => {
  const status = await getQueueStatusService();
  successResponse(res, status);
});

export const getTicket = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    throw new AppError(MESSAGES.QUEUE.NOT_FOUND, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
  const ticket = await getTicketDetail(id);
  successResponse(res, ticket);
});

export const cancelTicket = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    throw new AppError(MESSAGES.QUEUE.NOT_FOUND, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
  const ticket = await cancelTicketService(id);
  successResponse(res, ticket, MESSAGES.QUEUE.CANCELLED);
});

export const QueueController = {
  createTicket,
  getPublicQueueStatus,
  getTicket,
  cancelTicket,
};
