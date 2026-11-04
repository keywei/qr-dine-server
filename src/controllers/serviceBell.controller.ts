import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { successResponse } from '../utils/response';
import { MESSAGES } from '../constants/messages';
import {
  getServiceBellStatus,
  callServiceBell,
  getActiveServiceCalls,
  completeServiceCall,
} from '../services/serviceBell.service';
import {
  updateGlobalServiceBell,
  updateTableServiceBell,
} from '../services/serviceBellConfig.service';

export const getStatus = asyncHandler(async (req: Request, res: Response) => {
  const tableCode = req.query.table as string | undefined;
  const status = await getServiceBellStatus(tableCode);
  successResponse(res, status);
});

export const callBell = asyncHandler(async (req: Request, res: Response) => {
  const result = await callServiceBell(req.body);
  successResponse(res, result, MESSAGES.SERVICE_BELL.CALLED);
});

export const getActiveCalls = asyncHandler(async (_req: Request, res: Response) => {
  const calls = await getActiveServiceCalls();
  successResponse(res, calls);
});

export const completeCall = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await completeServiceCall(id);
  successResponse(res, result, MESSAGES.SERVICE_BELL.COMPLETED);
});

export const setGlobalSwitch = asyncHandler(async (req: Request, res: Response) => {
  const { enabled } = req.body;
  const result = await updateGlobalServiceBell(Boolean(enabled));
  successResponse(res, result, MESSAGES.SERVICE_BELL.UPDATED);
});

export const setTableSwitch = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { enabled } = req.body;
  const result = await updateTableServiceBell(id, Boolean(enabled));
  successResponse(res, result, MESSAGES.SERVICE_BELL.UPDATED);
});

