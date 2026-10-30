import { Request, Response } from 'express';
import QRCode from 'qrcode';
import prisma from '../prisma';

const getBaseClientUrl = (req: Request) => {
  const host = req.headers.host || 'localhost:3000';
  // If client URL is defined in env, use it, else default to client port 5173 on same hostname
  if (process.env.CLIENT_URL) {
    return process.env.CLIENT_URL;
  }
  const hostname = host.split(':')[0];
  return `http://${hostname}:5173`;
};

export const getTables = async (req: Request, res: Response) => {
  try {
    const tables = await prisma.diningTable.findMany({
      orderBy: { code: 'asc' },
    });
    return res.json({ success: true, data: tables });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createTable = async (req: Request, res: Response) => {
  try {
    const { code, name, capacity } = req.body;
    if (!code || !name) {
      return res.status(400).json({ success: false, message: '請填寫桌號代碼與名稱' });
    }

    const existing = await prisma.diningTable.findUnique({ where: { code } });
    if (existing) {
      return res.status(400).json({ success: false, message: `桌號 ${code} 已存在` });
    }

    const table = await prisma.diningTable.create({
      data: {
        code,
        name,
        capacity: capacity ? Number(capacity) : 4,
      },
    });

    return res.status(201).json({ success: true, data: table });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTable = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { code, name, capacity, isActive } = req.body;

    const table = await prisma.diningTable.update({
      where: { id },
      data: {
        code,
        name,
        capacity: capacity !== undefined ? Number(capacity) : undefined,
        isActive: isActive !== undefined ? Boolean(isActive) : undefined,
      },
    });

    return res.json({ success: true, data: table });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTable = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await prisma.diningTable.delete({ where: { id } });
    return res.json({ success: true, message: '桌號已刪除' });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getTableQRCode = async (req: Request, res: Response) => {
  try {
    const code = String(req.params.code);
    const table = await prisma.diningTable.findUnique({ where: { code } });
    if (!table) {
      return res.status(404).json({ success: false, message: '找不到此桌號' });
    }

    const clientUrl = getBaseClientUrl(req);
    const orderUrl = `${clientUrl}/order?tableId=${encodeURIComponent(table.code)}&diningType=dine_in`;
    const qrDataUrl = await QRCode.toDataURL(orderUrl, {
      width: 400,
      margin: 2,
      color: {
        dark: '#1e293b',
        light: '#ffffff',
      },
    });

    return res.json({
      success: true,
      data: {
        code: table.code,
        name: table.name,
        orderUrl,
        qrCode: qrDataUrl,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getTakeoutQRCode = async (req: Request, res: Response) => {
  try {
    const clientUrl = getBaseClientUrl(req);
    const orderUrl = `${clientUrl}/order?diningType=takeout`;
    const qrDataUrl = await QRCode.toDataURL(orderUrl, {
      width: 400,
      margin: 2,
      color: {
        dark: '#0369a1',
        light: '#ffffff',
      },
    });

    return res.json({
      success: true,
      data: {
        type: 'takeout',
        name: '外帶點餐 QR Code',
        orderUrl,
        qrCode: qrDataUrl,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllBatchQRCodes = async (req: Request, res: Response) => {
  try {
    const tables = await prisma.diningTable.findMany({
      where: { isActive: true },
      orderBy: { code: 'asc' },
    });

    const clientUrl = getBaseClientUrl(req);

    const tableQRs = await Promise.all(
      tables.map(async (t) => {
        const orderUrl = `${clientUrl}/order?tableId=${encodeURIComponent(t.code)}&diningType=dine_in`;
        const qrCode = await QRCode.toDataURL(orderUrl, {
          width: 320,
          margin: 2,
        });
        return {
          id: t.id,
          code: t.code,
          name: t.name,
          capacity: t.capacity,
          orderUrl,
          qrCode,
        };
      })
    );

    const takeoutUrl = `${clientUrl}/order?diningType=takeout`;
    const takeoutQR = await QRCode.toDataURL(takeoutUrl, {
      width: 320,
      margin: 2,
    });

    return res.json({
      success: true,
      data: {
        tables: tableQRs,
        takeout: {
          name: '門市外帶專屬 QR Code',
          orderUrl: takeoutUrl,
          qrCode: takeoutQR,
        },
      },
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
