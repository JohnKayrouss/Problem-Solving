/*

Moving Zeros To The End


Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



*/

function moveZeros(arr) {
	return;
}

//= SOLUTION:

function _moveZeros(arr) {
	let newArr = [];
	let count = 0;
	arr.forEach((item) => {
		if (item !== 0) newArr.push(item);
		else count++;
	});
	for (let i = 0; i < count; i++) newArr.push(0);
	return newArr;
}

console.log(_moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// output: [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
