// index.js - for lab 7
// Author: Christine Role
// Date: 29, April




//my cool function:
function labSevenFunction() {
    var userName = window.prompt("Okay, you're gonna have to say that one more time for me pleeaaaase.");
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
var taskInput = window.prompt("Can you tell me your name please.");

// SPLIT userInput into a string:
var taskArray = taskInput.split("");

// actually SORT the array:
// also note this code was borrowed from WesBot, but I can break it down:
var taskInputSorted =
    // compare parameters a and b, which is two select items from the userInputArray...
    taskArray.sort(function (a, b) {
    // essentially, these if statements are comparing which should go first between each pair of letters in the array.
    // by making both lowercase in a hypothetical sitution, it helps the sort() function compare them.
    // it will move the index of the item in the array forward or back depending on the result of the comparison.
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    // it returns 0 if they're the same, meaning it doesn't necessarily go ahead or behind either character
    return 0;
    });

// JOIN the sorted array into a string:
var taskInputJoined = taskInputSorted.join("");

// When I output a name, can I make my script output a div that also controls its css?
// yeah I put it with the ambigram:
var div = document.createElement("div");
    div.innerHTML = "Hola.";
    div.style.color = "white";
    div.style.fontSize = "20px";
    div.style.fontFamily = "Helvetica";
    div.style.textAlign = "center";
    div.style.border = "4px solid black";
    div.style.padding = "5%";
    div.style.margin = "5%";
    div.style.backgroundColor = "green";
    div.style.borderRadius = "10px";

console.log(taskInputSorted);

// function for shuffling an 'ambigram':
// OKAY I PRETTY MUCH RIPPED THIS FROM STACK OVERFLOW, but I can break it down:
function taskShuffle(array){
    let currentIndex = array.length;

    // we make a while loop,
    // which will run while the current index is NOT equal to 0
    while (currentIndex != 0) {
  
      // it picks a random index from the array...
      // Math.floor() rounds down to the nearest whole number
      // Math.random() generates a random number between 0 and 1
      // multiplying it by the current index gives us a random number between 0 and the current index...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // and switches the current index with a random idex...
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    // now we return the array, which should be shuffled!
    return array;
}

// variable for the shuffle!!
var taskAmbigram = taskShuffle(taskInputSorted);
var taskAmbigram = taskAmbigram.join("");
var taskAmbigram = taskAmbigram.toLowerCase().split("");
var taskAmbigram = taskAmbigram.join("");
var taskAmbigram = taskAmbigram.charAt(0).toUpperCase() + taskAmbigram.slice(1);
console.log(taskAmbigram);


// append the output to the div:
div.innerHTML = "Congratulations! Your new name is: " + taskAmbigram + "<br>";

// append that shit to the body:
document.body.appendChild(div);


// Can I make it so that window.prompt() happens outside of my functions,
// then pass the name as a parameter to the functions
// and return the result?
    // yes, which is what var taskInput is


// OUTPUT:
// actual task output:
document.writeln("You can have your name back, thanks for letting me borrow it: " + labSevenFunction() + "<br>");
// bonus task output:
document.writeln("This time, I didn't care about capitalization. Thanks for lending me your name: " + taskInputJoined + "<br>");
