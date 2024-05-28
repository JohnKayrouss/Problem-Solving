// Create a counter function which has increment and getValue functionality

function counter() {
	let initial = 0;
	return function () {
		initial++;
		console.log(`incremented value: ${initial}`);
	};
}

const increment = counter();

increment(); // incremented value: 1
increment(); // incremented value: 2
increment(); // incremented value: 3
console.dir(increment);
/*

[[Scopes]]:Scopes[3] 
0: Closure (counter) {initial: 3}
1: Script {increment: ƒ}
2: Global {window: Window, …}
*/
