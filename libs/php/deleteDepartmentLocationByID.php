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
	$query= 'SELECT departmentID FROM personnel WHERE departmentID ='.$_POST['id'];
	$result = $conn->query($query);
	if (mysqli_num_rows($result) > 0) {
	    echo "The department or location that you are trying to delete has still employees associeted. Please delete before all the employees, before doing this action. ";

		mysqli_close($conn);

		

		exit;
	}

	$query = 'DELETE FROM department WHERE id = ' . $_POST['id'];
    //$query = 'DELETE FROM department WHERE NOT EXISTS (SELECT departmentID FROM department WHERE department.departmentID = a.id_A);

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
	$sql = 'DELETE FROM location WHERE id NOT IN (SELECT d.locationID FROM department d)';
	//$sql='DELETE FROM location WHERE NOT EXISTS (SELECT * FROM department WHERE locationID=location.id)';
	$result = $conn->query($sql);
	
	if (!$result) {

		$output['status']['code'] = "400";
		$output['status']['name'] = "executed";
		$output['status']['description'] = "query failed";	
		$output['data'] = [];

		mysqli_close($conn);

		echo json_encode($output); 

		exit;

	}

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = [];
	
	mysqli_close($conn);

	echo json_encode($output); 

?>