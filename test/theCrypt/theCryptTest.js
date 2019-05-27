var outputPlayer;

QUnit.test("player1 Test", function (assert) {
    outputPlayer = player1;
    assert.deepEqual(outputPlayer,
        {
            name   : "Kandra",
            place  : "The Dungeon of Doom",
            health : 50
        }, "We expect our player1 to be " + outputPlayer.name + " with HP " + outputPlayer.health + " in " + outputPlayer.place + ".");
});
QUnit.test("player2 Test", function (assert) {
    outputPlayer = player2;
    assert.deepEqual(outputPlayer,
        {
            name   : "Dax",
            place  : "The Old Library",
            health : 40
        }, "We expect our player1 to be " + outputPlayer.name + " with HP " + outputPlayer.health + " in " + outputPlayer.place + ".");
});