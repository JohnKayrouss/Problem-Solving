/*
Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string


*/

function fakeBin(x) {
	//
}

//= SOLUTION

const _fakeBin = (x) => x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");

console.log(_fakeBin("45385593107843568"));
// output: 01011110001100111
