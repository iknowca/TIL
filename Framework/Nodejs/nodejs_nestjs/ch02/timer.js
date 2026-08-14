const timeout = setTimeout(()=> {
	console.log('1.5 sec')
}, 1500)

const interval = setInterval(()=> {
	console.log('1 interval')
}, 1000);

const timeout2 = setTimeout(()=> {
	console.log('no start')
}, 3000);

setTimeout(()=> {
	clearTimeout(timeout2);
	clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
	console.log('now start')
})

const immediate2 = setImmediate(()=> {
	console.log('no start')
})

clearImmediate(immediate2)
