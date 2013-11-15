var stringValue = "hello world";
console.log(stringValue.indexOf("o"));
console.log(stringValue.lastIndexOf("o"));

console.log(stringValue.indexOf("o", 6));
console.log(stringValue.lastIndexOf("o", 6));

stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var position = new Array();
var pos = stringValue.indexOf("e");

while (pos > -1) {
    position.push(pos);
    pos = stringValue.indexOf("e", pos + 1);
}

console.log(position);
