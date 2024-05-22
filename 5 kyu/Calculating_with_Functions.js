/*

Calculating with Functions


This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));



*/

function _zero() {}
function _one() {}
function _two() {}
function _three() {}
function _four() {}
function _five() {}
function _six() {}
function _seven() {}
function _eight() {}
function _nine() {}

function _plus() {}
function _minus() {}
function _times() {}
function _dividedBy() {}

//= SOLUTION:

const finalOperation = ({ num, optWithSecNum }) => {
	let opt = optWithSecNum.operator;
	let secNum = optWithSecNum.secondNumber;
	return opt == "+"
		? num + secNum
		: opt == "-"
		? num - secNum
		: opt == "*"
		? num * secNum
		: Math.floor(num / secNum);
};
const checkForSecNum = ({ num, optWithSecNum }) => {
	if (optWithSecNum) {
		return finalOperation({ num, optWithSecNum });
	} else {
		return num;
	}
};
const zero = (optWithSecNum) => {
	let num = 0;
	return checkForSecNum({ num, optWithSecNum });
};
const one = (optWithSecNum) => {
	let num = 1;
	return checkForSecNum({ num, optWithSecNum });
};
const two = (optWithSecNum) => {
	let num = 2;
	return checkForSecNum({ num, optWithSecNum });
};
const three = (optWithSecNum) => {
	let num = 3;
	return checkForSecNum({ num, optWithSecNum });
};
const four = (optWithSecNum) => {
	let num = 4;
	return checkForSecNum({ num, optWithSecNum });
};
const five = (optWithSecNum) => {
	let num = 5;
	return checkForSecNum({ num, optWithSecNum });
};
const six = (optWithSecNum) => {
	let num = 6;
	return checkForSecNum({ num, optWithSecNum });
};
const seven = (optWithSecNum) => {
	let num = 7;
	return checkForSecNum({ num, optWithSecNum });
};
const eight = (optWithSecNum) => {
	let num = 8;
	return checkForSecNum({ num, optWithSecNum });
};
const nine = (optWithSecNum) => {
	let num = 9;
	return checkForSecNum({ num, optWithSecNum });
};

const plus = (secondNumber) => {
	let operator = "+";
	return { operator, secondNumber };
};
const minus = (secondNumber) => {
	let operator = "-";
	return { operator, secondNumber };
};
const times = (secondNumber) => {
	let operator = "*";
	return { operator, secondNumber };
};
const dividedBy = (secondNumber) => {
	let operator = "/";
	return { operator, secondNumber };
};

console.log(eight(minus(three())));

// output: 8
