import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const generateRandomCode = async ():Promise<string> => {
    return crypto.randomBytes(8).toString('hex')
}

const codesArray:string[] = []
for (let index = 0; index < 20; index++) {
    generateRandomCode().then(val => {
        codesArray.push(val)
    }).then(() => {
        fs.writeFile(path.join(__dirname,'generated-code.json'),JSON.stringify(codesArray),(err) => {
            if(err){
                    console.log(err);   
                }
            })
    });
    
}
