// JavaScript Document

var dummyLocations = [{
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
  console.log(radio_value);
 } else if (radio_value == 1) {
  console.log(radio_value);
 } else if (radio_value == 2) {
  console.log(radio_value);
 } else if (radio_value == 3) {
  var my  console.log(radio_value);
 } else if (radio_value == 4) {
  console.log(radio_value);
 } else if (radio_value == 5) {
  console.log(radio_value);
 } else if (radio_value == 6) {
  console.log(radio_value);
 } else if (radio_value == 7) {
  console.log(radio_value);
 } else {
  console.log(radio_value);
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

