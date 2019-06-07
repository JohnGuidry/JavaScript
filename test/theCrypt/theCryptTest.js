QUnit.test("player1 Test", function (assert) {
    var outputPlayer = player1;
    assert.deepEqual(outputPlayer,
        {
            name   : "Kandra",
            place  : "The Dungeon of Doom",
            health : 50
        }, "We expect our player1 to be " + outputPlayer.name + " with HP " + outputPlayer.health + " in " + outputPlayer.place + ".");
});
QUnit.test("player1 name getter Test", function (assert) {
    var outputPlayer = player1;
    assert.equal(outputPlayer.name, getPlayerName(outputPlayer), "We expect our player1 name to be " + outputPlayer.name + ".");
});
QUnit.test("player1 health getter Test", function (assert) {
    var outputPlayer = player1;
    assert.equal(outputPlayer.name + " has health " + outputPlayer.health, getPlayerHealth(outputPlayer), "We expect our player1 health to be " + outputPlayer.health + ".");
});
QUnit.test("player1 place getter Test", function (assert) {
    var outputPlayer = player1;
    assert.equal(outputPlayer.name + " is in " + outputPlayer.place, getPlayerPlace(outputPlayer), "We expect our player1 place to be " + outputPlayer.place + ".");
});
QUnit.test("player2 Test", function (assert) {
    var outputPlayer = player2;
    assert.deepEqual(outputPlayer,
        {
            name   : "Dax",
            place  : "The Old Library",
            health : 40
        }, "We expect our player1 to be " + outputPlayer.name + " with HP " + outputPlayer.health + " in " + outputPlayer.place + ".");
});