(function () {
  angular.module('Data')
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
		var categories = undefined;
		var menu_items = undefined;

    this.getAllCategories = function () {
      return $http({
	      method: "GET",
	      url: (ApiBasePath + "/categories.json")
	    }).then(function (result) {
					categories = result.data;
					console.log(categories);
					return categories;
				},
				function (error) {
					console.log(error);
			});
    };

		this.getItemsForCategory = function (categoryShortName) {
      return $http({
	      method: "GET",
	      url: (ApiBasePath + "/menu_items.json"),
				params: {
					'category': categoryShortName
				}
	    }).then(function (result) {
					menu_items = result.data;
					console.log(menu_items);
					return menu_items;
				},
				function (error) {
					console.log(error);
			});
    };
  }
})();
