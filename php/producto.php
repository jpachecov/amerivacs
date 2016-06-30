<?php

	$data = json_decode(file_get_contents("php://input"));
	$conn = new mysqli("localhost", "root", "", "amerivacs");
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	$query = "select nombre, subti, desc_A, desc_B from productos where productos.nombre =". "'".$data->name."'";
	$res = $conn->query($query);
	if(mysqli_num_rows($res) > 0){

	    $row = $res->fetch_assoc();
		$prod = '{"name":"'. $row["nombre"].'", "subtitulo":"'.$row["subti"].'", "parrafo":"'. $row["desc_A"].'"}';

	    header('Content-Type: application/json');
	    echo json_encode($prod);
	};

	$res->free();
	$conn->close()

?>