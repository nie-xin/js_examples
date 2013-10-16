/**
 *  A test of reading property attributes
 */

var book = {};

Object.defineProperties(book, {
	_year: {
		value: 2004
	},

	edition: {
		value: 1
	},

	year: {
		get: function() {
			return this._year;
		},

		set: function(newValue) {
			//console.log(newValue);
			if (newValue > 2004) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}

});

// book.year = 2005;
// console.log(book.year);
// book.year = 2005;
// console.log(book.year);

var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor.value);
console.log(descriptor.enumerable);
console.log(typeof descriptor.get);
