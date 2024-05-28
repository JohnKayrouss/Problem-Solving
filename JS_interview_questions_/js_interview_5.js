// Write a function which helps to achieve multiply(a)(b) and returns product of a and b
// Create a curry function
// What can your curried function do?

function multiply(valueA) {
	return function (valueB) {
		return valueA * valueB;
	};
}

console.log(multiply(10)(3)); // 30

console.dir(multiply());

/*

[[Scopes]]: Scopes[2]
0: Closure (multiply) {valueA: undefined}
1: Global {window: Window, …}

*/
