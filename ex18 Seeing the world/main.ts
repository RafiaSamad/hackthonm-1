   // Making a Array of Countries and print its Orginal Order
   let  countriesToVisit: String[] = ["China", "Denmark", "Brazil", "Argentina"];
   console.log("Orginal Order:", countriesToVisit);
   
  // Print the Array in Alphabetical Order without modifying the Actual Array List 
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the Array is still in its Original Order
console.log("Still in Orginal Order :", countriesToVisit);

// Print the Array in Reversed Order without modifying the ACtualArray List
console.log("Reversed  Order :", [...countriesToVisit].reverse()); 

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

