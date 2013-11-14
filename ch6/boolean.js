var falseObject = new Boolean(false);
var result = falseObject && true;
console.log(result);

var falseValue = false;
result = falseValue && true;
console.log(result);

console.log(typeof falseObject);
console.log(typeof falseValue);
console.log(falseObject instanceof Boolean);
console.log(falseValue instanceof Boolean);

