// Constructor pattern

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}

function sayName() {
	console.log(this.name);
}

// test drive
var person1 = new Person("NIE Xin", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

// console.log("First person: ");
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.job);

// console.log("Second person: ");
// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.job);

// // Instances pointed back to Person
// console.log(person1.constructor == Person);
// console.log(person2.constructor == Person);

person1.sayName();
person2.sayName();

// call as a function
Person("Greg", 27, "Doctor");
process.sayName();

var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();

