import fs from "fs/promises"
const rename = async () => {
    // Write your code here 
    try{
        await fs.rename('./files/wrongFileName.txt', './files/properFilename.md', { flag: 'wx'});


    }
    catch(error){
        console.log("FS operation failed");
    };
    
};

await rename();