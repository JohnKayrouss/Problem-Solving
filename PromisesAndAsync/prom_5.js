/*

Write a promise that rejects if it takes longer than 5 seconds to resolve. If the promise resolves within 5 seconds, it should log "Promise resolved within time limit." If it doesn't, it should log "Promise timed out."

*/

const prom = new Promise((resolve) => {
	const delay = Math.round(Math.random() * 10000);
	setTimeout(() => {
		resolve("Promise resolved within time limit");
	}, delay);
});

function raceOfProms(promise1) {
	const promise2 = new Promise((reject) => {
		setTimeout(() => {
			reject("Promise timed out");
		}, 5000);
	});
	Promise.race([promise1, promise2]).then((res) => console.log(res));
}

raceOfProms(prom);
