var text = "cat, bat, sat, fat";
var pattern = /.at/;

// pattern matching
var matches = text.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);

var pos = text.search(/at/);
console.log(pos);

var result = text.replace("at", "ond");
console.log(result);

result = text.replace(/at/g, "ond");
console.log(result);

text = "cat, bat, sat, fat";
var result2 = text.replace(/(.at)/g, "word ($1)");
console.log(result2);

var colorText = "red, blue, green, yellow";
var color1 = colorText.split(",");
var color2 = colorText.split(",", 2);
var color3 = colorText.split(/[^\,]+/);
console.log(color1);
console.log(color2);
console.log(color3);


