/*

Testing 1-2-3


Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

*/

var number = function (array) {
	//your awesome code here
};

//= SOLUTION:

var _number = function (array) {
	let numArr = [];
	array.forEach((item, idx) => numArr.push(`${idx + 1}: ${item}`));
	return numArr;
};

console.log(_number(["a", "b", "c"]));

// output: ['1: a', '2: b', '3: c']
