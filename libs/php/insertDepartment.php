<?php
	$executionStartTime = microtime(true);

	include("config.php");

	header('Content-Type: application/json; charset=UTF-8');

	$conn = new mysqli($cd_host, $cd_user, $cd_password, $cd_dbname, $cd_port);

	if (mysqli_connect_errno()) {
		
		$output['status']['code'] = "300";
		$output['status']['name'] = "failure";
		$output['status']['description'] = "database unavailable";
		$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output);

		exit;

	}
	$location= $_POST['location'];
	$department=$_POST['department'];
	$query = "SELECT * FROM location WHERE name='$location'";
	
	$result = $conn->query($query);

	if($result->num_rows < 1){
		$sql = "INSERT INTO location (name) VALUES('$location')";
		//$sql = "INSERT INTO location (name) VALUES('$location') WHERE NOT EXISTS (SELECT * FROM location WHERE location.name= $location";
		$result = $conn->query($sql);
		$user_id = $conn->insert_id;
	} else {
		$sql = "SELECT id FROM location WHERE name = '$location'";
		$result = $conn->query($sql);
	
		$row = $result->fetch_row();
		$user_id = $row[0];
		
	}



        	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}

   if(!empty($user_id)) {
        $sql="INSERT INTO department (name, locationID) VALUES('$department', $user_id)";
        $result = $conn->query($sql);
    };
	$query = 'SELECT department.id, department.name, location.name AS loca FROM department INNER JOIN location ON location.id = department.locationID ORDER BY id DESC LIMIT 1';

	$result = $conn->query($query);
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}
   
   	$data = [];

	while ($row = mysqli_fetch_assoc($result)) {

		array_push($data, $row);

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $data;
	
	mysqli_close($conn);

	echo json_encode($output);
/*
    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
    $output['data'] = [];
    
    mysqli_close($conn);
    
    echo json_encode($output);     */
?>