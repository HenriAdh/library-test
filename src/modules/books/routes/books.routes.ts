import { FastifyInstance } from "fastify";
import { BooksController } from "../controller";

export async function booksRoutes(app: FastifyInstance) {
  const controller = new BooksController();

  app.post("/", controller.create.bind(controller));
}
