

var tweetLink = "https://twitter.com/intent/tweet?text=";														//wysylanie tweetow -brakuje koncowki
var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";	//odbieranie cytatow

function getQuote() {
	$.getJSON(quoteUrl, createTweet);
}

function createTweet(input) {
	if (!input.quoteAuthor.length) {
		input.quoteAuthor = "Unknown author";
	}
	var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;
	if (tweetText.length > 140) {
	getQuote();
} else {
	var tweet = tweetLink + encodeURIComponent(tweetText);
	$('.quote').text(input.quoteText);										//tresc cytatu
	$('.author').text("Author: " + input.quoteAuthor);						//autor cytatu
	$('.tweet').attr('href', tweet);
}
}

$(document).ready(function() {
	getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
});


