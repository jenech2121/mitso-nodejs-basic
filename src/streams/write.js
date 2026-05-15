import fs from 'fs'

const write = async () => {
    // Write your code here 

    const writable = fs.createWriteStream('./files/fileToWrite.txt');

    process.stdin.pipe(writable);
};

await write();