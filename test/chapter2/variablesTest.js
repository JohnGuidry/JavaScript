QUnit.test( "score Test", function( assert ) {
    var outputScore = score;
    assert.equal( outputScore, "150", "We expect our score variable to be 150." );
});
QUnit.test( "message Test", function( assert ) {
    var outputMessage = message;
    assert.equal( outputMessage, "Congratulations! Your tweet won a prize...", "We expect our message variable to be 'Congratulations! Your tweet won a prize...'." );
});
QUnit.test( "playerName Test", function( assert ) {
    var outputPlayerName = playerName;
    assert.equal( outputPlayerName, "Kandra", "We expect our playerName variable to be Kandra." );
});
QUnit.test( "locationName Test", function( assert ) {
    var outputLocationName = locationName;
    assert.equal( outputLocationName, "The Dungeon of Doom", "We expect our locationName variable to be 'The Dungeon of Doom'." );
});