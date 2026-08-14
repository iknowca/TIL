setInterval(()=> {
    console.log('start')
    try {
        throw new Error('error!!');
    } catch (err) {
        console.error(err);
    }
}, 1000);
