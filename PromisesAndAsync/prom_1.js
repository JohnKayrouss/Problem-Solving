/*
Write a simple JavaScript promise that resolves after 2 seconds with the message "Promise resolved!". Then, write the .then method to log the resolved message to the console.

*/

const prom = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise resolved!");
	}, 2000);
});

prom.then((res) => {
	console.log(res);
});
