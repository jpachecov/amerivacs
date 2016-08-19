
app.directive('match', function($parse) {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      scope.$watch(function() {        
        return $parse(attrs.match)(scope) === ctrl.$modelValue;
      }, function(currentValue) {
        ctrl.$setValidity('mismatch', currentValue);
      });
    }
  };
});

app.controller('contacto', function($scope,$sce, $http, $location) {
	console.log('Contcto');
	$scope.name = '';
	$scope.mail = '';
	$scope.cmail = '';
	$scope.phone = '';
	$scope.message  = '';
	$scope.buttonstate = 'disabled';
	$scope.sendmail = function(){

		console.log('sendmail');

	}
	$scope.changeButton = function(){
		if($scope.buttonstate == 'disabled'){
			$scope.buttonstate = 'enabled';
		} else {
			$scope.buttonstate = 'disabled';
		}
	}

});