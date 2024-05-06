// index.js - for lab 7
// Author: Christine Role
// Date: 6, May




// Task 2: Experiment in the Console

// Create an array of numbers and assign it to a variable.
var array = [1, 2, 3, 4, 5];

// Create a named function that will take a single parameter, do a calculation on it (sqrt, sqr, addition, etc), and return the result.
function taskTwoFunction(number){
    var results = number + 2;
    return results;
}

// Testing functions with a few different numbers...
console.log(taskTwoFunction(1));
console.log(taskTwoFunction(7));
console.log(taskTwoFunction(4));

// Use map on your array using your function as a callback to operate on all the numbers in your array.
array.map(taskTwoFunction);

// Now use a new anonymous function as a callback with map to do some new operation on each of the numbers in your array.
array.map(function(number){
    var results = number * 2;
    return results;
})

// Try setting a variable to the results of your map function and print it out:
var mapResults = array.map(taskTwoFunction);
console.log("Results: ", mapResults);




// Task X: Bonus

// My map results data
var mapResultsBonus = "My map results here: " + mapResults;

// Use jQuery to select the element by its ID and set the HTML content
$("#scriptOutput").html(mapResultsBonus);

// To explain what's happening, the format of jQuerey is as follows:
// $(selector).action()
// $ shows it's jQuery, and the selector is the same as simply calling out a specific element (in particular within the HTML file)
// .action() is the action that will be performed on the selected element
// so, the function above select the element with the ID "scriptOutput" and sets the HTML content to the variable mapResultsBonus