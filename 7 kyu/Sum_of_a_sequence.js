/*

Sum of a sequence

Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
This is the first kata in the series:

Sum of a sequence (this kata)
Sum of a Sequence [Hard-Core Version]


*/

const sequenceSum = (begin, end, step) => {
	// May the Force be with you
};

//= SOLUTION:

const _sequenceSum = (begin, end, step) => {
	if (begin > end) return 0;
	let total = 0;
	for (let i = begin; i <= end; i += step) total += i;
	return total;
};

console.log(_sequenceSum(2, 6, 2));

// output: 12
