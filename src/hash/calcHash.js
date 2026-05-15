import fs from 'fs/promises'
import crypto from 'crypto'

const calculateHash = async () => {
    // Write your code here 
     try {
        const data = await fs.readFile('./files/fileToCalculateHashFor.txt','utf-8');
        console.log(data);
        const hash = crypto.createHash('sha-256')
        .update(data)
        .digest('hex');

        console.log(hash);
    } catch(error) {
        console.error("smth went wrong")
    }
};

await calculateHash();