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
			{ lat: 51.901723, lng: -8.471071 }
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

		let pubs = [{
			coords: { 
				lat: 51.896602,
				lng: -8.476551 
			},
			name: 'An Spailpin Fanach',
			address: '27-29 South Main Street Cork City',
			description: 'A character-filled pub in the heart of the city with a warm, Irish atmosphere. Visitors can enjoy traditional music nightly and the Cork Singer’s Club on Sunday evenings. There’s always a bit of great craic in store as well. Food is served Monday through Friday between noon and 3pm.',
			image: 'http://www.tradtracker.com/assets/img/AnSpailpinFanach.jpg',
			days: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
		},
	{
			coords: {
				lat: 51.623023,
				lng: -8.888975
			},
			name: 'DeBarras Folk Club',
			address: '55 Pearse St, Scartagh, Clonakilty',
			description: 'In the last 30 year’s DeBarra’s Folk Club in the beautiful sea-side town of Clonakilty has earned a musical reputation that has traveled far beyond the confines of its West Cork location.',
			image: '',
			days: ["","Monday","","","","",""]
		},		
	{
			coords: {
				lat: 52.137655,
				lng: -8.278949
			},
			name: 'Cheers Bar',
			address: '81 McCurtain St, Fermoy',
			description: 'live music, live sport on 6 screens, welcoming staff and mighty pints',
			image: '',
			days: ["","Monday","","","","",""]
		},		
	{
			coords: {
				lat: 51.901723,
				lng: -8.471071
			},
			name: 'Sin E',
			address: '81 McCurtain St, Fermoy',
			description: 'live music, live sport on 6 screens, welcoming staff and mighty pints',
			image: '',
			days: ["","Monday","","","","",""]
		},		
	];


