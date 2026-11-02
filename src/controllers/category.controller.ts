import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';
import { successResponse } from '../utils/response';
import { asyncHandler } from '../utils/asyncHandler';

export class CategoryController {
  static getCategories = asyncHandler(async (_req: Request, res: Response) => {
    const data = await CategoryService.getCategories();
    successResponse(res, data);
  });

  static createCategory = asyncHandler(async (req: Request, res: Response) => {
    const data = await CategoryService.createCategory(req.body.name, req.body.sortOrder);
    successResponse(res, data, '分類建立成功', 0, 201);
  });

  static updateCategory = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await CategoryService.updateCategory(id, req.body.name, req.body.sortOrder);
    successResponse(res, data, '分類更新成功');
  });

  static deleteCategory = asyncHandler(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await CategoryService.deleteCategory(id);
    successResponse(res, null, '分類已刪除');
  });
}
