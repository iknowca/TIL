const string = 'abc'
const number = 1
const boolean = true
const obj = {
	outside: {
		inside: {
			key: "value"
		}
	}
}
console.time('total time')
console.log('this is log')
console.error('error message')
console.table([{name: 'zero', birth: 1994}, {name: 'hero', birth: 1988}])
console.dir(obj, {colors: false, depth: 2})
console.dir(obj, {colors: true, depth: 1})

console.time('time measurement')
for (let i = 0; i <100000; i++) {}
console.timeEnd("time measurement")

function b() {
	console.trace("trace")
}
function a() {
	b();
}
a()

console.timeEnd('total time')
