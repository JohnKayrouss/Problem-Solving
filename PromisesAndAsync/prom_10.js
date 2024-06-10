/*

Sequential Execution with Promise Chain:

Write a function that takes an array of promises and executes them sequentially (one after the other). Log the result of each promise as it resolves. Ensure that if one promise fails, the rest do not execute.

*/

function createPromise(msg, delay, shouldReject = false) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (shouldReject) {
				reject(msg);
			} else {
				resolve(msg);
			}
		}, delay);
	});
}
const prom1 = createPromise("resolve prom1", 1000);
const prom2 = createPromise("resolve prom2", 2000);
const prom3 = createPromise("resolve prom3", 3000);
const prom4 = createPromise("reject prom4", 4000, true);
const prom5 = createPromise("resolve prom5", 5000);

async function checkProms(...args) {
	for (promise of args) {
		try {
			const result = await promise;
			console.log(result);
		} catch {
			break;
		}
	}
}
checkProms(prom1, prom2, prom3, prom4, prom5);
