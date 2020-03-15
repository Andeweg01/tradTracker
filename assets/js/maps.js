// JavaScript Document

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "../assets/js/pubs.json", true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: {
            lat: 51.967125,
            lng: -8.933958
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
            lat: 51.896697,
            lng: -8.476546
        },
        {
            lat: 51.623023,
            lng: -8.888975
        },
        {
            lat: 52.137655,
            lng: -8.278949
        },
        {
            lat: 51.901743,
            lng: -8.471050
        }
    ];

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
};



function myredraw() {

    var dayLocations = [];

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

    // Conditional clause is now used to specify what occurs
    // depending on the value of the checked radio button.
    // In this case a Google Maps LatLng element is created with 
    // different coordinates.

    if (radio_value === 0) {
        var myLatLng = {
            lat: 51.967125,
            lng: -8.476551
        };
    } else if (radio_value === 1) {
        var myLatLng = {
            lat: 51.967125,
            lng: -8.476551
        };
    } else if (radio_value === 2) {
        var myLatLng = {
            lat: 51.967125,
            lng: -8.476551
        };
    } else if (radio_value === 3) {
        var myLatLng = {
            lat: 51.967125,
            lng: -8.476551
        };
    } else if (radio_value === 4) {
        var myLatLng = {
            lat: 51.967125,
            lng: -8.476551
        };
    } else if (radio_value === 5) {
        var myLatLng = {
            lat: 51.967125,
            lng: -8.476551
        };
    } else if (radio_value === 6) {
        var myLatLng = {
            lat: 51.967125,
            lng: -8.476551
        };
    } else if (radio_value === 7) {
        var myLatLng = {
            lat: 51.967125,
            lng: -8.476551
        };
    } else {
        var myLatLng = {
            lat: 51.967125,
            lng: -8.476551
        };
    }


    // map div is obtained from 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}

// returning pubs targeting the sub array pubDays
function getDays(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "../assets/js/pubs.json", true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
var getPubsByDay = function(getData, pubDays) {
	var returnKey = -1;
	
	$.each(getData, function(key, info) {
		if(info.pubDays == pubDays) {
			returnKey = key;
			return false;
		};
    });
}
		}
	}
};

console.log(getDays);

