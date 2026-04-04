import { FastifyInstance, FastifyPluginOptions } from "fastify";

export function routesRegister(
  app: FastifyInstance,
  opts: FastifyPluginOptions,
  done: (err?: Error | undefined) => void,
) {
  // app.register(userRoutes, { prefix: '/' })

  return done();
}
