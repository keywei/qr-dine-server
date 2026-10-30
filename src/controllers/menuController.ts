import { Request, Response } from 'express';
import prisma from '../prisma';

export const getMenu = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        items: {
          orderBy: { sortOrder: 'asc' },
          include: {
            options: {
              include: {
                options: true,
              },
            },
          },
        },
      },
    });

    return res.json({ success: true, data: categories });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        _count: {
          select: { items: true },
        },
      },
    });
    return res.json({ success: true, data: categories });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, sortOrder } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: '請提供分類名稱' });
    }
    const cat = await prisma.category.create({
      data: {
        name,
        sortOrder: sortOrder !== undefined ? Number(sortOrder) : 0,
      },
    });
    return res.status(201).json({ success: true, data: cat });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, sortOrder } = req.body;
    const cat = await prisma.category.update({
      where: { id },
      data: {
        name,
        sortOrder: sortOrder !== undefined ? Number(sortOrder) : undefined,
      },
    });
    return res.json({ success: true, data: cat });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await prisma.category.delete({ where: { id } });
    return res.json({ success: true, message: '分類已刪除' });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getMenuItems = async (req: Request, res: Response) => {
  try {
    const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined;
    const items = await prisma.menuItem.findMany({
      where: categoryId ? { categoryId } : {},
      orderBy: [{ categoryId: 'asc' }, { sortOrder: 'asc' }],
      include: {
        category: {
          select: { id: true, name: true },
        },
        options: {
          include: {
            options: true,
          },
        },
      },
    });
    return res.json({ success: true, data: items });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getMenuItemById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const item = await prisma.menuItem.findUnique({
      where: { id },
      include: {
        category: true,
        options: {
          include: {
            options: true,
          },
        },
      },
    });
    if (!item) {
      return res.status(404).json({ success: false, message: '找不到此餐點' });
    }
    return res.json({ success: true, data: item });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const { categoryId, name, description, price, imageUrl, isAvailable, sortOrder, options } = req.body;
    if (!categoryId || !name || price === undefined) {
      return res.status(400).json({ success: false, message: '分類、品名與價格為必填項' });
    }

    const item = await prisma.menuItem.create({
      data: {
        categoryId: Number(categoryId),
        name,
        description: description || null,
        price: Number(price),
        imageUrl: imageUrl || null,
        isAvailable: isAvailable !== undefined ? Boolean(isAvailable) : true,
        sortOrder: sortOrder !== undefined ? Number(sortOrder) : 0,
        options: options && Array.isArray(options) ? {
          create: options.map((grp: any) => ({
            title: grp.title,
            type: grp.type || 'SINGLE',
            isRequired: Boolean(grp.isRequired),
            options: {
              create: (grp.options || []).map((opt: any) => ({
                name: opt.name,
                extraPrice: Number(opt.extraPrice || 0),
              })),
            },
          })),
        } : undefined,
      },
      include: {
        options: {
          include: {
            options: true,
          },
        },
      },
    });

    return res.status(201).json({ success: true, data: item });
  } catch (error: any) {
    console.error('Create menuItem error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { categoryId, name, description, price, imageUrl, isAvailable, sortOrder, options } = req.body;

    // Delete existing option groups if new options are provided
    if (options && Array.isArray(options)) {
      await prisma.itemOptionGroup.deleteMany({
        where: { menuItemId: id },
      });
    }

    const item = await prisma.menuItem.update({
      where: { id },
      data: {
        categoryId: categoryId !== undefined ? Number(categoryId) : undefined,
        name,
        description,
        price: price !== undefined ? Number(price) : undefined,
        imageUrl,
        isAvailable: isAvailable !== undefined ? Boolean(isAvailable) : undefined,
        sortOrder: sortOrder !== undefined ? Number(sortOrder) : undefined,
        options: options && Array.isArray(options) ? {
          create: options.map((grp: any) => ({
            title: grp.title,
            type: grp.type || 'SINGLE',
            isRequired: Boolean(grp.isRequired),
            options: {
              create: (grp.options || []).map((opt: any) => ({
                name: opt.name,
                extraPrice: Number(opt.extraPrice || 0),
              })),
            },
          })),
        } : undefined,
      },
      include: {
        options: {
          include: {
            options: true,
          },
        },
      },
    });

    return res.json({ success: true, data: item });
  } catch (error: any) {
    console.error('Update menuItem error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const toggleItemAvailability = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const item = await prisma.menuItem.findUnique({ where: { id } });
    if (!item) {
      return res.status(404).json({ success: false, message: '找不到此餐點' });
    }

    const updated = await prisma.menuItem.update({
      where: { id },
      data: { isAvailable: !item.isAvailable },
    });

    return res.json({ success: true, data: updated });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await prisma.menuItem.delete({ where: { id } });
    return res.json({ success: true, message: '餐點已刪除' });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

