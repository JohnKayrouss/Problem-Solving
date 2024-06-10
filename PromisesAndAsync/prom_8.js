/*
Simultaneous Promises with Promise.allSettled:

Create three promises: one that resolves with "Resolved Promise 1" after 1 second, one that rejects with "Rejected Promise 2" after 2 seconds, and one that resolves with "Resolved Promise 3" after 3 seconds. Use Promise.allSettled to handle these promises and log their status and values/results.

*/
const prom1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved Promise 1");
	}, 1000);
});
const prom2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Rejected Promise 2");
	}, 2000);
});
const prom3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Resolved Promise 3");
	}, 3000);
});

function promsGroup(...args) {
	let result = args;
	Promise.allSettled(result).then((res) => {
		res.forEach((promise) => {
			console.log(`status: ${promise.status} & value: ${promise.value}`);
		});
	});
}
promsGroup(prom1, prom2, prom3);
