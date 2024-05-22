/*

Disemvowel Trolls

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.




*/

function disemvowel(str) {
	return str;
}

//= SOLUTION:

function _disemvowel(str) {
	return str
		.split("")
		.map((x) => {
			let lowerX = x.toLowerCase();
			if (
				lowerX !== "a" &&
				lowerX !== "e" &&
				lowerX !== "i" &&
				lowerX !== "o" &&
				lowerX !== "u"
			) {
				return x;
			}
		})
		.join("");
}

console.log(_disemvowel("This website is for losers LOL!"));

// output: Ths wbst s fr lsrs LL!
