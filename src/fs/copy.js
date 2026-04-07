import fs from 'fs/promises';
const copy = async () => {
    // Write your code here 
    try{
    await fs.mkdir('./files_copy', { flag:"wx",} )
    await fs.cp('./files', './files_copy',{recursive:true, flag:"wx",});
    }
    catch(error){
        console.log("FS operation failed")
    }
    
};

await copy();
