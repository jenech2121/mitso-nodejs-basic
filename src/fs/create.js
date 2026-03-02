import fs from 'node:fs';
const create = async () => {
    // Write your code here 
    fs.writeFile('./files/fresh.txt', 'I am fresh and young', (err) => {
    
    if (err){;
    console.log('FS operation success');
    } else{
        console.error('FS operation failed');
    } 
    });
};

await create();