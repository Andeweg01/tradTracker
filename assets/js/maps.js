// JavaScript Document

function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                lat: 46.619261,
                lng: -33.134766
            }
        });
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var locations = [
            { lat: 40.785091, lng: -73.968285 },
            { lat: 41.084045, lng: -73.874245 },
            { lat: 40.754932, lng: -73.984016 }
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

    /*
    // JavaScript Document

var locations = [
     ['An Spailpin Fanach', 3.180967,101.715546, 1],
     ['Title B', 3.200848,101.616669, 2],
     ['Title C', 3.147372,101.597443, 3],
     ['Title D', 3.19125,101.710052, 4]
];
var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 8,
     center: new google.maps.LatLng(51.967125,-8.933958),
});

var infowindow = new google.maps.InfoWindow;

var marker, i;

for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
         map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
             infowindow.setContent(locations[i][0]);
             infowindow.open(map, marker);
         }
    })(marker, i));
}
*/