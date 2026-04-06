import { FastifyReply, FastifyRequest } from "fastify";
import { CreateBookService } from "./services/CreateBookService";
import { HttpStatusCode } from "@/shared/utils/HttpStatusCode";
import { createBookBody } from "./dtos/createBookDTO";
import { BookRepository } from "./repositories/implementations/BookRepository";
import { FindAllBookService } from "./services/FindAllBookService";
import { FindBookByIdService } from "./services/FindBookByIdService";
import { findBookByIdParams } from "./dtos/findBookByIdDTO";
import { updateBookBody, updateBookParams } from "./dtos/updateBookDTO";
import { UpdateBookService } from "./services/UpdateBookService";

const bookRepository = new BookRepository();

export class BooksController {
  #bookRepository = bookRepository;

  create = async (request: FastifyRequest, reply: FastifyReply) => {
    const { title, author } = createBookBody.parse(request.body);
    const service = new CreateBookService(this.#bookRepository);

    const data = await service.execute({ title, author });

    return reply.status(HttpStatusCode.CREATED).send(data);
  };

  findAll = async (_: FastifyRequest, reply: FastifyReply) => {
    const service = new FindAllBookService(this.#bookRepository);

    const data = await service.execute();

    return reply.status(HttpStatusCode.OK).send(data);
  };

  findById = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = findBookByIdParams.parse(request.params);
    const service = new FindBookByIdService(this.#bookRepository);

    const data = await service.execute(id);

    return reply.status(HttpStatusCode.OK).send(data);
  };

  update = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = updateBookParams.parse(request.params);
    const { title, author, available } = updateBookBody.parse(request.body);

    const service = new UpdateBookService(this.#bookRepository);

    const data = await service.execute(id, { title, author, available });

    return reply.status(HttpStatusCode.OK).send(data);
  };
}
