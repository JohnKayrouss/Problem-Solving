/*

Do you know how to make Query String?

codewars.com/kata/search/?q=querystring
The part q=querystring represents that parameter q has value querystring. Also sometimes querystring used in HTTP POST body:

POST /api/users
Content-Type: application/x-www-form-urlencoded

username=warrior&kyu=1&age=28
The string username=warrior&kyu=1&age=28 represents an entity (user in this example) with username equals warrior, kyu equals 1 and age equals 28. The entity may be represented as object:

{
  "username": "warrior",
  "kyu": 1,
  "age": 28
}
Sometimes there are more than one value for property:



*/

function toQueryString(obj) {
	return "";
}

//= SOLUTION:

function _toQueryString(obj) {
	let query = "";
	let objKeys = Object.keys(obj);
	for (key of objKeys) {
		if (Array.isArray(obj[key])) {
			for (value of obj[key]) {
				query += `${key}=${value}&`;
			}
		} else {
			query += `${key}=${obj[key]}&`;
		}
	}
	return query.slice(0, -1);
}

console.log(
	_toQueryString({
		username: "warrior",
		kyu: 1,
		age: 28,
	})
);

// output: username=warrior&kyu=1&age=28
