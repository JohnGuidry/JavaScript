var outputMovie;

QUnit.test("findTotal Test", function (assert) {
    var outpuResult = result;
    assert.equal( outpuResult, "1066", "We expect our result variable to be 1066." );
});
QUnit.test("movie1 Test", function (assert) {
    outputMovie = movie1;
    assert.deepEqual(outputMovie,
        {
            title     : "Inside Out",
            actors    : "Amy Poehler, Bill Hader",
            directors : "Pete Doctgor, Ronaldo Del Carmen"
        }, "We expect our movie1 variable to be " + outputMovie.title + " by " + outputMovie.directors + " starring " + outputMovie.actors + ".");
});
QUnit.test("movie2 Test", function (assert) {
    outputMovie = movie2;
    assert.deepEqual(outputMovie,
        {
            title     : "Spectre",
            actors    : "Daneil Craig, Christoph Waltz",
            directors : "Sam Mendes"
        }, "We expect our movie1 variable to be " + outputMovie.title + " by " + outputMovie.directors + " starring " + outputMovie.actors + ".");
});
QUnit.test("movie3 Test", function (assert) {
    outputMovie = movie3;
    assert.deepEqual(outputMovie,
        {
            title     : "Star Wars: Episode VII - The Force Awakens",
            actors    : "Harrison Ford, Mark Hamill, Carrie Fisher",
            directors : "J.J. Abrams"
        }, "We expect our movie1 variable to be " + outputMovie.title + " by " + outputMovie.directors + " starring " + outputMovie.actors + ".");
});