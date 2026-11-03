import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';
import { notifyCategoryUpdated } from '../socket';

export class CategoryController {
  static getCategories = asyncHandler(async (_req: Request, res: Response) => {
    const data = await CategoryService.getCategories();
    successResponse(res, data);
  });

  static createCategory = asyncHandler(async (req: Request, res: Response) => {
    const data = await CategoryService.createCategory(req.body.name, req.body.sortOrder);
    notifyCategoryUpdated();
    successResponse(res, data, MESSAGES.CATEGORY.CREATED, ResponseCode.SUCCESS, HttpStatus.CREATED);
  });

  static updateCategory = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await CategoryService.updateCategory(id, req.body.name, req.body.sortOrder);
    notifyCategoryUpdated();
    successResponse(res, data, MESSAGES.CATEGORY.UPDATED);
  });

  static deleteCategory = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await CategoryService.deleteCategory(id);
    notifyCategoryUpdated();
    successResponse(res, null, MESSAGES.CATEGORY.DELETED);
  });
}
