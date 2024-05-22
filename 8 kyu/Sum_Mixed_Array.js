/*
Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.


*/

function sumMix(x) {
	//
}

//= SOLUTION

function _sumMix(x) {
	let sum = 0;
	x.forEach((num) => {
		sum += +num;
	});
	return sum;
}

console.log(_sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
// output: 42
