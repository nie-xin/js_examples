var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }

    return factorial(i-1, a * i);
};

console.log(factorial(4));

