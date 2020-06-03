<?php
    //collect form data
    $name = $_POST['vname'];
    $riding = $_POST['riding'];
    $vote = $_POST['vote'];

    $servername = "database_server";
    $username = "database_user";
    $password = "database_pass";
    $dbname = "database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO **tablename** (vname, riding, vote)
VALUES ('" . $name . "', '" . $riding . "', '" . $vote . "');";

if ($conn->query($sql) === TRUE) {
  echo '<script>window.close();</script>';
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
<head>
<link rel="stylesheet" href="./style.css" />
<title>2021 Baustralia general election ballot</title>
</head>
<body>
</body>