// JavaScript Document

// Declare global locations array
let locations = [];

// This function will filter out based on the day
function filterBarsByDay(day) {
    // Arrow-functions
    let openBars = MasterPublist.filter(pub => {
        return pub.pubDays.includes(day);
    });
    return openBars;
}

// Extract coordinates from each item in the dataset provided
function getCoordsFromObject(data) {
    let coords = data.map(pub => {
        return pub.pubCoords;
    });
    return coords;
}

// On page load get the full list items from the MasterPublist on page load
locations = getCoordsFromObject(MasterPublist);

// When a user selects a radio button, filter the data, and draw the map, with subset of data
function radioButtonSelection(element) {
    let pubs = filterBarsByDay(element.value);
    locations = getCoordsFromObject(pubs);
    drawMap();
}

/*
// Old-school approach
function getCoords(pubs) {
  let coords = []
  for pub in pubs:
    coords.push(pub.pubCoords)
  return coords;
}
 */



/*
[{}, {}];
*/

// After user filters
// let pubs = filterBarsByDay(dayChoosenByUser);
// let publocations = getCoordsFromObject(pubs);




//On firstload default the selection to all days
var selection = 0;


//Next we need to get the list of all pub locations, call function to do thresholds

/*
var publocations = [];

publocations = getPubsforDay(MasterPublist, selection);

alert(publocations);
*/

// Draw the map
function drawMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: {
            lat: 51.967125,
            lng: -8.933958
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // var locations = publocations;

    var markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}


function myredraw() {

    // Get array of input objects named 'day'
    var radios = document.getElementsByName('day');

    // Loop through the array of HTML elements named 'day'
    // and return the value of the checked radio button.
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // Get value of checked
            var radio_value = radios[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }


    var myLatLng = [];
    //associative array used {}
    myLatLng = {
        lat: 51.967125,
        lng: -8.476551
    };


    // on redraw pass radio button as a parameter to masterPublist, array of associative arrays should be returned
    myLatLng = getPubsforDay(MasterPublist, radio_value);


    // map div is obtained from 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: myLatLng[0]
    });

    var marker = new google.maps.Marker({
        position: myLatLng[0],
        map: map
    });
}

/*

// returning pubs targeting the sub array pubDays
function getPubsforDay(MasterPublist, selection) {
    var myLatLng = [];
    for (var i = 0, length = MasterPublist.length; i < length; i++) {
        if (checkday == (MasterPublist[i], selection)) {
          myLatLng = MasterPublist[i][0];
          console.log(myLatLng);
    }
}
    return myLatLng;
}


function checkday(pub, day) {
    var result = 0;
    for (var checkday in pub) {

        if (checkday == (day))

        {
            result = 1;
            return result;
        }

    }
    return result;
}


function allDayCoords(day, cb) {
    var pubLocation = [];
    var arrayLength = allPubs.length;
    for (var i = 0; i < arrayLength; i++) {
        document.getElementById("demo").innerHTML = pubLocation[0];
    }
    cb();
}


console.log(MasterPublist);
*/
