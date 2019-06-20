var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

// Create the TV constructor
var Band = function () {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findConcert = function (concert) {
    var URL = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function (response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data[0];

      console.log("The " + concert + " play at: \n" + divider);
      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Name of the Venue: " + jsonData.venue.name,
        "Venue Location: " + jsonData.venue.city + ", " + jsonData.venue.country,
        "Date of the Event: " + moment(jsonData.datetime).format('MM/DD/YYYY'),
      ].join("\n\n");

      //   // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function (err) {
        if (err) throw err;
        console.log(showData);
      });
    })
  }
}

module.exports = Band;