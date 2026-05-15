import zlib from "zlib";
import fs from "fs";
import { pipeline } from "stream/promises";

const decompress = async () => {
    // Write your code here 
  const readable = fs.createReadStream("./files/archive.gz");
  const writable = fs.createWriteStream("./files/fileToCompress2.txt");
  const zip = zlib.createGunzip();

  try {
    await pipeline(readable, zip, writable);
    console.log("Завершено");
  } catch (error) {
    console.error("Smth went wrong");
  }
};

await decompress();