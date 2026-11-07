import prisma from '../prisma';
import { CreateTableDTO, UpdateTableDTO } from '../types/table';
import { AppError } from '../utils/appError';
import { generateQrDataUrl } from '../utils/qr';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';

export const getTables = async () => {
  return prisma.diningTable.findMany({ orderBy: { code: 'asc' } });
};

export const createTable = async (dto: CreateTableDTO) => {
  if (!dto.code || !dto.name) {
    throw new AppError(MESSAGES.TABLE.REQUIRED_FIELDS, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
  const existing = await prisma.diningTable.findUnique({ where: { code: dto.code } });
  if (existing) {
    throw new AppError(MESSAGES.TABLE.ALREADY_EXISTS(dto.code), ResponseCode.CONFLICT, HttpStatus.CONFLICT);
  }

  return prisma.diningTable.create({
    data: { code: dto.code.trim(), name: dto.name.trim(), capacity: Number(dto.capacity || 4) },
  });
};

export const updateTable = async (id: number, dto: UpdateTableDTO) => {
  return prisma.diningTable.update({
    where: { id },
    data: {
      code: dto.code?.trim(),
      name: dto.name?.trim(),
      capacity: dto.capacity !== undefined ? Number(dto.capacity) : undefined,
      isActive: dto.isActive !== undefined ? Boolean(dto.isActive) : undefined,
    },
  });
};

export const deleteTable = async (id: number) => {
  return prisma.diningTable.delete({ where: { id } });
};

export const getTableQr = async (code: string, baseUrl: string) => {
  const table = await prisma.diningTable.findUnique({ where: { code } });
  if (!table) throw new AppError(MESSAGES.TABLE.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);

  const orderUrl = `${baseUrl}/order?tableId=${encodeURIComponent(table.code)}&diningType=DINE_IN`;
  const qrCode = await generateQrDataUrl(orderUrl);
  return {
    id: table.id,
    code: table.code,
    name: table.name,
    capacity: table.capacity,
    serviceBellEnabled: table.serviceBellEnabled,
    orderUrl,
    qrCode,
  };
};

export const getTakeoutQr = async (baseUrl: string) => {
  const orderUrl = `${baseUrl}/order?diningType=TAKEOUT`;
  const qrCode = await generateQrDataUrl(orderUrl, '#0369a1');
  return { type: 'takeout', name: MESSAGES.TABLE.TAKEOUT_NAME, orderUrl, qrCode };
};

export const getBatchQrs = async (baseUrl: string) => {
  const tables = await prisma.diningTable.findMany({
    where: { isActive: true },
    orderBy: { code: 'asc' },
  });

  const tableQrs = await Promise.all(
    tables.map(async (t) => {
      const orderUrl = `${baseUrl}/order?tableId=${encodeURIComponent(t.code)}&diningType=DINE_IN`;
      const qrCode = await generateQrDataUrl(orderUrl);
      return {
        id: t.id,
        code: t.code,
        name: t.name,
        capacity: t.capacity,
        serviceBellEnabled: t.serviceBellEnabled,
        orderUrl,
        qrCode,
      };
    }),
  );

  const takeoutQr = await getTakeoutQr(baseUrl);
  return { tables: tableQrs, takeout: takeoutQr };
};

export const TableService = {
  getTables,
  createTable,
  updateTable,
  deleteTable,
  getTableQr,
  getTakeoutQr,
  getBatchQrs,
};
