var s1 = "some text";
s1.color = "red";
console.log(s1.color);  //undefined
// primitive wrapper objects exist for only one line of code

var obj = new Object("some text");
console.log(obj instanceof String);

var value = "25";
var number = Number(value);
console.log(typeof number);

var obj = new Number(value);
console.log(typeof obj);

