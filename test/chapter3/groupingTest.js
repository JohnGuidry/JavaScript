QUnit.test("book1 Test", function (assert) {
    var outputBook1 = book1;
    assert.deepEqual(outputBook1,
        {
            title     : "The Hobbit",
            author    : "J. R. R. Tolkien",
            published : 1937
        }, "We expect our book variable to be The Hobbit by J. R. R. Tolkien written in 1937.");
});
QUnit.test("book2 Test", function (assert) {
    var outputBook2 = book2;
    assert.deepEqual(outputBook2,
        {
            title     : "Northern Lights",
            author    : "Philip Pullman"
        }, "We expect our book variable to be Northern Lights by Philip Pullman.");
});