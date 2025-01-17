var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries and print its Orginal Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);
// Print the Array in Alphabetical Order without modifying the Actual Array List 
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the Array is still in its Original Order
console.log("Still in Orginal Order :", countriesToVisit);
// Print the Array in Reversed Order without modifying the ACtualArray List
console.log("Reversed  Order :", __spreadArray([], countriesToVisit, true).reverse());
// Show that the Array is still in its Original Order
console.log("Still in Orginal Order :", countriesToVisit);
// We have Changed the Orginal Array Order Now
console.log("Orginal Array Reversed;", countriesToVisit.reverse());
//Print the Array to show that it`s back to its orginal order
console.log("Back to Orginal Order;", countriesToVisit.reverse());
//Print the Arrayto show that its Order has been changed in Alphabetical Order now 
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// We have Changed again  the Orginal Array Order Now
console.log("Orginal Array Reversed Again;", countriesToVisit.reverse());
