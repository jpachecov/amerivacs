
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
	$scope.name = '';
	$scope.mail = '';
	$scope.cmail = '';
	$scope.phone = '';
	$scope.message  = '';
	$scope.buttonstate = 'disabled';
	$scope.errorConfirm = false;
	$scope.sendmail = function(){
		if($scope.mail === $scope.cmail){
			$scope.errorConfirm = false;



			var request = $http({
		    method: "POST",
		    url: "/php/miFormulario.php",
		    data: {
		    	'name':$scope.name,
		    	'mail':$scope.mail,
		    	'phone':$scope.phone,
		    	'message':$scope.message,
		    },
			});


			request.success(function(data){
				console.log(data);
			});

			$scope.resetfields();
			alert('Thank you!');

		} else {
			$scope.errorConfirm = true;
		}

	}
	$scope.resetfields = function(){

		$scope.name = '';
		$scope.mail = '';
		$scope.cmail = '';
		$scope.phone = '';
		$scope.message  = '';
		$scope.buttonstate = 'disabled';
		$scope.errorConfirm = false;

	}
	$scope.changeButton = function(){
		if($scope.buttonstate == 'disabled'){
			$scope.buttonstate = 'enabled';
		} else {
			$scope.buttonstate = 'disabled';
		}
	}

});