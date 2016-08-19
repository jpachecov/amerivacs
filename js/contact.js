
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
	$scope.errorConfirm = false;
	$scope.sendmail = function(){
		console.log('JEEEAN');
		if($scope.mail === $scope.cmail){
			console.log('soon iguales')
			$scope.errorConfirm = false;
		} else {
			$scope.errorConfirm = true;
			console.log('son diferentes');
		}
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