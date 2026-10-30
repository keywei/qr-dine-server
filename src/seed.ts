import prisma from './prisma';
import bcrypt from 'bcryptjs';

async function main() {
  console.log('Seeding initial data...');

  // 1. Admin User
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { username: 'admin' },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('123456', 10);
    await prisma.adminUser.create({
      data: {
        username: 'admin',
        password: hashedPassword,
        name: '門市店長',
        role: 'ADMIN',
      },
    });
    console.log('Admin user created: admin / 123456');
  }

  // 2. Tables
  const tableData = [
    { code: 'A1', name: 'A區 靠窗 1號桌', capacity: 2 },
    { code: 'A2', name: 'A區 靠窗 2號桌', capacity: 2 },
    { code: 'A3', name: 'A區 沙發 3號桌', capacity: 4 },
    { code: 'B1', name: 'B區 4人桌 1號', capacity: 4 },
    { code: 'B2', name: 'B區 4人桌 2號', capacity: 4 },
    { code: 'B3', name: 'B區 包廂 6人桌', capacity: 6 },
  ];

  for (const t of tableData) {
    await prisma.diningTable.upsert({
      where: { code: t.code },
      update: {},
      create: t,
    });
  }
  console.log('Dining tables seeded.');

  // 3. Categories & Menu Items
  const catCount = await prisma.category.count();
  if (catCount === 0) {
    // Category 1: 招牌主餐
    const catMain = await prisma.category.create({
      data: { name: '招牌主餐', sortOrder: 1 },
    });

    // Category 2: 經典丼飯
    const catBowl = await prisma.category.create({
      data: { name: '經典丼飯', sortOrder: 2 },
    });

    // Category 3: 人氣炸物小點
    const catSnack = await prisma.category.create({
      data: { name: '人氣炸物小點', sortOrder: 3 },
    });

    // Category 4: 手搖飲品
    const catDrink = await prisma.category.create({
      data: { name: '手搖飲品', sortOrder: 4 },
    });

    // Dish 1: 炙燒特選牛肉麵
    await prisma.menuItem.create({
      data: {
        categoryId: catMain.id,
        name: '炙燒特選牛肉麵',
        description: '慢火燉煮12小時濃郁高湯，炙燒熟成牛肋條，香氣撲鼻。',
        price: 220,
        imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=60',
        sortOrder: 1,
        options: {
          create: [
            {
              title: '麵體選擇',
              type: 'SINGLE',
              isRequired: true,
              options: {
                create: [
                  { name: '經典拉麵 (彈牙)', extraPrice: 0 },
                  { name: '刀削寬麵 (帶勁)', extraPrice: 0 },
                ],
              },
            },
            {
              title: '湯頭辣度',
              type: 'SINGLE',
              isRequired: true,
              options: {
                create: [
                  { name: '原味濃湯 (不辣)', extraPrice: 0 },
                  { name: '主廚微辣', extraPrice: 0 },
                  { name: '地獄大辣 (+10)', extraPrice: 10 },
                ],
              },
            },
            {
              title: '超值加料',
              type: 'MULTIPLE',
              isRequired: false,
              options: {
                create: [
                  { name: '加溏心蛋', extraPrice: 25 },
                  { name: '加厚切牛肉', extraPrice: 65 },
                  { name: '加麵一份', extraPrice: 20 },
                ],
              },
            },
          ],
        },
      },
    });

    // Dish 2: 日式厚切炸豬排丼
    await prisma.menuItem.create({
      data: {
        categoryId: catBowl.id,
        name: '日式厚切酥炸豬排丼',
        description: '嚴選黃金溫體豚肉，外酥內嫩多汁，鋪上香滑蛋液。',
        price: 180,
        imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=60',
        sortOrder: 2,
        options: {
          create: [
            {
              title: '醬汁風味',
              type: 'SINGLE',
              isRequired: true,
              options: {
                create: [
                  { name: '日式和風洋蔥醬', extraPrice: 0 },
                  { name: '濃郁日式咖哩', extraPrice: 20 },
                ],
              },
            },
            {
              title: '客製加購',
              type: 'MULTIPLE',
              isRequired: false,
              options: {
                create: [
                  { name: '牽絲雙倍起司', extraPrice: 30 },
                  { name: '日式溫泉蛋', extraPrice: 20 },
                ],
              },
            },
          ],
        },
      },
    });

    // Dish 3: 黃金酥脆唐揚炸雞
    await prisma.menuItem.create({
      data: {
        categoryId: catSnack.id,
        name: '黃金酥脆唐揚炸雞',
        description: '特調日式秘醬醃製，現點現炸外皮金黃酥脆。',
        price: 120,
        imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=60',
        sortOrder: 3,
        options: {
          create: [
            {
              title: '沾醬搭配',
              type: 'SINGLE',
              isRequired: true,
              options: {
                create: [
                  { name: '手工塔塔醬', extraPrice: 0 },
                  { name: '泰式甜辣醬', extraPrice: 0 },
                  { name: '特選胡椒鹽', extraPrice: 0 },
                ],
              },
            },
          ],
        },
      },
    });

    // Dish 4: 經典黑糖珍珠鮮奶茶
    await prisma.menuItem.create({
      data: {
        categoryId: catDrink.id,
        name: '黑糖珍珠鮮奶茶',
        description: '每日現熬手炒黑糖珍珠，搭配小農純鮮奶。',
        price: 65,
        imageUrl: 'https://images.unsplash.com/photo-1558857563-b37cf5a914bb?w=500&auto=format&fit=crop&q=60',
        sortOrder: 4,
        options: {
          create: [
            {
              title: '甜度選擇',
              type: 'SINGLE',
              isRequired: true,
              options: {
                create: [
                  { name: '正常糖', extraPrice: 0 },
                  { name: '半糖 (5分)', extraPrice: 0 },
                  { name: '微糖 (3分)', extraPrice: 0 },
                  { name: '無糖', extraPrice: 0 },
                ],
              },
            },
            {
              title: '冰塊選擇',
              type: 'SINGLE',
              isRequired: true,
              options: {
                create: [
                  { name: '正常冰', extraPrice: 0 },
                  { name: '少冰', extraPrice: 0 },
                  { name: '微冰', extraPrice: 0 },
                  { name: '去冰', extraPrice: 0 },
                  { name: '溫熱', extraPrice: 0 },
                ],
              },
            },
            {
              title: '加料專區',
              type: 'MULTIPLE',
              isRequired: false,
              options: {
                create: [
                  { name: '加布丁', extraPrice: 15 },
                  { name: '雙倍珍珠', extraPrice: 10 },
                ],
              },
            },
          ],
        },
      },
    });

    console.log('Categories and dishes with options seeded.');
  }

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

