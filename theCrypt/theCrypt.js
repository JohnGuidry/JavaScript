// ** from chapter 2 **
//var playerName = "Kandra";
//var locationName = "The Dungeon of Doom";

//console.log(playerName + " is in " + locationName);

// ** from chapter 3 **

/*var player;

player = {
    name   : "Kandra",
    health : 50,
    place  : "The Dungeon of Doom",
    items  : "a rusty key, The Sword of Destiny, a piece of cheese"
};

console.log(player.name);
console.log(player.name + " is in " + player.place);
console.log(player.name + " has health " + player.health);
console.log("Items: " + player.items);*/

// ** from chapter 4 **

var player1;
var player2;
var showPlayerInfo;

player1 = {
    name   : "Kandra",
    place  : "The Dungeon of Doom",
    health : 50
};

player2 = {
    name   : "Dax",
    place  : "The Old Library",
    health : 40
};

showPlayerInfo = function (inputPlayer) {
    var player = inputPlayer;
    console.log(player.name);
    console.log("-------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("-------------------------------");
    console.log("");
}

showPlayerInfo(player1);
showPlayerInfo(player2);