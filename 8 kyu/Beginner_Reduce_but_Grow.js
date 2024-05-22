/*
Beginner - Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


*/

function grow(x) {
	//
}

//= SOLUTION

const _grow = (x) => x.reduce((acc, current) => acc * current);

console.log(_grow([1, 2, 3, 4]));
// output: 24
