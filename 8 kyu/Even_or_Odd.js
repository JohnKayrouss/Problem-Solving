/*
Even or Odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/

function evenOrOdd(number) {
	//
}

//= SOLUTION

const _evenOrOdd = (number) => (number % 2 ? "Odd" : "Even");

console.log(_evenOrOdd(-42));

// output: Even
