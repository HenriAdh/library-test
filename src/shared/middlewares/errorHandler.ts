import { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";
import { AppError } from "../utils/Exceptions";

export const errorHandler = (
  error: unknown,
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      message: error.message,
    });
  }

  request.log.info(error);

  return reply.status(500).send({
    message: "Internal server error",
  });
};
