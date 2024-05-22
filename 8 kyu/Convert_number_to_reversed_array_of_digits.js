/*

Convert number to reversed array of digits

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]


*/

function digitize(n) {
	//code here
}

//= SOLUTION

const _digitize = (n) =>
	String(n)
		.split("")
		.reverse()
		.map((str) => Number(str));

console.log(_digitize(35231));

// output: [1, 3, 2, 5, 3]
