(function () {
  angular.module('MenuApp').component('categories', {
    templateUrl: 'src/categories/categories.template.html',
    bindings: {
      items: '<'
    }
  });
})();
