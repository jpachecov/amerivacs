"use strict"

class Compare{
	constructor(a,b){
		this.A = a;
		this.B = b;
		this.SCOPE = undefined;
	}
	addScope(scope){
		this.SCOPE = scope;
	}

}
//var compara = new Compare('AVN', 'AVS');

class Carrito{
	constructor(){
		this.productos = [];
		this.currentIdx = 1;
	}
	esta(){
		console.log('esta');
	}
	addP(producto){
		producto.idx = this.currentIdx;
		this.productos.push(producto);
		this.currentIdx += 1;
	}
	removeP(id_prod){
		for (var i = 0; i < this.productos.length; i++){
			if(this.productos[i].idx == id_prod){
				this.productos.splice(i, 1);
				this.currentIdx += -1;
				continue;
			}
		}
	}
}

class Producto{
	constructor(idx, nombre, descripcion, precio){
		this.idx = idx;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
	}
}

class Cliente{
	constructor(nombre){
		this.nombre = nombre;
	}
}

class Form_Amerivacs_Client{
	constructor(){

		this.nombre = "";
		this.empresa = "";
		this.telefono = "";
		this.ext = "";
		this.card = "";
		this.envio = "";
		this.isInvalid = false;
		this.errores = [];
		this.mailTo = "jeanpierre@ciencias.unam.mx";

		this.ERR = {};
		this.ERR['nombre'] = {
								isActive : false,
								mensaje : "The name field is invalid."
							};

			
		this.ERR['telefono'] = {
								isActive : false,
								mensaje : "The phone field is invalid."
							};
		this.ERR['envio'] = {
								isActive : false,
								mensaje : "The ship address field is invalid."
							};

		this.ERR['productos'] = {isActive:false, mensaje:"There is no products yet."};

		

	}
	/**
	* Validamos los datos actuales del formulario
	*/
	validate(carrito){
		if(!this.cart_ok(carrito)){


			if(!this.ERR['productos'].isActive){
				console.log('aaa')
				this.ERR['productos'].isActive = true;
				this.errores.push(this.ERR['productos']);
			}
		} else {
			if(this.ERR['productos'].isActive){
				this.ERR['productos'].isActive = false;
			}
		}

		if(!this.name_ok()){

			console.log('nobre mal');

			if(!this.ERR['nombre'].isActive){
				console.log('aaa')
				this.ERR['nombre'].isActive = true;
				this.errores.push(this.ERR['nombre']);
			}
		} else {
			if(this.ERR['nombre'].isActive){
				this.ERR['nombre'].isActive = false;
			}
		}



		for (var key in this.ERR){
			if(this.ERR[key].isActive){
				this.isInvalid = true;
				break;
			}
		}
		console.log(this.isInvalid);
		console.log(this.errores);
		return !this.isInvalid;

	}
	name_ok(){
		console.log('nameok');
		if(this.nombre == "" || this.nombre.length < 5){
			return false;
		} else {
			return true;
		}
	}

	cart_ok(cart){
		if(cart.productos.length == 0){
			return false;
		} else {
			return true;
		}
	}

	/**
	* Envia la informacion al correo de Amerivacs
	*/
	sendInfo(){

	}
}

class Cart_Form_Handler{
	constructor(scope, cart, form){
		this.scope = scope;
		this.cart = cart;
		this.form = form;
	}
	validateForm(){
		if(this.form.validate(this.cart)){
			this.form.sendInfo();
		}
	}
	addItem(id, nombre, precio){
		console.log('addite ' + precio);
		this.cart.addP(new Producto(0, id, nombre, precio));
		this.scope.cart();
	}
}


app.controller('controlador', function($scope,$sce, $http, $location, $rootScope) {

	$scope.showingC = false;

	$scope.carrito = new Carrito();
	$scope.formulario = new Form_Amerivacs_Client();

/*
	$scope.carrito.addP(new Producto(0,'AVN','maquina A','$1800'));
	$scope.carrito.addP(new Producto(0,'AVS','maquina B','$1800'));
	$scope.carrito.addP(new Producto(0,'CAVN','maquina C','$1800'));
*/
	$scope.handler = new Cart_Form_Handler($scope, $scope.carrito, $scope.formulario);



	$scope.searchText;
	$scope.searchText_2;

	$scope.OPTIONS = $rootScope.options;

	$scope.PARTS = $rootScope.parts;

	$scope.productos = $rootScope.productos;
	$scope.showCartButton = true;

	$scope.showCartButtonn = function(){
		$scope.showCartButton = !$scope.showCartButton;
	};

	$scope.isVacuum = true;
	$scope.currentPage = "inicio.html";

							

	
	$scope.garantias = [
		{'nombre':'SAFETY',
		'descrip':'<strong>Our sealers</strong> simply will not seal or heat until \
					the jaws have <strong>fully closed.</strong>',
		'src':'img/products/safety_icon_000.png'},



		{'nombre':'PERFORMANCE',
		'descrip':'Clearly evident in both <strong>speed of operation</strong> \
					and <strong>uncompromised seal integrity.</strong>',
		'src':'img/products/performance_icon_000.png'},

		{'nombre':'QUALITY',
		'descrip':'In <strong>every component</strong> from the housing, to the \
					no-nonsense <strong>intuitive controls<strong>, to the <strong>superior \
					grade</strong> electrical and mechanical devices.',
		'src':'img/products/quality_icon_000.png'},

		{'nombre':'INTUITIVE',
		'descrip':'Our sealers are <strong>straightforward</strong> and <strong>easy to \
					operate.</strong>',
		'src':'img/products/intuitive_icon_000.png'},
	]

	$scope.vaccum_sealers = [
		{
			'nombre' : 'AVN',
			'descrip' : 'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'resumen_p' : 'Foot pedal activated gas-flush vacuum packaging at its \
							finest. The AVN’s 1/4\” wide sealing element delivers a \
							leak-proof seal. CE available <br><br> Features five seal lengths (20\” 25\” 30\” 35\” 50\”)',
			'img' : 'img/products/imagen_CAVN_000.png'
		},
		{
			'nombre' : 'AVS',
			'descrip' : 'RETRACTABLE NOZZLE VACUUM SEALER',
			'resumen_p' : 'Offered in our most popular 20” seal length, the AVS \
							combines the same quality and design integrity exhibited \
							in the AVN without the gas-flush feature. \
							The AVS is the choice sealer for the widest range of all \
							our clientele. CE available',
			'img' : 'img/products/imagen_CAVN_000.png'
		},
	];

	$scope.sc_vaccum_sealers = [
		{
			'nombre' : 'CAVN',
			'descrip' : 'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'resumen_p' : 'The CAVN eliminates the need for additional equipment. \
							Completely self-contained, is ready to perform \
							out of the box, while reducing equipment requirements. \
							Available in 20” and 30” and can be custom configured \
							to meet CE Certification requirements.', 
			'img' : 'img/products/imagen_CAVN_000.png'
		},
		{
			'nombre' : 'CAVS',
			'descrip' : 'RETRACTABLE NOZZLE VACUUM SEALER',
			'resumen_p' : 'The CAVS eliminates the need for additional equipment. \
							Completely self-contained, is ready to perform out of \
							the box, while reducing equipment requirements. \
							Available in 20” and 30” and can be custom configured \
							to meet CE Certification requirements.',
			'img' : 'img/products/imagen_CAVN_000.png'
		},
	];

	$scope.impulse_sealers = [
		{
			'nombre' : 'AVP',
			'descrip' : 'PNEUMATIC IMPULSE SEALER',
			'resumen_p' : 'The AVP series was designed for heavy-duty applications. \
							The most evident feature of the AVP is its lack of \
							visible controls. Form follows function providing an \
							expansive clear work surface to hold product ready to \
							be sealed. <br> \
							The AVP is still lightweight enough (29lbs) to be moved \
							effortlessly in your facility.', 
			'img' : 'img/products/imagen_CAVN_000.png'
		}
	];

	$scope.chamber_sealers = [
		{
			'nombre' : 'AVC',
			'descrip' : 'CHAMBER VACUUM SEALER',
			'resumen_p' : '	The AVC is hand assembled using top grade materials \
							and components. The AVC is compressed air driven, \
							eliminating any concern regarding noise, vibration or \
							heat generation. <br>\
							One button touch sealing, preset vacuum controls and \
							a large 22"x22"x4" stainless steel vacuum chamber \
							best define this no nonsense workhorse. ', 
			'img' : 'img/products/imagen_AVC_000.png'
		},
		{
			'nombre' : 'AVCG',
			'descrip' : 'CHAMBER VACUUM SEALER WITH GAS PURGE',
			'resumen_p' : 'The AVCG combines the same quality and design \
							integrity exhibited in the AVC, but with the gas-flush feature. \
							It’s so versatile, you can adjust the level of vacuum \
							that your product needs without worrying about adjusting \
							vacuum timers for every package. <br> \
							No need to worry about adjusting vacuum timers for\
							every package.',
			'img' : 'img/products/imagen_AVCG_000.png'
		},
	];

	$scope.accesories = [
		{
			'nombre' : 'OPTIONS',
			'descrip' : '',
			'resumen_p' : '', 
			'img' : ''
		}
	];

	$scope.parts = [
		{
			'nombre' : 'PARTS',
			'subtitulo' : 'Replacement Parts',
			'resumen_p' : '', 
			'img' : ''
		}];




	$scope.ops= [['20"','25"','30"','35"','50"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',
											'25"':'$375',
											'30"':'$700',
											'35"':'$900',
											'50"':'N.A',																														
												}
					},
					{'op':'SS','des':'Stainless Steel Upgrade','prices':{
											'20"':'$500',
											'25"':'$550',
											'30"':'$600',
											'35"':'$650',
											'50"':'$800',																														
												}
					},
					{'op':'CE','des':'CE certification*','prices':{
											'20"':'$700',
											'25"':'$750',
											'30"':'$800',
											'35"':'$850',
											'50"':'$1,000',																														
												}
					},
					{'op':'VF','des':'Vacuum Filter','prices':{
											'20"':'$100',
											'25"':'$100',
											'30"':'$100',
											'35"':'$100',
											'50"':'$100',																														
												}
					},
					{'op':'VR','des':'Vacuum Regulator','prices':{
											'20"':'$50',
											'25"':'$50',
											'30"':'$50',
											'35"':'$50',
											'50"':'$50',																														
												}
					},
					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
											'20"':'$350',
											'25"':'$350',
											'30"':'$350',
											'35"':'$350',
											'50"':'$350',																														
												}
					},
					{'op':'DN','des':'Dual Nozzle (w/dual vac pumps)(AVS-AVN only)','prices':{
											'20"':'$765',
											'25"':'$765',
											'30"':'$765',
											'35"':'$765',
											'50"':'included',																														
												}
					},
					{'op':'TRAY','des':'Work Tray – 20” x 12”','prices':{
											'20"':'$75',
											'25"':'$75',
											'30"':'$75',
											'35"':'$75',
											'50"':'N.A',																														
												}
					},
					{'op':'EC','des':'Additional Vacuum or Gas cycle (AVN only)','prices':{
											'20"':'$250',
											'25"':'$250',
											'30"':'$250',
											'35"':'$250',
											'50"':'$250',																														
												}
					},
					{'op':'LPC','des':'Low-pressure Bar Close','prices':{
											'20"':'$250',
											'25"':'$250',
											'30"':'$250',
											'35"':'$250',
											'50"':'included',																														
												}
					},
					{'op':'AF','des':'Coalescing Air Filter (not for CAV)','prices':{
											'20"':'$195',
											'25"':'$195',
											'30"':'$195',
											'35"':'$195',
											'50"':'$195',																														
												}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
											'20"':'$1,995',
											'25"':'$1,995',
											'30"':'$1,995',
											'35"':'$1,995',
											'50"':'$1,995',																														
												}
					},
					{'op':'PE','des':'Ported Exhaust','prices':{
											'20"':'$220',
											'25"':'$220',
											'30"':'$220',
											'35"':'$220',
											'50"':'$220',																														
												}
					},
					{'op':'STAND','des':'Multi-Position Stand (AVS, AVN and AVP only)','prices':{
											'20"':'$985',
											'25"':'$985',
											'30"':'$985',
											'35"':'$985',
											'50"':'N.A',																														
												}
					},
				
				]];

	$scope.isAVN = true;
	$scope.isCAVN = false;
	$scope.isAVG = false;

	$scope.options_AVN = [
		{
			'name':'BAS',
			'desc':'Upper and Lower Heating Elements',
			'price':['$275','$375','*$700','*$900','']
		},
		{
			'name':'SS',
			'desc':'Stainless Steel Upgrade',
			'price':[]
		},
				{
			'name':'CE',
			'desc':'CE certification*',
			'price':[]
		},
				{
			'name':'VF',
			'desc':'Vacuum Filter',
			'price':[]
		},
				{
			'name':'VR',
			'desc':'Vacuum Regulator',
			'price':[]
		},
				{
			'name':'220PX',
			'desc':'220 Volt A.C. 50-60 Hz conversion',
			'price':[]
		},
				{
			'name':'DN',
			'desc':'Dual Nozzle (w/dual vac pumps)(AVS-AVN only)',
			'price':[]
		},
				{
			'name':'TRAY',
			'desc':'Work Tray – 20\" x 12\"',
			'price':[]
		},
				{
			'name':'EC',
			'desc':'Additional Vacuum or Gas cycle (AVN only)',
			'price':[]
		},
				{
			'name':'LPC',
			'desc':'Low-pressure Bar Close',
			'price':[]
		},
				{
			'name':'AF',
			'desc':'Coalescing Air Filter (not for CAV)',
			'price':[]
		},
				{
			'name':'TC',
			'desc':'Digital Temperature Control',
			'price':[]
		},
		{
			'name':'PE',
			'desc':'Ported Exhaust**',
			'price':[]
		},
		{
			'name':'STAND',
			'desc':'Multi-Position Stand (AVS and up to AVN-35) **',
			'price':[]
		},	];

	$scope.toProduct = function(name){




		//$scope.loadPage('all-products');
		
		$location.path('/product');
		setTimeout(function(){
		$scope.getProduct(name);

		},200)

		$scope.animaScroll();

/*
		setTimeout(function(){

			$('#' + name).addClass('seleccion');	
		}, 300);
*/

//		console.log('toProduct ' + name);
	}
	$scope.scrollProd = function(){
		console.log('scrfoll prod');
		window.scrollBy(0,1700);

	};

	$scope.getCat = function(name){
		console.log('click cat');
		if(name == 'retractable nozzle'){
			$scope.categoria = [];
			$scope.vaccum_sealers.forEach(function(e){
				$scope.categoria.push(e);
			});
			$scope.sc_vaccum_sealers.forEach(function(e){
				$scope.categoria.push(e);
			});


			$('.categs .seleccion').removeClass('seleccion');
			$('.categs #rn').addClass('seleccion');
		}
		if(name == 'chamber sealers'){
			$scope.categoria = $scope.chamber_sealers;
			$('.categs .seleccion').removeClass('seleccion');
			$('.categs #cs').addClass('seleccion');
		}
		if(name == 'impulse sealer'){
			$scope.categoria = $scope.impulse_sealers;
			$('.categs .seleccion').removeClass('seleccion');
			$('.categs #is').addClass('seleccion');
		}
		if(name == 'accesories'){
			$scope.categoria = $scope.accesories;
			$('.categs .seleccion').removeClass('seleccion');
			$('.categs #acc').addClass('seleccion');
		}
		if(name == 'parts'){
			$scope.categoria = $scope.parts;
			$('.categs .seleccion').removeClass('seleccion');
			$('.categs #pa').addClass('seleccion');
		}
	}



	$scope.toCompare = function(name){
		$rootScope.prod_1 = name;
		$scope.loadPage('compare');
	}

	$scope.getProduct = function(name){
		


		console.log('getP ' + name);

		if(name == 'PARTS'){
			console.log('getproduct parts');
			$scope.isVacuum = false;
			$scope.isParts = true;
			$scope.isOptions = false;

			// Obtemeos las partes
			$scope.producto = {};
			$scope.producto = {'name':'PARTS','subtitulo':'Replacement Parts'};

/*
			var request = $http({
		    method: "POST",
		    url: "/NEW/php/parts.php",
		    data: {
		    	'name': name,
		    },
			});

			request.success(function(data){
				//console.log('PAUL');
				//console.log(data);
				//$scope.partes = {};
				//console.log(JSON.parse(data));
				//console.log('jean');
				//$scope.partes = JSON.parse(data)['modelos'];
				$scope.partes = data['modelos'];

			});
*/


		} else {

		if(name == 'OPTIONS'){


			$scope.isVacuum = false;
			$scope.isParts = false;
			$scope.isOptions = true;

			// Obtemeos las partes
			$scope.producto = {};
			$scope.producto = {'name':'OPTIONS','subtitulo':'Accesories for vacuum sealers'};//= $scope.parts;

			


/*
			var request = $http({
		    method: "POST",
		    url: "/NEW/php/options.php",
		    data: {
		    	'name': name,
		    },
			});

			request.success(function(data){
				//console.log(data);
				//console.log(JSON.parse(data));
				//console.log('jean');
				//$scope.opciones = JSON.parse(data)['modelos'];
				$scope.opciones = data['modelos'];

			});
*/

		} else {

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == name){
					$scope.producto = {};
					$scope.producto = $scope.productos[i];
					//$scope.producto['specs'] = $scope.productos[i]['specs'];
				}
			}

			$scope.producto['src'] = 'img/products/imagen_'+name+'_000.png';
			console.log($scope.producto);

			$scope.isVacuum = true;
			$scope.isOptions = false;
			$scope.isParts = false;
/*

			var request = $http({
		    method: "POST",
		    url: "/NEW/php/producto.php",
		    data: {
		    	'name': name,
		    },
			});

			var request2 = $http({
		    method: "POST",
		    url: "/NEW/php/modelo_prod.php",
		    data: {
		    	'name': name,
		    },
			});


			request2.success(function (data) {
				console.log(JSON.parse(data));
				$scope.producto['models'] = JSON.parse(data)['modelos'];
			});

			request.success(function (data) {
				console.log(data);
				var obj = data;//JSON.parse(data);
				$scope.producto['name'] = obj['name'];
				$scope.producto['subtitulo'] = obj['subtitulo'];
				$scope.producto['parrafo'] = obj['parrafo'];
				$scope.producto['options'] = $scope.ops;

				console.log(data);
				//console.log(data);

			});
*/

		}

		}



			$('.seleccion').removeClass('seleccion');
			$('#' + name).addClass('seleccion');

}

	$scope.showing = false;

	$scope.showMenu =  function(){
		console.log('showing menu');
		//if($scope.showing)
		$('.show-menu').velocity({
			translateY: 0 + 'px',
		},{
			duration: 180,
			easing: "easeInLine",
			complete: function(){
				$scope.showing = true;
			}
		});
	}
	$scope.hideMenu =  function(){
		$('.show-menu').velocity({
			translateY: -80 + 'px',
		},{
			duration: 80,
			easing: "easeInLine",
			complete: function(){
				$scope.showing = false;
			}
		});
	}

	$scope.showCart = function(){
		/*
		$scope.showingC = true;
		$('.contenido-princi').addClass('bluur');
		$('.carrito').velocity({
			translateX: 0 + '%',
			opacity: 1,
		},{
			duration: 80,
			easing: "easeInLine",
			complete: function(){


			}
		});	
*/
	}

	$scope.hideCart = function(){
/*
		$('.contenido-princi').removeClass('bluur');
		$('.carrito').velocity({
			translateX: 120 + '%',
			opacity: 0,
		},{
			duration: 200,
			easing: "easeInLine",
			complete: function(){
				$scope.showingC = false;
			}

		});	
		*/	
	}	
	$scope.carrito_url = "cart.html";
	$scope.cart =  function(){
		if($scope.showingC){
			$scope.hideCart();
		} else {
			$scope.showCart();
		}
	}
	$scope.animaScroll = function(){

		$(window).scrollTop('0px');
	}

	$scope.loadPage = function(page){
		console.log('loadPage');

		if($scope.currentPage == 'productos.html' && page == 'products' && $scope.showing){
			console.log('caso');
			$scope.hideMenu();
			return;
		}
		$scope.animaScroll();

		switch(page){
			case 'home':				
				$scope.currentPage = "inicio.html";
				$location.path('/home');
				break;


			case 'about_us':
				$scope.currentPage = "about_us.html";
				$location.path('/about');
				break;
			case 'contact':
				$scope.currentPage = "contacto.html";
				$location.path('/contact');
				break;
			case 'products':
				$scope.currentPage = "productos.html";
				$location.path('/products');
				//$scope.showMenu();

				break;
			case 'all-products':
				$scope.currentPage = 'producto.html';
				$location.path('/product');

				setTimeout(function(){
					$scope.getProduct('AVN');
				}, 200);



				break;
			case 'compare':
				$scope.currentPage = 'compara.html';
				$location.path('/amerivacs/compare');
				//$('#' + compara.A).addClass('seleccion');
				//$('#' + compara.B).addClass('seleccion');

/*
				setTimeout(function(){
					console.log('tiemout');
					compara.SCOPE.getProduct_1('AVN');
					compara.SCOPE.getProduct_2('AVS');
				}, 200);
*/
				break;
			case 'selector':
				$scope.currentPage = 'ciber_selector.html'
				$location.path('/amerivacs/selector');
				break;

		}
	}


	$scope.producto = {};
	$scope.partes = [];
	$scope.getProduct('AVN');
	$scope.getCat('retractable nozzle');

	setTimeout(function(){
		$('.seleccion').removeClass('seleccion');
		$('#AVN').addClass('seleccion');
	}, 300);


$scope.getProduct('AVN');

});
