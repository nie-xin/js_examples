function outer() {
	inner();
}

function inner() {
	// reference to the function that called this function
	console.log(inner.caller);
	console.log(arguments.callee.caller);
}

outer();
