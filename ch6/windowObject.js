var color = "red";
function sayColor() {
    console.log(window.color);
}

//window.sayColor();      // window doesn't exist in nodejs
//
var global = function() {
return this;
} ();

