var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {

	$scope.getArr = mainService.getData();
	
	$scope.addArr = function() {
		mainService.addData($scope.addtxt, $scope.addathr);
	}

	$scope.removeArr = function() {
	 	mainService.removeData($scope.shizor)
	}

	$scope.filterItems = function() {
		//mainService.toggleFilter($scope.value)
		 $scope.value = !$scope.value;
	}
})