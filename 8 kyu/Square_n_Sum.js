/*
Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

*/

function squareSum(numbers) {
	//
}

//= SOLUTION

const _squareSum = (numbers) => {
	return numbers.length == 0
		? 0
		: numbers.map((n) => n * n).reduce((acc, current) => acc + current);
};

console.log(_squareSum([0, 3, 4, 5])); // output: 50
