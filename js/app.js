"use strict"
var app = angular.module('amerivacs', ['ngSanitize','ngAnimate','ngRoute']);

// Rutas para la aplicacion
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/amerivacs/',{templateUrl: "home.html"})
    .when('/amerivacs/home',{templateUrl: "home.html"})
    .when('/amerivacs/about', {templateUrl:"about_us.html"})
    .when('/amerivacs/products', {templateUrl:"productos.html"})
    .when('/amerivacs/product',{templateUrl: "producto.html"})
    .when('/amerivacs/contact',{templateUrl: "contact.html"})
    .when('/amerivacs/compare',{templateUrl: "compare.html"})
    .when('/amerivacs/selector',{templateUrl: "ciber_selector.html"})
    .otherwise({templateUrl:"compare.html"});

}]);

app.config(function($locationProvider){
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});

app.run(function($rootScope){

	$rootScope.options = [
		{
			'name':'BAS-',
			'desc':'Upper and Lower Heating Elements',
			'sizes':[
				{
					'size': '20"',
					'price': '$275',
				},
				{
					'size': '25"',
					'price': '$375',
				},
				{
					'size': '30"',
					'price': '*$700',
				},
				{
					'size': '35"',
					'price': '*$900',
				}

			],
		},
		{
			'name':'SS-',
			'desc':'Stainless Steel Upgrade',
			'sizes':[
				{
					'size': '20"',
					'price': '$500',
				},
				{
					'size': '25"',
					'price': '$550',
				},
				{
					'size': '30"',
					'price': '$600',
				},
				{
					'size': '35"',
					'price': '$650',
				},
				{
					'size': '50"',
					'price': '$800',
				},
			],
		},
		{
			'name':'CE',
			'desc':'CE certification*',
			'sizes':[
				{
					'size': '20"',
					'price': '$700',
				},
				{
					'size': '25"',
					'price': '$750',
				},
				{
					'size': '30"',
					'price': '$800',
				},
				{
					'size': '35"',
					'price': '$850',
				},
				{
					'size': '50"',
					'price': '$1,000',
				},
			],
		},
		{
			'name':'VF',
			'desc':'Vacuum Filter',
			'sizes':[
				{
					'size': '20"',
					'price': '$100',
				},
				{
					'size': '25"',
					'price': '$100',
				},
				{
					'size': '30"',
					'price': '$100',
				},
				{
					'size': '35"',
					'price': '$100',
				},
				{
					'size': '50"',
					'price': '$100',
				},
			],
		},
		{
			'name':'VR',
			'desc':'Vacuum Regulator',
			'sizes':[
				{
					'size': '20"',
					'price': '$50',
				},
				{
					'size': '25"',
					'price': '$50',
				},
				{
					'size': '30"',
					'price': '$50',
				},
				{
					'size': '35"',
					'price': '$50',
				},
				{
					'size': '50"',
					'price': '$50',
				},			
			],
		},
		{
			'name':'220PX',
			'desc':'220 Volt A.C. 50-60 Hz conversion',
			'sizes':[
				{
					'size': '20"',
					'price': '$350',
				},
				{
					'size': '25"',
					'price': '$350',
				},
				{
					'size': '30"',
					'price': '$350',
				},
				{
					'size': '35"',
					'price': '$350',
				},
				{
					'size': '50"',
					'price': '$350',
				},
			],
		},
		{
			'name':'DN',
			'desc':'Dual Nozzle (w/dual vac pumps)(AVS-AVN only)',
			'sizes':[
				{
					'size': '20"',
					'price': '$765',
				},
				{
					'size': '25"',
					'price': '$765',
				},
				{
					'size': '30"',
					'price': '$765',
				},
				{
					'size': '35"',
					'price': '$765',
				},
			],
		},
		{
			'name':'TRAY',
			'desc':'Work Tray – 20” x 12"',
			'sizes':[
				{
					'size': '20"',
					'price': '$75',
				},
				{
					'size': '25"',
					'price': '$75',
				},
				{
					'size': '30"',
					'price': '$75',
				},
				{
					'size': '35"',
					'price': '$75',
				},
			],
		},
		{
			'name':'EC',
			'desc':'Additional Vacuum or Gas cycle (AVN only)',
			'sizes':[
				{
					'size': '20"',
					'price': '$250',
				},
				{
					'size': '25"',
					'price': '$250',
				},
				{
					'size': '30"',
					'price': '$250',
				},
				{
					'size': '35"',
					'price': '$250',
				},
				{
					'size': '50"',
					'price': '$250',
				},
			],
		},
		{
			'name':'LPC',
			'desc':'Low-pressure Bar Close',
			'sizes':[
				{
					'size': '20"',
					'price': '$250',
				},
				{
					'size': '25"',
					'price': '$250',
				},
				{
					'size': '30"',
					'price': '$250',
				},
				{
					'size': '35"',
					'price': '$250',
				},
				{
					'size': '50"',
					'price': 'Included',
				},
			],
		},
		{
			'name':'AF',
			'desc':'Coalescing Air Filter (not for CAV)',
			'sizes':[
				{
					'size': '20"',
					'price': '$195',
				},
				{
					'size': '25"',
					'price': '$195',
				},
				{
					'size': '30"',
					'price': '$195',
				},
				{
					'size': '35"',
					'price': '$195',
				},
				{
					'size': '50"',
					'price': '$195',
				},
			],
		},
		{
			'name':'TC',
			'desc':'Digital Temperature Control',
			'sizes':[
				{
					'size': '20"',
					'price': '$1,995',
				},
				{
					'size': '25"',
					'price': '$1,995',
				},
				{
					'size': '30"',
					'price': '$1,995',
				},
				{
					'size': '35"',
					'price': '$1,995',
				},
				{
					'size': '50"',
					'price': '$1,995',
				},
			],
		},
		{
			'name':'PE',
			'desc':'Ported Exhaust**',
			'sizes':[
				{
					'size': '20"',
					'price': '$220',
				},
				{
					'size': '25"',
					'price': '$220',
				},
				{
					'size': '30"',
					'price': '$220',
				},
				{
					'size': '35"',
					'price': '$220',
				},
				{
					'size': '50"',
					'price': '$220',
				},
			],
		},
		{
			'name':'STAND',
			'desc':'Multi-Position Stand (AVS and up to AVN-35) **',
			'sizes':[
				{
					'size': '20"',
					'price': '$985',
				},
				{
					'size': '25"',
					'price': '$985',
				},
				{
					'size': '30"',
					'price': '$985',
				},
				{
					'size': '35"',
					'price': '$985',
				},
				{
					'size': '50"',
					'price': 'Not available',
				},
			],
		}
	];

	$rootScope.parts = [
		{
			'name':'E-',
			'desc':'1/4" Sealing Element',
			'sizes':[
				{
					'size': '20"',
					'price': '$19',
				},
				{
					'size': '25"',
					'price': '$22',
				},
				{
					'size': '30"',
					'price': '$26',
				},
				{
					'size': '35"',
					'price': '$31',
				},
				{
					'size': '50"',
					'price': '$39',
				},
			],
		},
		{
			'name':'T-',
			'desc':'Teflon Set',
			'sizes':[
				{
					'size': '20"',
					'price': '$15',
				},
				{
					'size': '25"',
					'price': '$18',
				},
				{
					'size': '30"',
					'price': '$21',
				},
				{
					'size': '35"',
					'price': '$24',
				},
				{
					'size': '50"',
					'price': '$31',
				},
			],
		},
		{
			'name':'PBK-',
			'desc':'Pressure Bar Kit',
			'sizes':[
				{
					'size': '20"',
					'price': '$18',
				},
				{
					'size': '25"',
					'price': '$21',
				},
				{
					'size': '30"',
					'price': '$24',
				},
				{
					'size': '35"',
					'price': '$28',
				},
				{
					'size': '50"',
					'price': '$36',
				},
			],
		},
		{
			'name':'SBK-',
			'desc':'Seal Bar Kit (All of the above parts)',
			'sizes':[
				{
					'size': '20"',
					'price': '$47',
				},
				{
					'size': '25"',
					'price': '$55',
				},
				{
					'size': '30"',
					'price': '$65',
				},
				{
					'size': '35"',
					'price': '$75',
				},
				{
					'size': '50"',
					'price': '$89',
				},
			],
		},
		{
			'name':'GR-',
			'desc':'AVN Gray Rubber Set',
			'sizes':[
				{
					'size': '20"',
					'price': '$10',
				},
				{
					'size': '25"',
					'price': '$12',
				},
				{
					'size': '30"',
					'price': '$14',
				},
				{
					'size': '35"',
					'price': '$16',
				},
				{
					'size': '50"',
					'price': '$20',
				},
			],
		},
		{
			'name':'SEAL BAR',
			'desc':'Additional Seal Bar',
			'sizes':[
				{
					'size': '20"',
					'price': '$275',
				},
			],
		},
		{
			'name':'VSS',
			'desc':'Vacuum Selector Switch, per position',
			'sizes':[
				{
					'size': '20"',
					'price': '$145',
				},
			],
		},


	];


	$rootScope.productos = 
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

	$rootScope.prod_1 = 'AVN';
	$rootScope.prod_2 = 'AVS';


});
