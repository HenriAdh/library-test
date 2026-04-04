import { FastifyReply, FastifyRequest } from "fastify";
import { CreateBookServive } from "./services/CreateBookService";
import { HttpStatusCode } from "@/shared/utils/HttpStatusCode";

export class BooksController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    // pegar dados do request
    const createBookService = new CreateBookServive();

    const data = await createBookService.execute();

    return reply.status(HttpStatusCode.OK).send(data);
  }
}
