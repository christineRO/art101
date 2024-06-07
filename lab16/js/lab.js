/*
    Author: Christine Role
    Date:   06/07/2024
    Class:  ART 101

    crediting a great amount of this code to wes himself. I thankfully understand everything with the comments, thank you!
*/



var URL = "https://xkcd.com/info.0.json";

// https://xkcd.com/json.html
// endpoint https://xkcd.com/456/info.0.json
var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

// Endpoint format: http://xkcd.com/614/info.0.json

// a helper function to turn single and double quotes into
// html symbols so they don't confuse html tags
function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}




function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);
  // get data via ajax from numbersapi


  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (ENDPOINT)
      url: ourURL,
      // Whether this is a POST or GET request
      type: "GET",
  })


  // If the request succeeds
  .done(function(data) {
      // console.log(data);
      var imageUrl = data.img;
      // we use .replace(/"/g, '\\"') after the text strings because
      // sometimes there are single and double quotes in the text
      // that confuses the html
      var title = data.title;

      // using make_safe to replace single and double quotes
      title = make_safe(title);

      var alt = data.alt;

      // doing the same thing here
      alt = make_safe(alt);

      // registering comic number so we can flip through the comics.
      var comicNum = data.num;

      var apiToHtml = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prevButton">Previous</button><button id="nextButton">Next</button>
        </div>`


      // console.log("My new html: \n", html);
      $("#output").html(apiToHtml);

      // add event listener to new prev button
      $("#prevButton").click(function(){
        getComic(comicNum + 1);
      });
      // add event listener to new next button
      $("#nextButton").click(function(){
        getComic(comicNum - 1);
      });
  })

  .fail(function(){
    console.log("big fail.");
  })

}




// start things off
getComic();