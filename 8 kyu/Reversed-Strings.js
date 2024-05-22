/*
Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'


*/

function solution(str) {
	//
}

//= SOLUTION

function solution(str) {
	let newStr = str.split("");
	let finalStr = newStr.reverse().join("");

	return finalStr;
}

console.log(solution("world")); // output: dlrow
