/*
Dollars and Cents


The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10

*/

function formatMoney(amount) {
	// your formatting code here
}

//= SOLUTION

const _formatMoney = (amount) => `$${amount.toFixed(2)}`;

console.log(_formatMoney(39.9999)); // output: $40.00
