
   
      //Defining variables that will be used later
var map;
var infoWindow;

//The location of the gyres
var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
         var locations = [{
            lat: 41.934017,
            lng: 12.454208
         }, {
            lat: 44.437233,
            lng: 26.152365
         }, {
            lat: 40.429928,
            lng: 49.919270
         }, {
            lat: 37.417099,
            lng: -6.005153
         }, {
            lat: 59.972733,
            lng: 30.219210
         }, {
            lat: 55.825741,
            lng: -4.252687
         }, {
            lat: 52.314342,
            lng: 4.941771
         }, {
            lat: 55.702660,
            lng: 12.571634
         }, {
            lat: 47.503174,
            lng: 19.096394
         }, {
            lat: 41.934017,
            lng: 12.454208
         }, {
            lat: 51.556122,
            lng: -0.279863
         }, ];
      


//Content to be added to each info window
var contents = [
    
];

function initMap() {

    var startPosition = locations[0];
    var centerPoint = {
                    center: {
               lat: 46.619261,
               lng: -33.134766
            }
,
        zoom: 3
    };

    //
    map = new google.maps.Map(document.getElementById('map'), centerPoint);
    infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < locations.length; i++) {
        createMarker(locations[i], contents[i]);
    }
}

//Function passes locations[i] and contents [i] (from above) as parameters for each gyre marker
function createMarker(gyreLocation, gyreContent) {

    //Creates marker based on the locations of each gyre
    var marker = new google.maps.Marker({
        position: gyreLocation,
        map: map
    });

    //Opens info window about specific gyre when clicked
    marker.addListener('click', function() {
       infowindow.setContent(gyreContent);
       infowindow.open(map, this);
    });
}

/* Sources of guidance used to create this code: 
https://developers.google.com/maps/documentation/javascript/infowindows 
https://developers.google.com/maps/documentation/javascript/adding-a-google-map

*/