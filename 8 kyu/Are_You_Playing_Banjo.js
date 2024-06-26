/*

Are You Playing Banjo?


Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.



*/

function areYouPlayingBanjo(name) {
	// Implement me
	return name;
}
//= SOLUTION

function _areYouPlayingBanjo(name) {
	return name.toLowerCase().split("")[0] === "r"
		? `${name} plays banjo`
		: `${name} does not play banjo`;
}

console.log(_areYouPlayingBanjo("Ramez"));

// output: Ramez plays banjo
