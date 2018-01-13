(function () {
	'use strict';

	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
	.directive('foundItems', FoundItems);

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var controller = this;
		controller.narrow = function () { MenuSearchService.getMatchedMenuItems(controller.searchTerm).then(function (result) { controller.found = result; }) };
		controller.removeItem = function (id) {
			if (controller.found !== undefined) {
				controller.found.splice(id, 1);
			}
		}
	}

	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var menuItems = undefined;

		this.getMatchedMenuItems = function (searchTerm) {
			return $http({
	      method: "GET",
	      url: (ApiBasePath + "/menu_items.json")
	    }).then(function (result) {
					if (searchTerm !== undefined && searchTerm.length > 0) {
			    	menuItems = result.data.menu_items.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()));
					} else {
						menuItems = [];
					}

					return menuItems;
				},
				function (error) {
					console.log(error);
			});
		};
	}

	function FoundItems() {
		return {
			scope: {
				'foundItems': '<',
				'onRemove': '&'
			},
			restrict: 'E',
			templateUrl: 'foundItems.html'
		}
	}

})();
