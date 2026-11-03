import prisma from './prisma';
import bcrypt from 'bcryptjs';
import { seedCategories } from './data/seedDishes';

async function main() {
  console.log('Seeding initial data...');

  // 1. Admin User
  const existingAdmin = await prisma.adminUser.findUnique({ where: { username: 'admin' } });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('123456', 10);
    await prisma.adminUser.create({
      data: { username: 'admin', password: hashedPassword, name: '門市店長', role: 'ADMIN' },
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
    await prisma.diningTable.upsert({ where: { code: t.code }, update: {}, create: t });
  }
  console.log('Dining tables seeded.');

  // 3. Categories & 30 Menu Items per Category
  for (const catData of seedCategories) {
    let category = await prisma.category.findFirst({ where: { name: catData.name } });
    if (!category) {
      category = await prisma.category.create({
        data: { name: catData.name, sortOrder: catData.sortOrder },
      });
    }

    console.log(`Seeding dishes for [${catData.name}]...`);
    for (const item of catData.items) {
      const existing = await prisma.menuItem.findFirst({
        where: { categoryId: category.id, name: item.name },
      });

      if (!existing) {
        await prisma.menuItem.create({
          data: {
            categoryId: category.id,
            name: item.name,
            description: item.description,
            price: item.price,
            imageUrl: item.imageUrl,
            sortOrder: item.sortOrder,
            options: {
              create: item.options.map((grp) => ({
                title: grp.title,
                type: grp.type,
                isRequired: grp.isRequired,
                options: {
                  create: grp.options.map((opt) => ({ name: opt.name, extraPrice: opt.extraPrice })),
                },
              })),
            },
          },
        });
      }
    }
  }

  console.log('All 4 categories with 30 dishes each successfully seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
