import { Request, Response } from 'express';
import { TableService } from '../services/table.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';

const getBaseUrl = (req: Request): string => {
  if (process.env.CLIENT_URL) return process.env.CLIENT_URL;
  const host = req.headers.host || 'localhost:3000';
  return `http://${host.split(':')[0]}:5173`;
};

export class TableController {
  static getTables = asyncHandler(async (_req: Request, res: Response) => {
    const data = await TableService.getTables();
    successResponse(res, data);
  });

  static createTable = asyncHandler(async (req: Request, res: Response) => {
    const data = await TableService.createTable(req.body);
    successResponse(res, data, '桌號新增成功', 0, 201);
  });

  static updateTable = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await TableService.updateTable(id, req.body);
    successResponse(res, data, '桌號更新成功');
  });

  static deleteTable = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await TableService.deleteTable(id);
    successResponse(res, null, '桌號已刪除');
  });

  static getTableQr = asyncHandler(async (req: Request, res: Response) => {
    const data = await TableService.getTableQr(String(req.params.code), getBaseUrl(req));
    successResponse(res, data);
  });

  static getTakeoutQr = asyncHandler(async (req: Request, res: Response) => {
    const data = await TableService.getTakeoutQr(getBaseUrl(req));
    successResponse(res, data);
  });

  static getBatchQrs = asyncHandler(async (req: Request, res: Response) => {
    const data = await TableService.getBatchQrs(getBaseUrl(req));
    successResponse(res, data);
  });
}
