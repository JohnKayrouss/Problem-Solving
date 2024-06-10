/*

Nested Promises:

Write a function that returns a promise which resolves with another promise after 2 seconds. The inner promise should resolve with the value "Inner promise resolved!" after an additional 2 seconds. Handle this nested promise to log the inner value to the console.


*/

function nestedProms() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				new Promise((resolve) => {
					setTimeout(() => {
						resolve("Inner promise resolved!");
					}, 2000);
				})
			);
		}, 2000);
	});
}

nestedProms().then((res) => console.log(res));
