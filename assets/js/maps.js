// JavaScript Document

function getData(cb, selection) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "../assets/js/pubs.json", true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var Publist = [];

            Publist = JSON.parse(this.responseText);

            cb(Publist);
            // We want to return some some data here to work with
            //look at adding a parameter to this function so that we can limit the data returned if needed
            return Publist;
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

// On first load get the list of all pubs from the JSON file
var MasterPublist = [];

MasterPublist = getData(printDataToConsole);

//On firstload default the selection to all days
var selection = 0;

//Next we need to get the list of all pub locations, call function to do thresholds

var publocations = [];

publocations = getPubsforDay(MasterPublist, selection);

function initMap(publocations) {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: {
            lat: 51.967125,
            lng: -8.933958
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = publocations;

    var markers = locations.map(function (location, i) {
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


    // on redraw pass radio button as a parameter to getData, array of associative arrays should be returned
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

// returning pubs targeting the sub array pubDays
function getPubsforDay(MasterPublist, dayselected) {
    var myLatLng = [];
    for (var i = 0, length = MasterPublist.length; i < length; i++) {
        if (checkday(MasterPublist[i], dayselected)) {
          myLatLng = MasterPublist[i], [pubDays];
    }
}

    return myLatLng;

}


function checkday(pub, day) {
    var result = 0;
    for (var checkday in pub) {

        if (checkday.equals(day))

        {
            result = 1;
            return result;
        }

    }
    return result;
}


function allDayCoords(day, cb) {
    var text1 = "";
    var i;
    var j;
    var pubLocation = [];
    var arrayLength = allPubs.length;
    for (var i = 0; i < arrayLength; i++) {
        document.getElementById("demo").innerHTML = pubLocation[0];
    }
    cb();
}


console.log(getDays);
