import { fileURLToPath } from "url";
import { fork } from "child_process";
import { cpus } from "os";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptFiles = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
    // Write your code here
     fork(scriptFiles, args, {
    stdio: [process.stdin, process.stdout, "ipc"],
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
