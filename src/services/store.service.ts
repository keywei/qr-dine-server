import prisma from '../prisma';
import { UpdateStoreSettingDTO } from '../types/store';

export const getStoreSetting = async () => {
  return prisma.storeSetting.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1 },
  });
};

export const updateStoreSetting = async (data: UpdateStoreSettingDTO) => {
  return prisma.storeSetting.upsert({
    where: { id: 1 },
    update: data,
    create: { id: 1, ...data },
  });
};

export const StoreService = {
  getStoreSetting,
  updateStoreSetting,
};
