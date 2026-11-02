import { Request, Response } from 'express';
import { MenuItemService } from '../services/menuItem.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

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
    successResponse(res, data, MESSAGES.MENU.CREATED, ResponseCode.CREATED, HttpStatus.CREATED);
  });

  static updateMenuItem = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await MenuItemService.updateMenuItem(id, req.body);
    successResponse(res, data, MESSAGES.MENU.UPDATED);
  });

  static toggleAvailability = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await MenuItemService.toggleAvailability(id);
    successResponse(res, data, MESSAGES.MENU.STATUS_UPDATED);
  });

  static deleteMenuItem = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await MenuItemService.deleteMenuItem(id);
    successResponse(res, null, MESSAGES.MENU.DELETED);
  });
}
