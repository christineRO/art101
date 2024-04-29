// index.js - for lab 7
// Author: Christine Role
// Date: 29, April

//my cool function:
function labSevenFunction() {
    var userName = window.prompt("Please provide your name.");
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

// output
document.writeln("You can have your name back, thanks for letting me borrow it: " + labSevenFunction() + "<br>");