/*
No zeros for heros


Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway



*/

function noBoringZeros(n) {
	// your code
}

//= SOLUTION

function _noBoringZeros(n) {
	const numArr = n.toString().split("").reverse();

	while (numArr[0] === "0") {
		numArr.shift();
	}
	return +numArr.reverse().join("");
}
console.log(_noBoringZeros(-1050)); // output: -105
