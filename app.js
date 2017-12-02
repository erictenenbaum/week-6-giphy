console.log("hello");

var topics = ["baseball", "basketball", "football", "hockey", "soccer"];

var buttonHolder = $("#buttonHolder");
var gifyHolder = $("#gifyHolder");
var sportsFormInput = $("#sport-input");

	function displayGifs() {

	var searchedTopic = ($(this).attr("data-name"));		
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchedTopic + "&limit=10" + "&api_key=z0IqDJZH4abMAs3QwyLC3xTLZyRhR4cv"


	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function (response) {	
		console.log(response);

		var gifImages = response.data;

		// console.log(gifImages[1].url);

		// var newImage = $("<img>").attr("src", gifImages[0].images.fixed_height.url);

		// gifyHolder.append(newImage);		

		// console.log(newImage);

		for (var i = 0; i < gifImages.length; i++) {

			var newImage = $("<img>");
			newImage.attr("src", gifImages[i].images.original_still.url);

			gifyHolder.append(newImage);
		}
	})

}

	function createButtons() {

		buttonHolder.empty();
		sportsFormInput.val("")

			for (var i = 0; i < topics.length; i++) {
				var newButton =	$("<button>");
				newButton.text(topics[i]);
				newButton.attr("class", "gifButton");
				newButton.attr("data-name", topics[i]);
				buttonHolder.append(newButton);
			}

	}

	$("#add-sport").on("click", function(event){

	event.preventDefault();

	var sportButton = $("#sport-input").val().trim();	

	topics.push(sportButton);	

	createButtons();
	
});


	$(document).on("click", ".gifButton", displayGifs);


createButtons();





// $(".gifButton").on("click", function() {
// 	// displayGifs();
// 	// createButtons();
// 	alert($(this).attr("data-name"));

// });


