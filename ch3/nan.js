console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN("10"));
console.log(isNaN("blue"));
console.log(isNaN(true));

console.log("Number convertion: ");

var num1 = Number("Hello, world");
console.log(num1);
var num2 = Number("");
console.log(num2);
var num3 = Number("000011");
console.log(num3);
var num4 = Number(true);
console.log(num4);

console.log("parseInt: ");
var n1 = parseInt("1234blue");
var n2 = parseInt("");
var n3 = parseInt("0xA");
var n4 = parseInt(22.5);
var n5 = parseInt("70");
var n6 = parseInt("0xf");
console.log("n1:" + n1 + " n2:" + n2 + " n3:" + n3 + " n4:" + n4 + " n5:" + n5 + " n6:" + n6 );

var n7 = parseInt("AF", 16);
var n8 = parseInt("AF");
console.log(n7);
console.log(n8);

var x1 = parseFloat("1234blue");
var x2 = parseFloat("0xA");
var x3 = parseFloat("22.5");
var x4 = parseFloat("22.34.5");
var x5 = parseFloat("0908.5");
var x6 = parseFloat("3.12e7");
console.log("x1:" + x1 + " x2:" + x2 + " x3:" + x3 + " x4:" + x4 + " x5:" + x5 + " x6:" + x6 );