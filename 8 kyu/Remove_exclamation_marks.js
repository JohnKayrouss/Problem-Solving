/*
Remove exclamation marks


Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


*/

function removeExclamationMarks(s) {
	return "";
}
//= SOLUTION

const _removeExclamationMarks = (s) => s.replace(/!/g, "");

console.log(_removeExclamationMarks("!code!wars!"));
// output:codewars
