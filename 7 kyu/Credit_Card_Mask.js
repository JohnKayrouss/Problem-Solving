/*

Credit Card Mask


Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/

// return masked string
function maskify(cc) {
	//
}

//= SOLUTION:

function _maskify(cc) {
	let ccArr = cc.split("").reverse();
	let newCcArr = [];
	let idx = 0;
	for (let i = 0; i < ccArr.length; i++) {
		if (idx <= 3) {
			newCcArr.push(ccArr[i]);
			idx++;
		} else {
			newCcArr.push("#");
		}
	}

	return newCcArr.reverse().join("");
}

console.log(_maskify("4556364607935616"));

// output: ############5616
