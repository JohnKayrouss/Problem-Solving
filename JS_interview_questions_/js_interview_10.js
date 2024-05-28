// Sort the array of numbers
// Sort array of objects by author's lastname

const books = [
	{ name: "Harry Potter", author: "Joanne Rowling" },
	{ name: "Warcross", author: "Marie Lu" },
	{ name: "The Hunger Games", author: "Suzanne Collins" },
];

function sortByLastName(arr) {
	return arr.sort((book1, book2) => {
		const authorB1Lname = book1.author.split(" ")[1];
		const authorB2Lname = book2.author.split(" ")[1];
		return authorB1Lname < authorB2Lname ? -1 : 1;
	});
}

console.log(sortByLastName(books));
