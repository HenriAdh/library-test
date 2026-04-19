import net from "net";

const host = "127.0.0.1";
const port = 5433;

function waitForDb() {
  return new Promise<void>((resolve, reject) => {
    let tries = 1;
    const maxTries = 3;

    const tryConnect = () => {
      if (tries > maxTries) {
        console.log("Max retryies attached, shutting down...");
        process.exit(1);
      }

      const socket = new net.Socket();

      socket
        .once("error", () => {
          tries += 1;
          setTimeout(tryConnect, 1000);
        })
        .once("connect", () => {
          socket.end();
          resolve();
        })
        .connect(port, host);
    };

    setTimeout(tryConnect, 1000);
  });
}

(async () => {
  console.log("⏳ Waiting for DB...");
  await waitForDb();
  console.log("✅ DB is ready");
})();
