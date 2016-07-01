<?php

	$dataa = json_decode(file_get_contents("php://input"));
	$connec = new mysqli("localhost", "root", "", "amerivacs");
	if ($connec->connect_error) {
	    die("Connection failed: " . $connec->connect_error);
	} 

	$query = "select nombre, subti, desc_A, desc_B from productos where productos.nombre =". "'".$dataa->name."'";
	$resul = $connec->query($query);
	if(mysqli_num_rows($resul) > 0){
		

	    $roww = $resul->fetch_assoc();
		$prod = '{"name":"'. $roww["nombre"].'","subtitulo":"'.$roww["subti"].'","parrafo":"'. $roww["desc_A"].'"}';

	    //header('Content-Type: application/json');
	    //echo '{"JP":"HOLA"}';
	    //echo '{"JP":"'.$roww['desc_A'].'"}';
	    header('Content-Type: text/html; charset=utf-8');
	    //echo $roww['desc_A'];
	    echo $prod;
	    //echo json_encode($prod);
	};

	$resul->free();
	$connec->close()

?>