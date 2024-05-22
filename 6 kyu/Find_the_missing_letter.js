/*

Find the missing letter


Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!



*/

function findMissingLetter(array) {
	return " ";
}

//= SOLUTION:

function _findMissingLetter(array) {
	let lowercaseArr = array.join("").toLowerCase().split("");
	let alphabet = String("abcdefghijklmnopqrstuvwxyz").split("");
	let firstLetter = lowercaseArr[0];
	let lastLetter = alphabet.indexOf(lowercaseArr[lowercaseArr.length - 1]);
	let matchedLetters = [];

	for (let i = alphabet.indexOf(firstLetter); i <= lastLetter; i++) {
		matchedLetters.push(alphabet[i]);
	}
	let oneLetter = matchedLetters
		.filter((letter, idx) => !lowercaseArr.includes(letter))
		.join("");
	return /^[A-Z]+$/.test(array[0]) ? oneLetter.toUpperCase() : oneLetter;
}

console.log(_findMissingLetter(["a", "b", "c", "d", "f"]));

// output: e
