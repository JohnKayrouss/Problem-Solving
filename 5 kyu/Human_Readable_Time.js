/*

Human Readable Time


Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.



*/

function humanReadable(seconds) {
	return "";
}

//= SOLUTION:

function _humanReadable(seconds) {
	let secs_time = 0;
	let mins_time = 0;
	let hours_time = 0;
	if (seconds < 60) {
		secs_time = seconds;
	}
	if (seconds >= 60 && seconds < 3600) {
		secs_time = seconds % 60;
		mins_time = Math.floor(seconds / 60);
	}
	if (seconds >= 3600) {
		let remaining;
		hours_time = Math.floor(seconds / 3600);
		if (seconds % 3600 != 0) {
			remaining = seconds % 3600;
			if (remaining < 60) {
				secs_time = remaining;
			}
			if (remaining >= 60 && remaining < 3600) {
				secs_time = seconds % 60;
				mins_time = Math.floor(remaining / 60);
			}
		}
	}

	let secsTime = String(secs_time);
	let minsTime = String(mins_time);
	let hoursTime = String(hours_time);
	if (secsTime.length < 2) secsTime = `0${secsTime}`;
	if (minsTime.length < 2) minsTime = `0${minsTime}`;
	if (hoursTime.length < 2) hoursTime = `0${hoursTime}`;
	return `${hoursTime}:${minsTime}:${secsTime}`;
}

console.log(_humanReadable(359999));

// output: 99:59:59
