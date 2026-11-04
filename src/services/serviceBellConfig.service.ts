import prisma from '../prisma';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';
import { notifyServiceBellConfigChanged } from '../socketBell';

export const updateGlobalServiceBell = async (enabled: boolean) => {
  const store = await prisma.storeSetting.findFirst();
  if (!store) {
    throw new AppError(MESSAGES.FAILED, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
  const updated = await prisma.storeSetting.update({
    where: { id: store.id },
    data: { serviceBellEnabled: enabled },
  });
  notifyServiceBellConfigChanged({ globalEnabled: enabled });
  return updated;
};

export const updateTableServiceBell = async (tableId: number, enabled: boolean) => {
  const table = await prisma.diningTable.findUnique({ where: { id: tableId } });
  if (!table) {
    throw new AppError(MESSAGES.TABLE.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);
  }
  const updated = await prisma.diningTable.update({
    where: { id: tableId },
    data: { serviceBellEnabled: enabled },
  });
  notifyServiceBellConfigChanged({ tableId, tableCode: table.code, tableEnabled: enabled });
  return updated;
};

