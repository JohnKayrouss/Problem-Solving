/*
Chaining Promises:

Create two promises where the first one resolves with "First promise resolved!" and the second one resolves with "Second promise resolved!" after the first one. Chain them together using the .then method and log both messages to the console.


*/

const prom1 = Promise.resolve("First promise resolved!");
const prom2 = Promise.resolve("Second promise resolved!");

prom1
	.then((res) => {
		console.log(res);
		return prom2;
	})
	.then((res) => console.log(res));
