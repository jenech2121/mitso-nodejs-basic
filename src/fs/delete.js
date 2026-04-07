import fs from "fs/promises";
const remove = async () => {
    // Write your code here 
    try{
        await fs.rm("./files/fileToRemove.txt", {flag:"wx"})
    }
    catch(error){
        console.log("FS operation failed");
    }
};

await remove();