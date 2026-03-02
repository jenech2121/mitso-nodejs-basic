import fs from 'node:fs';
const copy = async () => {
    // Write your code here 
    fs.mkdir('./files_copy', {recursive: true}, (err) =>{})
    fs.cp('./files', './files_copy',{recursive:true}, (err) => {
      if (err){;
    console.log('FS operation success');
    } else{
        console.error('FS operation failed');
    } 
    });
};

await copy();
