import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

(async () => {
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      email: 'mymail@mail.com',
      password: 'password',
      username: 'username',
    },
  });

  const usr = await prisma.user.findFirst({});
  console.log(usr);
})();
