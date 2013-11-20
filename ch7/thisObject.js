var name = "The window";

/*var object = {*/
    //name : "My object",
    //getNameFunc: function() {
        //var that = this;
        //return function() {
            //return that.name;
        //};
    //}
//};

/*console.log(object.getNameFunc()());*/

var object = {
    name : "My object",

    getName : function() {
        return this.name;
    }
};

console.log(object.getName());
console.log((object.getName)());
console.log((object.getName = object.getName)());

