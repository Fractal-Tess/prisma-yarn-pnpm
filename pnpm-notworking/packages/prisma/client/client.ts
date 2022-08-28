import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

(async () => {
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      email: 'Test123452@prisma.com',
      password: 'Test123452',
      username: 'usernametest',
    },
  });

  const usr = await prisma.user.findFirst({});
  console.log(usr);
})();
