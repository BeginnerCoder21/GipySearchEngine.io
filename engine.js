//search on clicking button
document.querySelector(".search").addEventListener('click',function(){
  var inputValue = document.querySelector('.js-userinput').value;
		var userInput = getUserInput();
	searchGiphy( userInput );

});

//search on pressing Enter key
document.querySelector(".inputf").addEventListener('keyup',function(e){
  if (e.which === 13) {
 		var userInput = getUserInput();
 		searchGiphy( userInput );
    }
});

function getUserInput() {
	var inputValue = document.querySelector('.inputf').value;
	return inputValue;
}

function searchGiphy( searchQuery ) {
	var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();
	GiphyAJAXCall.addEventListener('load', function( data ) {

			var actualData = data.target.response;
			pushToDOM(actualData);
			console.log(actualData);

	});

}

function pushToDOM( response )
{
  response = JSON.parse(response);
  var images = response.data;
  var container = document.querySelector('.container');
  container.innerHTML = "";

	// loop through data array and add IMG html
	images.forEach(function(image){
		// find img src
		var src = image.images.fixed_height.url;

		// concatenate a new IMG tag
		container.innerHTML += "<img src='"+ src +"' class='container-image' />";
	});
}
