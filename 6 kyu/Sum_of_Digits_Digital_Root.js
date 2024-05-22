/*

Sum of Digits / Digital Root


Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/

function digitalRoot(n) {
	// ...
}

//= SOLUTION:

function _digitalRoot(n) {
	let nArr = Array.from(String(n));
	let result = 0;
	let newIteration = [];
	for (let num of nArr) {
		num = Number(num);
		result += num;
	}

	while (result.length !== 1) {
		newIteration = [...String(result)];
		result = 0;
		for (let num of newIteration) {
			num = Number(num);
			result += num;
		}
		if (String(result).length === 1) break;
	}
	return result;
}

console.log(_digitalRoot(493193));

// output: 2
