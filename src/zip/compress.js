import zlib from "zlib";
import fs from "fs";
import { pipeline } from "stream/promises";

const compress = async () => {
    // Write your code here 
     const readable = fs.createReadStream("./files/fileToCompress.txt");
  const writable = fs.createWriteStream("./files/archive.gz");
  const zip = zlib.createGzip();

  try {
    await pipeline(readable, zip, writable);
    console.log("Завершено");
  } catch (error) {
    console.error("Smth went wrong");
  }
};

await compress();