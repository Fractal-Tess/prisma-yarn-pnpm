import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '@packages/prisma/client/client';

export const POST: RequestHandler = async ({ request }) => {
  const user = await prisma.user.findFirst();
  return new Response(JSON.stringify(user), { status: 200 });
};
