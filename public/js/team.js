$(function () {

    Parse.initialize("cipDgUTYARcdxNeT8sD5ZE76QxNWOURlKLzfruak",
                     "HWljvB2ZgHsoAZHWd128jhohYdIhevdCpI08zOOP");

    // Initialize Google Map to show USA
    var map = new GMaps({
      div: '#map',
      lat: 41.2324,
      lng: -98.4160
    });

    // Add all player locations to the map
    var Locations = Parse.Object.extend("Locations");
    var query = new Parse.Query(Locations);
    query.find({
      success: function(results) {

        for (var i = 0; i < results.length; i++) {
            map.addMarker({
              lat: results[i].get("lat"),
              lng: results[i].get("long"),
              title: results[i].get("player"),
              infoWindow: {
                content: '<p><strong>' + results[i].get("player") +
                         '</strong></p>' + results[i].get("name")
              }
            });
        }

        map.fitZoom();
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
});