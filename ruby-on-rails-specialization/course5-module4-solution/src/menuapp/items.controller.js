(function () {
  angular.module('MenuApp').controller('ItemsController', ItemsController);

  ItemsController.$inject = ['categoryItems'];
  function ItemsController(categoryItems) {
    this.category = categoryItems.category;
    this.items = categoryItems.menu_items;
  };
})();
