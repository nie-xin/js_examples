// function expression works like other expression, which means that it must be
// assigned before usage.
sayHi();    // this won't work, the expression must be assigned
var sayHi = function sayHi() {
    console.log("Hi!");
};

