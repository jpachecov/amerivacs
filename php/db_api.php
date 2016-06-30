<?php

	$query = "select productos.id_prod, productos.nombre, productos.subti, productos.desc_A, productos.desc_B, precios.medida, precios.cost from productos join precios on productos.id_prod = precios.id_prod and productos.nombre =". "'".$data->name."'";

?>

