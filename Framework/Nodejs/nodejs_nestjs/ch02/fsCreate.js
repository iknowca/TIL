const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
    .then(()=> {
        return Promise.reject('already exist');
    })
    .catch(err=> {
        if (err.code === "ENOENT") {
            console.log('no folder')
            return fs.mkdir('./folder')
        };
        return Promise.reject(err);
    })
    .then(()=> {
        console.log('folder success');
        return fs.open('./folder/file.js', 'w');
    })
    .then(fd=> {
        console.log('blank file ok');
        return fs.rename('./folder/file.js', './folder/newfile.js');
    })
    .then(()=> {
        console.log('mv ok')
    })
    .catch(err=> {
        console.error(err);
    });
