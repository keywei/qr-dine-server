import prisma from '../prisma';
import { CreateMenuItemDTO, UpdateMenuItemDTO } from '../types/menu';
import { AppError } from '../utils/appError';

const mapOptionGroups = (groups?: CreateMenuItemDTO['options']) =>
  groups?.map((g) => ({
    title: g.title,
    type: g.type || 'SINGLE',
    isRequired: Boolean(g.isRequired),
    options: {
      create: (g.options || []).map((o) => ({
        name: o.name,
        extraPrice: Number(o.extraPrice || 0),
      })),
    },
  }));

export class MenuItemService {
  static async getMenu() {
    return prisma.category.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        items: {
          orderBy: { sortOrder: 'asc' },
          include: { options: { include: { options: true } } },
        },
      },
    });
  }

  static async getMenuItems(categoryId?: number) {
    return prisma.menuItem.findMany({
      where: categoryId ? { categoryId } : {},
      orderBy: [{ categoryId: 'asc' }, { sortOrder: 'asc' }],
      include: { category: { select: { id: true, name: true } }, options: { include: { options: true } } },
    });
  }

  static async getMenuItemById(id: number) {
    const item = await prisma.menuItem.findUnique({
      where: { id },
      include: { category: true, options: { include: { options: true } } },
    });
    if (!item) throw new AppError('找不到此餐點', 404, 404);
    return item;
  }

  static async createMenuItem(dto: CreateMenuItemDTO) {
    if (!dto.name || !dto.categoryId || dto.price === undefined) {
      throw new AppError('分類、餐點品名與價格為必填項', 2008, 400);
    }
    const createOptions = mapOptionGroups(dto.options);
    return prisma.menuItem.create({
      data: {
        categoryId: Number(dto.categoryId),
        name: dto.name.trim(),
        description: dto.description || null,
        price: Number(dto.price),
        imageUrl: dto.imageUrl || null,
        isAvailable: dto.isAvailable !== undefined ? Boolean(dto.isAvailable) : true,
        sortOrder: Number(dto.sortOrder || 0),
        options: createOptions ? { create: createOptions } : undefined,
      },
      include: { options: { include: { options: true } } },
    });
  }

  static async updateMenuItem(id: number, dto: UpdateMenuItemDTO) {
    if (dto.options) {
      await prisma.itemOptionGroup.deleteMany({ where: { menuItemId: id } });
    }
    const createOptions = mapOptionGroups(dto.options);
    return prisma.menuItem.update({
      where: { id },
      data: {
        categoryId: dto.categoryId !== undefined ? Number(dto.categoryId) : undefined,
        name: dto.name?.trim(),
        description: dto.description,
        price: dto.price !== undefined ? Number(dto.price) : undefined,
        imageUrl: dto.imageUrl,
        isAvailable: dto.isAvailable !== undefined ? Boolean(dto.isAvailable) : undefined,
        sortOrder: dto.sortOrder !== undefined ? Number(dto.sortOrder) : undefined,
        options: createOptions ? { create: createOptions } : undefined,
      },
      include: { options: { include: { options: true } } },
    });
  }

  static async toggleAvailability(id: number) {
    const item = await prisma.menuItem.findUnique({ where: { id } });
    if (!item) throw new AppError('找不到此餐點', 404, 404);
    return prisma.menuItem.update({
      where: { id },
      data: { isAvailable: !item.isAvailable },
    });
  }

  static async deleteMenuItem(id: number) {
    return prisma.menuItem.delete({ where: { id } });
  }
}
