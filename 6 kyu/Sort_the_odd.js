/*

Sort the odd


Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

function sortArray(array) {
	// Return a sorted array.
}

//= SOLUTION:

function _sortArray(arr) {
	let odd = arr.filter((num) => num % 2 != 0);
	const sortedArr = odd.sort((a, b) => a - b);
	arr.forEach((num, idx) => {
		if (num % 2 == 0) {
			odd.splice(idx, 0, num);
		}
	});
	return sortedArr;
}

console.log(_sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

// output: [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
