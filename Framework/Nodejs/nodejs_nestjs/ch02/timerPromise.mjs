import {setTimeout, setInterval } from "timers/promises"
await setTimeout(3000);
console.log("3 sec later")

for await(const startTime of setInterval(1000, Date.now())) {
	console.log("1 sec interval", new Date(startTime));
}
