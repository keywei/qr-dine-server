import prisma from '../prisma';
import { AppError } from '../utils/appError';

export class CategoryService {
  static async getCategories() {
    return prisma.category.findMany({
      orderBy: { sortOrder: 'asc' },
      include: { _count: { select: { items: true } } },
    });
  }

  static async createCategory(name: string, sortOrder = 0) {
    if (!name?.trim()) {
      throw new AppError('分類名稱為必填項', 400, 400);
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
      throw new AppError('此分類下仍有餐點，無法直接刪除', 2000, 400);
    }
    return prisma.category.delete({ where: { id } });
  }
}
