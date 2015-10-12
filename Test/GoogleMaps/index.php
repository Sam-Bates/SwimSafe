<!DOCTYPE html>
<script>
<?php

$db = mysql_connect("localhost","root","bananaunicorn");
if (!$db) {
die("Database connection failed: " . mysql_error());
}

$db_select = mysql_select_db("fletat1_project",$db);
if (!$db_select) {
die("Database selection failed: " . mysql_error());
}
$result = mysql_query("SELECT * FROM Location INNER JOIN WaterSource ON Location.waterSourceID=WaterSource.waterSourceID", $db);
if (!$result) {
die("Database query failed: " . mysql_error());
}
$lat = array();
$long = array();
$directions = array();
$address = array();
$riverNames = array();
$riverQuality = array();
$riverDanger = array();
while ($row = mysql_fetch_array($result)) {
		array_push($lat,$row[2]);
		array_push($long,$row[3]);
		array_push($directions,$row[4]);
		array_push($address,$row[5]);
		array_push($riverNames,$row[7]);
		array_push($riverQuality,$row[8]);
		array_push($riverDanger,$row[9]);
}
$js_lat = json_encode($lat);
$js_long = json_encode($long);
$js_directions = json_encode($directions);
$js_address = json_encode($address);
$js_riverNames = json_encode($riverNames);
$js_riverQuality = json_encode($riverQuality);
$js_riverDanger = json_encode($riverDanger);
echo "var js_lat = ". $js_lat . ";\n";
echo "var js_long = ". $js_long . ";\n";
echo "var js_directions = ". $js_directions . ";\n";
echo "var js_address = ". $js_address . ";\n";
echo "var js_riverNames = ". $js_riverNames . ";\n";
echo "var js_riverQuality = ". $js_riverQuality . ";\n";
echo "var js_riverDanger = ". $js_riverDanger . ";\n";
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
