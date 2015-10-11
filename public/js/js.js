$(function () {

    Parse.initialize("cipDgUTYARcdxNeT8sD5ZE76QxNWOURlKLzfruak",
                     "HWljvB2ZgHsoAZHWd128jhohYdIhevdCpI08zOOP");

    var Players = Parse.Object.extend("Players");
    var query = new Parse.Query(Players);
    query.descending("points");
    query.find({
      success: function(results) {

        var players = [];
        for (var i = 0; i < results.length; i++) {
          players.push({name: results[i].get("name"), y: results[i].get("points")});
        }
        createBarChart("#players", "bar", "2014-15 Highest Scoring Players", "Source: espn.com", "", "PPG", players);
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });


    cats = ["Williams", "Hubbard", "Walters", "Berryman", "Kent", "Chandler",
            "Menze", "Sutherland", "Strannigan", "Anderson", "John", "Trickey",
            "Nance", "Orr", "Floyd", "Eustachy", "Morgan", "McDermott", "Hoiberg"]

    data = [.408, .344, .415, .333, .556, .312, .520, .414, .600, .469,
            .551, .245, .407, 0.522, 0.633, 0.631, 0.585, 0.465, 0.676]

    createLineChart("#coaches", "Winning Percentage of Head Coaches", "Source: wikipedia.org", cats, data);


    var scorers = [];
    scorers.push({name: "Jeff Grayer", y: 2502});
    scorers.push({name: "Barry Stevens", y: 2190});
    scorers.push({name: "Fred Hoiberg", y: 1993});
    scorers.push({name: "Victor Alexander", y: 1892});
    scorers.push({name: "Marcus Fizer", y: 1830});
    scorers.push({name: "Julius Michalik", y: 1825});
    scorers.push({name: "Jake Sullivan", y: 1810});
    scorers.push({name: "Hercle Ivy", y: 1752});
    scorers.push({name: "Justus Thigpen", y: 1724});
    scorers.push({name: "Zaid Abdul-Aziz", y: 1672});

    
    createBarChart("#scorers", "column", "All-Time Cyclone Scoring Leaders", "Source: wikipedia.org", "Points", "Points", scorers)

    var teams = [];
    teams.push({name: "Texas", y: 16734, color: '#999999'});
    teams.push({name: "Kansas", y: 16300, color: '#999999'});
    teams.push({name: "Texas Tech", y: 15098, color: '#999999'});
    teams.push({name: "Iowa State", y: 14384, color: '#B20000'});
    teams.push({name: "West Virginia", y: 14000, color: '#999999'});
    teams.push({name: "Oklahoma State", y: 13611, color: '#999999'});
    teams.push({name: "Kansas State", y: 12528, color: '#999999'});
    teams.push({name: "Oklahoma", y: 11528, color: '#999999'});
    teams.push({name: "Baylor", y: 10347, color: '#999999'});
    teams.push({name: "TCU", y: 8500, color: '#999999'});


    createBarChart("#teams", "bar", "Arena Capacity of Big 12 Teams", "Source: bbstate.com", "", "Capactiy", teams)

});


function createBarChart(div, type, title, subtitle, yaxis, series, data) {

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
                    format: '{point.y}'
                }
            }
        },
        series: [{
            name: series,
            colorByPoint: true,
            data: data
        }]
    });
}

function createPieChart(div, name, data) {

    $(div).highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: name
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "Clicks",
            colorByPoint: true,
            data: data
        }]
    });
}

function createLineChart(div, title, subtitle, cats, data) {

    $(div).highcharts({
        title: {
            text: title
        },
        subtitle: {
            text: subtitle
        },
        xAxis: {
            categories: cats
        },
        yAxis: {
            title: {
                text: 'Winning Percentage (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        series: [{
            name: "Win %",          
            data: data
        }]
    });
}