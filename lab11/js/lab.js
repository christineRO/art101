/*
    lab.js -  This simple JavaScript/jQuery script gets a value from an input field and outputs and modified version.

    Requirements: jQuery must be loaded for this script to work.

    Author: Christine Role
    Date: May 19, 2024
*/

/* ripping code off of Canvas...*/
// Grabbing function from a previous lab that lets us sort a string/anagram:
function sortString(inputString){
    return inputString.split('').sort().join('');
}

// adding an event listener for my button...
$("#submit").click(function(){
    // now we is stealing ze value of input:
    const userName = $("#user-name").val();

    // sort this shit
    var userNameSorted = sortString(userName);

    $("#output").html('<div class=text"><p>' + userNameSorted + '</p></div>');
});



// Task X: Bonus

/*
// implementing anagram function from lab 7...
function anagram(inputString){
    return inputString.sortString(inputString).join('').toLowerCase().split('').join('').charAt(0).toUpperCase().slice(1);
}

$("#task-X-button").click(function(){
    const taskXinput = $("#task-X-input").val();
    var taskX = anagram(taskXinput);

//im having coughing fits im gonna stop here... and fix it at some point
    $("#taskXoutput").append('<div class=text"><p>' + taskX + '</p></div>')
});
*/