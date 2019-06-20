// At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:


require("dotenv").config("./*.env");

// Add the code required to import the keys.js file and store it in a variable.

var keys = require("./keys");

// You should then be able to access your keys information like so:
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//First Command: node liri.js concert-this <artist/band name here>


// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
var Band = require("./bands");

// Create a new Band object
var band = new Band();

var Movie = require("./movie");
var movie = new Movie();

// Grab search command line argument
var command = process.argv[2];
// Joining the remaining arguments since the search term may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for a concert
if (!command) {
  command = "concert-this";
}

// By default, if no search term is provided, search for "Backstreet Boys"
if (!term) {
  term = "Backstreet Boys";
}

// Print what the command line function is and print the search term as well
if (command === "concert-this") {
  console.log("Searching the Bands in Town Artist Events API");
  band.findConcert(term);
}else if (command === "spotify-this-song") {
  console.log("Searching Spotify for information about a song");
  spotify.search({ type: 'track', query: term }, function(err, data) {
    
    
    if (err) {
      return console.log('Error occurred: ' + err);
    }else{
      for (var i = 0; i<5; i++){
        var songData = data.tracks.items[i];
          console.log("Artist: " + songData.artists[0].name);
          console.log("Song: " + songData.name);
          console.log("Preview URL: " + songData.preview_url);
          console.log("Album: " + songData.album.name);
          console.log("----------");
      }
     
    }
      
  });
}else if (command === "movie-this"){
    console.log ("Searching the OMBD API for information about "+term);
    movie.findMovie(term);
}
// else if (command === "do-what-it-says"){
//     console.log ("Searching for random.txt")
// }
// Name of the venue


// Venue location


// Date of the Event (use moment to format this as "MM/DD/YYYY")


