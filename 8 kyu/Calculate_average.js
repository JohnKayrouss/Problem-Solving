/*

Calculate average

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


*/

function findAverage(array) {
	// your code here
	return 0;
}

//= SOLUTION

const _findAverage = (arr) =>
	arr.length == 0 ? 0 : arr.reduce((a, b) => a + b) / arr.length;

console.log(_findAverage([1, 2, 3, 4]));

// output: 2.5
