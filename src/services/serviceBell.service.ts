import prisma from '../prisma';
import { AppError } from '../utils/appError';
import { MESSAGES } from '../constants/messages';
import { HttpStatus, ResponseCode } from '../types/api';
import { ServiceCallDTO } from '../types/serviceBell';
import { notifyServiceBellCalled, notifyServiceBellCompleted } from '../socketBell';

const COOLDOWN_SECONDS = 60;
const lastCallMap = new Map<string, number>();

export const getServiceBellStatus = async (tableCode?: string) => {
  const store = await prisma.storeSetting.findFirst();
  const globalEnabled = store?.serviceBellEnabled ?? true;
  let tableEnabled = true;

  if (tableCode) {
    const table = await prisma.diningTable.findUnique({ where: { code: tableCode } });
    if (table) tableEnabled = table.serviceBellEnabled;
  }

  const lastTime = tableCode ? lastCallMap.get(tableCode) || 0 : 0;
  const elapsed = Math.floor((Date.now() - lastTime) / 1000);
  const cooldownSeconds = Math.max(0, COOLDOWN_SECONDS - elapsed);

  return { globalEnabled, tableEnabled, cooldownSeconds };
};

export const callServiceBell = async (dto: ServiceCallDTO) => {
  const { tableCode, type, note } = dto;
  if (!tableCode) {
    throw new AppError(MESSAGES.SERVICE_BELL.TABLE_REQUIRED, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
  const status = await getServiceBellStatus(tableCode);
  if (!status.globalEnabled) {
    throw new AppError(MESSAGES.SERVICE_BELL.GLOBAL_DISABLED, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
  if (!status.tableEnabled) {
    throw new AppError(MESSAGES.SERVICE_BELL.TABLE_DISABLED, ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
  if (status.cooldownSeconds && status.cooldownSeconds > 0) {
    throw new AppError(MESSAGES.SERVICE_BELL.COOLDOWN(status.cooldownSeconds), ResponseCode.BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }

  const table = await prisma.diningTable.findUnique({ where: { code: tableCode } });
  if (!table) {
    throw new AppError(MESSAGES.TABLE.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);
  }

  const call = await prisma.serviceCall.create({
    data: { tableId: table.id, type, note: note?.trim() || null, status: 'PENDING' },
    include: { table: { select: { id: true, code: true, name: true } } },
  });

  lastCallMap.set(tableCode, Date.now());
  notifyServiceBellCalled(call);
  return call;
};

export const getActiveServiceCalls = async () => {
  return prisma.serviceCall.findMany({
    where: { status: 'PENDING' },
    include: { table: { select: { id: true, code: true, name: true } } },
    orderBy: { createdAt: 'desc' },
  });
};

export const completeServiceCall = async (id: number) => {
  const call = await prisma.serviceCall.findUnique({ where: { id } });
  if (!call) {
    throw new AppError(MESSAGES.SERVICE_BELL.NOT_FOUND, ResponseCode.NOT_FOUND, HttpStatus.NOT_FOUND);
  }
  const updated = await prisma.serviceCall.update({
    where: { id },
    data: { status: 'COMPLETED' },
    include: { table: { select: { id: true, code: true, name: true } } },
  });
  notifyServiceBellCompleted(id);
  return updated;
};

