// creating a Guest List Array 
var GuestList = ["musadiqa", "afifa", "urooj", "mahrooh"];
// Making variable for those guest who cant come 
var dontCome = GuestList[0];
// print the name of guest who cant come 
console.log(dontCome, "nahi ahh sakty han");
// Add or Remove value from guest list Array
GuestList.splice(0, 1, "bushra");
// Message print for Bigger Table
console.log("Good News ! We Have Found a Bigger Table For Dinner.");
// Adding a new guest at starting index of array 
GuestList.unshift("muskan");
// Adding a new guest list at ending index of array
GuestList.push("Areeba");
// Making a variable for storing a middle index of our guest list of array  
var middleindex = Math.floor(GuestList.length / 2);
//Adding a new guest list at middle index of array
GuestList.splice(middleindex, 0, "haina");
// print message to updated list 
console.log("Updated List of our guest");
// Sending a invitation message to our guest one by one with their names
GuestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to Dinner with me?")); });
