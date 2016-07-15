<?php

	$data = json_decode(file_get_contents("php://input"));
	$conn = new mysqli("mysql.webhero.com", "tadlock", "jptad0923", "tadlock");
	//$query = "select productos.id_prod, productos.nombre, precios.medida, precios.cost from productos join precios on productos.id_prod = precios.id_prod and productos.nombre ='AVN'";
	
$query = "select A.id_prod, A.nombre, A.subti, precios.medida, precios.cost, A.categoria from precios join (select productos.id_prod, productos.nombre,productos.subti, categorias.categoria from categorias join productos on productos.id_prod = categorias.id_prod and categorias.categoria = 'ACCESORIES') as A on precios.id_prod = A.id_prod";

	$res = $conn->query($query);
	if(mysqli_num_rows($res) > 0){
	    $lista ='[';
	    $i = 0;
	    while($row = $res->fetch_assoc()){
	    	//echo $row['subti'];
	    	if($i == mysqli_num_rows($res) - 1){
		    	$lista = $lista.'{"subti":"'.$row['subti'].'", "id":"'. $row["nombre"].'-'.$row['medida'].'", "size":"'.$row["medida"].'\\" ", "price":"$'. $row["cost"].'"}';

	    	} else {
	    		$lista = $lista.'{"subti":"'.$row['subti'].'", "id":"'. $row["nombre"].'-'.$row['medida'].'", "size":"'.$row["medida"].'\\" ", "price":"$'. $row["cost"].'"},';

	    	}

	    	$i = $i + 1;
	    }
	    $lista = $lista.']';

		
		$prod = '{"modelos":'.$lista.'}';


	    header('Content-Type: text/html; charset=utf-8');
	    //echo "JP";
	    //echo $lista;
	    echo $prod;
	    //header('Content-Type: application/json');
	   // echo json_encode($prod);


	};
	$res->free();
	$conn->close();

?>