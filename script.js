var tweet;

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
      tweet = JSON.parse(data)[0].content.replace("<p>", "").replace("</p>","") + " - " + JSON.parse(data)[0].title;

    }
  }
  xhr.open("GET", "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&cache="+Date.now(), true);
  xhr.send();
}

var btn = document.getElementById("btn");
btn.addEventListener("click", getQuote);


var tweetUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

// encondeUrl(tweetUrl +  "'" + tweet + "'")