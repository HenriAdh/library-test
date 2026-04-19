import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/../generated/prisma/client";

const isTest = process.env["NODE_ENV"] === "test";

const connectionString = !isTest
  ? `${process.env.DATABASE_URL}`
  : `${process.env.DATABASE_URL_TEST}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
