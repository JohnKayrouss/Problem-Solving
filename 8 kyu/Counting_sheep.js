/*

Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined



*/

const arr = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
];

function countSheeps(sheep) {
	// TODO
}

//= SOLUTION

function _countSheeps(arrayOfSheep) {
	const filteredArr = arrayOfSheep.filter((item) => item == true);
	const result = filteredArr.length;
	return result;
}

console.log(_countSheeps(arr));

// output: 17
