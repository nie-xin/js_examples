// factory pattern

function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		console.log(this.name);
	};

	return o;
}

// test drive
var person1 = createPerson("NIE Xin", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");

console.log("First person: ");
console.log(person1.name);
console.log(person1.age);
console.log(person1.job);

console.log("Second person: ");
console.log(person2.name);
console.log(person2.age);
console.log(person2.job);