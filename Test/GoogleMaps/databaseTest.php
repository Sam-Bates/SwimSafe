<?php

 $db = mysql_connect("localhost","root","bananaunicorn"); 
 if (!$db) {
 die("Database connection failed miserably: " . mysql_error());
 }
 
$db_select = mysql_select_db("fletat1_project",$db);
 if (!$db_select) {
 die("Database selection also failed miserably: " . mysql_error());
 }
 $result = mysql_query("SELECT * FROM mytable", $db);
 if (!$result) {
 die("Database query failed: " . mysql_error());
 }
 while ($row = mysql_fetch_array($result)) {
 echo $row[1]." ".$row[2]."<br />";
 }
 mysql_close($db);
?>
<html>
 <head>
 <title>Step 1</title>
 </head>
 <body>
</body>
</html>