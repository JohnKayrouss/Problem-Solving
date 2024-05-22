/*
Unfinished Loop - Bug Fixing #1

Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!



*/

function createArray(number) {
	var newArray = [];

	for (var counter = 1; counter <= number; ) {
		newArray.push(counter);
	}

	return newArray;
}

//= SOLUTION

const _createArray = (number) => Array.from(Array(number + 1).keys()).slice(1);

console.log(_createArray(10));
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
