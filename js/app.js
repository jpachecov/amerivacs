"use strict"
var app = angular.module('amerivacs', ['ngSanitize','ngAnimate','ngRoute']);

// Rutas para la aplicacion
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl: "home.html"})
    .when('/home',{templateUrl: "home.html"})
    .when('/about', {templateUrl:"about_us.html"})
    .when('/products', {templateUrl:"productos.html"})
    .when('/product',{templateUrl: "producto.html"})
    .when('/contact',{templateUrl: "contact.html"})
    .when('/compare',{templateUrl: "compare.html"})
    .when('/selector',{templateUrl: "ciber_selector.html"})
    .otherwise({templateUrl:"404.html"});
}]);




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
var compara = new Compare('AVN', 'AVS');

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


app.controller('controlador', function($scope,$sce, $http, $location) {


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
	$scope.productos = 
	[
		{
			'name':'AVN',
			'subtitulo':'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'parrafo':
				[
				'	Foot-pedal activated gas-flush vacuum packaging at its finest. The AVN\'s 1/4\" wide sealing \
				 	element delivers a leak-proof seal from sensitive electronics to sterile medical devices, \
				 	food to biotech applications, aerospace technology to scientific devices. \
				 	<br><br> \
				 	With one touch of the pedal, the AVN flushes out oxygen and moisture using an \
				 	inert gas of your choice. Then, the automated stainless steel nozzle retracts, \
				 	and your products are sealed in seconds. Combine the AVN’s precise automation with \
				 	speed and extensive safety features, a faulty seal is no longer possible. \
				 	<br><br> \
					Clean-room compatible, the AVN is ideal for electronics, medical, and pharmaceutical applications. \
					Providing additional functionality and convenience, the AVN’s gas-flush feature can be \
					switched off as well as the vacuum feature, or both can be switched off for sealing only \
					with impulse-heat. \
					<br><br> \
			  		The AVN is hand-assembled at our facility using only superior grade components. \
			  		The AVN is also featured in five seal-lengths (20\", 25\", 30\", 35\" and 50\") and \
			   		can be configure to meet CE certification requirements. \
			   		<br><br> \
			   		All AmeriVaCs <strong>AVN Vacuum Sealers </strong> include:'],		
			'models':
				[
					{'id':'AVN-20','size':'20\” x 1/4\”','price':'$2,500.00'},
					{'id':'AVN-25','size':'25\” x 1/4\”','price':'$2,985.00'},
					{'id':'AVN-30','size':'30\” x 1/4\”','price':'$3,185.00'},
					{'id':'AVN-35','size':'35\” x 1/4\”','price':'$3,385.00'},
					{'id':'AVN-50','size':'50\” x 1/4\”','price':'$6,985.00'},
				],
			'specs':
				[
					{'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH', 'val':'20", 25" ,30" ,35", 50"'},
					{'spec':'CHAMBER SIZE (in)', 'val':'-'},
					{'spec':'VACUUM FLOW (cfm)', 'val':'6'},
					{'spec':'MAX VACUUM PRESSURE (inHg)','val':'27'},
					{'spec':'AIR REQUIREMENTS @100 PSI (cfm)', 'val':'6'},
					{'spec':'AMPS @120 VOLTS A.C.', 'val':'7, 8, 12, 15, 15'},
					{'spec':'UNIT SIZE (IN)', 'val':'(25",33",38",43",64")L x 10"W x 7"H'},
					{'spec':'APPROXIMATE UNIT WEIGHT (lb)', 'val':'33, 40, 54, 59, 86'},
					{'spec':'APPROXIMATE SHIP WEIGHT (lb)', 'val':'40, 45, 60, 70,106'},
				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"','25"','30"','35"','50"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',
											'25"':'$375',
											'30"':'*$700',
											'35"':'*$900',
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
					{'op':'DN','des':'Dual Nozzle (w/dual vac pumps)','prices':{
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
					{'op':'EC','des':'Additional Vacuum or Gas cycle','prices':{
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
					{'op':'AF','des':'Coalescing Air Filter','prices':{
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
					{'op':'PE','des':'Ported Exhaust**','prices':{
											'20"':'$220',
											'25"':'$220',
											'30"':'$220',
											'35"':'$220',
											'50"':'$220',																														
												}
					},
					{'op':'STAND','des':'Multi-Position Stand**','prices':{
											'20"':'$985',
											'25"':'$985',
											'30"':'$985',
											'35"':'$985',
											'50"':'N.A',																														
												}
					},
				]]
		},

		{
			'name':'AVS',
			'subtitulo':'RETRACTABLE NOZZLE VACUUM SEALER',
			'parrafo':
				[	
				'Offered in our <strong>most popular 20” seal length </strong>, the <strong>AVS</strong> combines \
				 the same quality and design integrity exhibited in the <strong>AVN</strong> without \
				 the gas-flush feature.  <strong>The AVS is the choice sealer for the widest \
				 range of our clientele</strong>, from medical and electronics device manu-facturer,\
				 to food industry retailers, to pharmaceutical and aerospace corporations.'
				],		
			'models':
				[
					{
						'id':'AVS-20',
						'size':'20\” x 1/4\”',
						'price':'$1,995.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'6'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'27'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'6'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'28"L x 10"W x 7"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'32'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'40'
					},

				],

			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',																														
												}
					},
					{'op':'SS','des':'Stainless Steel Upgrade','prices':{
											'20"':'$500',
																														
												}
					},
					{'op':'CE','des':'CE certification*','prices':{
											'20"':'$700',
												}
					},
					{'op':'VF','des':'Vacuum Filter','prices':{
											'20"':'$100',																														
												}
					},
					{'op':'VR','des':'Vacuum Regulator','prices':{
											'20"':'$50',																														
												}
					},
					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
											'20"':'$350',																														
												}
					},
					{'op':'DN','des':'Dual Nozzle (w/dual vac pumps)','prices':{
											'20"':'$765',
												}
					},
					{'op':'TRAY','des':'Work Tray – 20” x 12”','prices':{
											'20"':'$75',																														
												}
					},
					{'op':'LPC','des':'Low-pressure Bar Close','prices':{
											'20"':'$250',
												}
					},
					{'op':'AF','des':'Coalescing Air Filter','prices':{
											'20"':'$195',																														
												}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
											'20"':'$1,995',
												}
					},
					{'op':'PE','des':'Ported Exhaust','prices':{
											'20"':'$220',
												}
					},
					{'op':'STAND','des':'Multi-Position Stand','prices':{
											'20"':'$250',
												}
					},
				]]
		},

		{
			'name':'CAVN',
			'subtitulo':'Self-Contained Retractable Nozzle Vacuum Sealer with Gas Purge',
			'parrafo':
				[	
				'Expanding the abilities of the AVN model, <strong>the CAVN eliminates the need for additional equipment.</strong> \
				Completely self-contained, the CAVN is ready to perform out of the box, providing greater flexibility \
				for placement locations within your facility. We’ve simplified our design with the same high quality \
				components that have made all AmeriVacS Vacuum sealers the best in the industry. All that is needed \
				to operate the CAVN is a press of the foot pedal and in seconds you have a gas-flushed and tight vacuum package. \
				 <br><br> \
				 From our innovatively simple nozzle system to our state-of-the-art safety features, AmeriVacS continues its\
				 tradition of manufacturing efficient, dependable, easy to use Vacuum Sealers. \
				<br><br> \
				 <strong> The AmeriVacS CAV Series Self Contained Retractable Nozzle Vacuum Sealers </strong> come with our exclusive high flow, stainless\
				 steel retractable nozzle that will help avoid operator bag manipulation during the vacuum cycle. \
				 With our clean, quiet built-in air compressor/vacuum pump, you will be assured reliable vacuum \
				 seals for years to come.  As with all our machines, setting up is quick and easy using only a \
				 standard electrical outlet.\
				 <br><br> \
				 The <strong>CAV Series Vacuum Sealers</strong> are hand-assembled at our facility \
				 using only superior grade components. <strong>Available in 20” and 30” and can be custom configured to \
				 meet CE Certification requirements.</strong>'




				],		
			'models':
				[
					{
						'id':'CAVN-20',
						'size':'20\” x 1/4\”',
						'price':'$3,495.00'
					},
					{
						'id':'CAVN-30',
						'size':'30\” x 1/4\”',
						'price':'$3,885.00'
					},

				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20", 30"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'3'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'27'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'-'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'10, 15'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'(28", 38")L x 10"w x 12"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'55,73'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'66, 84'
					},

				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"','30"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',
											'30"':'*$700',																														
												}
					},
					{'op':'SS','des':'Stainless Steel Upgrade','prices':{
											'20"':'$500',
											'30"':'$600',																														
												}
					},
					{'op':'CE','des':'CE certification*','prices':{
											'20"':'$700',
											'30"':'$800',																														
												}
					},
					{'op':'VF','des':'Vacuum Filter','prices':{
											'20"':'$100',
											'30"':'$100',																														
												}
					},
					{'op':'VR','des':'Vacuum Regulator','prices':{
											'20"':'$50',
											'30"':'$50',																														
												}
					},
					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
											'20"':'$350',
											'30"':'$350',																														
												}
					},
					{'op':'TRAY','des':'Work Tray – 20” x 12”','prices':{
											'20"':'$75',
											'30"':'$75',																														
												}
					},
					{'op':'LPC','des':'Low-pressure Bar Close','prices':{
											'20"':'$250',
											'30"':'$250',
												}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
											'20"':'$1,995',
											'30"':'$1,995',																														
												}
					},
					{'op':'PE','des':'Ported Exhaust**','prices':{
											'20"':'$220',
											'30"':'$220',																														
												}
					},
				]]
		},

		{
			'name':'CAVS',
			'subtitulo':'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'parrafo':
				[	
				'Expanding the abilities of the AVS model, the <strong>CAVS eliminates the need for additional equipment.</strong>  \
				Completely self-contained, the <strong>CAVS is ready to perform out of the box</strong>, while reducing equipment \
				requirements and providing greater flexibility of placement locations within your facility. We’ve \
				simplified our design with the same high quality components that have made all AmeriVacS Vacuum Sealers \
				the best in the industry.  All that is needed to operate the CAVS is a press of a pedal and in a manner\
				 of seconds you have a tight, reliable vacuum package.\
				<br><br> \
				 From our innovatively simple nozzle system to\
				  our state-of-the-art safety features, AmeriVacS continues its tradition of manufacturing efficient, \
				  dependable, easy to use Vacuum Sealers. \
				<br><br>\
				  The AmeriVacS <strong>CAV Series Self Contained Retractable Nozzle \
				  Vacuum Sealers </strong> come with our exclusive high flow, stainless steel retractable nozzle that will \
				  help avoid operator bag manipulation during the vacuum cycle.  With our clean, quiet built-in\
				   air compressor/vacuum pump, you will be assured reliable vacuum seals for years to come. \
				    As with all our machines, setting up is quick and easy using only a standard electrical \
				    outlet. \
				<br><br>\
				    <strong>The CAV Series Vacuum Sealers are hand-assembled at our facility using \
				    only superior grade components.</strong> Available in 20” and 30” and can be custom configured \
				    to meet CE Certifi-cation requirements.'
				],		
			'models':
				[
					{
						'id':'CAVS-20',
						'size':'20\” x 1/4\”',
						'price':'$2,985.00'
					},
					{
						'id':'CAVS-30',
						'size':'30\” x 1/4\”',
						'price':'$3,485.00'
					},

				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20", 30"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'3'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'27'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'-'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'10, 15'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'(28", 38")L x 10"w x 12"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'55,73'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'66, 84'
					},

				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"','30"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',
											'30"':'*$700',																														
												}
					},
					{'op':'SS','des':'Stainless Steel Upgrade','prices':{
											'20"':'$500',
											'30"':'$600',																														
												}
					},
					{'op':'CE','des':'CE certification*','prices':{
											'20"':'$700',
											'30"':'$800',																														
												}
					},
					{'op':'VF','des':'Vacuum Filter','prices':{
											'20"':'$100',
											'30"':'$100',																														
												}
					},
					{'op':'VR','des':'Vacuum Regulator','prices':{
											'20"':'$50',
											'30"':'$50',																														
												}
					},
					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
											'20"':'$350',
											'30"':'$350',																														
												}
					},
					{'op':'TRAY','des':'Work Tray – 20” x 12”','prices':{
											'20"':'$75',
											'30"':'$75',																														
												}
					},
					{'op':'LPC','des':'Low-pressure Bar Close','prices':{
											'20"':'$250',
											'30"':'$250',
												}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
											'20"':'$1,995',
											'30"':'$1,995',																														
												}
					},
					{'op':'PE','des':'Ported Exhaust**','prices':{
											'20"':'$220',
											'30"':'$220',																														
												}
					},
				]]
		},	

		{
			'name':'AVC',
			'subtitulo':'CHAMBER VACUUM SEALER',
			'parrafo':
				[	
				'The solution for your packaging program, the AVC is hand-assembled using top-grade \
				materials and components. The AVC is compressed-air driven, eliminating any concern \
				regarding noise, vibration, and heat generation. Unlike electro-mechanically driven \
				vacuum sealers, our characteristic AmeriVacS design prevents particle generation and \
				oil contamination that often leads to costly maintenance and downtime. \
				<br><br> \
				Clean-room compatible, the AVC is the ideal choice for medical and electronic device \
				manufacturers, food industry retailers, and pharmaceutical and aerospace corporations. \
				Precision-components guide the AVC’s seal-speed ensuring a clean, wrinkle-free closure \
				without any bag distortion. Ask for the optional second seal-bar and the AVC instantly \
				doubles package volume. \
				<br><br>\
				One button touch sealing, preset vacuum controls and a large <strong> 22"x22"x4" </strong> stainless\
				 steel vacuum chamber best define this no nonsense workhorse.'
				],		
			'models':
				[
					{
						'id':'AVC-20',
						'size':'20” x 1/4',
						'price':'*$5,200.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'22"L X 22"W X 4"H'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'18'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'28.5'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'18'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'29"L x 24"W x 12"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'118'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'143'
					},

				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"'],[
					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'PE','des':'Ported Exhaust','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'SEAL BAR','des':'Additional Seal Bar','prices':{
											'20"':'$275',																														
												}
					},
					{'op':'VSS','des':'Vacuum Selector Switch, per position','prices':{
											'20"':'$145',																														
												}
					},
				]]
		},

		{
			'name':'AVCG',
			'subtitulo':'CHAMBER VACUUM SEALER WITH GAS PURGE',
			'parrafo':
				[	
				'The AVCG combined the same quality and design integrity exhibited in the AVC, \
				but with the gas-flush feature. Just press and hold the start button to close the lid. \
				Once closed, the AVCG will pull an initial vacuum followed by the insertion of your \
				designed inert gas, reaching into every nook and cranny inside your bag. A second \
				vacuum will follow before sealing with its ¼” sealing element, delivering a leak-proof seal. \
				<br><br> \
				  <strong>The AVCG is so versatile, you can adjust the level of vacuum that \
				  your product needs</strong>.  No need to worry about adjusting vacuum timers for every package.'
				],		
			'models':
				[
					{
						'id':'AVCG-20',
						'size':'20” x 1/4',
						'price':'*$5,225.00',
						'siz': '20',
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'22"L X 22"W X 4"H'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'18'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'28.5'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'18'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'29"L x 24"W x 10"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'122'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'143'
					},

				],

			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"'],[

					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'PE','des':'Ported Exhaust','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'SEAL BAR','des':'Additional Seal Bar','prices':{
											'20"':'$275',																													
												}
					},
					{'op':'VSS','des':'Vacuum Selector Switch, per position','prices':{
											'20"':'$145',																														
												}
					},
				]]
		},

		{
			'name':'AVP',
			'subtitulo':'PNEUMATIC IMPULSE SEALER',
			'parrafo':
				[	
				'The AVP series was designed for heavy-duty applications. The most evident feature \
				of the AVP is its lack of visible controls. Form-follows-function providing an \
				expansive clear work-surface to hold product to be sealed. \
				<br><br> \
				Side-mounted heat and cool timers fitted to a powder-coated steel chassis, \
				regulate seal parameters critical to obtaining airtight and watertight seals. \
				A one-tap steel encased foot switch provides hands-free operation. Just like \
				the AVN and AVS, the AVP will not fire an impulse until the upper and lower \
				jaw have completely met, ensuring the operator’s safety and an uncompromised seal integrity. \
				<br><br> \
				The pressure bar is powder-coated aluminum. Made of professional grade component, \
				the AVP is still lightweight enough (29 lbs) to be move effortlessly throughout your facility.'
				],		
			'models':
				[
					{
						'id':'AVP-20',
						'size':'20” x 1/4',
						'price':'$1,195.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'-'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'-'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'18'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'28"L x 10"W x 7"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'29'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'38'
					},

				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],

			'options':
				[['20"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',																														
												}
					},
					{'op':'CE','des':'CE certification*','prices':{
											'20"':'$700',																														
												}
					},
					{'op':'TRAY','des':'Work Tray – 20” x 12”','prices':{
											'20"':'$75',																														
												}
					},
					{'op':'LPC','des':'Low-pressure Bar Close','prices':{
											'20"':'$250',
												}
					},

					{'op':'AF','des':'Coalescing Air Filter','prices':{
											'20"':'$1,995',																														
												}
					},

					{'op':'TC','des':'Digital Temperature Control','prices':{
											'20"':'$1,995',																														
												}
					},
					{'op':'PE','des':'Ported Exhaust','prices':{
											'20"':'$220',																														
												}
					},
				]]

		},

		{
			'name':'PARTS',
			'subtitulo':'REPLACEMENT PARTS',
			'parrafo':
				[	
				'The <strong>AVP series was designed for heavy-duty applications</strong>. The most evident feature of the <strong>AVP</strong> is\
				 its lack of visible controls. Form follows function providing an expansive clear work surface \
				 to hold product ready to be sealed. \
				<br><br>\
				 Side mounted heat and cool timers fitted to a powder coated \
				 steel chassis regulate seal parameters that are critical to obtaining airtight/watertight seals. \
				 A one-tap steel encased foot switch <strong>provides hands-free operation</strong>. And, of key significance, \
				 like the AVN and AVS, the <strong>AVP will not fire an impulse until the upper and lower jaw completely \
				 meet, further ensuring operator safety and uncompromised seal integrity</strong>.\
					<br><br>\
				 The pressure bar is powder \
				 coated aluminum. Made of professional grade components, <strong>the AVP is still lightweight enough \
				 (29lbs) to be moved effortlessly in your facility</strong>.'
				],
			'options':[,[
					{'op':'E-','des':'¼” Sealing Element','prices':{
											'20"':'$19.00',
											'25"':'$22.00',
											'30"':'$26.00',
											'35"':'$31.00',
											'50"':'$39.00',																														
												}
					},
					{'op':'T-','des':'Teflon Set','prices':{
											'20"':'$15.00',
											'25"':'$8.00',
											'30"':'$1.00',
											'35"':'$24.00',
											'50"':'$31.00',																														
												}
					},
					{'op':'PBK-','des':'Pressure Bar Kit','prices':{
											'20"':'$18.00',
											'25"':'$21.00',
											'30"':'$24.00',
											'35"':'$28.00',
											'50"':'$36.00',																													
												}
					},
					{'op':'SBK-','des':'Seal Bar Kit (All of the above parts)','prices':{
											'20"':'$47.00',
											'25"':'$55.00',
											'30"':'$65.00',
											'35"':'$75.00',
											'50"':'$89.00',																													
												}
					},
					{'op':'GR-','des':'AVN Gray Rubber Set','prices':{
											'20"':'$0.00',
											'25"':'$2.00',
											'30"':'$4.00',
											'35"':'$16.00',
											'50"':'$20.00',																														
												}
					},


			]],
		},

		{
			'name':'OPTIONS',
			'subtitulo':'Accesories for vacuum sealers',
			'parrafo':'',
		}

	];

	$scope.showCartButton = true;

	$scope.showCartButtonn = function(){
		$scope.showCartButton = !$scope.showCartButton;
	};

	$scope.isVacuum = true;
	$scope.currentPage = "home.html";

							


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
		$scope.loadPage('compare');

		console.log('toComparae ' + name);
		setTimeout(function(){
			compara.A = name;
			compara.SCOPE.getProduct_1(name);
		}, 300);
	}

	$scope.getProduct = function(name){
		


		console.log('getP ' + name);

		if(name == 'PARTS'){
			console.log('getproduct parts');
			$scope.isVacuum = false;
			$scope.isParts = true;
			$scope.isOptions = false;

			// Obtemeos las partes
			$scope.producto = {'name':'PARTS','subtitulo':'Replacement Parts'};

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
		} else {

		if(name == 'OPTIONS'){


			$scope.isVacuum = false;
			$scope.isParts = false;
			$scope.isOptions = true;

			// Obtemeos las partes
			$scope.producto = {'name':'OPTIONS','subtitulo':'Accesories for vacuum sealers'};//= $scope.parts;

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


		} else {

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == name){

					$scope.producto = $scope.productos[i];
					//$scope.producto['specs'] = $scope.productos[i]['specs'];
				}
			}

			$scope.producto['src'] = 'img/products/imagen_'+name+'_000.png';
			
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
	}

	$scope.hideCart = function(){
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
				$scope.currentPage = "home.html";
				$location.path('/home');
				break;


			case 'about_us':
				$scope.currentPage = "about_us.html";
				$location.path('/about');
				break;
			case 'contact':
				$scope.currentPage = "contact.html";
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
				$scope.currentPage = 'compare.html';
				$location.path('/compare');
				$('#' + compara.A).addClass('seleccion');
				$('#' + compara.B).addClass('seleccion');


				setTimeout(function(){
					console.log('tiemout');
					compara.SCOPE.getProduct_1('AVN');
					compara.SCOPE.getProduct_2('AVS');
				}, 200);

				break;
			case 'selector':
				$scope.currentPage = 'ciber_selector.html'
				$location.path('/selector');
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

});




app.controller('compare', function($scope, $http){
	compara.addScope($scope);

	console.log('CONTROLADOR COMPARE');


/*
	$scope.productos = 
	[
		{
			'name':'AVN',
			'subtitulo':'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'parrafo':
				[
				'	<strong>Foot pedal activated gas-flush vacuum packaging at its finest. The AVN’s 1/4” wide \
					sealing element delivers a leak-proof seal </strong> from sensitive electronics, to sterile medical \
					devices, food to biotech applications, aerospace technology to scientific devices, etc. \
					<br><br>\
					With one touch of the pedal, <strong> the AVN flushes out oxygen and moisture with an inert \
					gas of your choice </strong>, the automated stainless steel nozzle retracts, and your products are \
					sealed in seconds. Clean Room compatible, the <strong>AVN</strong> is also ideal for electronics, medical \
					and pharmaceutical applications. <strong>Combine the AVN’s precise automation with speed, \
					extensive safety features and incredible durability, and faulty seals</strong> resulting from \
					operator or machine error are virtually eliminated. \
					<br><br>\
					Providing additional functionality and convenience, the <strong>AVN’s</strong> gas-flush feature can be\
					switched off, as well as the vacuum feature, or both off for impulse heat only sealing.\
					<br><br>\
					The <strong>AVN</strong> is hand assembled at our facility using only superior grade components. The <strong>AVN</strong>\
					also features five seal lengths (20” 25” 30” 35” and 50”) and can be custom configured to\
					meet CE Certification requirements.'
				],		
			'models':
				[
					{'id':'AVN-20','size':'20\” x 1/4\”\nStainless steel upgrade Ce certification','price':'$2,500.00\n$500.00\n$700.00'},
					{'id':'AVN-25','size':'25\” x 1/4\”\nStainless steel upgrade Ce certification','price':'$2,985.00\n$500.00\n$700.00'},
					{'id':'AVN-30','size':'30\” x 1/4\”\nStainless steel upgrade Ce certification','price':'$3,185.00\n$500.00\n$700.00'},
					{'id':'AVN-35','size':'35\” x 1/4\”\nStainless steel upgrade Ce certification','price':'$3,385.00\n$500.00\n$700.00'},
					{'id':'AVN-50','size':'50\” x 1/4\”\nStainless steel upgrade Ce certification','price':'$6,985.00\n$500.00\n$700.00'},
				],
			'specs':
				[
					{'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH', 'val':'20", 25" ,30" ,35", 50"'},
					{'spec':'CHAMBER SIZE (in)', 'val':'-'},
					{'spec':'VACUUM FLOW (cfm)', 'val':'6'},
					{'spec':'MAX VACUUM PRESSURE (inHg)','val':'27'},
					{'spec':'AIR REQUIREMENTS @100 PSI (cfm)', 'val':'6'},
					{'spec':'AMPS @120 VOLTS A.C.', 'val':'7, 8, 12, 15, 15'},
					{'spec':'UNIT SIZE (IN)', 'val':'(25",33",38",43",64")L x 10"W x 7"H'},
					{'spec':'APPROXIMATE UNIT WEIGHT (lb)', 'val':'33, 40, 54, 59, 86'},
					{'spec':'APPROXIMATE SHIP WEIGHT (lb)', 'val':'40, 45, 60, 70,106'},
				],
			'options':
				[['20"','25"','30"','35"','50"'],[
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
				]]
		},

		{
			'name':'AVS',
			'subtitulo':'RETRACTABLE NOZZLE VACUUM SEALER',
			'parrafo':
				[	
				'Offered in our <strong>most popular 20” seal length </strong>, the <strong>AVS</strong> combines \
				 the same quality and design integrity exhibited in the <strong>AVN</strong> without \
				 the gas-flush feature.  <strong>The AVS is the choice sealer for the widest \
				 range of our clientele</strong>, from medical and electronics device manu-facturer,\
				 to food industry retailers, to pharmaceutical and aerospace corporations.'
				],		
			'models':
				[
					{
						'id':'AVS-20',
						'size':'20\” x 1/4\”\nStainless steel upgrade Ce certification',
						'price':'$1,995.00\n$500.00\n$700.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'6'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'27'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'6'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'28"L x 10"W x 7"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'32'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'40'
					},

				],
			'options':
				[['20"'],[
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
											'20"':'$250',
											'25"':'$250',
											'30"':'$250',
											'35"':'$250',
											'50"':'N.A',																														
												}
					},
				]]
		},

		{
			'name':'CAVN',
			'subtitulo':'Self-Contained Retractable Nozzle Vacuum Sealer with Gas Purge',
			'parrafo':
				[	
				'Expanding the abilities of the AVN model, the <strong> CAVN eliminates the need for additional \
				 equipment </strong>. Completely self-contained, <strong>the CAVN is ready to perform out of the box</strong>, while reducing equipment \
				 requirements and providing greater flexibility of placement locations within your facility.\
				 We’ve simplified our design with the same high quality components that have made all AmeriVacS \
				 Vacuum Sealers the best in the industry.  All that is needed to oper-ate the <strong>CAVN</strong> is a press of a \
				 pedal and in a manner of seconds you have a gas flushed, tight, reliable vacuum package.\
				 <br><br> \
				 From our innovatively simple nozzle system to our state-of-the-art safety features, AmeriVacS continues its\
				 tradition of manufacturing efficient, dependable, easy to use Vacuum Sealers. \
				<br><br> \
				 <strong> The AmeriVacS CAV Series Self Contained Retractable Nozzle Vacuum Sealers </strong> come with our exclusive high flow, stainless\
				 steel retractable nozzle that will help avoid operator bag manipulation during the vacuum cycle. \
				 With our clean, quiet built-in air compressor/vacuum pump, you will be assured reliable vacuum \
				 seals for years to come.  As with all our machines, setting up is quick and easy using only a \
				 standard electrical outlet.\
				 <br><br> \
				 The <strong>CAV Series Vacuum Sealers</strong> are hand-assembled at our facility \
				 using only superior grade components. <strong>Available in 20” and 30” and can be custom configured to \
				 meet CE Certification requirements.</strong>'
				],		
			'models':
				[
					{
						'id':'CAVN-20',
						'size':'20\” x 1/4\”\nStainless steel upgrade Ce certification',
						'price':'$3,495.00\n$500.00\n$700.00'
					},
					{
						'id':'CAVN-30',
						'size':'30\” x 1/4\”\nStainless steel upgrade Ce certification',
						'price':'$3,885.00\n$500.00\n$700.00'
					},

				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20", 30"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'3'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'27'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'-'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'10, 15'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'(28", 38")L x 10"w x 12"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'55,73'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'66, 84'
					},

				],
			'options':
				[['20"','30"'],[
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
											'20"':'$250',
											'25"':'$250',
											'30"':'$250',
											'35"':'$250',
											'50"':'N.A',																														
												}
					},
				]]
		},

		{
			'name':'CAVS',
			'subtitulo':'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'parrafo':
				[	
				'Expanding the abilities of the AVS model, the <strong>CAVS eliminates the need for additional equipment.</strong>  \
				Completely self-contained, the <strong>CAVS is ready to perform out of the box</strong>, while reducing equipment \
				requirements and providing greater flexibility of placement locations within your facility. We’ve \
				simplified our design with the same high quality components that have made all AmeriVacS Vacuum Sealers \
				the best in the industry.  All that is needed to operate the CAVS is a press of a pedal and in a manner\
				 of seconds you have a tight, reliable vacuum package.\
				<br><br> \
				 From our innovatively simple nozzle system to\
				  our state-of-the-art safety features, AmeriVacS continues its tradition of manufacturing efficient, \
				  dependable, easy to use Vacuum Sealers. \
				<br><br>\
				  The AmeriVacS <strong>CAV Series Self Contained Retractable Nozzle \
				  Vacuum Sealers </strong> come with our exclusive high flow, stainless steel retractable nozzle that will \
				  help avoid operator bag manipulation during the vacuum cycle.  With our clean, quiet built-in\
				   air compressor/vacuum pump, you will be assured reliable vacuum seals for years to come. \
				    As with all our machines, setting up is quick and easy using only a standard electrical \
				    outlet. \
				<br><br>\
				    <strong>The CAV Series Vacuum Sealers are hand-assembled at our facility using \
				    only superior grade components.</strong> Available in 20” and 30” and can be custom configured \
				    to meet CE Certifi-cation requirements.'
				],		
			'models':
				[
					{
						'id':'CAVS-20',
						'size':'20\” x 1/4\”\nStainless steel upgrade Ce certification',
						'price':'$2,985.00\n$500.00\n$700.00'
					},
					{
						'id':'CAVS-30',
						'size':'30\” x 1/4\”\nStainless steel upgrade Ce certification',
						'price':'$3,485.00\n$500.00\n$700.00'
					},

				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20", 30"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'3'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'27'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'-'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'10, 15'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'(28", 38")L x 10"w x 12"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'55,73'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'66, 84'
					},

				],
			'options':
				[['20"','30"'],[
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
											'20"':'$250',
											'25"':'$250',
											'30"':'$250',
											'35"':'$250',
											'50"':'N.A',																														
												}
					},
				]]
		},	

		{
			'name':'AVC',
			'subtitulo':'CHAMBER VACUUM SEALER',
			'parrafo':
				[	
				'The solution for your packaging program, <strong>the AVC is hand assembled using top grade materials \
				and components.</strong> The <strong>AVC is compressed air driven</strong>, eliminating any concern regarding noise,\
				 vibration or heat generation. Unlike electromechanically driven vacuum seal-ers, our characteristic\
				  <strong>AmeriVacS design prevents particle generation and oil con-tamination</strong> that often leads to costly\
				   maintenance and downtime. \
				<br><br>\
				Clean Room compatible, <strong>the AVC is the ideal choice for medical and electronics device\
				 manufacturer, to food industry retailers, to pharmaceutical and aerospace corporations </strong>.\
				  Precision components guide the <strong> AVC’s </strong> industry setting seal speed and ensure clean,\
				   wrinkle-free seals without any bag distortion. Order an optional second seal bar,\
				    and the <strong> AVC </strong> instantly doubles smaller package volume. \
				<br><br>\
				One button touch sealing, preset vacuum controls and a large <strong> 22"x22"x4" </strong> stainless\
				 steel vacuum chamber best define this no nonsense workhorse.'
				],		
			'models':
				[
					{
						'id':'AVC-20',
						'size':'20” x 1/4',
						'price':'$5,200.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'22"L X 22"W X 4"H'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'18'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'28.5'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'18'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'29"L x 24"W x 12"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'118'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'143'
					},

				],
			'options':
				[['20"'],[
					{'op':'SEAL BAR','des':'Additional Seal Bar','prices':{
											'20"':'$275',
											'25"':'$375',
											'30"':'$700',
											'35"':'$900',
											'50"':'N.A',																														
												}
					},
					{'op':'VSS','des':'Vacuum Selector Switch, per position','prices':{
											'20"':'$145',
											'25"':'$550',
											'30"':'$600',
											'35"':'$650',
											'50"':'$800',																														
												}
					},
				]]
		},

		{
			'name':'AVCG',
			'subtitulo':'CHAMBER VACUUM SEALER WITH GAS PURGE',
			'parrafo':
				[	
				'<strong>The AVCG combines the same quality and design integrity exhibited in the AVC, \
				 but with the gas-flush feature</strong>. Just press and hold the start button to close \
				 the lid. Once down, your <strong>AVCG</strong> will pull an initial vacuum followed by inserting your \
				 desires inert gas, reaching into every nook and cranny inside your bag, then followed\
				  by a second vacuum before sealing with it’s wide ¼” sealing element, delivering a \
				  leak-proof seal. \
				<br><br> \
				  <strong>The AVCG is so versatile, you can adjust the level of vacuum that \
				  your product needs</strong>.  No need to worry about adjusting vacuum timers for every package.'
				],		
			'models':
				[
					{
						'id':'AVCG-20',
						'size':'20” x 1/4',
						'price':'$5,225.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'22"L X 22"W X 4"H'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'18'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'28.5'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'18'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'29"L x 24"W x 10"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'122'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'143'
					},

				],
			'options':
				[['20"'],[
					{'op':'SEAL BAR','des':'Additional Seal Bar','prices':{
											'20"':'$275',
											'25"':'$375',
											'30"':'$700',
											'35"':'$900',
											'50"':'N.A',																														
												}
					},
					{'op':'VSS','des':'Vacuum Selector Switch, per position','prices':{
											'20"':'$145',
											'25"':'$550',
											'30"':'$600',
											'35"':'$650',
											'50"':'$800',																														
												}
					},
				]]
		},

		{
			'name':'AVP',
			'subtitulo':'PNEUMATIC IMPULSE SEALER',
			'parrafo':
				[	
				'The <strong>AVP series was designed for heavy-duty applications</strong>. The most evident feature of the <strong>AVP</strong> is\
				 its lack of visible controls. Form follows function providing an expansive clear work surface \
				 to hold product ready to be sealed. \
				<br><br>\
				 Side mounted heat and cool timers fitted to a powder coated \
				 steel chassis regulate seal parameters that are critical to obtaining airtight/watertight seals. \
				 A one-tap steel encased foot switch <strong>provides hands-free operation</strong>. And, of key significance, \
				 like the AVN and AVS, the <strong>AVP will not fire an impulse until the upper and lower jaw completely \
				 meet, further ensuring operator safety and uncompromised seal integrity</strong>.\
					<br><br>\
				 The pressure bar is powder \
				 coated aluminum. Made of professional grade components, <strong>the AVP is still lightweight enough \
				 (29lbs) to be moved effortlessly in your facility</strong>.'
				],		
			'models':
				[
					{
						'id':'AVP-20',
						'size':'20” x 1/4',
						'price':'$1,195.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'-'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'-'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'18'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'28"L x 10"W x 7"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'29'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'38'
					},

				],
			'options':
				[['20"'],[]]
		},
	];
*/	

	$scope.productos = 
	[
		{
			'name':'AVN',
			'subtitulo':'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'parrafo':
				[
				'	Foot-pedal activated gas-flush vacuum packaging at its finest. The AVN\'s 1/4\" wide sealing \
				 	element delivers a leak-proof seal from sensitive electronics to sterile medical devices, \
				 	food to biotech applications, aerospace technology to scientific devices. \
				 	<br><br> \
				 	With one touch of the pedal, the AVN flushes out oxygen and moisture using an \
				 	inert gas of your choice. Then, the automated stainless steel nozzle retracts, \
				 	and your products are sealed in seconds. Combine the AVN’s precise automation with \
				 	speed and extensive safety features, a faulty seal is no longer possible. \
				 	<br><br> \
					Clean-room compatible, the AVN is ideal for electronics, medical, and pharmaceutical applications. \
					Providing additional functionality and convenience, the AVN’s gas-flush feature can be \
					switched off as well as the vacuum feature, or both can be switched off for sealing only \
					with impulse-heat. \
					<br><br> \
			  		The AVN is hand-assembled at our facility using only superior grade components. \
			  		The AVN is also featured in five seal-lengths (20\", 25\", 30\", 35\" and 50\") and \
			   		can be configure to meet CE certification requirements. \
			   		<br><br> \
			   		All AmeriVaCs <strong>AVN Vacuum Sealers </strong> include:'],		
			'models':
				[
					{'id':'AVN-20','size':'20\” x 1/4\”','price':'$2,500.00'},
					{'id':'AVN-25','size':'25\” x 1/4\”','price':'$2,985.00'},
					{'id':'AVN-30','size':'30\” x 1/4\”','price':'$3,185.00'},
					{'id':'AVN-35','size':'35\” x 1/4\”','price':'$3,385.00'},
					{'id':'AVN-50','size':'50\” x 1/4\”','price':'$6,985.00'},
				],
			'specs':
				[
					{'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH', 'val':'20", 25" ,30" ,35", 50"'},
					{'spec':'CHAMBER SIZE (in)', 'val':'-'},
					{'spec':'VACUUM FLOW (cfm)', 'val':'6'},
					{'spec':'MAX VACUUM PRESSURE (inHg)','val':'27'},
					{'spec':'AIR REQUIREMENTS @100 PSI (cfm)', 'val':'6'},
					{'spec':'AMPS @120 VOLTS A.C.', 'val':'7, 8, 12, 15, 15'},
					{'spec':'UNIT SIZE (IN)', 'val':'(25",33",38",43",64")L x 10"W x 7"H'},
					{'spec':'APPROXIMATE UNIT WEIGHT (lb)', 'val':'33, 40, 54, 59, 86'},
					{'spec':'APPROXIMATE SHIP WEIGHT (lb)', 'val':'40, 45, 60, 70,106'},
				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"','25"','30"','35"','50"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',
											'25"':'$375',
											'30"':'*$700',
											'35"':'*$900',
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
					{'op':'DN','des':'Dual Nozzle (w/dual vac pumps)','prices':{
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
					{'op':'EC','des':'Additional Vacuum or Gas cycle','prices':{
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
					{'op':'AF','des':'Coalescing Air Filter','prices':{
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
					{'op':'PE','des':'Ported Exhaust**','prices':{
											'20"':'$220',
											'25"':'$220',
											'30"':'$220',
											'35"':'$220',
											'50"':'$220',																														
												}
					},
					{'op':'STAND','des':'Multi-Position Stand**','prices':{
											'20"':'$985',
											'25"':'$985',
											'30"':'$985',
											'35"':'$985',
											'50"':'N.A',																														
												}
					},
				]]
		},

		{
			'name':'AVS',
			'subtitulo':'RETRACTABLE NOZZLE VACUUM SEALER',
			'parrafo':
				[	
				'Offered in our <strong>most popular 20” seal length </strong>, the <strong>AVS</strong> combines \
				 the same quality and design integrity exhibited in the <strong>AVN</strong> without \
				 the gas-flush feature.  <strong>The AVS is the choice sealer for the widest \
				 range of our clientele</strong>, from medical and electronics device manu-facturer,\
				 to food industry retailers, to pharmaceutical and aerospace corporations.'
				],		
			'models':
				[
					{
						'id':'AVS-20',
						'size':'20\” x 1/4\”',
						'price':'$1,995.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'6'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'27'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'6'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'28"L x 10"W x 7"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'32'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'40'
					},

				],

			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',																														
												}
					},
					{'op':'SS','des':'Stainless Steel Upgrade','prices':{
											'20"':'$500',
																														
												}
					},
					{'op':'CE','des':'CE certification*','prices':{
											'20"':'$700',
												}
					},
					{'op':'VF','des':'Vacuum Filter','prices':{
											'20"':'$100',																														
												}
					},
					{'op':'VR','des':'Vacuum Regulator','prices':{
											'20"':'$50',																														
												}
					},
					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
											'20"':'$350',																														
												}
					},
					{'op':'DN','des':'Dual Nozzle (w/dual vac pumps)','prices':{
											'20"':'$765',
												}
					},
					{'op':'TRAY','des':'Work Tray – 20” x 12”','prices':{
											'20"':'$75',																														
												}
					},
					{'op':'LPC','des':'Low-pressure Bar Close','prices':{
											'20"':'$250',
												}
					},
					{'op':'AF','des':'Coalescing Air Filter','prices':{
											'20"':'$195',																														
												}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
											'20"':'$1,995',
												}
					},
					{'op':'PE','des':'Ported Exhaust','prices':{
											'20"':'$220',
												}
					},
					{'op':'STAND','des':'Multi-Position Stand','prices':{
											'20"':'$250',
												}
					},
				]]
		},

		{
			'name':'CAVN',
			'subtitulo':'Self-Contained Retractable Nozzle Vacuum Sealer with Gas Purge',
			'parrafo':
				[	
				'Expanding the abilities of the AVN model, <strong>the CAVN eliminates the need for additional equipment.</strong> \
				Completely self-contained, the CAVN is ready to perform out of the box, providing greater flexibility \
				for placement locations within your facility. We’ve simplified our design with the same high quality \
				components that have made all AmeriVacS Vacuum sealers the best in the industry. All that is needed \
				to operate the CAVN is a press of the foot pedal and in seconds you have a gas-flushed and tight vacuum package. \
				 <br><br> \
				 From our innovatively simple nozzle system to our state-of-the-art safety features, AmeriVacS continues its\
				 tradition of manufacturing efficient, dependable, easy to use Vacuum Sealers. \
				<br><br> \
				 <strong> The AmeriVacS CAV Series Self Contained Retractable Nozzle Vacuum Sealers </strong> come with our exclusive high flow, stainless\
				 steel retractable nozzle that will help avoid operator bag manipulation during the vacuum cycle. \
				 With our clean, quiet built-in air compressor/vacuum pump, you will be assured reliable vacuum \
				 seals for years to come.  As with all our machines, setting up is quick and easy using only a \
				 standard electrical outlet.\
				 <br><br> \
				 The <strong>CAV Series Vacuum Sealers</strong> are hand-assembled at our facility \
				 using only superior grade components. <strong>Available in 20” and 30” and can be custom configured to \
				 meet CE Certification requirements.</strong>'




				],		
			'models':
				[
					{
						'id':'CAVN-20',
						'size':'20\” x 1/4\”',
						'price':'$3,495.00'
					},
					{
						'id':'CAVN-30',
						'size':'30\” x 1/4\”',
						'price':'$3,885.00'
					},

				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20", 30"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'3'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'27'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'-'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'10, 15'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'(28", 38")L x 10"w x 12"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'55,73'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'66, 84'
					},

				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"','30"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',
											'30"':'*$700',																														
												}
					},
					{'op':'SS','des':'Stainless Steel Upgrade','prices':{
											'20"':'$500',
											'30"':'$600',																														
												}
					},
					{'op':'CE','des':'CE certification*','prices':{
											'20"':'$700',
											'30"':'$800',																														
												}
					},
					{'op':'VF','des':'Vacuum Filter','prices':{
											'20"':'$100',
											'30"':'$100',																														
												}
					},
					{'op':'VR','des':'Vacuum Regulator','prices':{
											'20"':'$50',
											'30"':'$50',																														
												}
					},
					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
											'20"':'$350',
											'30"':'$350',																														
												}
					},
					{'op':'TRAY','des':'Work Tray – 20” x 12”','prices':{
											'20"':'$75',
											'30"':'$75',																														
												}
					},
					{'op':'LPC','des':'Low-pressure Bar Close','prices':{
											'20"':'$250',
											'30"':'$250',
												}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
											'20"':'$1,995',
											'30"':'$1,995',																														
												}
					},
					{'op':'PE','des':'Ported Exhaust**','prices':{
											'20"':'$220',
											'30"':'$220',																														
												}
					},
				]]
		},

		{
			'name':'CAVS',
			'subtitulo':'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'parrafo':
				[	
				'Expanding the abilities of the AVS model, the <strong>CAVS eliminates the need for additional equipment.</strong>  \
				Completely self-contained, the <strong>CAVS is ready to perform out of the box</strong>, while reducing equipment \
				requirements and providing greater flexibility of placement locations within your facility. We’ve \
				simplified our design with the same high quality components that have made all AmeriVacS Vacuum Sealers \
				the best in the industry.  All that is needed to operate the CAVS is a press of a pedal and in a manner\
				 of seconds you have a tight, reliable vacuum package.\
				<br><br> \
				 From our innovatively simple nozzle system to\
				  our state-of-the-art safety features, AmeriVacS continues its tradition of manufacturing efficient, \
				  dependable, easy to use Vacuum Sealers. \
				<br><br>\
				  The AmeriVacS <strong>CAV Series Self Contained Retractable Nozzle \
				  Vacuum Sealers </strong> come with our exclusive high flow, stainless steel retractable nozzle that will \
				  help avoid operator bag manipulation during the vacuum cycle.  With our clean, quiet built-in\
				   air compressor/vacuum pump, you will be assured reliable vacuum seals for years to come. \
				    As with all our machines, setting up is quick and easy using only a standard electrical \
				    outlet. \
				<br><br>\
				    <strong>The CAV Series Vacuum Sealers are hand-assembled at our facility using \
				    only superior grade components.</strong> Available in 20” and 30” and can be custom configured \
				    to meet CE Certifi-cation requirements.'
				],		
			'models':
				[
					{
						'id':'CAVS-20',
						'size':'20\” x 1/4\”',
						'price':'$2,985.00'
					},
					{
						'id':'CAVS-30',
						'size':'30\” x 1/4\”',
						'price':'$3,485.00'
					},

				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20", 30"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'3'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'27'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'-'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'10, 15'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'(28", 38")L x 10"w x 12"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'55,73'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'66, 84'
					},

				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"','30"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',
											'30"':'*$700',																														
												}
					},
					{'op':'SS','des':'Stainless Steel Upgrade','prices':{
											'20"':'$500',
											'30"':'$600',																														
												}
					},
					{'op':'CE','des':'CE certification*','prices':{
											'20"':'$700',
											'30"':'$800',																														
												}
					},
					{'op':'VF','des':'Vacuum Filter','prices':{
											'20"':'$100',
											'30"':'$100',																														
												}
					},
					{'op':'VR','des':'Vacuum Regulator','prices':{
											'20"':'$50',
											'30"':'$50',																														
												}
					},
					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
											'20"':'$350',
											'30"':'$350',																														
												}
					},
					{'op':'TRAY','des':'Work Tray – 20” x 12”','prices':{
											'20"':'$75',
											'30"':'$75',																														
												}
					},
					{'op':'LPC','des':'Low-pressure Bar Close','prices':{
											'20"':'$250',
											'30"':'$250',
												}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
											'20"':'$1,995',
											'30"':'$1,995',																														
												}
					},
					{'op':'PE','des':'Ported Exhaust**','prices':{
											'20"':'$220',
											'30"':'$220',																														
												}
					},
				]]
		},	

		{
			'name':'AVC',
			'subtitulo':'CHAMBER VACUUM SEALER',
			'parrafo':
				[	
				'The solution for your packaging program, the AVC is hand-assembled using top-grade \
				materials and components. The AVC is compressed-air driven, eliminating any concern \
				regarding noise, vibration, and heat generation. Unlike electro-mechanically driven \
				vacuum sealers, our characteristic AmeriVacS design prevents particle generation and \
				oil contamination that often leads to costly maintenance and downtime. \
				<br><br> \
				Clean-room compatible, the AVC is the ideal choice for medical and electronic device \
				manufacturers, food industry retailers, and pharmaceutical and aerospace corporations. \
				Precision-components guide the AVC’s seal-speed ensuring a clean, wrinkle-free closure \
				without any bag distortion. Ask for the optional second seal-bar and the AVC instantly \
				doubles package volume. \
				<br><br>\
				One button touch sealing, preset vacuum controls and a large <strong> 22"x22"x4" </strong> stainless\
				 steel vacuum chamber best define this no nonsense workhorse.'
				],		
			'models':
				[
					{
						'id':'AVC-20',
						'size':'20” x 1/4',
						'price':'*$5,200.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'22"L X 22"W X 4"H'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'18'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'28.5'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'18'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'29"L x 24"W x 12"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'118'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'143'
					},

				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"'],[
					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'PE','des':'Ported Exhaust','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'SEAL BAR','des':'Additional Seal Bar','prices':{
											'20"':'$275',																														
												}
					},
					{'op':'VSS','des':'Vacuum Selector Switch, per position','prices':{
											'20"':'$145',																														
												}
					},
				]]
		},

		{
			'name':'AVCG',
			'subtitulo':'CHAMBER VACUUM SEALER WITH GAS PURGE',
			'parrafo':
				[	
				'The AVCG combined the same quality and design integrity exhibited in the AVC, \
				but with the gas-flush feature. Just press and hold the start button to close the lid. \
				Once closed, the AVCG will pull an initial vacuum followed by the insertion of your \
				designed inert gas, reaching into every nook and cranny inside your bag. A second \
				vacuum will follow before sealing with its ¼” sealing element, delivering a leak-proof seal. \
				<br><br> \
				  <strong>The AVCG is so versatile, you can adjust the level of vacuum that \
				  your product needs</strong>.  No need to worry about adjusting vacuum timers for every package.'
				],		
			'models':
				[
					{
						'id':'AVCG-20',
						'size':'20” x 1/4',
						'price':'*$5,225.00',
						'siz': '20',
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'22"L X 22"W X 4"H'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'18'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'28.5'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'18'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'29"L x 24"W x 10"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'122'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'143'
					},

				],

			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],
			'options':
				[['20"'],[

					{'op':'220PX','des':'220 Volt A.C. 50-60 Hz conversion','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'TC','des':'Digital Temperature Control','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'PE','des':'Ported Exhaust','prices':{
									'20"':'$350',																													
										}
					},
					{'op':'SEAL BAR','des':'Additional Seal Bar','prices':{
											'20"':'$275',																													
												}
					},
					{'op':'VSS','des':'Vacuum Selector Switch, per position','prices':{
											'20"':'$145',																														
												}
					},
				]]
		},

		{
			'name':'AVP',
			'subtitulo':'PNEUMATIC IMPULSE SEALER',
			'parrafo':
				[	
				'The AVP series was designed for heavy-duty applications. The most evident feature \
				of the AVP is its lack of visible controls. Form-follows-function providing an \
				expansive clear work-surface to hold product to be sealed. \
				<br><br> \
				Side-mounted heat and cool timers fitted to a powder-coated steel chassis, \
				regulate seal parameters critical to obtaining airtight and watertight seals. \
				A one-tap steel encased foot switch provides hands-free operation. Just like \
				the AVN and AVS, the AVP will not fire an impulse until the upper and lower \
				jaw have completely met, ensuring the operator’s safety and an uncompromised seal integrity. \
				<br><br> \
				The pressure bar is powder-coated aluminum. Made of professional grade component, \
				the AVP is still lightweight enough (29 lbs) to be move effortlessly throughout your facility.'
				],		
			'models':
				[
					{
						'id':'AVP-20',
						'size':'20” x 1/4',
						'price':'$1,195.00'
					},
				],
			'specs':
				[
					{
						'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH',
					 	'val':'20"'
					},
					{
						'spec':'CHAMBER SIZE (in)',
					 	'val':'-'
					},
					{
						'spec':'VACUUM FLOW (cfm)',
						 'val':'-'
					},
					{
						'spec':'MAX VACUUM PRESSURE (inHg)',
						'val':'-'
					},
					{
						'spec':'AIR REQUIREMENTS @100 PSI (cfm)',
						'val':'18'
					},
					{
						'spec':'AMPS @120 VOLTS A.C.',
						'val':'7'
					},
					{
						'spec':'UNIT SIZE (IN)',
						'val':'28"L x 10"W x 7"H'
					},
					{
						'spec':'APPROXIMATE UNIT WEIGHT (lb)',
						'val':'29'
					},
					{
						'spec':'APPROXIMATE SHIP WEIGHT (lb)',
						'val':'38'
					},

				],
			'warranty':[
							"2-year limited warranty",
							"1-week trial period",
							"Clean-room compatible",
							"100% maintenance free verture vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Technical support","Rust-treated and powder-coated steel chassis",
							"Industry-leading performance"
					],

			'options':
				[['20"'],[
					{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
											'20"':'$275',																														
												}
					},
					{'op':'CE','des':'CE certification*','prices':{
											'20"':'$700',																														
												}
					},
					{'op':'TRAY','des':'Work Tray – 20” x 12”','prices':{
											'20"':'$75',																														
												}
					},
					{'op':'LPC','des':'Low-pressure Bar Close','prices':{
											'20"':'$250',
												}
					},

					{'op':'AF','des':'Coalescing Air Filter','prices':{
											'20"':'$1,995',																														
												}
					},

					{'op':'TC','des':'Digital Temperature Control','prices':{
											'20"':'$1,995',																														
												}
					},
					{'op':'PE','des':'Ported Exhaust','prices':{
											'20"':'$220',																														
												}
					},
				]]

		},

		{
			'name':'PARTS',
			'subtitulo':'REPLACEMENT PARTS',
			'parrafo':
				[	
				'The <strong>AVP series was designed for heavy-duty applications</strong>. The most evident feature of the <strong>AVP</strong> is\
				 its lack of visible controls. Form follows function providing an expansive clear work surface \
				 to hold product ready to be sealed. \
				<br><br>\
				 Side mounted heat and cool timers fitted to a powder coated \
				 steel chassis regulate seal parameters that are critical to obtaining airtight/watertight seals. \
				 A one-tap steel encased foot switch <strong>provides hands-free operation</strong>. And, of key significance, \
				 like the AVN and AVS, the <strong>AVP will not fire an impulse until the upper and lower jaw completely \
				 meet, further ensuring operator safety and uncompromised seal integrity</strong>.\
					<br><br>\
				 The pressure bar is powder \
				 coated aluminum. Made of professional grade components, <strong>the AVP is still lightweight enough \
				 (29lbs) to be moved effortlessly in your facility</strong>.'
				],
			'options':[,[
					{'op':'E-','des':'¼” Sealing Element','prices':{
											'20"':'$19.00',
											'25"':'$22.00',
											'30"':'$26.00',
											'35"':'$31.00',
											'50"':'$39.00',																														
												}
					},
					{'op':'T-','des':'Teflon Set','prices':{
											'20"':'$15.00',
											'25"':'$8.00',
											'30"':'$1.00',
											'35"':'$24.00',
											'50"':'$31.00',																														
												}
					},
					{'op':'PBK-','des':'Pressure Bar Kit','prices':{
											'20"':'$18.00',
											'25"':'$21.00',
											'30"':'$24.00',
											'35"':'$28.00',
											'50"':'$36.00',																													
												}
					},
					{'op':'SBK-','des':'Seal Bar Kit (All of the above parts)','prices':{
											'20"':'$47.00',
											'25"':'$55.00',
											'30"':'$65.00',
											'35"':'$75.00',
											'50"':'$89.00',																													
												}
					},
					{'op':'GR-','des':'AVN Gray Rubber Set','prices':{
											'20"':'$0.00',
											'25"':'$2.00',
											'30"':'$4.00',
											'35"':'$16.00',
											'50"':'$20.00',																														
												}
					},


			]],
		},

		{
			'name':'OPTIONS',
			'subtitulo':'Accesories for vacuum sealers',
			'parrafo':'',
		}

	];	

	$scope.selected_1 = true;
	$scope.selected_2 = true;
	$scope.getProduct_1 = function(name){

			$scope.selected_1 = true;

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
				console.log("aqi");
				console.log(JSON.parse(data));
				$scope.producto_1['models'] = JSON.parse(data)['modelos'];
			});

			request.success(function (data) {
				console.log(data);
				var obj = data;//JSON.parse(data);
				$scope.producto_1['name'] = obj['name'];
				$scope.producto_1['subtitulo'] = obj['subtitulo'];
				//$scope.producto_1['src'] = obj['src'];
				$scope.producto_1['parrafo'] = obj['parrafo'];

			});

*/


			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == name){
					$scope.producto_1 = $scope.productos[i];
					$scope.producto_1['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto_1['src'] = 'img/products/imagen_'+name+'_000.png';

/*
			
			var medidas = ['20"','25"','30"','35"','50"'];
			var p;
			// llenamos con espacios vacios
			var i = 0;
			for(var j = 0; j < medidas.length; j++){
				p = $scope.producto_1['models'][j];
				if(p.includes(medidas[i])){
					// Agrego una vacia y vanzo solo i
					i++;
				} else {
					// son iguales
					i++;
					j++;
				}
			}

*/

				var nueva = [{},{},{},{},{}];
				var p;
				for(var j = 0; j < $scope.producto_1['models'].length; j++){
					p = $scope.producto_1['models'][j];
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

				compara.A = name;

				angular.element('.menucito1 .seleccion').removeClass('seleccion');
				angular.element('.menucito1 #1' + compara.A).addClass('seleccion');
		
	}

	$scope.getProduct_2 = function(name){


			compara.B = name;
/*
			$scope.producto_2['src'] = 'img/products/imagen_'+name+'_000.png';
			$scope.selected_2 = true;
			var requestt = $http({
		    method: "POST",
		    url: "/NEW/php/producto.php",
		    data: {
		    	'name': name,
		    },
			});

			var request3 = $http({
		    method: "POST",
		    url: "/NEW/php/modelo_prod.php",
		    data: {
		    	'name': name,
		    },
			});


			request3.success(function (data) {
				console.log(JSON.parse(data));
				$scope.producto_2['models'] = JSON.parse(data)['modelos'];
			});

			requestt.success(function (data) {
				console.log(data);
				var obj = data;//JSON.parse(data);
				$scope.producto_2['name'] = obj['name'];
				$scope.producto_2['subtitulo'] = obj['subtitulo'];
				$scope.producto_2['parrafo'] = obj['parrafo'];

			});

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == name){
					$scope.producto_2['specs'] = $scope.productos[i]['specs'];
				}
			}
*/

			for(var i = 0; i < $scope.productos.length; i++){
				if($scope.productos[i]['name'] == name){
					$scope.producto_2 = $scope.productos[i];
					$scope.producto_2['specs'] = $scope.productos[i]['specs'];
				}
			}
			$scope.producto_2['src'] = 'img/products/imagen_'+name+'_000.png';



				var nueva = [{},{},{},{},{}];
				var p;
				for(var j = 0; j < $scope.producto_2['models'].length; j++){
					p = $scope.producto_2['models'][j];
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
				nueva.forEach(function(e){
					if(JSON.stringify(obj1) == JSON.stringify({})){
						// cambio css del elemento con clase .ren
					}
				})*/


				angular.element('.menucito2 .seleccion').removeClass('seleccion');
				angular.element('.menucito2 #2' + compara.B).addClass('seleccion');
	}

	

	$scope.init = function(A,B){


	}


	$scope.producto_1 = {};
	$scope.producto_2 = {};

/*
	$scope.getProduct_1('AVN');
	$scope.getProduct_2('AVS');
*/



});


app.controller('selector-controller', function($scope){

	$scope.seleccionado = {
		'id' : 'AVN',
	}

	$('.box-sel').click(function(){
		$(this).off('click');
		outTransition('1', function(){
			inTransition('2')
		});
	});

	$('.little-box').click(function(){
		$(this).off('click');
		outTransition('2', function(){
			inTransition('3')
		});

	});

	$('.ans').click(function(){
		$(this).off('click');
		outTransition('3', function(){
			inTransition('4')
		});

	});	

});

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
