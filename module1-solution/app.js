(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', function ($scope) {
		$scope.dishes = "";
		$scope.lunchResult = "";

		$scope.countDishes = function () {
			// Check with regexp strings containing only spaces, tabs or line breaks
			var dishesCount = $scope.dishes.split(",")
			.filter(function (dish) {return dish.replace(/\s/g, '').length}).length;

			$scope.lunchResult = dishesCount == 0 ? "Please enter data first" :
				dishesCount > 3 ? "Too much!" : "Enjoy!";
		};
	});

})();