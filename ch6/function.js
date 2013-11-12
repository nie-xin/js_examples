function sum(num1, num2) {
	return num1 + num2;
}
console.log(sum(10, 10));

// just a pointer
var anotherSum = sum;
console.log(anotherSum(10, 10));

sum = null;
// still point to function
console.log(anotherSum(10, 10));
