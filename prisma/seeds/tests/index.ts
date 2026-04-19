import { fakeSeedBook } from "./book";

import { prisma } from "@/shared/lib/prisma";

export async function fakeSeeds() {
  await prisma.$connect();

  await fakeSeedBook(prisma);

  await prisma.$disconnect();
}
