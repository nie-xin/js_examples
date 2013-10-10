var text1 = "This is the letter sigma: ";
var text2 = "This is the letter sigma: \u03a3.";

console.log(text1);
console.log(text1.length);

console.log(text2);
console.log(text2.length);

var lang = "Java";
console.log(lang);
lang  = lang + "Script";
console.log(lang);

var age = 11;
var ageAsString = age.toString();
var found = true;
var foundAsString = found.toString();
console.log(ageAsString);
console.log(foundAsString);

var num = 10;
console.log(num.toString());
console.log(num.toString(2));       
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(16));

var v1 = 10;
var v2 = true;
var v3 = null;
var v4;

console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);

age = 29;
++age;
console.log(age);

--age;
console.log(age);

var anotherAge = --age + 2;
console.log(anotherAge);

var num1 = 2;
var num2 = 20;
var num3 = num1-- + num2;
var num4 = num1 + num2;
console.log(num3);
console.log(num4);
