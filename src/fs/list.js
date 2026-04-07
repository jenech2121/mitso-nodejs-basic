import fs from "fs/promises"
const list = async () => {
    // Write your code here
    try {
       const name = await fs.readdir("./files", "utf-8", {recursive: true, flag:"wx" });
       console.log(name)
    } catch (error) {
  console.log("FS operation failed")       
    } 
};

await list();