// by augmenting elements, we make them available to all functions

// add a method of extracting integer part to Number object
Number.method('interger', function () {
    return Math[this < 0 ? 'celling' : 'floor'](this);
});

// Add a method to remove spaces from the end of the string
String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

document.writeln('"'+ " neat ".trim() + '"');

// Add a method conditonally
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};


