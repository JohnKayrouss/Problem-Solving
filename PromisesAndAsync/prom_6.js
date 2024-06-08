/*

Promise with async/await:

Convert the following promise-based code into async/await syntax:
javascript
Copy code
function fetchData() {
	return new Promise((resolve) => {
    setTimeout(() => {
		resolve("Data fetched");
    }, 2000);
	});
}

fetchData().then((data) => {
	console.log(data);
});


*/

function fetchData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Data fetched");
		}, 2000);
	});
}

async function fetchDataAsync() {
	const res = await fetchData();
	console.log(res);
}

console.log(fetchDataAsync());
