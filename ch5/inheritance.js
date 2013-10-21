function SuperType() {
	this.property = true;
}

SuperType.prototype.getSuperValue = function() {
	return this.property;
};

function SubType() {
	this.subproperty = false;
}

SubType.prototype = new SuperType();

/*SubType.prototype.getSubValue = function() {
	return this.subproperty;
};*/

/*//new method
SubType.prototype.getSubValue = function() {
    return this.subproperty;
};

//override existing method
SubType.prototype.getSuperValue = function() {
    return false;
};*/

// try to add new methods
SubType.prototype = {
    getSubValue: function() {
        return this.subproperty;
    },

    someOtherMethod: function() {
        return false;
    }
};

var instance = new SubType();
//console.log(instance.getSuperValue());

console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);

console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));


/*console.log(instance.getSubValue());
console.log(instance.getSuperValue());

console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);

console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));*/
