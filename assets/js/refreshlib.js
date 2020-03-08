// JavaScript Document

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
 
 // Conditional clause is now used to specify what occurs
 // depending on the value of the checked radio button.
 // In this case a Google Maps LatLng element is created with 
 // different coordinates.
 
 if (radio_value == 1) {
  var myLatLng = {lat: -25.363, lng: 131.044};
 } else if (radio_value == 2) {
  var myLatLng = {lat: 50, lng: 135};
 } else {
  var myLatLng = {lat: 3, lng: 145};
 }

 
 // map div is obtained from 
    var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 4,
       center: myLatLng
     });
  
     var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
     })