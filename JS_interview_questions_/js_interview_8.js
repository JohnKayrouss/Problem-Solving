// Check that user with such name exists in array of objects

const users = [
	{
		id: 1,
		name: "Jack",
		isActive: true,
	},
	{
		id: 2,
		name: "John",
		isActive: true,
	},
	{
		id: 3,
		name: "Mike",
		isActive: false,
	},
];

function checkName(arr, name) {
	const isName = arr.filter((user) => user.name == name);
	return isName.length >= 1;
}

console.log(checkName(users, "Jack"));
