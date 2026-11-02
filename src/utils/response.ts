import { Response } from 'express';
import { ApiResponse } from '../types/api';

export const successResponse = <T>(
  res: Response,
  data: T,
  message = '操作成功',
  code = 0,
  statusCode = 200
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
  message = '操作失敗',
  code = 400,
  statusCode = 400
): Response<ApiResponse<null>> => {
  return res.status(statusCode).json({
    success: false,
    code,
    message,
    data: null,
  });
};
