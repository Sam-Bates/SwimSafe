<!DOCTYPE html>
<script>
<?php

$db = mysql_connect("localhost","root","bananaunicorn");
if (!$db) {
die("Database connection failed miserably: " . mysql_error());
}

$db_select = mysql_select_db("fletat1_project",$db);
if (!$db_select) {
die("Database selection also failed miserably: " . mysql_error());
}
$result = mysql_query("SELECT * FROM Location", $db);
if (!$result) {
die("Database query failed: " . mysql_error());
}
$lat = array();
$long = array();
$description = array();
while ($row = mysql_fetch_array($result)) {
		array_push($lat,$row[2]);
		array_push($long,$row[3]);
		array_push($description,$row[4]);
}
$js_lat = json_encode($lat);
$js_long = json_encode($long);
$js_description = json_encode($description);
echo "var js_lat = ". $js_lat . ";\n";
echo "var js_long = ". $js_long . ";\n";
echo "var js_description = ". $js_description . ";\n";
?>
</script>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css.css">
<script src="http://maps.googleapis.com/maps/api/js"></script>
<script src="mapsScript.js" type="text/javascript"></script>

<meta name="viewport" content="width=device-width">
</head>
<body>
<div id="wrapper">
	<div id="googleMap">
	</div>
	<footer> 
		<div class="footerIcon1"> 
		
		</div>
		<div class="footerIcon2">
		</div>
		<div class="footerIcon3">
		</div>
	</footer>
</div>

</body>

</html>
