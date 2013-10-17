function Person() {

}

Person.prototype = {
	constructor : Person,
	name : "NIE Xin",
	age : 29,
	job : "Software Engineer",
	sayName : function() {
		console.log(this.name);
	}
};

// test drive
var friend = new Person();
console.log(friend instanceof Object);
console.log(friend instanceof Person);
console.log(friend.constructor == Person);
console.log(friend.constructor == Object);

Object.defineProperty(Person.prototype, "constructor", {
	enumerable: false,
	value: Person
});

Person.prototype.sayHi = function() {
	console.log("hi");
};

friend.sayHi();
