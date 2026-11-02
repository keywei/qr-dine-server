import { Request, Response } from 'express';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

export const uploadImage = asyncHandler(async (req: Request, res: Response) => {
  if (!req.file) {
    throw new AppError(MESSAGES.UPLOAD.FILE_REQUIRED, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }

  const host = req.headers.host || 'localhost:3000';
  const fileUrl = `${req.protocol}://${host}/uploads/${req.file.filename}`;

  successResponse(res, { filename: req.file.filename, url: fileUrl }, MESSAGES.UPLOAD.SUCCESS);
});

export const UploadController = {
  uploadImage,
};
