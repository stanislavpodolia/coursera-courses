(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', ['$scope', LunchCheckController]);

	function LunchCheckController(s) {
		s.dishes = "";
		s.lunchResult = "";
		s.textStatus = "";
		s.inputStatus = "";

		s.countDishes = function () {
			// Check with regexp strings containing only spaces, tabs or line breaks
			var dishesCount = s.dishes.split(",")
			.filter(function (dish) {return dish.replace(/\s/g, '').length}).length;

			if (dishesCount == 0) {
				s.lunchResult = "Please enter data first";
				s.textStatus = "";
				s.inputStatus = "";
			} else if (dishesCount > 3) {
				s.lunchResult = "Too much!";
				s.textStatus = "text-danger";
				s.inputStatus = "has-error";
			} else {
				s.lunchResult = "Enjoy!";
				s.textStatus = "text-success";
				s.inputStatus = "has-success";
			};
		};
	}

})();