const http2=require('http');
const fs = require('fs')

http2.createServer({}, (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>Hello Node!</h1>');
        res.end('<h1>Hello Node!</h1>');
    }).listen(443, ()=> {
        console.log('443 listening');
    })
