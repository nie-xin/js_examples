var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
    valueOf: function() {
        return -1;
    }
};

s1++;
console.log(s1);
s2++;
console.log(s2);
b++;
console.log(b);
f--;
console.log(f);
o--;
console.log(o);

var s3 = "z";

s1 = +s2;
s2 = +s2;
s3 = +s3;
b = +b;
b = +f;
o = +o;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(b);
console.log(f);
console.log(o);

s1 = "01";
s2 = "1.1";
s3 = "z";
b = false;
f = 1.1;
o = {
valueOf: function() {
return -1;
}
};

s1 = -s1;
s2 = -s2;
s3 = -s3;
b = -b;
f = -f;
o = -o;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(b);
console.log(f);
console.log(o);
