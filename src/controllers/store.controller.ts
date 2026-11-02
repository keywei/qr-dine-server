import { Request, Response } from 'express';
import { getStoreSetting, updateStoreSetting } from '../services/store.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { MESSAGES } from '../constants/messages';

export const getStore = asyncHandler(async (_req: Request, res: Response) => {
  const store = await getStoreSetting();
  successResponse(res, store);
});

export const updateStore = asyncHandler(async (req: Request, res: Response) => {
  const store = await updateStoreSetting(req.body);
  successResponse(res, store, MESSAGES.STORE.UPDATED);
});

export const StoreController = {
  getStore,
  updateStore,
};
