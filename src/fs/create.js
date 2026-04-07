import fs from 'fs/promises';

const create = async () => {
    // Write your code here 
    try{
    await fs.writeFile('./files/fresh.txt', 'I am fresh and young',{ flag :"wx", })
    }
    catch(error){
        console.log("FS operation failed");

    }
    
};

await create();