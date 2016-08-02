<?php
/*


// Productos en la categoria retractable nozzle
"select categorias.id_prod, productos.nombre from categorias join productos on productos.id_prod = categorias.id_prod and categoria = 'RETRACTABLE NOZZLE'"

// Iformacion general de AVN
"select nombre, subti, desc_A from productos where nombre = 'AVN'"

// Informacion peque;a
"select nombre, subti, desc_B from productos where nombre = 'AVN'"

// Medidas disponibles y costos de las versiones de AVN
"select medida, cost from precios join productos on productos.id_prod = precios.id_prod and productos.nombre = 'AVN'"

// Opciones (ACCESORIOS) nombre, medida costo
"select nombre, medida, cost from productos join (select precios.id_prod, precios.medida,precios.cost from precios join categorias on precios.id_prod = categorias.id_prod and categorias.categoria = 'ACCESORIES') as A on productos.id_prod = A.id_prod"

*/



	$data = json_decode(file_get_contents("php://input"));
	$conn = new mysqli("mysql.webhero.com", "tadlock", "jptad0923", "tadlock");
	$query = "select productos.id_prod, productos.nombre, precios.medida, precios.cost from productos join precios on productos.id_prod = precios.id_prod and productos.nombre =". "'".$data->name."'";
	
	$res = $conn->query($query);
	if(mysqli_num_rows($res) > 0){
	    $lista ='[';
	    $i = 0;
	    while($row = $res->fetch_assoc()){
	    	if($i == mysqli_num_rows($res) - 1){
		    	$lista = $lista.'{"id":"'. $row["nombre"].'-'.$row['medida'].'", "size":"'.$row["medida"].'\\"", "price":"$'. $row["cost"].'"}';

	    	} else {
	    		$lista = $lista.'{"id":"'. $row["nombre"].'-'.$row['medida'].'", "size":"'.$row["medida"].'\\"", "price":"$'. $row["cost"].'"},';

	    	}

	    	$i = $i + 1;
	    }
	    $lista = $lista.']';

		$prod = '{"modelos":'.$lista.'}';

	    header('Content-Type: application/json');
	    echo json_encode($prod);
	};
	$res->free();
	$conn->close();

?>