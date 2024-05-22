/*

Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!



*/

function doubleChar(str) {
	// Your code here
}

//= SOLUTION

function _doubleChar(str) {
	return str
		.split("")
		.map((char) => char + char)
		.join("");
}

console.log(_doubleChar("Hello World"));
// output: HHeelllloo  WWoorrlldd
