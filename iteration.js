var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var everyResult = numbers.every(function(item, index, array) {
	return (item > 2);
});	// every item > 2 ?

console.log(everyResult); // false, not everyone

var someResult = numbers.some(function(item, index, array) {
	return (item > 2);
}); // anyone > 2?

console.log(someResult); // yes, 3, 4, 5 they are > 2


// filter
var filterResult = numbers.filter(function(item, index, array) {
	return (item > 2);
});

console.log(filterResult);


// map
var mapResult = numbers.map(function(item, index, array) {
	return item * 2;
});

console.log(mapResult);

// forEach = for loop
numbers.forEach(function(item, index, array) {
	// what could I do?
});

