/*
Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

*/

function removeChar(str) {
	//You got this!
}

//= SOLUTION

const _removeChar = (str) => str.slice(1, -1);

console.log(_removeChar("world")); // output: orl
