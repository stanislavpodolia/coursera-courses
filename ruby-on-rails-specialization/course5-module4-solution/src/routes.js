(function () {
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "src/menuapp/templates/home.template.html",
      })
      .state('categories', {
        url: '/categories',
        templateUrl: "src/menuapp/templates/categories.template.html",
        controller: "CategoriesController as cat",
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{shortName}',
        templateUrl: "src/menuapp/templates/items.template.html",
        controller: "ItemsController as catItems",
        resolve: {
          categoryItems: ['$stateParams', 'MenuDataService',
                function ($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.shortName);
                }
          ]
        }
      });
  }
})();
