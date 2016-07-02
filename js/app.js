var app = angular.module('amerivacs', ['ngSanitize','ngAnimate']);



app.controller('controlador', function($scope,$sce, $http) {
	$scope.searchText;
	$scope.searchText_2;
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



	$scope.isVacuum = true;
	$scope.currentPage = "producto.html";
	$scope.amerivacs_includes = [
							"2-year limited warranty",
							"1-week trial period",
							"Clean room compatible",
							"100% maintenance free Venturi vacuum pumps",
							"Intuitive design","Extensive safety features",
							"Engineer direct technical support","Rust treated and powder coated steel chassis",
							"Industry leading performance"
	];
							


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
			'img' : 'img/products/imagen_CAVN_000.png'
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
			'img' : 'img/products/imagen_CAVN_000.png'
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

	$scope.toProduct = function(name){

		$scope.getProduct(name);
		$scope.loadPage('all-products');

		console.log('toProduct ' + name);
	}

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
	}

	$scope.getProduct = function(name){


		if(name == 'PARTS'){
			console.log('getproduct parts');
			$scope.isVacuum = false;
			$scope.isParts = true;
			$scope.isOptions = false;

			// Obtemeos las partes
			$scope.producto = {'name':'PARTS','subtitulo':'Replacement Parts'};

			var request = $http({
		    method: "POST",
		    url: "/amerivacss/php/parts.php",
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
		    url: "/amerivacss/php/options.php",
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

			$scope.producto['src'] = 'img/products/imagen_'+name+'_000.png';
			$scope.isVacuum = true;
			$scope.isOptions = false;
			$scope.isParts = false;

			var request = $http({
		    method: "POST",
		    url: "/amerivacss/php/producto.php",
		    data: {
		    	'name': name,
		    },
			});

			var request2 = $http({
		    method: "POST",
		    url: "/amerivacss/php/modelo_prod.php",
		    data: {
		    	'name': name,
		    },
			});


			request2.success(function (data) {
				console.log(JSON.parse(data));
				$scope.producto['models'] = JSON.parse(data)['modelos'];
			});

			request.success(function (data) {
				var obj = data;//JSON.parse(data);
				$scope.producto['name'] = obj['name'];
				$scope.producto['subtitulo'] = obj['subtitulo'];
				$scope.producto['parrafo'] = obj['parrafo'];
				$scope.producto['options'] = $scope.ops;

				console.log(data);
				//console.log(data);

			});

		}

		}



			$('.seleccion').removeClass('seleccion');
			$('#' + name).addClass('seleccion');

}
	$scope.animaScroll = function(){

		$(window).scrollTop('0px');
	}

	$scope.loadPage = function(page){
		console.log('loadPage');

		$scope.animaScroll();

		switch(page){
			case 'home':				
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
			case 'compare':
				$scope.currentPage = 'compare.html';

				break;
			case 'selector':
				$scope.currentPage = 'ciber_selector.html'
				break;
		}
	}
	$scope.producto = {};
	$scope.partes = [];
	$scope.getProduct('AVN');


});

app.controller('compare', function($scope, $http){


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

	$scope.selected_1 = false;
	$scope.selected_2 = false;
	$scope.getProduct_1 = function(name){
			$scope.producto_1['src'] = 'img/products/imagen_'+name+'_000.png';

			$scope.selected_1 = true;


			var request = $http({
		    method: "POST",
		    url: "/amerivacss/php/producto.php",
		    data: {
		    	'name': name,
		    },
			});

			var request2 = $http({
		    method: "POST",
		    url: "/amerivacss/php/modelo_prod.php",
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
				//console.log(data);
				var obj = data;//JSON.parse(data);
				$scope.producto_1['name'] = obj['name'];
				$scope.producto_1['subtitulo'] = obj['subtitulo'];
				//$scope.producto_1['src'] = obj['src'];

			});
				$('.menucito1 .seleccion').removeClass('seleccion');
				$('.menucito1 #' + name).addClass('seleccion');
		
	}

	$scope.getProduct_2 = function(name){
			$scope.producto_2['src'] = 'img/products/imagen_'+name+'_000.png';
			$scope.selected_2 = true;
			var requestt = $http({
		    method: "POST",
		    url: "/amerivacss/php/producto.php",
		    data: {
		    	'name': name,
		    },
			});

			var request3 = $http({
		    method: "POST",
		    url: "/amerivacss/php/modelo_prod.php",
		    data: {
		    	'name': name,
		    },
			});


			request3.success(function (data) {
				console.log(JSON.parse(data));
				$scope.producto_2['models'] = JSON.parse(data)['modelos'];
			});

			requestt.success(function (data) {
				//console.log(data);
				var obj = data;//JSON.parse(data);
				$scope.producto_2['name'] = obj['name'];
				$scope.producto_2['subtitulo'] = obj['subtitulo'];

			});
				$('.menucito2 .seleccion').removeClass('seleccion');
				$('.menucito2 #' + name).addClass('seleccion');
	}


	$scope.producto_1 = {};
	$scope.producto_2 = {};

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
