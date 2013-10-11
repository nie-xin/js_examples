console.log("break: ");
var num = 0;

for (var i = 1; i < 10; i++) {
    if (i % 5 == 0) {
        console.log("i value: " + i);
        break;
    }
    num++;
}

console.log(num);

console.log("coninue: ");
var num = 0;

for (var i = 1; i < 10; i++) {
    if (i % 5 == 0) {
        console.log("i value: " + i);
        continue;
    }
    num++;
}

console.log(num);

console.log("label: ");
var num = 0;

outermost:
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
            break outermost;
        }
        num++;
    }
}

console.log(num);
