import { Request, Response } from 'express';
import { StatsService } from '../services/stats.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';

export class StatsController {
  static getStatsSummary = asyncHandler(async (_req: Request, res: Response) => {
    const data = await StatsService.getStatsSummary();
    successResponse(res, data);
  });
}
