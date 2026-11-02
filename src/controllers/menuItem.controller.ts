import { Request, Response } from 'express';
import { MenuItemService } from '../services/menuItem.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';

export class MenuItemController {
  static getMenu = asyncHandler(async (_req: Request, res: Response) => {
    const data = await MenuItemService.getMenu();
    successResponse(res, data);
  });

  static getMenuItems = asyncHandler(async (req: Request, res: Response) => {
    const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined;
    const data = await MenuItemService.getMenuItems(categoryId);
    successResponse(res, data);
  });

  static getMenuItemById = asyncHandler(async (req: Request, res: Response) => {
    const data = await MenuItemService.getMenuItemById(Number(req.params.id));
    successResponse(res, data);
  });

  static createMenuItem = asyncHandler(async (req: Request, res: Response) => {
    const data = await MenuItemService.createMenuItem(req.body);
    successResponse(res, data, '餐點新增成功', 0, 201);
  });

  static updateMenuItem = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await MenuItemService.updateMenuItem(id, req.body);
    successResponse(res, data, '餐點更新成功');
  });

  static toggleAvailability = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await MenuItemService.toggleAvailability(id);
    successResponse(res, data, '狀態更新成功');
  });

  static deleteMenuItem = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await MenuItemService.deleteMenuItem(id);
    successResponse(res, null, '餐點已刪除');
  });
}
