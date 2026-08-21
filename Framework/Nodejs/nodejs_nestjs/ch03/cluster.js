const cluster=require('cluster')
const http=require('http')
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
    console.log(`main process id: ${process.pid}`)

    for (let i=0; i<numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal)=> {
        console.log(`worker: ${worker.process.pid} code: ${code}`);
        console.log(`signal: ${signal}`);
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>Hello Node!</h1>');
        res.end('<h1>Hello Node!</h1>');
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(8080);

    console.log(`${process.pid} is started`)
}
