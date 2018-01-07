(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		this.items = ShoppingListCheckOffService.getToBuy();
		this.bought = ShoppingListCheckOffService.moveToBought;
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		this.items = ShoppingListCheckOffService.getBought();
	}

	function ShoppingListCheckOffService() {
		var toBuy = [
			{name: "cookies", quantity: "10"},
			{name: "chips", quantity: "5"},
			{name: "chocolate", quantity: "1"},
			{name: "vodka", quantity: "3"},
			{name: "beers", quantity: "7"},
			{name: "ramens", quantity: "17"}
		];
		var bought = [];

		this.moveToBought = function (id) {
			bought.push(toBuy[id]);
			toBuy.splice(id, 1);
		};

		this.getToBuy = function () {
			return toBuy;
		}

		this.getBought = function () {
			return bought;
		}
	}

})();
