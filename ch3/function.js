// function.js

function sayHi() {
	console.log("Hello " + arguments[0] + ", " + arguments[1]);
} 

sayHi("Nicholas", "how are you today?");

function sum(num1, num2) {
	return num1 + num2;
}

var result = sum(5, 10);
console.log(result);

function diff(num1, num2) {
	if (num1 < num2) {
		return num2 - num1;
	} else {
		return num1 - num2;
	}
}

function howManyArgs() {
	console.log(arguments.length);
}

howManyArgs("string", 45);
howManyArgs();
howManyArgs(12);

// function doAdd() {
// 	if(arguments.length == 1) {
// 		console.log(arguments[0] + 10);
// 	} else if (arguments.length == 2) {
// 		console.log(arguments[0] + arguments[1]);
// 	}
// }

function doAdd(num1, num2) {
	if (arguments.length == 1) {
		console.log(num1 + 10);
	} else if (arguments.length == 2) {
		console.log(arguments[0] + num2);
	}
}
doAdd(10);
doAdd(30, 20);

function doAdd2(num1, num2) {
	arguments[1] = 10;
	console.log(arguments[0] + num2);
}

doAdd2(30, 20);

function addSomeNumber(num) {
	return num + 100;
}

function addSomeNumber(num) {
	return num + 200;
}

var result = addSomeNumber(100);
console.log(result);
