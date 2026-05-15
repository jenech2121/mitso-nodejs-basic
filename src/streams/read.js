import fs from 'fs'

const read = async () => {
    // Write your code here 

     const readable = fs.createReadStream('./files/fileToRead.txt');

    readable.pipe(process.stdout);

};

await read();