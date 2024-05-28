// Write a function which can concatenate 2 arrays

function concatArrs(arr1, arr2) {
	return [...arr1, ...arr2];
}

const firstArr = [1, 2, "three", 4];
const secondArr = [5, "six", "seven", 8];

console.log(concatArrs(firstArr, secondArr));
