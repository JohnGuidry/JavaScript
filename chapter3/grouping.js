var book1;
var book2;

book1 = {
    title     : "The Hobbit", //key : value
    author    : "J. R. R. Tolkien",
    published : 1937
};

book2 = {
    title     : "Northern Lights", //key : value
    author    : "Philip Pullman"
};


console.log(book1);
console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);

var event = {
    title      : "Appraisal Meeting",
    startDate  : "2016-10-04 16:00:00",
    endDate    :  "2016-10-04 17:00:00",
    location   : "Martha's office", //no need to escape a single quote in a double quote
    importance : 1,
    notes      : 'Don\'t forget the portfolio!' //How to esapce items
}