/*

Exes and Ohs


Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
	//code here
}

//= SOLUTION:

function _XO(str) {
	let strArr = str.toLowerCase().split("");
	const letters = (letter) => strArr.filter((item) => item == letter);
	return letters("o").length == letters("x").length;
}

console.log(_XO("ooxXm"));

// output: true
