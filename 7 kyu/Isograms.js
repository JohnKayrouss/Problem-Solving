/*

Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)


*/

function isIsogram(str) {
	//...
}

//= SOLUTION:

function _isIsogram(str) {
	let strArr = str.toLowerCase().split("").sort();
	let doubled = [];
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] == strArr[i + 1]) {
			doubled.push(strArr[i]);
		}
	}

	return doubled.length == 0;
}

console.log(_isIsogram("Dermatoglyphics"));

// output: true
