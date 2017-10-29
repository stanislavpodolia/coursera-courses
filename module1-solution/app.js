(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.dishes = "";
		$scope.lunchResult = "";
		$scope.textStatus = "";
		$scope.inputStatus = "";

		$scope.countDishes = function () {
			// Check with regexp strings containing only spaces, tabs or line breaks
			var dishesCount = $scope.dishes.split(",")
			.filter(function (dish) {return dish.replace(/\s/g, '').length}).length;

			if (dishesCount == 0) {
				$scope.lunchResult = "Please enter data first";
				$scope.textStatus = "";
				$scope.inputStatus = "";
			} else if (dishesCount > 3) {
				$scope.lunchResult = "Too much!";
				$scope.textStatus = "text-danger";
				$scope.inputStatus = "has-error";
			} else {
				$scope.lunchResult = "Enjoy!";
				$scope.textStatus = "text-success";
				$scope.inputStatus = "has-success";
			};
		};
	}

})();