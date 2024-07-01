"use strict";
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, category) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
    }
    return Grocery;
}());
var groceries = [
    new Grocery("Milk", 3, "Dairy"),
    new Grocery("Bread", 6, "Bakery"),
    new Grocery("Eggs", 11, "Poultry")
];
function displayGroceries(groceries) {
    var htmlOutput = "<ul>";
    groceries.forEach(function (grocery) {
        htmlOutput += "<li>".concat(grocery.name, " - Quantity: ").concat(grocery.quantity, " (Category: ").concat(grocery.category, ")</li>");
    });
    htmlOutput += "</ul>";
    return htmlOutput;
}
document.getElementById('grocery-list').innerHTML = displayGroceries(groceries);
