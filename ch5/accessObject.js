var book = {title: "Ways to Go", pages: 280, bookMark1: "Page20"};

// dot notation
console.log(book.title);
console.log(book.pages);

// bracket notation
console.log(book["title"]);
console.log(book["pages"]);

var bookTitle = "title";
console.log(book[bookTitle]);
console.log(book["bookMark" + 1]);
