var uri = "http://www.wrox.com/illegal value.html#start";
console.log(encodeURI(uri));
console.log(encodeURIComponent(uri));

uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
console.log(decodeURI(uri));
console.log(decodeURIComponent(uri));

