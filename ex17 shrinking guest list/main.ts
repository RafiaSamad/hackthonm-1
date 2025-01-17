// creating a Guest List Array 
let GuestList = ["musadiqa", "afifa", "urooj", "mahrooh"];

// Making variable for those guest who cant come 
let dontCome = GuestList[0];

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
let middleindex: number = Math.floor(GuestList.length / 2);

//Adding a new guest list at middle index of array
GuestList.splice(middleindex, 0, "haina");

// print message to updated list 
console.log("Updated List of our guest");

// Sending a invitation message to our guest one by one with their names
GuestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to Dinner with me?`));

console.log("unfortuntaly, the Dinner Table wont arrive on time, so I can only invite two guest for Dinner with me");

//Using while-loop to remove guest from the array until only two name remain 
while(GuestList.length > 2) {
    let removedGuest = GuestList.pop();
    console.log(`Sorry, ${removedGuest}, I cant invite you to dinner`);
}
// Sending a invitations to the last two guest on the list 
console.log("invitation to the last 2 guest");

GuestList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to Dinner`));
// Removing last two guest from the list
GuestList.pop();
GuestList.pop();

console.log("Empty list", GuestList);