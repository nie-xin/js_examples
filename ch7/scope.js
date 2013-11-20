function outputNumbers(count) {
    for (var i = 0; i < count; i++) {
        console.log(i);
    }

    var i;
    console.log(i);
}

// test drive
var count = 5;
var result = outputNumbers(count);

// to turn the function declaration into a function expression, you need only
// surround it with parentheses like this:
// (function() {
//      // block code
// }) ();

function outputNumbers2(count) {
    (function () {
        for (var i=0; i < count; i++) {
            console.log(i);
        }
    }) ();

    console.log(i);     // error - i is in scopr private
}

