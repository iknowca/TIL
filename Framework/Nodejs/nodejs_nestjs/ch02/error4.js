process.on('uncaughtException', err => {
    console.error('uncaughtException...', err);
});

setInterval(()=> {
    throw new Error('destroyed...');
}, 1000);

setTimeout(()=> {
    console.log('DESTROYED.');
}, 3000);
