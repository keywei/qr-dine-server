import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

export class AuthController {
  static login = asyncHandler(async (req: Request, res: Response) => {
    const data = await AuthService.login(req.body);
    successResponse(res, data, MESSAGES.AUTH.LOGIN_SUCCESS);
  });

  static getMe = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
      throw new AppError(MESSAGES.AUTH.UNAUTHORIZED, ResponseCode.AUTH_UNAUTHORIZED, HttpStatus.UNAUTHORIZED);
    }
    const data = await AuthService.getMe(req.user.id);
    successResponse(res, data);
  });
}
