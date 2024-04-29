// index.js - purpose and description here
// Author: Christine Role
// Date: 28, April 2024

// Task 2: A JavaScript Program

// Defining the variables:
var myTransport = ['car', 'bus', 'legs'];
var myMainRide = {
  make: "Hyundai",
  model: "Elantra",
  color: "Silver",
  year: 2013,
  age: function() {
    return 2024 - this.year;
  }
};

// Using document.writeln() to output myTransport:
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");