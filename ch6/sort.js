var values = [0, 1, 5, 10, 15];
// values.sort();
// console.log(values);
// result: 0,1,10,15,5
// the sort function calls the String() casting first, and then sort 
// the order according to their string values.
// So the string value of 10 is before 5
// 
// This is not what we want - solution
// pass a comparison function
// 
// ascending order
// function compare(value1, value2) {
// 	if (value1 < value2) {
// 		return -1;
// 	} else if (value1 > value2) {
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// }

// values.sort(compare);
// console.log(values);

// descending order
function compare(value1, value2) {
	if (value1 < value2) {
		return 1;
	} else if (value1 > value2) {
		return -1;
	} else {
		return 0;
	}
}

values.sort(compare);
console.log(values);

// simpfied version
function compare(value1, value2) {
	return value2 - value1;
}