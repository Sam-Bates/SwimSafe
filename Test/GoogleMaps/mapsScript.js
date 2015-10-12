//Global Variables
var defaultCenter = new google.maps.LatLng(-45.8728639,170.5094754); //center of map. Implement https://developers.google.com/maps/articles/geolocation to get current location;
var map;

//Initialize the actual map
function initialize()
{
  var mapProp = {
    center:defaultCenter, 
    zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
  scaleControl: true
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  //Try to detect user's current location
  var browserSupportFlag = new Boolean(); //Flag used to identify whether user's browser supports geolocation
  var initialLocation;
  if (navigator.geolocation)
  {
    browserSupportFlag = true;
    navigator.geolocation.getCurrentPosition(function(position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        map.setCenter(initialLocation);
      }, function() {
        handleNoGeolocation(browserSupportFlag, map);
      });
  }
  //Else the browser does not support geolocation
  else
  {
    browserSupportFlag = false;
    handleNoGeolocation(browserSupportFlag);
  }
  
  var markers = new Array(js_lat.length);
  var infowindows = new Array(js_lat.length);
  for(i = 0; i < markers.length; i++){
	  
	  var markPosition = new google.maps.LatLng(js_lat[i], js_long[i]);
	  
	  markers[i] = new google.maps.Marker({position:markPosition,});
	  markers[i].setMap(map);

    //Content string used to create infowindow contents
	  var contentString = 
	  '<div id="content">'+'<h1 id="firstHeading" class="firstHeading">'+ js_riverNames[i] + '</h1>'+'<div id="bodyContent">'+'<h3>Directions: </h3>'+ js_directions[i] +'<h3>Address: </h3>'+ js_address[i] +'<h3>Water Quality: </h3>'+ js_riverQuality[i] +'<h3>Water Speed: </h3>'+ js_riverDanger[i] +'</div>'+'</div>';
	  
	  infowindows[i] = new google.maps.InfoWindow({content: contentString});
	  
	  google.maps.event.addListener(markers[i], 'click', (function(i) {return function() {infowindows[i].open(map,markers[i]);}})(i));//function() {infowindows[i].open(map,markers[i]);});
  }
  
  //This creates a basic marker object, it just a position and must be set with marker.setMap(map);
  var marker=new google.maps.Marker({position:defaultCenter,});
}

//Function which handles the lack of geolocation
function handleNoGeolocation(errorFlag, map)
{
  if (errorFlag == true) {
    //Occurs if browser supports geolocation, but user denies the request
    alert("Geolocation service failed. We've placed you in Dunedin");
  }
  else
  {
    //Occurs if browser does not support geolocation
    alert("Your browser doesn't support geolocation. We've placed you in Dunedin.");
  }
  map.setCenter(defaultCenter);
}

//Add a DOM listener that will execute the initialize() function on window load
google.maps.event.addDomListener(window, 'load', initialize); 