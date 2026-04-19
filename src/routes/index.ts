import { booksRoutes } from "@/modules/books/routes/books.routes";
import { FastifyInstance } from "fastify";

export async function routesRegister(app: FastifyInstance) {
  await app.register(booksRoutes, { prefix: "/books" });
}
