const fs = require('fs').promises;

fs.readdir('./folder')
    .then((dir) => {
        console.log('content: ', dir);
        return fs.unlink('./folder/newfile.js');
    })
    .then(()=> {
        console.log('delete file sucess');
        return fs.rmdir('./folder');
    })
    .then(()=> {
        console.log('delete folder ok');
    })
    .catch(err => {
        console.error(err);
    });
