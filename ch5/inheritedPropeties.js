var school = {schoolName: "MIT"};

console.log("schoolName" in school);
console.log("schoolType" in school);
// toString method is inherited from Object.prototype
console.log("toString" in school);

console.log(school.hasOwnProperty("schoolName"));
console.log(school.hasOwnProperty("toString"));
