import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthUser } from '../types/auth';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-qr-order-jwt-key-2026';

export const authenticateJwt = (req: Request, _res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError(MESSAGES.AUTH.UNAUTHORIZED, ResponseCode.AUTH_UNAUTHORIZED, HttpStatus.UNAUTHORIZED));
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AuthUser;
    req.user = decoded;
    next();
  } catch {
    next(new AppError(MESSAGES.AUTH.INVALID_TOKEN, ResponseCode.AUTH_UNAUTHORIZED, HttpStatus.UNAUTHORIZED));
  }
};
