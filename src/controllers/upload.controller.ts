import { Request, Response } from 'express';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { AppError } from '../utils/appError';

export class UploadController {
  static uploadImage = asyncHandler(async (req: Request, res: Response) => {
    if (!req.file) throw new AppError('未接收到圖片檔案', 400, 400);

    const host = req.headers.host || 'localhost:3000';
    const fileUrl = `${req.protocol}://${host}/uploads/${req.file.filename}`;

    successResponse(res, { filename: req.file.filename, url: fileUrl }, '圖片上傳成功');
  });
}
