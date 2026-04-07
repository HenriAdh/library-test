import Fastify from "fastify";
import { routesRegister } from "./routes";
import { errorHandler } from "./shared/middlewares/errorHandler";

const logger = process.env.NODE_ENV === "dev" ? true : { level: "info" };

const server = Fastify({ logger });

server.register(routesRegister);

server.setErrorHandler(errorHandler);

export { server };
