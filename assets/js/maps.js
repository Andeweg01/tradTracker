// JavaScript Document

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
 			{ lat: 51.896602, lng: -8.476551 },
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

const baseURL = "http://www.tradtracker.com/assets/js/pubs.json";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL, true);
    xhr.send();
}
