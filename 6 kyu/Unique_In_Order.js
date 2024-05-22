/*

Unique In Order


Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]



*/

var uniqueInOrder = function (iterable) {
	//your code here - remember iterable can be a string or an array
};

//= SOLUTION:

var _uniqueInOrder = function (iterable) {
	const newArr = [];
	if (typeof iterable === "string") {
		const arr = iterable.split("");
		arr.forEach((item, idx) => {
			if (arr[idx] !== arr[idx + 1]) {
				newArr.push(arr[idx]);
				return arr[idx];
			}
		});
	} else {
		iterable.forEach((item, idx) => {
			if (iterable[idx] !== iterable[idx + 1]) {
				newArr.push(iterable[idx]);
				return iterable[idx];
			}
		});
	}
	return newArr;
};

console.log(_uniqueInOrder("AAAABBBCCDAABBB"));

// output:  ['A', 'B', 'C', 'D', 'A', 'B']
