var myCenter=new google.maps.LatLng(-45.8728639,170.5094754); <!-- defining myCenter as a specific place -->
var contentString = '<div id="content">'+ '<div id="siteNotice">'+'</div>'+'<h1 id="firstHeading" class="firstHeading">First Heading</h1>'+'<div id="bodyContent">'+'<p><b>Title</b>, </p>'+'Content Stuff' + '</div>'+'</div>';
function initialize() <!-- intialize the actual map -->
{
  var mapProp = {
    center:myCenter, <!-- center of map. Implement https://developers.google.com/maps/articles/geolocation to get current location  -->
    zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
	scaleControl: true,
    scaleControlOptions: {position: google.maps.ControlPosition.BOTTOM_LEFT}
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
  
  <!-- This creates a basic marker object, it just a position and must be set with marker.setMap(map); -->
  var marker=new google.maps.Marker({
  position:myCenter,
  });
  <!-- this creates a text window above a marker that already exists, so if you want to create a text window for a marker, put in the content and make sure to pass in the marker when declaring the infowindow  -->
  var infowindow = new google.maps.InfoWindow({
  content: contentString
  });
  
  <!-- This adds a listener that when the user clicks, it will open the infowindow -->
  google.maps.event.addListener(marker, 'click', function() {
  <!-- the infowindow needs to be given the correct marker that was just clicked on, this could become a problem with lots of different markers and infowindows -->
  infowindow.open(map,marker);
  });
  <!-- make sure to give the infowindow the marker location when declaring it  -->
  <!--infowindow.open(map, marker); -->
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize); <!-- Add a DOM listener that will execute the initialize() function on window load -->