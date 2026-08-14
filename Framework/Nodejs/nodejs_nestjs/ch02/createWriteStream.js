const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', ()=> {
    console.log('file writing ends');
});

writeStream.write('write.\n');
writeStream.write('more write\n');
writeStream.end();
