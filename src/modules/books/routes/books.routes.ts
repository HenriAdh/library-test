import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { BooksController } from "../controller";

export async function booksRoutes(app: FastifyInstance) {
  const booksController = new BooksController();

  app.post("/", booksController.create);
  app.get("/", booksController.findAll);
  app.get("/:id", booksController.findById);
  app.patch("/:id", booksController.update);
}
