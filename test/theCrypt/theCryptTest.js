QUnit.test("Player Test", function (assert) {
    var outputPlayer = player;
    assert.deepEqual(outputPlayer,
        {
            name   : "Kandra",
            health : 50,
            place  : "The Dungeon of Doom",
            items  : "a rusty key, The Sword of Destiny, a piece of cheese"
        }, "We expect our player variable to be Kandra, HP 50, in The Dungeon of Doom, with a rusty key, The Sword of Destiny, a piece of cheese.");
});