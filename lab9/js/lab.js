/*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

    Requirements: jQuery must be loaded for this script to work.

    Author: Christine Role
    Date: 2024, May 7
*/




// TASK 2: Create a Javascript File using jQuery
// ^^ Added comment block

/*
// Add Buttons: Using jQuery, append buttons to your challenge, problems, and results sections of your document.
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// Add an Event Listener: Add a click listener to each button:
$("#button-challenge").click(function() {
    // adding (or subtracting) the "special" class to the section
    $("#challenge").toggleClass("special");
});

$("#button-problems").click(function() {
    $("#problems").toggleClass("special");
});

$("#button-results").click(function() {
    $("#results").toggleClass("special");
});

*/




// Task X: Do this crap in 4 lines.
$(".minor-section").append("<button class='button-minors'>Make Special</button>");
$(".button-minors").click(function() {
    $(this).parent().toggleClass("special");
});