console.log("hello");

var topics = ["baseball", "basketball", "football", "hockey", "soccer"];

var buttonHolder = $("#buttonHolder");
var gifyHolder = $("#gifyHolder");
var sportsFormInput = ("#sport-input");


function createButtons() {

	buttonHolder.empty();
	// sportsFormInput.val("")

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

	// sportsFormInput.val("");

	
});



createButtons();

