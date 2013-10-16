// Prototype

function Person() {

}

Person.prototype.name = "NIE Xin";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	console.log(this.name);
};

// test drive
var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.sayName;

// same instance
console.log(person1.sayName == person2.sayName);

console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));

console.log(Object.getPrototypeOf(person1) == Person.prototype);
console.log(Object.getPrototypeOf(person1).name);
