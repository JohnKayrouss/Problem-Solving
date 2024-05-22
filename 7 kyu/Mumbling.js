/*

Mumbling


This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.



*/

function accum(s) {
	// your code
}

//= SOLUTION:

function _accum(str) {
	let newArr = [];
	str.split("").map((item, idx) => {
		let acc = idx + 1;
		newArr.push(item.repeat(acc));
	});
	return newArr
		.map((item) => {
			return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
		})
		.join("-");
}

console.log(_accum("RqaEzty"));

// output: R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
