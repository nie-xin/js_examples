function sum(num1, num2) {
	return num1 + num2;
}

function callSum(num1, num2) {
	return sum.call(this, num1, num2);	// pass arguments directly
}

console.log(callSum(10, 10));
