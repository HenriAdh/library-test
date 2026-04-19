import { prisma } from "@/shared/lib/prisma";

async function seeds() {
  await prisma.$connect();

  // chamar aqui

  await prisma.$disconnect();
}

seeds().then(() => console.log("Finalizando aqui"));
