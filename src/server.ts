import Fastify from "fastify";
import { routesRegister } from "./routes";
import { errorHandler } from "./shared/middlewares/errorHandler";

const server = Fastify({
  logger: {
    level: process.env.LOG_LEVEL || "info",
  },
});

server.register(routesRegister);

server.setErrorHandler(errorHandler);

export { server };
