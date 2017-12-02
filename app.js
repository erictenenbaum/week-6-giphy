console.log("hello");

var topics = ["baseball", "basketball", "football", "hockey", "soccer"];

var buttonHolderDOM = $("#buttonHolder");
var gifyHolderDOM = $("#gifyHolder");
var sportsFormInputDOM = $("#sport-input");

function displayGifs() {

	var searchedTopic = ($(this).attr("data-name"));		
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchedTopic + "&limit=10" + "&api_key=z0IqDJZH4abMAs3QwyLC3xTLZyRhR4cv";


	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function (response) {	
		console.log(response);

		var gifImages = response.data;
		for (var i = 0; i < gifImages.length; i++) {			

			var newP = $("<p>");
			newP.text(gifImages[i].rating);
					
			var newImage = $("<img>");
			newImage.attr("id", "gifImg");
			newImage.attr("src", gifImages[i].images.fixed_height_still.url);
			newImage.attr("data-state", "still");
			newImage.attr("data-still", gifImages[i].images.fixed_height_still.url);
			newImage.attr("data-gif", gifImages[i].images.fixed_height.url);

			gifyHolderDOM.prepend(newP);
			gifyHolderDOM.prepend(newImage);
		}
	});
}

function createButtons() {

	buttonHolderDOM.empty();
	sportsFormInputDOM.val("");

	for (var i = 0; i < topics.length; i++) {
		var newButton =	$("<button>");
		newButton.text(topics[i]);
		newButton.attr("class", "gifButton");
		newButton.attr("data-name", topics[i]);
		buttonHolderDOM.append(newButton);
	}
};

$("#add-sport").on("click", function(event){

	event.preventDefault();

	var sportButton = $("#sport-input").val().trim();	

	topics.push(sportButton);	

	createButtons();

});

buttonHolderDOM.on("click", ".gifButton", displayGifs);


createButtons();

gifyHolderDOM.on("click", "#gifImg", switchGif );

function switchGif(){
	console.log($(this).attr("data-state"))

	var state = $(this).attr("data-state")

	if(state == "still"){

		$(this).attr("src", $(this).attr("data-gif") );
		$(this).attr("data-state", "gif");

	}
	else {

		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	}
};







