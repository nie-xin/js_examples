// function declaration hoisting - a function declaration may appear after code
// The following examples showed that the hoisting will affect only function
// declaration
// that calls it and stll work
sayHi();
function sayHi() {
    console.log("Hi!");
}

// this never gonna to work coz hoisting
if (condition) {
    function sayHi() {
        console.log("Hi");
    }
} else {
    function sayHi() {
        console.log("Yo!");
    }
}

// this one is ok
var sayHi;

if (condition) {
    sayHi = function() {
        console.log("Hi");
    };
} else {
    sayHi = function() {
        console.log("Yo");
    };
}

