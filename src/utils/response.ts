import { Response } from 'express';
import { ApiResponse, HttpStatus, ResponseCode } from '../types/api';
import { MESSAGES } from '../constants/messages';

export const successResponse = <T>(
  res: Response,
  data: T,
  message: string = MESSAGES.SUCCESS,
  code: ResponseCode = ResponseCode.SUCCESS,
  statusCode: HttpStatus = HttpStatus.OK
): Response<ApiResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    code,
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message: string = MESSAGES.FAILED,
  code: ResponseCode = ResponseCode.BAD_REQUEST,
  statusCode: HttpStatus = HttpStatus.BAD_REQUEST
): Response<ApiResponse<null>> => {
  return res.status(statusCode).json({
    success: false,
    code,
    message,
    data: null,
  });
};
