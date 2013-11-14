var numberObject = new Number(10);  // create a Number object which is the reference type

var num = 10;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));

console.log(num.toFixed(2));

num = 10.005;
console.log(num.toFixed(2));
console.log(num.toExponential(1));

num = 99;
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));

var numberValue = 10;
console.log(typeof numberObject);
console.log(typeof numberValue);
console.log(numberObject instanceof Number);
console.log(numberValue instanceof Number);

