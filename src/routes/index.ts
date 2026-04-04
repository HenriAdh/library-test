import { booksRoutes } from "@/modules/books/routes/books.routes";
import { FastifyInstance, FastifyPluginOptions } from "fastify";

export async function routesRegister(
  app: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error | undefined) => void,
) {
  await app.register(booksRoutes, { prefix: "/books" });

  return done();
}
