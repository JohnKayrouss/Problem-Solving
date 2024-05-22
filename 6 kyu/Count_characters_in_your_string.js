/*

Count characters in your string


The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count(string) {
	// TODO
	return {};
}

//= SOLUTION:

function _count(string) {
	let strObj = {};
	const strArr = string.split("").sort();
	let value = 0;
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] == strArr[i + 1]) {
			strObj[strArr[i]] = value + 1;
			value++;
		} else if (strArr[i] != strArr[i + 1] && strArr[i] == strArr[i - 1]) {
			strObj[strArr[i]] = value + 1;
			value = 0;
		} else {
			strObj[strArr[i]] = 1;
		}
	}
	return strObj;
}

console.log(_count("ABC"));

// output: {A: 1, B: 1, C: 1}
