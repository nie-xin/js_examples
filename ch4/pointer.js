var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name);

function addTen(num) {
	num += 10;
	return num;
}

var count = 20;
var result = addTen(count);
console.log(count);
console.log(result);

function setName(obj) {
	obj.name = "NIE Xin";
	obj = new Object();
	obj.name = "Greg";
}

var person = new Object();
setName(person);
console.log(person.name);
