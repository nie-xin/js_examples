// the name variable is not accessible outside Person constructor
function Person(name) {
    this.getName = function() {
        return name;
    };

    this.setName = function (value) {
        name = value;
    };
}

var person = new Person("Nicholas");
console.log(person.getName());
person.setName("Greg");
console.log(person.getName());

