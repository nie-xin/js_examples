// recursion
/*
 *function factorial(num) {
 *    if (num <= 1) {
 *        return 1;
 *    } else {
 *        return num * arguments.callee(num-1);
 *    }
 *}
 */
var factorial = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num-1);
    }
});

// test drive
var anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4));

