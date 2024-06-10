/*
Delaying a Promise Resolution:

Write a function delay that takes a value and a delay time in milliseconds, and returns a promise that resolves with the value after the specified delay. Use this function to log "Hello, World!" after a 3-second delay.

*/

function delaying(value, delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(value);
		}, delay);
	});
}
const prom1 = delaying("Hello, World!", 3000);

prom1.then((res) => {
	console.log(res);
});
