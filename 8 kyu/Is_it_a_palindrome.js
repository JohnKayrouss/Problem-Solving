/*
Is it a palindrome?

Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

*/

function isPalindrome(x) {
	// your code here
}

//= SOLUTION

const _isPalindrome = (x) =>
	x.split("").reverse().join("").toLowerCase() == x.toLowerCase();

console.log(_isPalindrome("hello"));
// output: false
