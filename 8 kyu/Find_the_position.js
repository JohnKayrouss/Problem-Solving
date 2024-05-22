/*
Find the position!



When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"



*/

function position(letter) {
	//Write your own Code!
}

//= SOLUTION

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const _position = (letter) =>
	`Position of alphabet: ${alphabet.indexOf(letter) + 1}`;

console.log(_position("f")); // Position of alphabet: 6
