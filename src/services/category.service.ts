import prisma from '../prisma';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

export class CategoryService {
  static async getCategories() {
    return prisma.category.findMany({
      orderBy: { sortOrder: 'asc' },
      include: { _count: { select: { items: true } } },
    });
  }

  static async createCategory(name: string, sortOrder = 0) {
    if (!name?.trim()) {
      throw new AppError(MESSAGES.CATEGORY.NAME_REQUIRED, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
    }
    return prisma.category.create({
      data: { name: name.trim(), sortOrder: Number(sortOrder) || 0 },
    });
  }

  static async updateCategory(id: number, name?: string, sortOrder?: number) {
    return prisma.category.update({
      where: { id },
      data: {
        name: name?.trim(),
        sortOrder: sortOrder !== undefined ? Number(sortOrder) : undefined,
      },
    });
  }

  static async deleteCategory(id: number) {
    const itemCount = await prisma.menuItem.count({ where: { categoryId: id } });
    if (itemCount > 0) {
      throw new AppError(MESSAGES.CATEGORY.HAS_ITEMS_CANNOT_DELETE, ResponseCode.CATEGORY_HAS_ITEMS, HttpStatus.BAD_REQUEST);
    }
    return prisma.category.delete({ where: { id } });
  }
}
