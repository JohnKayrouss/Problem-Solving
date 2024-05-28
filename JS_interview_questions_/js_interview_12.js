// Write a function which implements shuffle

const myArr = [40, 1, 5, 200, "john"];

function shuffleItUp(arr) {
	return arr
		.map((item) => {
			return { random: Math.random(), value: item };
		})
		.sort((a, b) => a.random - b.random)
		.map((item) => item.value);
}
console.log(shuffleItUp(myArr));
