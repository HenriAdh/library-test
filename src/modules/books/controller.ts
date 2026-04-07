import { FastifyReply, FastifyRequest } from "fastify";
import { HttpStatusCode } from "@/shared/utils/HttpStatusCode";
import { createBookBody } from "./dtos/createBookDTO";
import { findBookByIdParams } from "./dtos/findBookByIdDTO";
import { updateBookBody, updateBookParams } from "./dtos/updateBookDTO";
import { makeCreateBookService } from "./factories/makeCreateBookService";
import { makeFindAllBookService } from "./factories/makeFindAllBookService";
import { makeFindBookByIdService } from "./factories/makeFindBookByIdService";
import { makeUpdateBookService } from "./factories/makeUpdateBookService";

export class BooksController {
  create = async (request: FastifyRequest, reply: FastifyReply) => {
    const { title, author } = createBookBody.parse(request.body);
    const service = makeCreateBookService();

    const data = await service.execute({ title, author });

    return reply.status(HttpStatusCode.CREATED).send(data);
  };

  findAll = async (_: FastifyRequest, reply: FastifyReply) => {
    const service = makeFindAllBookService();

    const data = await service.execute();

    return reply.status(HttpStatusCode.OK).send(data);
  };

  findById = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = findBookByIdParams.parse(request.params);
    const service = makeFindBookByIdService();

    const data = await service.execute(id);

    return reply.status(HttpStatusCode.OK).send(data);
  };

  update = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = updateBookParams.parse(request.params);
    const { title, author, available } = updateBookBody.parse(request.body);

    const service = makeUpdateBookService();

    const data = await service.execute({ id, title, author, available });

    return reply.status(HttpStatusCode.OK).send(data);
  };
}
