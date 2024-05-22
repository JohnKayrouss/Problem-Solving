/*
Simple multiplication

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


*/

function simpleMultiplication(number) {
	// your code........
}

//= SOLUTION

const _simpleMultiplication = (n) => (n % 2 == 0 ? n * 8 : n * 9);

console.log(_simpleMultiplication(5));
// output: 45
