app.controller('compare', function($scope, $rootScope){

	$scope.producto_1 = {};
	$scope.producto_2 = {};


	$scope.productos = $rootScope.productos;
	

	$scope.selected_1 = true;
	$scope.selected_2 = true;
	$scope.getProduct_1 = function(name){

			$scope.selected_1 = true;


			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == name){
					$scope.producto_1 = $scope.productos[i];
					$scope.producto_1['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto_1['src'] = 'img/products/imagen_'+name+'_000.png';

				var nueva = [{},{},{},{},{}];
				var p;
				for(var j = 0; j < $scope.producto_1['models'].length; j++){
					p = $scope.producto_1['models'][j];
					if(p.size === undefined) return;
					if(p.size.includes('20')){
						nueva[0] = p;

					}
					if(p.size.includes('25')){
						nueva[1] = p;
					}
					if(p.size.includes('30')){
						nueva[2] = p;
					}
					if(p.size.includes('35')){
						nueva[3] = p;
					}
					if(p.size.includes('50')){
						nueva[4] = p;
					}
				}
				$scope.producto_1['models'] = nueva;
/*
				compara.A = name;

				angular.element('.menucito1 .seleccion').removeClass('seleccion');
				angular.element('.menucito1 #1' + name).addClass('seleccion');
				*/
		
	}

	$scope.getProduct_2 = function(name){


			//compara.B = name;

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == name){
					console.log('aa '+ name);
					$scope.producto_2 = $scope.productos[i];
					$scope.producto_2['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto_2['src'] = 'img/products/imagen_'+name+'_000.png';



				var nueva = [{},{},{},{},{}];
				var p;
				for(var j = 0; j < $scope.producto_2['models'].length; j++){
					p = $scope.producto_2['models'][j];
					if(p.size === undefined) return;
					if(p.size.includes('20')){
						nueva[0] = p;

					}
					if(p.size.includes('25')){
						nueva[1] = p;
					}
					if(p.size.includes('30')){
						nueva[2] = p;
					}
					if(p.size.includes('35')){
						nueva[3] = p;
					}
					if(p.size.includes('50')){
						nueva[4] = p;
					}
				}
				$scope.producto_2['models'] = nueva;

/*
				angular.element('.menucito2 .seleccion').removeClass('seleccion');
				angular.element('#2' + name).addClass('seleccion');
				*/
	}

	$scope.change1 = function(name){
		angular.element('.menucito1 .seleccion').removeClass('seleccion');
		angular.element('#1' + name).addClass('seleccion');
		$scope.getProduct_1(name);
	}	
	$scope.change2 = function(name){
		angular.element('.menucito2 .seleccion').removeClass('seleccion');
		angular.element('#2' + name).addClass('seleccion');
		$scope.getProduct_2(name);
	}	

	$scope.init = function(){
		console.log('INIT');

		console.log($rootScope.prod_1);
		$scope.getProduct_1($rootScope.prod_1);
		$scope.getProduct_2('AVS');
		setTimeout(function(){
		angular.element('.menucito1 .seleccion').removeClass('seleccion');
		angular.element('#1' + $rootScope.prod_1).addClass('seleccion');

		angular.element('.menucito2 .seleccion').removeClass('seleccion');
		angular.element('#2AVS').addClass('seleccion');

		}, 200);


	}


	
});