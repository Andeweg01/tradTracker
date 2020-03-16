// JavaScript Document

var MasterPublist = [{
    "pubCoords": {
        "lat": 51.896597,
        "lng": -8.476546
    },
    "pubName": "An Spailpin Fanach",
    "pubAddress": "27-29 South Main Street, Cork City",
    "pubDescribe": "A character-filled pub in the heart of the city with a warm, Irish atmosphere. Visitors can enjoy traditional music nightly and the Cork Singer’s Club on Sunday evenings. There’s always a bit of great craic in store as well. Food is served Monday through Friday between noon and 3pm.",
    "pubImg": "http://www.tradtracker.com/assets/img/AnSpailpinFanach.jpg",
    "pubDays": [
        "All days",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
},
{
    "pubCoords": {
        "lat": 51.623023,
        "lng": -8.888975
    },
    "pubName": "DeBarras Folk Club",
    "pubAddress": "55 Pearse St, Scartagh, Clonakilty",
    "pubDescribe": "In the last 30 year’s DeBarra’s Folk Club in the beautiful sea-side town of Clonakilty has earned a musical reputation that has traveled far beyond the confines of its West Cork location.",
    "pubImg": "http://www.tradtracker.com/assets/img/AnSpailpinFanach.jpg",
    "pubDays": [
        "",
        "",
        "Monday",
        "",
        "",
        "Thursday",
        "",
        ""
    ]
},
{
    "pubCoords": {
        "lat": 52.137655,
        "lng": -8.278949
    },
    "pubName": "Cheers Bar",
    "pubAddress": "81 McCurtain St, Fermoy",
    "pubDescribe": "live music, live sport on 6 screens, welcoming staff and mighty pints",
    "pubImg": "http://www.tradtracker.com/assets/img/AnSpailpinFanach.jpg",
    "pubDays": [
        "",
        "",
        "Monday",
        "",
        "",
        "",
        "",
        ""
    ]
},
{
    "pubCoords": {
        "lat": 51.901743,
        "lng": -8.471050
    },
    "pubName": "Sin é",
    "pubAddress": "8 Coburg St, Victorian Quarter, Cork",
    "pubDescribe": "The long-established home of Irish traditional music in Cork city, the Irish words ‘Sin é’ literally translate to mean ‘That’s it’, in reference to the funeral parlour located next door. Non-stop traditional music 7 days a week from 6 – close Monday – Saturday, and from 5 on Sunday.",
    "pubImg": "http://www.tradtracker.com/assets/img/AnSpailpinFanach.jpg",
    "pubDays": [
        "All days",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
}];

alert(MasterPublist);

//On firstload default the selection to all days
var selection = 0;


//Next we need to get the list of all pub locations, call function to do thresholds

var publocations = [];

publocations = getPubsforDay(MasterPublist, selection);

alert(publocations);

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


// returning pubs targeting the sub array pubDays
function getPubsforDay(MasterPublist, selection) {
    var myLatLng = [];
    for (var i = 0, length = MasterPublist.length; i < length; i++) {
        if (checkday == (MasterPublist[i], selection)) {
          myLatLng = MasterPublist[i][0];
    }
}
    return myLatLng;
}

console.log(myLatLng);

function checkday(pub, day) {
    var result = 0;
    for (var checkday in pub) {

        if (checkday ==(day))

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
