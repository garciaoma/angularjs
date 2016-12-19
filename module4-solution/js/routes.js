(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'templates/home.template.html'
    })
    .state('categories',{
      url: '/categories',
      templateUrl: 'templates/categories.template.html',
      controller: 'CategoriesController as controller',
      resolve: {
         items: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories();
         }]
       }
    })
    .state('details', {
      url: '/details/{itemId}',
      templateUrl: 'templates/details.template.html',
      controller: 'ItemsController as itemscontroller',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemId);
            }]
       }
    });
  }
})();
