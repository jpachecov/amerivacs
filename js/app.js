var app = angular.module('amerivacs', []);
app.controller('controlador', function($scope) {
	
	console.log('controlador');



});


function loadPage(page){
	switch(page){
		case "contact":
			console.log('click contact');
	}
}