/*
Create a promise that rejects with an error message "Something went wrong!". Write the .catch method to handle and log the error message to the console.
*/

prmoErr = new Promise((resolve, reject) => {
	reject(new Error("Something went wrong!"));
});
prmoErr.catch((err) => console.log(err));
