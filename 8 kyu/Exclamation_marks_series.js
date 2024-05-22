/*


Exclamation marks series #1: Remove an exclamation mark from the end of string


Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"



*/

function remove(string) {
	//coding and coding....
	return "";
}

//= SOLUTION

function _remove(string) {
	const arr = string.split("");
	return arr[string.length - 1] == "!"
		? arr.slice(0, -1).join("")
		: arr.join("");
}
console.log(_remove("Hi! Hi!"));

// output: £67890
