import fs from "fs/promises";
const read = async () => {
    // Write your code here 
    try{
       const info = await fs.readFile("./files/fileToRead.txt", "utf-8", {flag: "wx"});
    console.log(info);   
    }
    catch(error){
        console.log("FS operation failed");
    }
 
};

await read();