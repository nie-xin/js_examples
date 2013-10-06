var message = "some string";
console.log(typeof message);
console.log(typeof(message));
console.log(typeof 95);
console.log(typeof null);
// undefined variable
var msg;
console.log(typeof(msg));

var msg2 = undefined;
console.log(msg2 == undefined);

//console.log(test);
console.log(typeof(test));

// null == undefined
console.log(null == undefined);

var msg3 = "Hello, world!";
console.log(msg3);
//var messageAsBoolean = Boolean(msg3);
//console.log(messageAsBoolean);

if (msg3) {
	console.log("Value is true");
}

if ( (0.1 + 0.2) == 0.3 ) {
	console.log("We got 0.3");
} else {
	console.log("The result is not 0.3!!!");
}

console.log("max value: " + Number.MAX_VALUE);
console.log("min value: " + Number.MIN_VALUE);
console.log("neg inf: " + Number.NEGATIVE_INFINITY);
console.log("inf: " + Number.POSITIVE_INFINITY);

var result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result));