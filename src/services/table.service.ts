import prisma from '../prisma';
import { CreateTableDTO, UpdateTableDTO } from '../types/table';
import { AppError } from '../utils/appError';
import { generateQrDataUrl } from '../utils/qr';

export class TableService {
  static async getTables() {
    return prisma.diningTable.findMany({ orderBy: { code: 'asc' } });
  }

  static async createTable(dto: CreateTableDTO) {
    if (!dto.code || !dto.name) throw new AppError('請填寫桌號代碼與名稱', 400, 400);
    const existing = await prisma.diningTable.findUnique({ where: { code: dto.code } });
    if (existing) throw new AppError(`桌號 ${dto.code} 已存在`, 409, 409);

    return prisma.diningTable.create({
      data: { code: dto.code.trim(), name: dto.name.trim(), capacity: Number(dto.capacity || 4) },
    });
  }

  static async updateTable(id: number, dto: UpdateTableDTO) {
    return prisma.diningTable.update({
      where: { id },
      data: {
        code: dto.code?.trim(),
        name: dto.name?.trim(),
        capacity: dto.capacity !== undefined ? Number(dto.capacity) : undefined,
        isActive: dto.isActive !== undefined ? Boolean(dto.isActive) : undefined,
      },
    });
  }

  static async deleteTable(id: number) {
    return prisma.diningTable.delete({ where: { id } });
  }

  static async getTableQr(code: string, baseUrl: string) {
    const table = await prisma.diningTable.findUnique({ where: { code } });
    if (!table) throw new AppError('找不到此桌號', 404, 404);

    const orderUrl = `${baseUrl}/order?tableId=${encodeURIComponent(table.code)}&diningType=dine_in`;
    const qrCode = await generateQrDataUrl(orderUrl);
    return { code: table.code, name: table.name, orderUrl, qrCode };
  }

  static async getTakeoutQr(baseUrl: string) {
    const orderUrl = `${baseUrl}/order?diningType=takeout`;
    const qrCode = await generateQrDataUrl(orderUrl, '#0369a1');
    return { type: 'takeout', name: '外帶點餐 QR Code', orderUrl, qrCode };
  }

  static async getBatchQrs(baseUrl: string) {
    const tables = await prisma.diningTable.findMany({
      where: { isActive: true },
      orderBy: { code: 'asc' },
    });

    const tableQrs = await Promise.all(
      tables.map(async (t) => {
        const orderUrl = `${baseUrl}/order?tableId=${encodeURIComponent(t.code)}&diningType=dine_in`;
        const qrCode = await generateQrDataUrl(orderUrl);
        return { id: t.id, code: t.code, name: t.name, capacity: t.capacity, orderUrl, qrCode };
      })
    );

    const takeoutUrl = `${baseUrl}/order?diningType=takeout`;
    const takeoutQR = await generateQrDataUrl(takeoutUrl, '#0369a1');

    return {
      tables: tableQrs,
      takeout: { name: '門市外帶專屬 QR Code', orderUrl: takeoutUrl, qrCode: takeoutQR },
    };
  }
}
