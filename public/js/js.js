$(function () {

    Parse.initialize("cipDgUTYARcdxNeT8sD5ZE76QxNWOURlKLzfruak",
                     "HWljvB2ZgHsoAZHWd128jhohYdIhevdCpI08zOOP");

    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                animation: false
            }
        }
    });

    // This will get 2015-16 data once the season starts
    // var Players = Parse.Object.extend("Players");
    // var query = new Parse.Query(Players);
    // query.descending("points");
    // query.find({
    //   success: function(results) {

    //     var players = [];
    //     for (var i = 0; i < results.length; i++) {
    //       players.push({name: results[i].get("name"), y: results[i].get("points")});
    //     }
    //     createBarChart("#players", "bar", "2014-15 Highest Scoring Players",
    //                    "Source: espn.com", "", "PPG", "", '{point.y} PPG', players);
    //   },
    //   error: function(error) {
    //     alert("Error: " + error.code + " " + error.message);
    //   }
    // });

    var players = [];
    players.push({name: "Georges Niang", y: 15.3});
    players.push({name: "Monte Morris", y: 11.9});
    players.push({name: "Jameel McKay", y: 11});
    players.push({name: "Bryce Dejean-Jones", y: 10.5});
    players.push({name: "Naz Long", y: 10.1});
    players.push({name: "Dustin Hogue", y: 9.3});
    players.push({name: "Abdel Nader", y: 5.8});
    players.push({name: "Matt Thomas", y: 4.9});
    players.push({name: "Daniel Edozie", y: 3.2});
    players.push({name: "Sherron Dorsey-Walker", y: 3});
    players.push({name: "Georgios Tsalmpouris", y: 1.4});
    players.push({name: "Clayton Custer", y: 1.1});
    players.push({name: "Kourtlin Jackson", y: 0.6});
    players.push({name: "Daniel Stensland", y: 0});

    createBarChart("#players", "bar", "2014-15 Highest Scoring Players",
                   "Source: espn.com", "", "PPG", "", '{point.y} PPG', players);


    cats = ["Williams", "Hubbard", "Walters", "Berryman", "Kent", "Chandler",
            "Menze", "Sutherland", "Strannigan", "Anderson", "John", "Trickey",
            "Nance", "Orr", "Floyd", "Eustachy", "Morgan", "McDermott", "Hoiberg"];


    var coaches = [];
    coaches.push({y: .408, years: "1908-11"});
    coaches.push({y: .344, years: "1912-15"});
    coaches.push({y: .415, years: "1916-19"});
    coaches.push({y: .333, years: "1920"});
    coaches.push({y: .556, years: "1921"});
    coaches.push({y: .312, years: "1922-28"});
    coaches.push({y: .520, years: "1929-47"});
    coaches.push({y: .414, years: "1948-54"});
    coaches.push({y: .600, years: "1955-59"});
    coaches.push({y: .469, years: "1960-71"});
    coaches.push({y: .551, years: "1972-74"});
    coaches.push({y: .245, years: "1975-76"});
    coaches.push({y: .407, years: "1977-80"});
    coaches.push({y: .522, years: "1981-94"});
    coaches.push({y: .633, years: "1995-98"});
    coaches.push({y: .631, years: "1999-03"});
    coaches.push({y: .585, years: "2004-06"});
    coaches.push({y: .465, years: "2007-10"});
    coaches.push({y: .676, years: "2011-15"});


    var plotLine = {
                    value: 0.5,
                    width: 2,
                    dashStyle: 'shortdash',
                    color: '#F00000',
                    label: {
                        text: ".500"
                    }};

    createLineChart("#coaches", "Winning Percentage of Head Coaches",
                    "Source: wikipedia.org", "Winning Percentage (%)",
                    "Winning Percentage", cats, coaches, plotLine);


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

    
    createBarChart("#scorers", "column", "All-Time Cyclone Scoring Leaders",
                    "Source: cyclones.com", "Points", "Points", "", '{point.y}', scorers);


    var chart = $('#scorers').highcharts();
    $('#assists').click(function() {
        var assists = [];
        assists.push({name: "Jeff Hornacek", y: 665});
        assists.push({name: "Diante Garrett", y: 611});
        assists.push({name: "Gary Thompkins", y: 600});
        assists.push({name: "Jacy Holloway", y: 592});
        assists.push({name: "Terry Woods", y: 564});
        assists.push({name: "Will Blalock", y: 464});
        assists.push({name: "Curtis Stinson", y: 448});
        assists.push({name: "Jamaal Tinsley", y: 431});
        assists.push({name: "Justus Thigpen", y: 371});
        assists.push({name: "Fred Hoiberg", y: 350});
        chart.series[0].setData(assists)
        chart.yAxis[0].axisTitle.attr({
            text: 'Assists'
        });
        chart.setTitle({text: "All-Time Cyclone Assist Leaders"});
    });
    
    $('#points').click(function() {
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
        chart.series[0].setData(scorers)
        chart.yAxis[0].axisTitle.attr({
            text: 'Points'
        });
        chart.setTitle({text: "All-Time Cyclone Scoring Leaders"});
    });

    $('#steals').click(function() {
        var steals = [];
        steals.push({name: "Jeff Hornacek", y: 211});
        steals.push({name: "Justus Thigpen", y: 210});
        steals.push({name: "Fred Hoiberg", y: 207});
        steals.push({name: "Curtis Stinson", y: 200});
        steals.push({name: "Jeff Grayer", y: 199});
        steals.push({name: "Will Blalock", y: 177});
        steals.push({name: "Jamaal Tinsley", y: 177});
        steals.push({name: "Ron Harris", y: 169});
        steals.push({name: "Diante Garrett", y: 153});
        steals.push({name: "Terry Woods", y: 146});

        chart.series[0].setData(steals)
        chart.yAxis[0].axisTitle.attr({
            text: 'Steals'
        });
        chart.setTitle({text: "All-Time Cyclone Steals Leaders"});
    });

    $('#blocks').click(function() {
        var blocks = [];
        blocks.push({name: "Jared Homan", y: 235});
        blocks.push({name: "Kelvin Cato", y: 189});
        blocks.push({name: "Loren Meyer", y: 134});
        blocks.push({name: "Victor Alexander", y: 120});
        blocks.push({name: "Sam Hill", y: 115});
        blocks.push({name: "Rahshon Clark", y: 109});
        blocks.push({name: "Craig Brackins", y: 99});
        blocks.push({name: "Marcus Fizer", y: 89});
        blocks.push({name: "Julius Michalik", y: 82});
        blocks.push({name: "Jamie Vanderbeken", y: 78});

        chart.series[0].setData(blocks)
        chart.yAxis[0].axisTitle.attr({
            text: 'Blocks'
        });
        chart.setTitle({text: "All-Time Cyclone Blocks Leaders"});
    });


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

    var teams_avg = [];
    teams_avg.push({name: "Texas", y: 11249, color: '#999999'});
    teams_avg.push({name: "Kansas", y: 16383, color: '#999999'});
    teams_avg.push({name: "Texas Tech", y: 6623, color: '#999999'});
    teams_avg.push({name: "Iowa State", y: 14295, color: '#B20000'});
    teams_avg.push({name: "West Virginia", y: 10052, color: '#999999'});
    teams_avg.push({name: "Oklahoma State", y: 7897, color: '#999999'});
    teams_avg.push({name: "Kansas State", y: 12549, color: '#999999'});
    teams_avg.push({name: "Oklahoma", y: 11120, color: '#999999'});
    teams_avg.push({name: "Baylor", y: 6650, color: '#999999'});
    teams_avg.push({name: "TCU", y: 4123, color: '#999999'});


    createBarChart("#teams", "bar", "Arena Capacity of Big 12 Teams",
                   "Source: bbstate.com", "", "Capacity", "", '{point.y}', teams);

    createBarChart("#teams_avg", "bar", "Average Attendance of Big 12 Teams",
                   "Source: big12sports.com (2014-15 Season)", "", "Average Attendance", "", '{point.y}', teams_avg);


    var most_wins = [];
    most_wins.push({name: "1999-00", y: 32});
    most_wins.push({name: "2013-14", y: 28});
    most_wins.push({name: "2014-15", y: 25});
    most_wins.push({name: "2000-01", y: 25});
    most_wins.push({name: "1995-95", y: 24});
    most_wins.push({name: "2011-12", y: 23});
    most_wins.push({name: "2012-13", y: 23});
    most_wins.push({name: "1994-95", y: 23});
    most_wins.push({name: "1985-86", y: 22});
    most_wins.push({name: "1996-97", y: 22});

    createBarChart("#mostwins", "column", "Most Wins in a Single Season",
                   "Source: cyclones.com", "Wins", "Wins", "", '{point.y}', most_wins);


    cats = ["2005", "2006", "2007", "2008", "2009",
            "2010", "2011", "2012", "2013", "2014"];

    sales = [9124046, 10195647, 6987167, 13203608, 11711417,
            11377858, 11684493, 12962376, 13274318, 14418164];

    revenue = [28913010, 32437040, 32675181, 38621346, 45813189,
               46871554, 48591617, 55151017, 62357761, 68170381];

    createDoubleLineChart("#tickets", "Ticket Sales vs. Total Revenue (All Sports)",
                          "Source: sports.usatoday.com", "Revenue ($)",
                          "Ticket Sales", "Total Revenue", "$", cats, sales, revenue);


    var teams = [];
    teams.push({name: "Duke", y: 381.36, color: '#999999'});
    teams.push({name: "Kentucky", y: 279.78, color: '#999999'});
    teams.push({name: "Kansas", y: 233.98, color: '#999999'});
    teams.push({name: "Pittsburgh", y: 133.84, color: '#999999'});
    teams.push({name: "UCLA", y: 129.39, color: '#999999'});
    teams.push({name: "UNC", y: 125.29, color: '#999999'});
    teams.push({name: "West Virginia", y: 123.01, color: '#999999'});
    teams.push({name: "Iowa State", y: 101.20, color: '#B20000'});
    teams.push({name: "Louisville", y: 97.87, color: '#999999'});
    teams.push({name: "St. John's", y: 95.64, color: '#999999'});


    createBarChart("#ticketprice", "bar", "Highest Average Ticket Prices Nationally (Secondary Market)",
                   "Source: forbes.com (2014-15 Season)", "", "Price", "$", '${point.y}', teams);


    cats = ["2002", "2003", "2004", "2005", "2006", "2007", "2008",
            "2009", "2010", "2011", "2012", "2013", "2014", "2015"];

    tempo = [67.1, 67.5, 71.0, 67.8, 71.8, 64.5, 66.0, 65.0, 69.1, 70.4, 67.2, 69.3, 71.3, 69.7];

    avg_tempo = [69.5, 68.5, 67.7, 67.3, 67.0, 66.9, 67.0, 66.5, 67.3, 66.7, 66.1, 65.9, 66.4, 64.8];

    var plotLine = {
                    value: 0,
                    width: 1,
                    color: '#808080'
                   };

    createDoubleLineChart("#tempo", "Adjusted Tempo: ISU vs. Average",
                          "Source: kenpom.com", "Adj. Tempo",
                          "ISU Tempo", "D1 Average", "", cats, tempo, avg_tempo, plotLine);

});

function createCircle(div, color, value) {

    var circle = new ProgressBar.Circle(div, {
        color: color,
        strokeWidth: 15,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1000,
        text: {
            value: '0'
        },
        step: function(state, circle) {
            circle.setText((circle.value()).toFixed(3) + "%");
        }
    });

    circle.animate(value);  // Number from 0.0 to 1.0
}

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

function createDoubleBarChart(div, type, title, subtitle, yaxis, series, series2, data, data2) {

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
        }, {
            name: series2,
            colorByPoint: true,
            data: data2
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

function createLineChart(div, title, subtitle, yaxis, series, cats, data, line) {

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
                text: yaxis
            },
            plotLines: [line]
        },
        tooltip: {
            shared: true,
            useHTML: true,
            headerFormat: '<small>{point.key}</small><table>',
            pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                '<td style="text-align: right"><b>{point.y}%</b></td></tr>' + 
                '<tr><td style="color: {series.color}">Years Coached: </td>' +
                '<td style="text-align: right"><b>{point.years}</b></td></tr>',
            footerFormat: '</table>',
            valueDecimals: 3
        },
        series: [{
            name: series,          
            data: data
        }]
    });
}

function createDoubleLineChart(div, title, subtitle, yaxis, series, series2, prefix, cats, data, data2) {

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
                text: yaxis
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valuePrefix: prefix
        },
        series: [{
            name: series,
            data: data
        }, {
            name: series2,
            data: data2
        }]
    });
}