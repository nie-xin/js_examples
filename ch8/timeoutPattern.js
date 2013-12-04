var num = 0;
var max = 10;
var intervalId = null;

function incrementNumber() {
	num++;

	if (num < max) {
		setTimeout(incrementNumber, 500);
	} else {
		console.log("Done");
	}
}

setTimeout(incrementNumber, 500);