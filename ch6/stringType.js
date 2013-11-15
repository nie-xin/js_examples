var stringObject = new String("hello world");

var stringValue = "hello world";
console.log(stringValue.length);
console.log(stringValue.charAt(1));
console.log(stringValue.charCodeAt(1));
console.log(stringValue[1]);

stringValue = "hello ";
//var result = stringValue.concat("nie");
//console.log(result);
//console.log(stringValue)

var result = stringValue.concat("world", "!");
console.log(result);
console.log(stringValue);

var stringValue2 = "hello world";
console.log(stringValue2.slice(3));
console.log(stringValue2.substring(3));
console.log(stringValue2.substr(3));
console.log(stringValue2.slice(3, 7));
console.log(stringValue2.substring(3, 7));
console.log(stringValue2.substr(3, 7));

stringValue = "hello world";
console.log(stringValue.slice(-3));
console.log(stringValue.substring(-3));
console.log(stringValue.substr(-3));
console.log(stringValue.slice(3, -4));
console.log(stringValue.substring(3, -4));
console.log(stringValue.substr(3, -4));

