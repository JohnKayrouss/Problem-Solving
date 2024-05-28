// Remove all duplicates in the array

const myArr = [1, 1, 3, 5, 3, "john", 7, "jack", 7, 8, 8];

function checkArr(arr) {
	return [...new Set(arr)];
}
console.log(checkArr(myArr));
