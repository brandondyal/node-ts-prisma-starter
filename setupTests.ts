import dotenv from 'dotenv';
import prisma from './src/client';

dotenv.config({ path: '.env.test' });

afterEach(async () => {
  const deleteUsers = prisma.user.deleteMany();

  await prisma.$transaction([deleteUsers]);
  await prisma.$disconnect();
});
