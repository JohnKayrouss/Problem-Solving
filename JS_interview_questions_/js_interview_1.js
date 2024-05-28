// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
	{
		id: 1,
		name: "Jack",
		isActive: true,
		age: 20,
	},
	{
		id: 2,
		name: "John",
		isActive: true,
		age: 18,
	},
	{
		id: 3,
		name: "Mike",
		isActive: false,
		age: 30,
	},
];

const userNames = users.map((user) => user.name);
console.log(userNames);
const getActiveUsers = users.filter((user) => user.isActive);
console.log(getActiveUsers);
function getUsersByAge(arr) {
	let orderedUsers = [];
	const ageArr = arr.map((user) => user.age).sort();
	for (let i = 0; i < arr.length; i++) {
		const isUser = arr.find((user) => user.age == ageArr[i]);
		orderedUsers.push(isUser);
	}
	return orderedUsers;
}
console.log(getUsersByAge(users));
