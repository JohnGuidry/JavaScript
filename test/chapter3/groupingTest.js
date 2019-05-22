QUnit.test("book Test", function (assert) {
    var outputBook = book;
    assert.deepEqual(outputBook,
        {
            title: "The Hobbit",
            author: "J. R. R. Tolkien",
            published: 1937
        }, "We expect our book variable to be The Hobbit by J. R. R. Tolkien written in 1937.");
});