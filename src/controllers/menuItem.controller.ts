import { Request, Response } from 'express';
import { MenuItemService } from '../services/menuItem.service';
import { notifyMenuItemUpdated } from '../socket';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

export const getMenu = asyncHandler(async (_req: Request, res: Response) => {
  const data = await MenuItemService.getMenu();
  successResponse(res, data);
});

export const getMenuItems = asyncHandler(async (req: Request, res: Response) => {
  const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined;
  const data = await MenuItemService.getMenuItems(categoryId);
  successResponse(res, data);
});

export const getMenuItemById = asyncHandler(async (req: Request, res: Response) => {
  const data = await MenuItemService.getMenuItemById(Number(req.params.id));
  successResponse(res, data);
});

export const createMenuItem = asyncHandler(async (req: Request, res: Response) => {
  const data = await MenuItemService.createMenuItem(req.body);
  successResponse(res, data, MESSAGES.MENU.CREATED, ResponseCode.SUCCESS, HttpStatus.CREATED);
});

export const updateMenuItem = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = await MenuItemService.updateMenuItem(id, req.body);
  notifyMenuItemUpdated({
    id: data.id,
    name: data.name,
    price: data.price,
    isAvailable: data.isAvailable,
    categoryId: data.categoryId,
    action: 'updated',
  });
  successResponse(res, data, MESSAGES.MENU.UPDATED);
});

export const toggleAvailability = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = await MenuItemService.toggleAvailability(id);
  notifyMenuItemUpdated({
    id: data.id,
    name: data.name,
    price: data.price,
    isAvailable: data.isAvailable,
    categoryId: data.categoryId,
    action: 'toggle',
  });
  successResponse(res, data, MESSAGES.MENU.STATUS_UPDATED);
});

export const deleteMenuItem = asyncHandler(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = await MenuItemService.deleteMenuItem(id);
  notifyMenuItemUpdated({
    id: data.id,
    name: data.name,
    price: data.price,
    isAvailable: false,
    categoryId: data.categoryId,
    action: 'deleted',
  });
  successResponse(res, null, MESSAGES.MENU.DELETED);
});

export const MenuItemController = {
  getMenu,
  getMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  toggleAvailability,
  deleteMenuItem,
};
