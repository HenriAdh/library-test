import { setupServer } from "./server";

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "0.0.0.0";

async function start() {
  const server = await setupServer();

  server.listen({ port, host }, (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }

    server.log.info(`Server running on ${address} 🔥`);
  });
}

start();
