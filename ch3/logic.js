console.log(!false);
console.log(!"blue");
console.log(!0);
console.log(!NaN);
console.log(!"");
console.log(!12345);

var found = false;
var result = (found && someUndeclaredVariable);
console.log(result);

found = true;
result = (found || someUndeclaredVariable);
console.log(result);