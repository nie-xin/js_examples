console.log(typeof Array.prototype.sort);
console.log(typeof String.prototype.substring);

String.prototype.startsWith = function(text) {
	return this.indexOf(text) == 0;
};

var msg = "Hello world";
console.log(msg.startsWith("Hello"));
