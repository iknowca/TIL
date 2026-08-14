const fs = require('fs').promises;

fs.copyFile('readme4.txt', 'writeme4.txt')
    .then(()=> {
        console.log('copy ok');
    })
    .catch(err=> {
        console.error(err);
    });


