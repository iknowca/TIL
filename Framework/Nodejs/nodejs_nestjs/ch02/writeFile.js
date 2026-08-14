const fs = require('fs');

const data = "write data";
fs.writeFile('./writeme.txt', data, (err) => {
    if (err) throw err;
    fs.readFile('./writeme.txt', (err, data1) => {
        if (err) throw err;
        console.log(data1.toString());
    })
})
