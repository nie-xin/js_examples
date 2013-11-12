//  function declarations are read and added to the execution context before the code begins running through a process called function declaration hoisting.
console.log(sum(10, 10));
function sum(num1, num2) {
	return num1 + num2;
}
