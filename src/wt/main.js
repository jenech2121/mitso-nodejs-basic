import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import os from "os";
import path from "path";
import { error } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerFiles = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  // Write your code here

  const promises = [];

  for (let i = 0; i < os.cpus().length; i++) {
    promises.push(
      new Promise((resolve, _reject) => {
        const worker = new Worker(workerFiles, {
          workerData: 10 + i,
        });

        worker.on("message", (data) =>
          resolve({ statusbar: "resolved", data }),
        );
        worker.on("error", () => resolve({ statusbar: "error", data: null }));
      }),
    );
  }

  Promise.all(promises).then((result) => console.log(result));
};

await performCalculations();