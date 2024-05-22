/*

Split Strings


Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']


*/

function solution(str) {
	//...
}

//= SOLUTION:

function _solution(str) {
	let strArr = str.split("");
	let even = str.length % 2 == 0;
	let letters = [];
	let index = 0;
	if (even) {
		for (let i = 0; i < strArr.length; i++) {
			if (index == i) {
				letters.push(`${strArr[i]}${strArr[i + 1]}`);
				index = index + 2;
			}
		}
		return letters;
	} else {
		for (let i = 0; i < strArr.length; i++) {
			if (index == i) {
				if (index == strArr.length - 1) {
					letters.push(`${strArr[strArr.length - 1]}_`);
				} else {
					letters.push(`${strArr[i]}${strArr[i + 1]}`);
					index = index + 2;
				}
			}
		}
	}
	return letters;
}

console.log(_solution("abcdef"));

// output: ['ab', 'cd', 'ef']
