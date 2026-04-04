import Fastify from "fastify";
import { routesRegister } from "./routes";

const server = Fastify({
  logger: {
    level: process.env.LOG_LEVEL || "info",
  },
});

server.register(routesRegister);

export { server };
