var app = angular.module('amerivacs', ['ngSanitize','ngAnimate']);
/*
app.animation('.animation',[function(){
	return {
		enter: function(elem, f){
			console.log(elem);
			$(elem).velocity({
				opacity: 1,
			},{
				duration:1000,
				oncomplete: function(){
					f();
				}
			});
		},
		move: function(elem, f){
			f();
		},
		leave: function(elem, f){
			$(elem).velocity({
				opacity: 0,
			},{
				duration:1000,
				oncomplete: function(){
					f();
				}
			});
		}
	}
}])
*/

app.controller('controlador', function($scope,$sce) {

	console.log('controlador');
	

	p = 

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
				{'id':'AVN-20','size':'20\” x 1/4\”\nStainless steel upgrade Ce certification','price':'$2,500.00\n$500.00\n$700.00'},
				{'id':'AVN-20','size':'20\” x 1/4\”\nStainless steel upgrade Ce certification','price':'$2,500.00\n$500.00\n$700.00'},
				{'id':'AVN-20','size':'20\” x 1/4\”\nStainless steel upgrade Ce certification','price':'$2,500.00\n$500.00\n$700.00'},
				{'id':'AVN-20','size':'20\” x 1/4\”\nStainless steel upgrade Ce certification','price':'$2,500.00\n$500.00\n$700.00'},
			],
		'specs':
			[
				{'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH', 'val':'20"'},
				{'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH', 'val':'20"'},
				{'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH', 'val':'20"'},
				{'spec':'UNIT SIZE (IN)','val':'(25",33",38",43",64")L x 10"W x 7"H'},
				{'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH', 'val':'20"'},
				{'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH', 'val':'20"'},
				{'spec':'SEAL LENGTH (in), 1/4" SEAL WIDTH', 'val':'20"'},
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
				{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
										'20"':'$275',
										'25"':'$375',
										'30"':'$700',
										'35"':'$900',
										'50"':'N.A',																														
											}
				},
				{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
										'20"':'$275',
										'25"':'$375',
										'30"':'$700',
										'35"':'$900',
										'50"':'N.A',																														
											}
				},
				{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
										'20"':'$275',
										'25"':'$375',
										'30"':'$700',
										'35"':'$900',
										'50"':'N.A',																														
											}
				},
				{'op':'BAS','des':'Upper and Lower Heating Elements','prices':{
										'20"':'$275.00',
										'25"':'$375.00',
										'30"':'$700.00',
										'35"':'$900.00',
										'50"':'N.A',																														
											}
				},
			]]
	}


	$scope.currentPage = "productos.html";
	$scope.productos = [{'name':'AVN'},{'name':'AVS'},{'name':'CAVN'},{'name':'CAVS'},{'name':'AVC'},{'name':'AVCG'},{'name':'AVP'},{'name':'PARTS'}]
	$scope.amerivacs_includes = ["2-year limited warranty","1-week trial period","Clean room compatible","100% maintenance free Venturi vacuum pumps","Intuitive design","Extensive safety features","Engineer direct technical support","Rust treated and powder coated steel chassis","Industry leading performance"];
	
	$scope.producto = p;

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
					operate</strong> by anybody.',
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
			'nombre' : 'AVN',
			'descrip' : 'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'resumen_p' : 'Foot pedal activated gas-flush vacuum packaging at its \
							finest. The AVN’s 1/4\” wide sealing element delivers a \
							leak-proof seal. CE available <br><br> Features five seal lengths (20\” 25\” 30\” 35\” 50\”)',
			'img' : 'img/products/imagen_CAVN_000.png'
		},
		{
			'nombre' : 'AVN',
			'descrip' : 'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'resumen_p' : 'Foot pedal activated gas-flush vacuum packaging at its \
							finest. The AVN’s 1/4\” wide sealing element delivers a \
							leak-proof seal. CE available <br><br> Features five seal lengths (20\” 25\” 30\” 35\” 50\”)',
			'img' : 'img/products/imagen_CAVN_000.png'
		},
		{
			'nombre' : 'AVN',
			'descrip' : 'RETRACTABLE NOZZLE VACUUM SEALER WITH GAS PURGE',
			'resumen_p' : 'Foot pedal activated gas-flush vacuum packaging at its \
							finest. The AVN’s 1/4\” wide sealing element delivers a \
							leak-proof seal. CE available <br><br> Features five seal lengths (20\” 25\” 30\” 35\” 50\”)',
			'img' : 'img/products/imagen_CAVN_000.png'
		},
	];



	console.log($scope.garantias)
	$scope.loadPage = function(page){
		switch(page){
			case 'home':
				console.log('clck home');
/*
				$('.slide-animate-container').velocity({
					translateX: 200 + '%',
				},{
					duration: 1000,
					oncomplete : function(){
						


					}
				});
*/				
				$scope.currentPage = "home.html";
				break;


			case 'about_us':
				$scope.currentPage = "about_us.html";

				break;
			case 'contact':
				$scope.currentPage = "contact.html";

				break;
			case 'products':
				$scope.currentPage = "productos.html";
				break;
			case 'all-products':
				$scope.currentPage = 'producto.html';
				break;
		}
	}


});

