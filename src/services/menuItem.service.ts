import prisma from '../prisma';
import { CreateMenuItemDTO, UpdateMenuItemDTO } from '../types/menu';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';
import { mapOptionGroups } from '../utils/menuOption';

const includeOptions = { options: { include: { options: true } } };

export const getMenu = async () =>
  prisma.category.findMany({
    orderBy: { sortOrder: 'asc' },
    include: { items: { orderBy: { sortOrder: 'asc' }, include: includeOptions } },
  });

export const getMenuItems = async (categoryId?: number) =>
  prisma.menuItem.findMany({
    where: categoryId ? { categoryId } : {},
    orderBy: [{ categoryId: 'asc' }, { sortOrder: 'asc' }],
    include: { category: { select: { id: true, name: true } }, ...includeOptions },
  });

export const getMenuItemById = async (id: number) => {
  const item = await prisma.menuItem.findUnique({ where: { id }, include: { category: true, ...includeOptions } });
  if (!item) throw new AppError(MESSAGES.MENU.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);
  return item;
};

export const createMenuItem = async (dto: CreateMenuItemDTO) => {
  if (!dto.name || !dto.categoryId || dto.price === undefined) {
    throw new AppError(MESSAGES.MENU.INVALID_PARAMS, ResponseCode.MENU_ITEM_INVALID_PARAMS, HttpStatus.BAD_REQUEST);
  }
  const opts = mapOptionGroups(dto.options);
  return prisma.menuItem.create({
    data: {
      categoryId: Number(dto.categoryId),
      name: dto.name.trim(),
      description: dto.description || null,
      price: Number(dto.price),
      imageUrl: dto.imageUrl || null,
      isAvailable: dto.isAvailable !== undefined ? Boolean(dto.isAvailable) : true,
      sortOrder: Number(dto.sortOrder || 0),
      options: opts ? { create: opts } : undefined,
    },
    include: includeOptions,
  });
};

export const updateMenuItem = async (id: number, dto: UpdateMenuItemDTO) => {
  if (dto.options) await prisma.itemOptionGroup.deleteMany({ where: { menuItemId: id } });
  const opts = mapOptionGroups(dto.options);
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
      options: opts ? { create: opts } : undefined,
    },
    include: includeOptions,
  });
};

export const toggleAvailability = async (id: number) => {
  const item = await prisma.menuItem.findUnique({ where: { id } });
  if (!item) throw new AppError(MESSAGES.MENU.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);
  return prisma.menuItem.update({ where: { id }, data: { isAvailable: !item.isAvailable } });
};

export const deleteMenuItem = async (id: number) => prisma.menuItem.delete({ where: { id } });

export const MenuItemService = {
  getMenu,
  getMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  toggleAvailability,
  deleteMenuItem,
};
