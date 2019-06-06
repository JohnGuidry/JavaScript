QUnit.test("planet1 Test", function (assert) {
    var outputPlanet1 = planet1;
    assert.deepEqual(outputPlanet1,
        {
            name   : "Jupiter",
            radius : 69911,
            area   : 61426702271.128,
            volume : 1431467394158943.2
        }, "We expect our planet1 variable to be " + outputPlanet1.name +  " with a radius of " + outputPlanet1.radius);
});
QUnit.test( "planet1 Area Test", function( assert ) {
    var outputArea = 61426702271.128;
    assert.equal( outputArea, planet1.area, "Area of " +  planet1.name + " equals " + outputArea);
  });
QUnit.test( "planet1 Volume Test", function( assert ) {
    var outputVolume = 1431467394158943.2;
    assert.equal( outputVolume, planet1.volume, "Volume of " +  planet1.name + " equals " + outputVolume);
  });
  QUnit.test("planet2 Test", function (assert) {
    var outputPlanet2 = planet2;
    assert.deepEqual(outputPlanet2,
        {
            name   : "Neptune",
            position : 8,
            type     : "Ice Giant",
            radius   : 24622,
            sizeRank : 4
        }, "We expect our planet2 variable to be " + outputPlanet2.name + 
        " with position " + outputPlanet2.position + 
        " with type " + outputPlanet2.type + 
        " with rank " + outputPlanet2.sizeRank);
});