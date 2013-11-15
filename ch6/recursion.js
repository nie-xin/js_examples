// Recursion - a recursive function is a function that calls itself. So a big
// problem is divided into a set of similar subproblem, each solved with a
// trivial solution.
//
// Towers of Hanoi$
var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {     // still have discs left
        hanoi(disc - 1, src, dst, aux);
        console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};

// test drive
hanoi(3, 'Src', 'Aux', 'Dst');

