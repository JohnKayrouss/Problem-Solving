/*
Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
	return "";
}

//= SOLUTION

function _bmi(weight, height) {
	const calcBMI = weight / Math.pow(height, 2);
	return calcBMI <= 18.5
		? "Underweight"
		: calcBMI <= 25.0
		? "Normal"
		: calcBMI <= 30.0
		? "Overweight"
		: "Obese";
}

console.log(_bmi(80, 1.8));
// output: Normal
