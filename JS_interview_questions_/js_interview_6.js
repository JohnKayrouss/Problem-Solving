// Write a function which get's an array and an element and returns a array with this element at the end

function pushElement(arr, item) {
	arr.push(item);
	return arr;
}
console.log(pushElement([4, 5, 6, 7], "element"));
