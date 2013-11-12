// arguments: function + variable
function callSomeFunction(someFunction, someArgument) {
	return someFunction(someArgument);
}

function add10(num) {
	return num + 10;
}

// function as argument
var result1 = callSomeFunction(add10, 10);
console.log(result1);

function getGreeting(name) {
	return "Hello, " + name;
}
// function as argument
var result2 = callSomeFunction(getGreeting, "Nicholas");
console.log(result2);
