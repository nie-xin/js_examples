var now = new Date();
console.log(now);

var someDate = new Date(Date.parse("May 25, 2004"));
console.log(someDate);

var y2k = new Date(Date.UTC(2000, 0));
console.log(y2k);

var allFives = new Date(2005, 4, 5, 17, 55, 55);
console.log(allFives);

var date1 = new Date(2007, 0, 1);
var date2 = new Date(2007, 1, 1);

console.log(date1 < date2);
console.log(date1 > date2);
