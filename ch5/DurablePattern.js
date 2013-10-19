function Person(name, age, job) {
	var o = new Object();

	// no way to access the name property except the sayName function
	o.sayName = function() {
		console.log(name);
	};

	return o;
}

// test drive
var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName();
