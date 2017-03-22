// this was originally made in sublime text 3 then uploaded to codepen,
// it was tested in a local host made it with npm http-server and using google chrome,
// still need some work in the quote's font

var tweet;
var tweetUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

function getQuote() {
  var quote = document.getElementById("quote");
  var author = document.getElementById("author");
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == XMLHttpRequest.DONE) {
      var data;
      data = xhr.responseText;
      quote.innerHTML = JSON.parse(data)[0].content;
      author.innerHTML = JSON.parse(data)[0].title;
      tweet = JSON.parse(data)[0].content.replace("<p>", "'").replace("</p>", "'") + " - " + JSON.parse(data)[0].title;
    }
    var tweetBTN = document.getElementById("tweetQuote");
    if(JSON.parse(data)[0].content.length + JSON.parse(data)[0].title.length > 140) {
      tweetBTN.disabled = true;
    }
    else {
     tweetBTN.disabled = false;
    }
  }
  xhr.open("GET", "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&cache="+Date.now(), true);
  xhr.send();
}

var btn = document.getElementById("newQuote");
btn.addEventListener("click", getQuote);

function tweetQuote(){
  window.location = encodeURI(tweetUrl +  "'" + tweet + "'") + "_blank";
}

var tweetBTN = document.getElementById("tweetQuote");
tweetBTN.addEventListener("click", tweetQuote);

// The change color function is not finished, there are colors too bright and it will be difficult to read the quotes

function changeColor() {

  var r, g, b;

  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);

  var gradient = document.getElementById("gradient");
  var header = document.getElementById("main-header");
  var quote = document.getElementById("quote");
  var author = document.getElementById("author");

  gradient.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
  quote.style.color = "rgb(" + r + "," + g + "," + b +")";
  author.style.color = "rgb(" + r + "," + g + "," + b +")";
  header.style.backgroundColor = "rgb(" + Math.floor(r*0.80) + "," + Math.floor(g*0.80) + "," + Math.floor(b*0.80) +")";
}

var btn = document.getElementById("newQuote");
btn.addEventListener("click", changeColor);