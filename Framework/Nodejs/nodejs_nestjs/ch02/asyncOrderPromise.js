const fs = require('fs').promises;

console.log('start')

fs.readFile('./readme.txt')
    .then(data => {
        console.log('1st', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then(data => {
        console.log('2nd', data.toString());
        return fs.readFile('./readme.txt');
    })
    .then(data => {
        console.log('3rd', data.toString());
        return fs.readFile('./readme.txt');
    })
    .catch(err => {
        console.error(err);
    });
