/*
Create two promises, one that resolves with "First data loaded" after 2 seconds and another that resolves with "Second data loaded" after 3 seconds. Use async/await to log both messages sequentially.

*/

const firstData = new Promise((resolve) => {
	setTimeout(() => {
		resolve("First data loaded");
	}, 1000);
});
const secondData = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Second data loaded ");
	}, 3000);
});

async function landOfProms(prom1, prom2) {
	const first = await prom1;
	console.log(first);
	const second = await prom2;
	console.log(second);
}
landOfProms(firstData, secondData);
