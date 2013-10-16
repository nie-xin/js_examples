// var person = {};
// Object.defineProperty(person, "name", {
// 	writeable: false,
// 	value: "NIE Xin"
// });
// 
// console.log(person.name);
// person.name = "Greg";
// console.log(person.name); 	// display NIE Xin cos name is not writeable
// 
// var person = {};
// Object.defineProperty(person, "name", {
// 	configurable: false,
// 	value: "NIE Xin"
// });

// console.log(person.name);
// delete person.name;			// name won't be deleted cos name is not configurable
// console.log(person.name);


var person = {};
Object.defineProperty(person, "name", {
	configurable: false,
	value: "NIE Xin"
});

Object.defineProperty(person, "name", {
	configurable: true,		// throw error cos name won't be configurable once set to noconfigurable 
	value: "NIE Xin"
});
