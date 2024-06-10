/*
Using Promise.race:

Write a function that takes an array of promises and returns the result of the first promise to resolve or reject using Promise.race. Create three promises with different resolve/reject times and test this function.

*/
function onTime() {
	return Math.floor(Math.random() * 5000);
}

const prom1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("resolve promise 1");
	}, onTime());
});
const prom2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("reject promise 2");
	}, onTime());
});
const prom3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("resolve promise 3");
	}, onTime());
});

const landOfProms = (...args) =>
	Promise.race(args).then((res) => {
		const result = res;
		return result;
	});

landOfProms(prom1, prom2, prom3);
