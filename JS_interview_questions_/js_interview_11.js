// Write a function which implement range

// range(1, 50)
// 1,2,3,4,5,6,...,50

function range(num1, num2) {
	let rangeArr = [];
	for (let i = num1; i <= num2; i++) {
		rangeArr.push(i);
	}
	return rangeArr.join(",");
}
console.log(range(5, 50));
