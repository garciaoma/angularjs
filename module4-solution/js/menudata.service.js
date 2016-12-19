(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function () {
      var premise = $http({
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function (response) {
        return response.data;
      });

      return premise;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var premise = $http({
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(function (response) {
        return response.data.menu_items;
      });

      return premise;
    };
  };

})();
