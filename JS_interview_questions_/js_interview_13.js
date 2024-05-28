// Find the number of occurences of minimum value in the list

const arr = [1, 2, 3, 1, 1, 4, 5, 1];

function getNumOfMinimum(arr) {
	return arr.sort().filter((num) => num == arr[0]).length;
}
console.log(getNumOfMinimum(arr));
