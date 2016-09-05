app.controller('selector-controller', function($scope,$location, $rootScope){


	$scope.productos = $rootScope.productos;

	$scope.producto = {};

	$scope.tree = {
		// les than 20
		0 : { // Gas purge
			'no':{
				'yes':'AVS-20',
				'no':{
					'yes':'AVS-20',
					'no':'CAVS-20'
				},
			},
			'yes':{
				'yes':'AVS-20',
				'no':{
					'yes':'AVN-20',
					'no':'CAVN-20',
				},
			},
		},
		// 20 a 25
		1 : { // Gas purge
			'no':{
				'yes':'AVN-25',
				'no':{
					'yes':'AVN-25',
					'no':'CAVS-30'
				},
			},
			'yes':{
				'yes':'AVN-25',
				'no':{
					'yes':'AVN-25',
					'no':'CAVN-30',
				},
			},
		},
		// 25 a 30
		2 : { // Gas purge
			'no':{
				'yes':'AVN-30',
				'no':{
					'yes':'AVN-30',
					'no':'CAVS-30'
				},
			},
			'yes':{
				'yes':'AVN-30',
				'no':{
					'yes':'AVN-30',
					'no':'CAVN-30',
				},
			},
		},
		//  30 a  35
		3 : { // Gas purge
			'no':'AVN-35',
			'yes':'AVN-35',
		},
		//  35 a  50
		4 : { // Gas purge
			'no':'AVN-50',
			'yes':'AVN-50',
		
		},
	};

	$scope.answer = function(list){
		if(list[0] >= 3){
			return $scope.tree[list[0]][list[1]];
		} else {
			if(list[2] == 'no'){
				return $scope.tree[list[0]][list[1]][list[2]][list[3]];

			} else {
				return $scope.tree[list[0]][list[1]][list[2]];

			}
		}

	}

	$scope.ANS = [];

	$scope.seleccionado = {};


	$scope.begin = function(){
		angular.element('.selector-1').hide();
		angular.element('.selector-2').show();
		angular.element('.selector-2').addClass('actual');

	}
	$scope.reset = function(){
		$scope.ANS = [];
		angular.element('.actual').hide();
		angular.element('.selector-1').show();
		angular.element('.actual').removeClass('actual');
		console.log('reset');
	};
	$scope.addAns = function(ans){
		$scope.ANS.push(ans);

		if($scope.ANS.length == 1){
			angular.element('.selector-2').hide();
			angular.element('.selector-2').removeClass('actual');
			angular.element('.selector-3').show();
			angular.element('.selector-3').addClass('actual');
			return;	
		}
		if($scope.ANS.length == 2 && $scope.ANS[0] < 3){
			angular.element('.selector-3').hide();
			angular.element('.selector-3').removeClass('actual');
			angular.element('.selector-4').show();
			angular.element('.selector-4').addClass('actual');
			return;	
		}
		if($scope.ANS.length == 3 && $scope.ANS[0] < 3){
			if($scope.ANS[2] == 'no'){
				angular.element('.selector-4').hide();
				angular.element('.selector-4').removeClass('actual');
				angular.element('.selector-5').show();
				angular.element('.selector-5').addClass('actual');

			} else {
				angular.element('.selector-4').hide();
				angular.element('.selector-4').removeClass('actual');
				angular.element('.final').show();
				angular.element('.final').addClass('actual');
				$scope.seleccionado.id = $scope.answer($scope.ANS);
				$scope.selectP();
			}
			return;	
		}
		if($scope.ANS.length == 4 && $scope.ANS[0] < 3){
			angular.element('.selector-5').hide();
			angular.element('.selector-5').removeClass('actual');
			angular.element('.final').show();
			angular.element('.final').addClass('actual');
			$scope.seleccionado.id = $scope.answer($scope.ANS);
			$scope.selectP();
			return;	
		}

		if($scope.ANS.length == 2 && $scope.ANS[0] >= 3){
			angular.element('.selector-3').hide();
			angular.element('.selector-3').removeClass('actual');
			angular.element('.final').show();
			angular.element('.final').addClass('actual');
			console.log($scope.ANS);
			console.log($scope.answer($scope.ANS));
			$scope.seleccionado.id = $scope.answer($scope.ANS);
			$scope.selectP();

		}
	}


	$scope.selectP = function(){
		if($scope.seleccionado.id.includes('AVN')){

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == 'AVN'){
					$scope.producto = $scope.productos[i];
					$scope.producto['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto['src'] = 'img/products/imagen_AVN_000.png';	
		}


		if($scope.seleccionado.id.includes('AVS')){

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == 'AVS'){
					$scope.producto = $scope.productos[i];
					$scope.producto['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto['src'] = 'img/products/imagen_AVS_000.png';	
		}

		if($scope.seleccionado.id.includes('CAVN')){

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == 'CAVN'){
					$scope.producto = $scope.productos[i];
					$scope.producto['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto['src'] = 'img/products/imagen_CAVN_000.png';	
		}

		if($scope.seleccionado.id.includes('CAVS')){

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == 'CAVS'){
					$scope.producto = $scope.productos[i];
					$scope.producto['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto['src'] = 'img/products/imagen_CAVS_000.png';	
		}

		if($scope.seleccionado.id.includes('AVC')){

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == 'AVC'){
					$scope.producto = $scope.productos[i];
					$scope.producto['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto['src'] = 'img/products/imagen_AVC_000.png';	
		}

		if($scope.seleccionado.id.includes('AVCG')){

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == 'AVCG'){
					$scope.producto = $scope.productos[i];
					$scope.producto['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto['src'] = 'img/products/imagen_AVCG_000.png';	
		}
		if($scope.seleccionado.id.includes('AVP')){

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == 'AVP'){
					$scope.producto = $scope.productos[i];
					$scope.producto['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto['src'] = 'img/products/imagen_AVP_000.png';	
		}
	}
});





/*
function outTransition(i, f){
	if(i == '1'){

		$('.selector-1').velocity({
		
			opacity: 0,
		},{
			duration: 1000,
			queue: false,
			complete: function(){
				console.log('termino');
				$('.selector-1').css('display','none');
				f();
			}
		});
		$('.box-sel').velocity({
			translateY: '-100px',
			opacity: 0,
		},{
			duration: 300,
			queue: false,
		});

		$('.box-container p').velocity({
			translateY: '100px',
			opacity: 0,
		},{
			duration: 300,
			queue: false,

		});
	}

	if(i == '2'){
		$('.selector-2').velocity({
			opacity: 0,
		},{
			duration: 1000,
			queue: false,
			complete: function(){
				console.log('termino');
				$('.selector-2').css('display','none');
				f();
			}
		});	

		$('.little-box').velocity({
			translateY: '200px',
			opacity:0,
		},{
			duration: 300,
			queue: false,
		});

		$('.selector-2 .question').velocity({
			translateY: '-200px',
			opacity:0,
		},{
			duration: 300,
			queue: false,
		});

		$('.icon-s').velocity({
			translateY: '-200px',
			opacity:0,
		},{
			duration: 300,
			queue: false,
		});
	}

	if(i == '3'){
		$('.selector-3').velocity({
			opacity: 0,
		},{
			duration: 1000,
			complete: function(){
				console.log('termino');
				$('.selector-3').css('display','none');
				f();
			}
		});

		$('.selector-3 .question').velocity({
			translateY: '-200px',
			opacity:0,
		},{
			duration: 300,
			queue: false,
		});


		$('.gas-t').velocity({
			translateY: '-200px',
			opacity:0,
		},{
			duration: 300,
			queue: false,
		});

		$('.ans').velocity({
			translateY: '200px',
			opacity:0,
		},{
			duration: 300,
			queue: false,
		});
	}

}

function inTransition(i){
	if(i == '1'){
		$('.selector-1').css('opacity','0');
		$('.selector-1').css('display','block');
		$('.selector-1').velocity({
			opacity: 1,
		},{
			duration: 1000,
			complete: function(){
				//$('.selector-2').css('display','none');
				//f();
			}
		});		


	}
	if(i == '2'){
		$('.selector-2').css('opacity','0');
		$('.selector-2').css('display','block');
		$('.selector-2').velocity({
			opacity: 1,
		},{
			duration: 1000,
			complete: function(){
				//$('.selector-2').css('display','none');
				//f();
			}
		});		


	}
	if(i == '3'){
		$('.selector-3').css('opacity','0');
		$('.selector-3').css('display','block');
		$('.selector-3').velocity({
			opacity: 1,
		},{
			duration: 1000,
			complete: function(){
				//$('.selector-2').css('display','none');
				//f();
			}
		});		


	}

	if(i == '4'){
		$('.selector-4').css('opacity','0');
		$('.selector-4').css('display','block');
		$('.selector-4').velocity({
			opacity: 1,
		},{
			duration: 1000,
			complete: function(){
				//$('.selector-2').css('display','none');
				//f();
			}
		});		


	}
}
*/