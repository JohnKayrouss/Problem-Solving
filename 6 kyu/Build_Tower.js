/*

Build Tower


Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
	// build here
}

//= SOLUTION:

function _towerBuilder(nFloors) {
	let arr = [];
	let num = 1;
	let stars = "*";
	let starsNum = stars.repeat(num);

	for (let i = 1; i <= nFloors; i++) {
		arr.push(`${starsNum}`);
		num = num + 2;
		starsNum = stars.repeat(num);
	}
	return arr
		.reverse()
		.map((item, idx) => {
			if (idx !== 0) {
				return idx, `${"".padStart(idx)}${item}${"".padEnd(idx)}`;
			}
			return item;
		})
		.reverse();
}

console.log(_towerBuilder(3));

// output: ['  *  ', ' *** ', '*****']
