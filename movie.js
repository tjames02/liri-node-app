var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var Movie = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findMovie = function(term) {
    var URL = "https://www.omdbapi.com/?t=" + term + "&apikey=trilogy";

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;
        
        console.log("Title of the movie: "+jsonData.Title);
        console.log("Year the movie came out: "+jsonData.Year);
        console.log("IMDB Rating of the movie: "+jsonData.imdbRating); 
        console.log("Country where the movie was produced: "+jsonData.Country); 
        console.log("Language of the movie: "+jsonData.Language); 
        console.log("Plot of the movie: "+jsonData.Plot); 
        console.log("Actors in the movie: "+jsonData.Actors);
          
        
      // showData ends up being the string containing the show data we will print to the console
    //   var showData = [
    //     "Name of the Venue: " + jsonData.venue.name,
    //     "Venue Location: " + jsonData.venue.city+ ", "+jsonData.venue.city,
    //     "Date of the Event: " + jsonData.datetime,
    //   ].join("\n\n");

    // //   // Append showData and the divider to log.txt, print showData to the console
    //   fs.appendFile("log.txt", showData + divider, function(err) {
    //     if (err) throw err;
    //     console.log(showData);
      });
    }
    
}

module.exports = Movie;