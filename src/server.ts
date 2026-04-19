import Fastify from "fastify";
import { routesRegister } from "./routes";
import { errorHandler } from "./shared/middlewares/errorHandler";

async function setupServer() {
  const node_env = process.env.NODE_ENV;

  const logger =
    node_env === "dev" ? true : node_env === "test" ? false : { level: "info" };

  const server = Fastify({ logger });

  await server.register(routesRegister);

  server.setErrorHandler(errorHandler);

  return server;
}

export { setupServer };
