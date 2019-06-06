//adding properties to an object from a function 7.1.2
var planet1 = {
    name   : "Jupiter",
    radius : 69911
};

var calculateSizes = function (planet) {
    var r = planet.radius;
    planet.area = 4 * 3.142 * r * r;
    planet.volume = 4 * 3.142 * r * r * r / 3;
};

var displaySizes = function (planet) {
    console.log(planet.name);
    console.log("surface area = " + planet.area + " square km");
    console.log("volume = " + planet.volume + " cubic km");
};

calculateSizes(planet1);
displaySizes(planet1);

//returning objects from functions 7.2
var buildPlanet;
var getPlanetInfo;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name     : name,
        position : position,
        type     : type,
        radius   : radius,
        sizeRank : rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet2));

//namespace - a collection of functions within an object 7.3
var spacer = {};
spacer.blank = function () {
    return "";
};

spacer.newLine = function() {
    return "\n";
};

console.log(spacer.blank());
console.log("Line 1" + spacer.newLine() + "Line 2");
console.log(spacer.blank());

// OR 

spacer = {
    blank: function() {
        return "";  
    },
    newLine: function() {
        return "\n"; 
    }
};

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength); //returns the maximum number of the two arguments
    lineLength = Math.min(40, lineLength);//returns the minimum number of the two arguments
    return line.substr(0, lineLength);
};

console.log(line(30));
console.log(line(40));
console.log(line(50));

var message = "The cow jumped over the Moon! M";

var charIndex = message.indexOf("M"); //retreives the index of the first instance of case sensitive M

console.log(message.substr(charIndex, 3));
console.log(message.indexOf("cow"));
console.log(message.indexOf("o"));
