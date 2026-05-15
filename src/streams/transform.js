import { Transform } from "stream";

const transform = async () => {
    // Write your code here 
      const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const stringData = chunk.toString();
      const cleanData = stringData.trim();
      const reversed = cleanData.split("").reverse().join("");
      this.push(reversed + "\n");
      callback();
    },
  });
  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();