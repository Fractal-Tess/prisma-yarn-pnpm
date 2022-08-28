import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '@packages/prisma/client/client';

export const POST: RequestHandler = async ({ request }) => {
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      email: 'mymail@mail.com',
      password: 'password',
      username: 'username',
    },
  });

  const usr = await prisma.user.findFirst({});

  return new Response(JSON.stringify(usr), { status: 200 });
};
