import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/appError';

export class AuthController {
  static login = asyncHandler(async (req: Request, res: Response) => {
    const data = await AuthService.login(req.body);
    successResponse(res, data, '登入成功');
  });

  static getMe = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) throw new AppError('未授權，請先登入', 1003, 401);
    const data = await AuthService.getMe(req.user.id);
    successResponse(res, data);
  });
}
