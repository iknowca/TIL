const os = require('os');
console.log('os information-----');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('path information-----');
console.log('os.homedir()', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu information-----');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);

console.log('memory information-----');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());
