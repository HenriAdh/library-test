import { PrismaClient } from "@generated/client";
import { faker } from "@faker-js/faker";

export async function fakeSeedBook(prisma: PrismaClient) {
  const data = [];

  for (let i = 0; i < 50; i++) {
    data.push({
      title: faker.book.title(),
      author: faker.book.author(),
    });
  }

  await prisma.book.createMany({ data });
}
