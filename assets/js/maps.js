// JavaScript Document

var myJsonArrayFromFile = JSON.parse('http://tradtracker.com/assets.js/pubs.json');

function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 9,
            center: {
                lat: 51.967125,
                lng: -8.933958
            }
        });
	
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
 			{ lat: 51.896697, lng: -8.476546 },
			{ lat: 51.623023, lng: -8.888975 },
			{ lat: 52.137655, lng: -8.278949 },
			{ lat: 51.901743, lng: -8.471050 }
		];
	
        var markers = locations.map(function(location, i){
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    }

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("map").innerHTML = this.responseText;
        var myJsonArray = JSON.parse(this.responseText);
        var a0 = myJsonArray.a0;
    }
};
xhttp.open("GET", "http://tradtracker.com/assets/js/pubs.json", true);
xhttp.send();

function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    var myJasonArrayFromFile = JSON.parse(response);
  });
}

var pubLocations = [];

var myJsonArray = myJsonArrayFromFile.length;
for (var i=0; i<arrayLength; i++) {
	var daysArray = myJasonArray[i].pubDays;
};

/*
var daysArray = myJsonArrayFromFile[i].pubDays;
if (daysArray[0] > "") {
	pubLocations[] = myJsonArray[i].pubCoord;
};
*/
/* 
function selectPub() {
    switch (document.getElementById("day-all").value) {
        case 'all':
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 52.175664, lng: -6.585877 }, //Ireland
                zoom: 10
            });
            break;
        case 'Iceland':
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 63.436650, lng: -19.090795 }, //Iceland
                zoom: 12
            });
            break;
        case 'New Zealand':
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -38.414427, lng: 175.107789 }, //New Zealand
                zoom: 8
            });
            break;
        default:
    }
}

places.getDetails({ placeId: marker.placeResult.place_id },
        function(place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            buildIWContent(place);
        });

*/

function myredraw(myJsonArrayFromFile) {
  
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
 
 if (radio_value == 0) {
  var myLatLng = {lat: 51.967125, lng: -8.476551};
 } else if (radio_value == 1) {
  var myLatLng = {lat: 51.967125, lng: -8.476551};
 } else if (radio_value == 2) {
  var myLatLng = {lat: 51.967125, lng: -8.476551};
 } else if (radio_value == 3) {
  var myLatLng = {lat: 51.967125, lng: -8.476551};
 } else if (radio_value == 4) {
  var myLatLng = {lat: 51.967125, lng: -8.476551};
 } else if (radio_value == 5) {
  var myLatLng = {lat: 51.967125, lng: -8.476551};
 } else if (radio_value == 6) {
  var myLatLng = {lat: 51.967125, lng: -8.476551};
 } else if (radio_value == 7) {
  var myLatLng = {lat: 51.967125, lng: -8.476551};
 } else {
  var myLatLng = {lat: 51.967125, lng: -8.476551};
 }

 
 // map div is obtained from 
    var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 9,
       center: myLatLng
     });
  
     var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
     })
}

