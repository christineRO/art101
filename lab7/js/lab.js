// index.js - for lab 7
// Author: Christine Role
// Date: 29, April


//my cool function:
function labSevenFunction() {
    var userName = window.prompt("First.");
    // SPLITTING the name into an array:
    var userNameArray = userName.split("");
    // SORT the array:
    var userNameArraySort = userNameArray.sort();
    // JOIN it back into a string:
    var userNameSorted = userNameArraySort.join("");
    // WTF you could've just put it in a single line, where it'd be:
    //              var userNameSorted.split("").sort().join("");
    return userNameSorted;
}


// TASK X: BONUS:
// have sort() deal with upper and lower case-- Can I make the function sort both of them together?

// putting the window.prompt here so that it exists before the function.
var taskInput = window.prompt("Second.");

// SPLIT userInput into a string:
var taskArray = taskInput.split("");

// actually SORT the array:
// also note this code was borrowed from WesBot, but I can break it down:
var taskInputSorted =
    // compare parameters a and b, which is two select items from the userInputArray...
    taskArray.sort(function (a, b) {
    // essentially, these if statements are comparing which should go first between each pair of letters in the array.
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    // it returns 0 if they're the same, meaning it doesn't necessarily go ahead or behind either character
    return 0;
    });

// When I output a name, can I make my script output a div that also controls its css?

// Can I make it so that window.prompt() happens outside of my functions,
// then pass the name as a parameter to the functions
// and return the result?
    // yes, which is what var taskInput is


// OUTPUT:
// actual task output:
document.writeln("You can have your name back, thanks for letting me borrow it: " + labSevenFunction() + "<br>");
// bonus task output:
document.writeln("Thanks for letting me borrow your name: " + taskInputSorted + "<br>");




// CLASS EXERCISE vvvv

//function reverseStr(str){
	//console.log("Original String:", str);
    // convert string to array
  //const array = str.split('');
  //console.log("Split str:", array);
  // reverse array
  //const revArray = array.reverse();
  //console.log("Rev array:", revArray);
  // turn it back into a str
  //const newStr = revArray.join('');
  //console.log("Joined str:", newStr);
  // return str
//}

// const myStr = "Two households, both alike in dignity, In fair Verona, where we lay our scene, From ancient grudge break to new mutiny, Where civil blood makes civil hands unclean.";

// console.log(reverseStr(myStr));

// THIS WAS DURING CLASS ^^^^