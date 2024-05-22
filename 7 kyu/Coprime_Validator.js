/*

Coprime Validator

Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.

Examples
20 and 27:

Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime
12 and 39:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes

*/

function isCoprime(x, y) {
	// your code here
}

//= SOLUTION:

function _isCoprime(x, y) {
	let coprime = [];
	let common = [];
	let xArr = Array.from(Array(x + 1).keys());
	let yArr = Array.from(Array(y + 1).keys());
	xArr.shift();
	yArr.shift();
	for (num of xArr) {
		if (Number.isInteger(x / num)) {
			coprime.push(x / num);
		}
	}
	yArr.forEach((num) => {
		if (Number.isInteger(y / num)) {
			coprime.push(y / num);
		}
	});
	let arrSort = coprime.sort((a, b) => a - b);
	for (i = 0; i < arrSort.length; i++) {
		if (arrSort[i] == arrSort[i + 1]) {
			common.push(arrSort[i]);
		}
	}
	let finalArr = common.sort((a, b) => b - a);
	return finalArr[0] == 1;
}

console.log(_isCoprime(20, 27));

// output: true
