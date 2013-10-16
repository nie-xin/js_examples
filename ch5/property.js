function Person() {

}

Person.prototype.name = "NIE Xin";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
	console.log(this.name);
}

function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) && (name in object);
}

// var person1 = new Person();
// var person2 = new Person();

// console.log(person1.hasOwnProperty("name"));
// console.log("name" in person1);

// person1.name = "Greg";
// console.log(person1.name);		// from instance
// console.log(person1.hasOwnProperty("name"));	
// console.log("name" in person1);

// console.log(person2.name);		// from 
// console.log(person2.hasOwnProperty("name"));
// console.log("name" in person2);


// delete person1.name;			// delete the property restore the value of prototype, so NIE Xin will be displayed
// console.log(person1.name);
// console.log(person1.hasOwnProperty("name"));
// 
var person = new Person();
console.log(hasPrototypeProperty(person, "name"));

person.name = "Greg";
console.log(hasPrototypeProperty(person, "name"));

