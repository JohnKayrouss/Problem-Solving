/*
Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


*/

function countPositivesSumNegatives(input) {
	// your code here
}

//= SOLUTION

function _countPositivesSumNegatives(input) {
	if (input == null || input.length == 0) {
		return [];
	} else {
		const positive = input.filter((num) => num > 0).length;
		const negative = input
			.filter((num) => num < 0)
			.reduce((acc, current) => acc + current);
		let total = [positive, negative];

		return total;
	}
}

console.log(
	_countPositivesSumNegatives([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
	])
);
// output: [10, -65]