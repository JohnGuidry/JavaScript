var findTotal = function () {}; //Function Expression - loads when the interpreter reaches the function
function findTotal () {}; //Function Declaration - loads before any code is executed
//ex:
/*alert(foo()); //error foo is not a function... Function Expression was not loaded prior to calling function
var foo = function () {
    return 5
};

alert(foo2()); //Function Declaration was loaded prior to calling function so this runs fine.
function foo2 () {
    return 5
};*/

var number1 = 1000;
var number2 = 66;
var result;
var findTotal;

findTotal = function () {
    result = number1 + number2;
};

findTotal();
console.log(number1 + " + " + number2 + " = " + result);

// ** Movie Information **
var movie1;
var movie2;
var movie3;
var showMovieInfo;

movie1 = {
    title     : "Inside Out",
    actors    : "Amy Poehler, Bill Hader",
    directors : "Pete Doctgor, Ronaldo Del Carmen"
};

movie2 = {
    title     : "Spectre",
    actors    : "Daneil Craig, Christoph Waltz",
    directors : "Sam Mendes"
};

movie3 = {
    title     : "Star Wars: Episode VII - The Force Awakens",
    actors    : "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors : "J.J. Abrams"
}

showMovieInfo = function(inputMovie) {
    var movie = inputMovie;
    console.log("Movie information for " + movie.title);
    console.log("-------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("-------------------------------");
    console.log("");
}

//movie = movie1; -- removed to reduce lines of code and to add input to showMovieInfo
showMovieInfo(movie1);

//movie = movie2;
showMovieInfo(movie2);

//movie = movie3;
showMovieInfo(movie3);