var colors = ["red", "blue", "green"];
colors[99] = "black";
console.log(colors.length);

var names = [];
// colors.length = 2;
colors.length = 4;
console.log(colors.length);
console.log(names.length);

console.log(colors[3]);
colors[2] = "black";
colors[3] = "brown";
