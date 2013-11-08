var now = new Date();
console.log(now);

var someDate = new Date(Date.parse("May 25, 2004"));
console.log(someDate);

var y2k = new Date(Date.UTC(2000, 0));
console.log(y2k);

var allFives = new Date(2005, 4, 5, 17, 55, 55);
console.log(allFives);

