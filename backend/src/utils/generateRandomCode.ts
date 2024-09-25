import crypto from 'crypto';

const generateRandomCode = async ():Promise<string> => {
    return crypto.randomBytes(8).toString('hex')
}

for (let index = 0; index < 20; index++) {
    generateRandomCode().then(val => console.log(val));
    
}
