// Declaration global locations array
let locations = [];

// Filtering on the day
function filterBarsByDay(day) {
    // Arrow-functions instead of the classic function syntax
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

// On page load get the full list of items from the MasterPublist in pubs.js
locations = getCoordsFromObject(MasterPublist);

// When a user selects a radio button, filter the data, and draw the map, with subset of data
function radioButtonSelection(element) {
    let pubs = filterBarsByDay(element.value);
    locations = getCoordsFromObject(pubs);
    drawMap();
}

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