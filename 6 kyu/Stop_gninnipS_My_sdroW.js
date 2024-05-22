/*

Stop gninnipS My sdroW!


Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"



*/

function spinWords(string) {
	//TODO Have fun :)
}

//= SOLUTION:

function _spinWords(str) {
	return str
		.split(" ")
		.map((word) => {
			if (word.length >= 5) {
				return word.split("").reverse().join("");
			} else {
				return word;
			}
		})
		.join(" ");
}

console.log(_spinWords("Hey fellow warriors"));

// output: Hey wollef sroirraw
