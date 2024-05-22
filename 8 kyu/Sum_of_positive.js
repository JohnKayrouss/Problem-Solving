/*
Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.


*/

function positiveSum(arr) {
	//
}

//= SOLUTION

const _positiveSum = (arr) => {
	const newArr = arr.filter((positive) => positive > 0);
	return newArr.length == 0 ? 0 : newArr.reduce((a, b) => a + b);
};

console.log(_positiveSum([-1, 2, 3, 4, -5]));

// output: 9
