import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/appError';
import { errorResponse } from '../utils/response';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

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
  errorResponse(
    res,
    err.message || MESSAGES.INTERNAL_ERROR,
    ResponseCode.INTERNAL_ERROR,
    HttpStatus.INTERNAL_SERVER_ERROR
  );
};
