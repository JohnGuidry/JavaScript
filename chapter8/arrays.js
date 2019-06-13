//adding and removing items from an array 8.2.1
var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " wa removed.");
console.log(items.join(" and "));

//slice and splice 8.2.2

//slice only gets the information, slice does not modify the array
items = ["The Pyramids", "The Grand Canyon", "Bondi Beach"];
console.log(items.slice(0,2)); 
//would output [0], [1] slice grabs the first index to the index you do not want.

//splice modifys the array
items.splice(0,2);
console.log("Items after splice: " + items);
// would output just Bondi Beach since we started at [0] and spliced the first two elements

// ["Bondi Beach"]
items.splice(0, 0, "The Great Wall"); //Does not remove anything but adds The Great Wall ["Bondi Beach", "The Great Wall"]
items.splice(1, 1, "The Grand Canyon"); //["The Great Wall", "The Grand Canyon"]

//8.2.3 forEach
var showInfo;

items = [
    "The Pyramids",
    "The Grand Canyon",
    "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);


var getTotalBill = function (itemCosts, itemCounts) {
    var total = 0;

    itemCosts.forEach(function (cost, i) { //weird that indexs can just be used like this...
        total += cost * itemCounts[i];
    });
    return total;
}

var costs = [ 1.99, 4.95, 2.50, 9.87];
var numOfEach = [ 2, 1, 5, 2];

console.log("The total cost is $" + getTotalBill(costs, numOfEach));


