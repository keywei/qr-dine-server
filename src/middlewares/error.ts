import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';
import { errorResponse } from '../utils/response';

export const errorHandler = (
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    errorResponse(res, err.message, err.code, err.statusCode);
    return;
  }

  console.error('[Unhandled Error]:', err);
  errorResponse(res, err.message || '伺服器內部發生錯誤，工程師搶修中', 500, 500);
};
