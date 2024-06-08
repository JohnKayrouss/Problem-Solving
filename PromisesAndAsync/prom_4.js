/*

Write a code snippet that creates three promises, each resolving after different times (1 second, 2 seconds, and 3 seconds). Use Promise.all to wait for all promises to resolve and then log "All promises resolved!" to the console.

*/

function promisesGroup() {
	const prom1 = new Promise((resolve) => {
		setTimeout(() => {
			console.log("Promise 1");
			resolve();
		}, 1000);
	});
	const prom2 = new Promise((resolve) => {
		setTimeout(() => {
			console.log("Promise 2");
			resolve();
		}, 2000);
	});
	const prom3 = new Promise((resolve) => {
		setTimeout(() => {
			console.log("Promise 3");
			resolve();
		}, 3000);
	});

	Promise.all([prom1, prom2, prom3]).then(() => {
		console.log("All promises resolved!");
	});
}

promisesGroup();
