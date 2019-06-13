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

/* var player1;
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
showPlayerInfo(player2); */

// ** from chapter 5, 6 **

// var player1;
// var player2;
// var getBorder;
// var showPlayerName;
// var getPlayerName;
// var showPlayerHealth;
// var getPlayerHealth;
// var showPlayerPlace;
// var getPlayerPlace;
// var showPlayerInfo;
// var getPlayerInfo;


// getBorder = function () {
//     return "===================================";
// }

// showPlayerName = function (playerName) {
//     console.log(playerName);
// }

// getPlayerName = function (playerName) {
//     return (playerName);
// }

// showPlayerHealth = function (playerName, playerHealth) {
//     console.log(playerName + " has health " + playerHealth);
// }

// getPlayerHealth = function (playerName, playerHealth) {
//     return (playerName + " has health " + playerHealth);
// }

// showPlayerPlace = function (playerName, playerPlace) {
//     console.log(playerName + " is in " + playerPlace);
// }

// getPlayerPlace = function (playerName, playerPlace) {
//     return (playerName + " is in " + playerPlace);
// }

// showPlayerInfo = function (inputPlayer) {
//     var player = inputPlayer;
//     showPlayerName(player.name);
//     console.log("-------------------------------");
//     showPlayerPlace(player.name, player.place);
//     showPlayerHealth(player.name, player.health);
//     console.log("-------------------------------");
//     console.log("");
// }

// getPlayerInfo = function (playerName, playerPlace, playerHealth) {
//     var playerInfo;

//     playerInfo = "\n" + getPlayerName(playerName);
//     playerInfo += "\n" + getBorder();
//     playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
//     playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
//     playerInfo += "\n" + getBorder();
//     playerInfo += "\n";

//     return (playerInfo);
// }

// player1 = {
//     name   : "Kandra",
//     place  : "The Dungeon of Doom",
//     health : 50
// };

// player2 = {
//     name   : "Dax",
//     place  : "The Old Library",
//     health : 40
// };

// /* Removed from chapter 5 demonstration
// showPlayerName(player1.name);
// showPlayerName(player2.name);

// showPlayerHealth(player1.name, player1.health);
// showPlayerHealth(player2.name, player2.health);

// showPlayerPlace(player1.name, player1.place);
// showPlayerPlace(player2.name, player2.place);*/

// //showPlayerInfo(player1);
// //showPlayerInfo(player2);

// console.log(getPlayerInfo(player1.name, player1.place, player1.health));
// console.log(getPlayerInfo(player2.name, player2.place, player2.health));

// ** 7, 8**

var spacer = {
    blank: function () {
        return "";
    },

    newLine: function() {
        return "\n";
    },

    line: function (length, character) {
        var longString = character;

        for(var i = 0; i < length; i++) { // I really did not want to write out 4 different 40 character count lines of symbols...
            longString += character;
        }

        length = Math.max(0, length);
        length = Math.min(40, length);
        return longString.substr(longString.indexOf(character), length);
    },

    wrap: function (text, length, character) {
        var padLength = length - text.length - 3;
        var wrapText = character + " " + text;
        wrapText += spacer.line(padLength, " ");
        wrapText += character;
        return wrapText;
    },

    box: function (text, length, character) {
        var boxText = spacer.newLine();
        boxText += spacer.line(length, character) + spacer.newLine();
        boxText += spacer.wrap(text, length, character) + spacer.newLine();
        boxText += spacer.line(length, character) + spacer.newLine();
        return boxText;
    }
};

var getPlayerName = function (player) {
    return (player.name);
};

var getPlayerHealth = function (player) {
    return (player.name + " has health " + player.health);
};

var getPlayerPlace = function (player) {
    return (player.name + " is in " + player.place);
};

var getPlayerItems = function (player) {
    var itemsString = "Items:" + spacer.newLine();

    player.items.forEach(function (item, i) { //Furhter Adventures from Chapter 8
        itemsString += "    - " + player.items[i + 1] + spacer.newLine();
    });

    return itemsString;
};

var getPlayerInfo = function (player, character) {
    var place = getPlayerPlace(player);
    var health = getPlayerHealth(player);
    var longest = Math.max(place.length, health.length) + 4;

    var info = spacer.box(getPlayerName(player), longest, character);
    info += spacer.wrap(place, longest, character);
    info += spacer.newLine() + spacer.wrap(health, longest, character);
    info += spacer.newLine() + spacer.line(longest, character);
    info += spacer.newLine();

    info += spacer.newLine();
    info += " " + getPlayerItems(player);
    info += spacer.newLine();
    info += spacer.line(longest, character);

    return info;
};

var showPlayerInfo = function (player, character) {
    console.log(getPlayerInfo(player, character));
};

var player1 = {
    name   : "Kandra",
    place  : "The Dungeon of Doom",
    health : 50,
    items  : ["a trusty lamp"]
};

var player2 = {
    name   : "Dax",
    place  : "The Old Library",
    health : 40
};

showPlayerInfo(player1, "=");
player1.items.push("a rusty key");
showPlayerInfo(player1, "*");

/* Further Adventures from Chapter 8
 *
 * 1) Add and remove items at the prompt
 *    using push and pop. Notice what is displayed
 *    when push and pop are called.
 *
 * 2) Use the index argument for forEach
 *    to number the items displayed. Make
 *    the numbers start at 1.
 *
 * 3) Write a showItem function that accepts
 *    a player and an itemNumber as arguments
 *    and displays the specified player item.
 *
 * 4) Write an addItem function that accepts
 *    a player and an item title as arguments
 *    and adds the item title to the player's
 *    item array.
 *
 */

var showItem = function (player, itemNumber) {
    console.log(player + ": " + player.items[itemNumber]);
  }
  
var addItem = function (player, itemTitle) {
    player.items.push(itemTitle);
}
  

addItem(player1, "a new item");

showPlayerInfo(player1, "=");