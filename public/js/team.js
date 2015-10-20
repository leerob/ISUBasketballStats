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

    var rankings = [];
    rankings.push({name: "Today's U", y: 4});
    rankings.push({name: "CBS", y: 6});
    rankings.push({name: "ESPN", y: 7});
    rankings.push({name: "USA Today", y: 7});
    rankings.push({name: "Athlon Sports", y: 7});


    createBarChart("#rankings", "column", "Preseason Top 25 Rankings",
                   "2015-16 Season", "", "Rank", "#", '#{point.y}', rankings);
});

function createBarChart(div, type, title, subtitle, yaxis, series, prefix, format, data) {

    $(div).highcharts({
        chart: {
            type: type
        },
        title: {
            text: title
        },
        subtitle: {
            text: subtitle
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: yaxis
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: format
                }
            }
        },
        tooltip: {
            valuePrefix: prefix
        },
        series: [{
            name: series,
            colorByPoint: true,
            data: data
        }]
    });
}